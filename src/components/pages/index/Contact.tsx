import classify from "@/utils/dev/classify";
import { outputContactLink } from "@/utils/misc/antiSpamFunctions";
import styles from "@/styles/pages/index/Index.module.scss";

export const Contact = () => {
    return (
        <section className={classify(styles.contactWrap, styles.l_module)}>
            {renderContact()}
        </section>
    );

    function renderContact() {
        const myName = "sam";
        const domain = "accidentalcreative";
        const tld = "co.uk";

        return (
            <>
                <h2 className={classify(styles.subtitle)}>Contact me</h2>

                <p className={classify(styles.contactText)}>
                    {outputContactLink(
                        "Email ",
                        classify(styles.contactLink, styles.link)
                    )}
                </p>

                <p className={classify(styles.contactText)}>
                    LinkedIn{" "}
                    <a
                        className={classify(styles.contactLink, styles.link)}
                        href="https://www.linkedin.com/in/sam--t/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        sam--t
                    </a>
                </p>
            </>
        );
    }
};
