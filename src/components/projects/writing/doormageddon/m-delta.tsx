import classify from "@/utils/classify";
import styles from "@/styles/projects/writing/doormageddon/doormageddon.module.scss";

const DoormageddonDelta = () => {
    return (
        <section
            className={classify(
                styles["l-sectionWrap"],
                styles["c-interstitialWrap"],
                styles["m-deltaWrap"]
            )}
        >
            <div
                className={classify(
                    styles["l-section"],
                    styles["c-interstitial"],
                    styles["m-delta"]
                )}
            >
                <div
                    className={classify(
                        styles["c-interstitial__inner"],
                        styles["m-delta__inner"]
                    )}
                >
                    <h1
                        className={classify(
                            styles["b-title"],
                            styles["c-interstitial__title"],
                            styles["m-delta__title"]
                        )}
                    >
                        <span
                            className={classify(styles["m-delta__titleText"])}
                        >
                            The perfect assistant.
                        </span>
                    </h1>

                    <p
                        className={classify(
                            styles["c-interstitial__text"],
                            styles["m-delta__text"]
                        )}
                    >
                        <span>
                            93 years young and woefully ignorant of modern
                            labour laws.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};
export default DoormageddonDelta;
