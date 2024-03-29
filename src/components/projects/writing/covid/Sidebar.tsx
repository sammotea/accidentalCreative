import classify from "@/utils/dev/classify";

type postIds =
    | "introductionForStrangers"
    | "symptoms"
    | "severity"
    | "longCovid"
    | "emailWarning";
const posts = {
    introductionForStrangers: "Intro for Strangers",
    symptoms: "What does COVID do?",
    severity: "Who does COVID affect?",
    longCovid: "What about Long COVID?",
    emailWarning: "Early warning email",
};

export const Sidebar: React.FC<{ postId: string }> = ({ postId }) => {
    const cl = "sidebar";

    return <aside className={classify(`${cl}Wrap`)}>{renderNav()}</aside>;

    function renderNav() {
        return (
            <nav className={classify(`${cl}Section`, `${cl}Nav`)}>
                {renderHeading("Why write this?")}
                <ul className={classify(`${cl}List`)}>
                    {renderNavItems(["introductionForStrangers"])}
                </ul>
                {renderHeading("Are you at risk?")}
                <ul className={classify(`${cl}List`)}>
                    {renderNavItems(["symptoms", "severity", "longCovid"])}
                </ul>
                {renderHeading("Miscellaneous")}
                <ul className={classify(`${cl}List`)}>
                    {renderNavItems(["emailWarning"])}
                </ul>
            </nav>
        );
    }

    function renderHeading(heading: string) {
        return <h2 className={classify(`${cl}Heading`)}>{heading}</h2>;
    }

    function renderNavItems(navPostIds: postIds[]) {
        return navPostIds.map((navPostId) => {
            return (
                <li key={navPostId} className={classify(`${cl}ListItem`)}>
                    <a
                        className={classify(
                            `${cl}ListLink`,
                            navPostId === postId ? `${cl}ListLink--current` : ""
                        )}
                        href={navPostId}
                    >
                        {posts[navPostId]}
                    </a>
                </li>
            );
        });
    }
};
