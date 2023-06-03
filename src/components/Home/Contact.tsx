import classify from "@/utils/classify";
import { outputContactLink } from "@/utils/antiSpamFunctions";
interface IProps {
    styles: {
        [key: string]: string;
    };
}

export const Contact: React.FC<IProps> = ({ styles }) => {
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
            </>
        );
    }
};
