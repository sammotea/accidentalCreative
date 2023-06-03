import classify from "@/utils/classify";

export default function DoormageddonHotel({ moduleStyles }) {
    return (
        <section
            className={classify(
                moduleStyles["l-sectionWrap"],
                moduleStyles["c-interstitialWrap"],
                moduleStyles["m-hotelWrap"]
            )}
        >
            <div
                className={classify(
                    moduleStyles["l-section"],
                    moduleStyles["c-interstitial"],
                    moduleStyles["m-hotel"]
                )}
            >
                <div
                    className={classify(
                        moduleStyles["c-interstitial__inner"],
                        moduleStyles["m-delta__inner"]
                    )}
                >
                    <h1
                        className={classify(
                            moduleStyles["b-title"],
                            moduleStyles["c-interstitial__title"],
                            moduleStyles["m-delta__title"]
                        )}
                    >
                        <span
                            className={classify(
                                moduleStyles["m-delta__titleText"]
                            )}
                        >
                            How does one cut a door?
                        </span>
                    </h1>

                    <p
                        className={classify(
                            moduleStyles["c-interstitial__text"],
                            moduleStyles["m-delta__text"]
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
}
