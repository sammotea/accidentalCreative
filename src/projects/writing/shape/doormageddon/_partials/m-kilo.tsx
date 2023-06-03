import classify from "@/utils/classify";

export default function DoormageddonKilo({ moduleStyles }) {
    return (
        <section
            className={classify(
                moduleStyles["l-sectionWrap"],
                moduleStyles["c-interstitialWrap"],
                moduleStyles["m-kiloWrap"]
            )}
        >
            <div
                className={classify(
                    moduleStyles["l-section"],
                    moduleStyles["c-interstitial"],
                    moduleStyles["m-kilo"]
                )}
            >
                <div
                    className={classify(
                        moduleStyles["c-interstitial__inner"],
                        moduleStyles["m-kilo__inner"]
                    )}
                >
                    <h1
                        className={classify(
                            moduleStyles["b-title"],
                            moduleStyles["c-interstitial__title"],
                            moduleStyles["m-kilo__title"]
                        )}
                    >
                        <span
                            className={classify(
                                moduleStyles["m-kilo__titleText"]
                            )}
                        >
                            Dotted i’s, crossed t’s.
                        </span>
                    </h1>

                    <p
                        className={classify(
                            moduleStyles["c-interstitial__text"],
                            moduleStyles["m-kilo__text"]
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
}
