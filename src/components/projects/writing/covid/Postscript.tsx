import classify from "@/utils/dev/classify";

export interface IPostscript {
    usefuls: IPostscriptLink[];
    contextuals?: IPostscriptLink[];
}

interface IProps {
    psContent: IPostscript;
    id: string;
}

export const Postscript: React.FC<IProps> = ({ psContent, id }) => {
    const cl = "postscript";

    if (id === "emailWarning" || id === "introductionForStrangers")
        return <></>;

    return (
        <section className={classify(`${cl}sWrap`)}>
            {renderHeader()}
            {renderIntro(
                "https://www.dropbox.com/sh/kcig2wsacdodo9x/AADO29xr2hNR78hbaetB9kWua?dl=0",
                "https://www.dropbox.com/sh/zjez1it9dnb6mhu/AACN9iEDCHSdVXlgE_4yKn2za?dl=0"
            )}
            {renderPostscripts()}
        </section>
    );

    function renderHeader() {
        return <h1 className={classify(`${cl}s__title`)}>Further Reading</h1>;
    }
    function renderIntro(draftNotesV1: string, draftNotesV2: string) {
        return (
            <div className={classify(`${cl}s__intro`)}>
                <p>
                    Many thousands of words of relevant-but-not-relevant-enough
                    information were cut. This started with{" "}
                    <a href={classify(`${draftNotesV1}`)} target="_blank">
                        a bazillion research notes-to-self and links
                    </a>
                    , then went through a round of{" "}
                    <a href={classify(`${draftNotesV2}`)} target="_blank">
                        chunking and cutting
                    </a>
                    .
                </p>
            </div>
        );
    }
    function renderPostscripts() {
        const postscriptsList = [];

        if (psContent) {
            for (const key in psContent) {
                switch (key) {
                    case "usefuls":
                        const usefuls = renderUsefuls(psContent[key]);
                        postscriptsList.push(usefuls);
                        break;

                    case "contextuals":
                        const contextualsArr =
                            typeof psContent[key] !== "undefined" &&
                            Array.isArray(psContent[key])
                                ? psContent[key]
                                : false;

                        if (contextualsArr) {
                            const contextuals =
                                renderContextuals(contextualsArr);
                            postscriptsList.push(contextuals);
                        }
                        break;
                }
            }
        }
        return postscriptsList;
    }

    function renderUsefuls(linksContent: IPostscriptLink[]) {
        const usefuls = linksContent.map((linkContent) => {
            return renderPostscriptLink(linkContent, "useful");
        });

        return (
            <div className={classify(`${cl}ListWrap`)}>
                <p>If I had to do this from scratch I’d start with:</p>
                <ul className={classify(`${cl}List`)}>{usefuls}</ul>
            </div>
        );
    }

    function renderContextuals(linksContent: IPostscriptLink[]) {
        const contextuals = linksContent.map((linkContent) => {
            return renderPostscriptLink(linkContent, "contextual");
        });

        return (
            <div className={classify(`${cl}ListWrap`)}>
                <p>And read these for context:</p>
                <ul className={classify(`${cl}List`)}>{contextuals}</ul>
            </div>
        );
    }

    function renderPostscriptLink(
        linkContent: IPostscriptLink,
        category: string
    ) {
        const { org, linkTitle, link, description } = linkContent;

        return (
            <li key={linkTitle} className={classify(`${cl}`)}>
                {renderOrg(org)}
                {renderLinkHTML(linkTitle, link)}
                {renderDescription(description)}
            </li>
        );
    }
    function renderOrg(org = "") {
        if (!org) return "";

        return <span className={classify(`${cl}__org`)}>{org}</span>;
    }

    function renderLinkHTML(linkTitle: string, link: string) {
        return (
            <a className={classify(`${cl}__link`)} href={link} target="_blank">
                {linkTitle}
            </a>
        );
    }

    function renderDescription(description = "") {
        if (!description) return "";

        return (
            <span className={classify(`${cl}__description`)}>
                {" "}
                {description}
            </span>
        );
    }
};
