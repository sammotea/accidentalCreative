import classify from "@/utils/classify";
import styles from "@/styles/projects/writing/doormageddon/doormageddon.module.scss";

const DoormageddonMike = () => {
    return (
        <section
            className={classify(styles["l-sectionWrap"], styles["m-mikeWrap"])}
        >
            <div
                className={classify(styles["l-section"], styles["m-mike"])}
            ></div>
        </section>
    );
};

export default DoormageddonMike;
