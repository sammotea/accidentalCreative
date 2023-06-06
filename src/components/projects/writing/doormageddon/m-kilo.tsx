import classify from "@/utils/dev/classify";
import styles from "@/styles/projects/writing/doormageddon/doormageddon.module.scss";

const DoormageddonKilo = () => {
    return (
        <section
            className={classify(
                styles["l-sectionWrap"],
                styles["c-interstitialWrap"],
                styles["m-kiloWrap"]
            )}
        >
            <div
                className={classify(
                    styles["l-section"],
                    styles["c-interstitial"],
                    styles["m-kilo"]
                )}
            >
                <div
                    className={classify(
                        styles["c-interstitial__inner"],
                        styles["m-kilo__inner"]
                    )}
                >
                    <h1
                        className={classify(
                            styles["b-title"],
                            styles["c-interstitial__title"],
                            styles["m-kilo__title"]
                        )}
                    >
                        <span className={classify(styles["m-kilo__titleText"])}>
                            Dotted i’s, crossed t’s.
                        </span>
                    </h1>

                    <p
                        className={classify(
                            styles["c-interstitial__text"],
                            styles["m-kilo__text"]
                        )}
                    >
                        <span>
                            The final stretch&mdash;handles and locks&mdash;was
                            ominously straightforward.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DoormageddonKilo;
