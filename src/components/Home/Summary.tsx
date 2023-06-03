import classify from "@/utils/classify";
import styles from "@/styles/modules/Index.module.scss";

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
                <span className={styles.titleHighlight}>I’m Sam.</span> I find
                elegant solutions to hard problems.
            </h1>
        );
    }

    function renderDescs() {
        const descItems = [
            "Web-developer and complexity-hider",
            "Project-creator / salesman / manager",
            "Assumption-hunter and technophobe",
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
            <p className={classify(styles.lede, styles.l_module)}>
                I call things by their real name and keep my word. Based in
                Manchester, UK.{" "}
            </p>
        );
    }
};
