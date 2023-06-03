import classify from "@/utils/classify";

export default function DoormageddonBravo({ moduleStyles }) {
    return (
        <section
            className={classify(
                moduleStyles["l-sectionWrap"],
                moduleStyles["m-bravoWrap"]
            )}
        >
            <div
                className={classify(
                    moduleStyles["l-section"],
                    moduleStyles["m-bravo"]
                )}
            >
                <div
                    className={classify(
                        moduleStyles["b-titleWrap"],
                        moduleStyles["m-bravo__titleWrap"]
                    )}
                >
                    <h2
                        className={classify(
                            moduleStyles["b-title"],
                            moduleStyles["m-bravo__title"]
                        )}
                    >
                        <span
                            className={classify(
                                moduleStyles["m-bravo__titleText"]
                            )}
                        >
                            Can a door be art?<span></span> Piss off.
                        </span>
                    </h2>
                </div>

                <p className={classify(moduleStyles["b-text"])}>
                    This is a word-tale about a a proud man and his perfect
                    door.
                </p>

                <p className={classify(moduleStyles["b-text"])}>
                    It is also&mdash;<em>perhaps more so</em>&mdash;the account
                    of a stubborn man and his stupid, 400-hour masterpiece.
                </p>

                <p className={classify(moduleStyles["b-text"])}>
                    Mostly, though, it&rsquo;s a pointless story about finagling
                    an old, wonky bathroom door in to an equally-old,
                    differently-wonky doorframe.
                </p>
            </div>
        </section>
    );
}
