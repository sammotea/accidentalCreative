import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import { convertToDateKey } from "../transformers";

export const writingPath = path.join(
    process.cwd(),
    "src",
    "markdown",
    "projects",
    "writing"
);
export const writingUrl = path.join("writing");

export const getParsedMarkdown = (
    fileName: string,
    enclosingFolder: string = ""
): IPost => {
    const id = fileName.replace(/\.[^.]*$/, "");

    const filePath = path.join(writingPath, enclosingFolder, `${id}.md`);
    const parsedContent = parseMarkdown(filePath);

    // Next.js hates TS optional params as undefined. Hack.
    const empties = {
        title: "",
        content: "",
        designFlavour: "",
        order: 0,
        hideFromLists: false,
    };

    const { title, content, designFlavour, order, hideFromLists } = {
        ...empties, // defaults
        ...parsedContent.data, // meta
        content: parsedContent.content, // written content
    };

    const date = convertToDateKey(parsedContent.data.date);
    const linkTo = path.join(writingUrl, enclosingFolder, id);
    const category = enclosingFolder;

    return {
        id, //  Necessary
        title, //  Necessary
        date, //  Necessary
        linkTo, //  Necessary
        type: "post", //  Necessary
        content,
        category,
        designFlavour,
        order,
        hideFromLists,
    };
};

export function parseMarkdown(filePath: string): matter.GrayMatterFile<Buffer> {
    const fileContent = fs.readFileSync(filePath);
    const parsedMarkdown = matter(fileContent);
    return parsedMarkdown;
}

export async function convertMarkdownToHtmlString(markdown: string) {
    const processedContent = await remark()
        .use(html, { sanitize: false })
        .process(markdown);

    const contentHtml = processedContent.toString();

    return contentHtml;
}
