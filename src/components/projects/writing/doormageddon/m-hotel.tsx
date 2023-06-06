import classify from "@/utils/classify";
import styles from "@/styles/projects/writing/doormageddon/doormageddon.module.scss";

const DoormageddonHotel = () => {
    return (
        <section
            className={classify(
                styles["l-sectionWrap"],
                styles["c-interstitialWrap"],
                styles["m-hotelWrap"]
            )}
        >
            <div
                className={classify(
                    styles["l-section"],
                    styles["c-interstitial"],
                    styles["m-hotel"]
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
                            How does one cut a door?
                        </span>
                    </h1>

                    <p
                        className={classify(
                            styles["c-interstitial__text"],
                            styles["m-delta__text"]
                        )}
                    >
                        <span>
                            Four hands, improvisation, and pant&#x2011;wetting
                            terror.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};
export default DoormageddonHotel;
