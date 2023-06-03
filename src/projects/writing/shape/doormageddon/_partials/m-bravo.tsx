import classify from "@/utils/classify";
import styles from "@/projects/writing/shape/doormageddon/_scss/doormageddon.module.scss";

const DoormageddonBravo = () => {
    return (
        <section
            className={classify(styles["l-sectionWrap"], styles["m-bravoWrap"])}
        >
            <div className={classify(styles["l-section"], styles["m-bravo"])}>
                <div
                    className={classify(
                        styles["b-titleWrap"],
                        styles["m-bravo__titleWrap"]
                    )}
                >
                    <h2
                        className={classify(
                            styles["b-title"],
                            styles["m-bravo__title"]
                        )}
                    >
                        <span
                            className={classify(styles["m-bravo__titleText"])}
                        >
                            Can a door be art?<span></span> Piss off.
                        </span>
                    </h2>
                </div>

                <p className={classify(styles["b-text"])}>
                    This is a word-tale about a a proud man and his perfect
                    door.
                </p>

                <p className={classify(styles["b-text"])}>
                    It is also&mdash;<em>perhaps more so</em>&mdash;the account
                    of a stubborn man and his stupid, 400-hour masterpiece.
                </p>

                <p className={classify(styles["b-text"])}>
                    Mostly, though, it&rsquo;s a pointless story about finagling
                    an old, wonky bathroom door in to an equally-old,
                    differently-wonky doorframe.
                </p>
            </div>
        </section>
    );
};
export default DoormageddonBravo;
