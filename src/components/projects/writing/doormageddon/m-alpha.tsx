import classify from "@/utils/dev/classify";
import styles from "@/styles/projects/writing/doormageddon/doormageddon.module.scss";

const DoormageddonAlpha = () => {
    return (
        <section
            className={classify(styles["l-sectionWrap"], styles["m-alphaWrap"])}
        >
            <div className={classify(styles["l-section"], styles["m-alpha"])}>
                <div className={classify(styles["m-alpha__titleWrap"])}>
                    <h1 className={classify(styles["m-alpha__title"])}>
                        <span>Door</span>
                        <span>mageddon</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default DoormageddonAlpha;
