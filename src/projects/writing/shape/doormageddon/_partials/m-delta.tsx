import classify from "@/utils/classify";

export default function DoormageddonDelta({ moduleStyles }) {
    return (
        <section
            className={classify(
                moduleStyles["l-sectionWrap"],
                moduleStyles["c-interstitialWrap"],
                moduleStyles["m-deltaWrap"]
            )}
        >
            <div
                className={classify(
                    moduleStyles["l-section"],
                    moduleStyles["c-interstitial"],
                    moduleStyles["m-delta"]
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
                            The perfect assistant.
                        </span>
                    </h1>

                    <p
                        className={classify(
                            moduleStyles["c-interstitial__text"],
                            moduleStyles["m-delta__text"]
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
}
