import classify from "@/utils/classify";

export default function DoormageddonEcho({ moduleStyles }) {
    return (
        <section
            className={classify(
                moduleStyles["l-sectionWrap"],
                moduleStyles["m-echoWrap"]
            )}
        >
            <div
                className={classify(
                    moduleStyles["l-section"],
                    moduleStyles["m-echo"]
                )}
            >
                <div
                    className={classify(
                        moduleStyles["l-sectionette"],
                        moduleStyles["m-echo__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            moduleStyles["b-titleWrap"],
                            moduleStyles["m-echo__titleWrap"]
                        )}
                    >
                        <h1
                            className={classify(
                                moduleStyles["b-title"],
                                moduleStyles["b-title--section"],
                                moduleStyles["m-echo_title"]
                            )}
                        >
                            <span
                                className={classify(
                                    moduleStyles["m-echo__titleText"]
                                )}
                            >
                                Schrödinger&rsquo;s cut
                            </span>
                        </h1>
                    </div>

                    <p className={classify(moduleStyles["b-text"])}>
                        I believed my door to be a perfectly normal door removed
                        from a perfectly normal doorframe.
                    </p>

                    <p className={classify(moduleStyles["b-text"])}>
                        &ldquo;
                        <em>
                            Did you think to check before artsyfartsying with
                        </em>
                        &hellip;?&rdquo;&mdash;Oh hush your mouth.
                    </p>

                    <p className={classify(moduleStyles["b-text"])}>
                        This door was crooked, the doorframe comprehensively
                        borked, and the threshold neither flat nor straight.
                    </p>

                    <p
                        className={classify(
                            moduleStyles["b-text"],
                            moduleStyles["b-pullquote"],
                            moduleStyles["m-echo__pullquote"]
                        )}
                    >
                        <span
                            className={classify(
                                moduleStyles["b-pullquote__l1"]
                            )}
                        >
                            When fitting a door
                        </span>
                        <span
                            className={classify(
                                moduleStyles["b-pullquote__l2"]
                            )}
                        >
                            that&rsquo;s all the variables.
                        </span>
                    </p>

                    <p className={classify(moduleStyles["b-text"])}>
                        Armed with tools I barely knew how to use I measured, I
                        doodled, I calculated.
                    </p>

                    <p className={classify(moduleStyles["b-text"])}>
                        Then, inevitably, I shaved millimetres off everything
                        tens of times until the carpentry gods smiled upon me.
                    </p>
                </div>

                <div
                    className={classify(
                        moduleStyles["l-sectionette"],
                        moduleStyles["m-echo__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            moduleStyles["c-galleryWrap"],
                            moduleStyles["m-echo__galleryWrap"]
                        )}
                    >
                        <div
                            className={classify(
                                moduleStyles["c-gallery"],
                                moduleStyles["m-echo__gallery"]
                            )}
                        >
                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-echo__imgWrap"],
                                    moduleStyles["m-echo__imgWrap--1"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-echo__img"],
                                        moduleStyles["m-echo__img--1"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-echo__imgWrap"],
                                    moduleStyles["m-echo__imgWrap--2"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-echo__img"],
                                        moduleStyles["m-echo__img--2"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-echo__imgWrap"],
                                    moduleStyles["m-echo__imgWrap--3"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-echo__img"],
                                        moduleStyles["m-echo__img--3"]
                                    )}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
