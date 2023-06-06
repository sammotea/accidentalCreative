import path from "path";
import { renderToString } from "react-dom/server";
import Image from "next/image";
import Footnote from "@/components/projects/writing/_default/footnote";
import FootnoteLink from "@/components/projects/writing/_default/footnoteLink";

const shapeRoute = path.join(
    process.cwd(),
    "src",
    "projects",
    "writing",
    "shape"
);

const transformKeys = {
    footnote: "XFOOTNOTE",
    image: "XIMAGE",
};
const alwaysTransform = {
    breaks: "<hr>",
    images: "XIMAGE",
};

export function replaceContent(
    content: string,
    transforms: ITransformsObj,
    postId: string,
    category = ""
) {
    let transformedContent = content;
    for (const key in transforms) {
        switch (key) {
            case transformKeys["footnote"]:
                transformedContent = replaceWithFootnoteLink(
                    transformedContent,
                    transforms[key]
                );
                transformedContent += getFootnotes(transforms[key]);
                break;

            case transformKeys["image"]:
                transformedContent = replaceWithImages(
                    transformedContent,
                    transforms[key],
                    postId,
                    category
                );
                break;
        }
    }

    for (const key in alwaysTransform) {
        switch (key) {
            case "breaks":
                transformedContent = transformedContent.replaceAll(
                    alwaysTransform[key],
                    '<div class="lineBreak"></div>'
                );
                break;
        }
    }

    return transformedContent;
}

function replaceWithImages(
    content: string,
    transforms: string[],
    postId: string,
    category = ""
) {
    let contentWithImages = content;
    let matchIndex = 0;

    contentWithImages = content.replaceAll(transformKeys["image"], () => {
        const curImage = transforms[matchIndex++];

        // Not using <Image> due to height and width requirement silliness
        return renderToString(
            <img
                src={`/writingAssets/${category}/_img/${curImage}`}
                alt={curImage}
            />
        );
    });

    return contentWithImages;
}

function replaceWithFootnoteLink(content: string, transforms: string[]) {
    let contentWithFootnoteLinks = content;
    let matchIndex = 0;

    contentWithFootnoteLinks = content.replaceAll(
        transformKeys["footnote"],
        () => {
            return renderToString(<FootnoteLink fnIndex={++matchIndex} />);
        }
    );

    return contentWithFootnoteLinks;
}

function getFootnotes(footnotes: string[]) {
    let footnoteIndex = 0;
    const footnotesJSX = (
        <aside className="footnotesWrap">
            <ol className="footnotesList">
                {footnotes.map((footnote) => {
                    return (
                        <Footnote
                            key={footnote}
                            fnString={footnote}
                            fnIndex={++footnoteIndex}
                        />
                    );
                })}
            </ol>
        </aside>
    );

    return renderToString(footnotesJSX);
}
