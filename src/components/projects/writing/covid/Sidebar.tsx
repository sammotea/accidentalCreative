import classify from "@/utils/classify";

type postIds =
    | "introductionForStrangers"
    | "symptoms"
    | "severity"
    | "longCovid"
    | "emailWarning";
const posts = {
    introductionForStrangers: "Intro for Strangers",
    symptoms: "What does Covid do?",
    severity: "Who does Covid affect?",
    longCovid: "What about Long Covid?",
    emailWarning: "Early warning email",
};

export const Sidebar: React.FC<{ postId: string }> = ({ postId }) => {
    const cl = "sidebar";

    return (
        <aside className={classify(`${cl}Wrap`)}>
            {/* {renderIntro()} */}
            {renderNav()}
        </aside>
    );

    function renderIntro() {
        return (
            <div className={classify(`${cl}Section`, `${cl}Intro`)}>
                <h1 className={classify(`${cl}Title`)}>
                    A pragmatic guide to Covid risk for my Mum
                </h1>
            </div>
        );
    }

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
