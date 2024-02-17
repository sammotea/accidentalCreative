import classify from "@/utils/dev/classify";
import styles from "@/styles/pages/index/Index.module.scss";

export const Summary = () => {
    return (
        <section className={classify(styles.summaryWrap, styles.l_module)}>
            {renderTitle()}
            {renderDescs()}
            {renderLede()}
        </section>
    );

    function renderTitle() {
        return (
            <h1 className={classify(styles.title, styles.l_module)}>
                {/* <span className={styles.titleArrow}></span> */}
                <span className={styles.titleHighlight}>I’m Sam.</span>{" "}
                <span className={styles.titleLowlight}>
                    I find elegant solutions to hard problems.
                </span>
            </h1>
        );
    }

    function renderDescs() {
        const descItems = [
            "Web developer",
            "Assumption hunter",
            "Project starter, fixer, and finisher",
        ];

        return (
            <ul className={classify(styles.descItems, styles.l_module)}>
                {descItems.map((item, i) => {
                    return (
                        <li key={item} className={styles.descItem}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        );
    }

    function renderLede() {
        return (
            <>
                <p className={classify(styles.lede, styles.l_module)}>
                    I fill in the messy bits between theory and practice, call
                    things by their real name, and keep my word.
                </p>

                <p className={classify(styles.aiSite, styles.l_module)}>
                    Recently I’ve been{" "}
                    <a
                        href="https://ai.accidentalcreative.co.uk/"
                        target="_blank"
                    >
                        building interesting things with generative AI
                    </a>
                    .
                </p>

                <p className={classify(styles.lede, styles.l_module)}>
                    Based in Manchester, UK.
                </p>
            </>
        );
    }
};
