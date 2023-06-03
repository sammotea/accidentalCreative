import classify from "@/utils/classify";
import styles from "@/projects/writing/shape/doormageddon/_scss/doormageddon.module.scss";

const DoormageddonEcho = () => {
    return (
        <section
            className={classify(styles["l-sectionWrap"], styles["m-echoWrap"])}
        >
            <div className={classify(styles["l-section"], styles["m-echo"])}>
                <div
                    className={classify(
                        styles["l-sectionette"],
                        styles["m-echo__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            styles["b-titleWrap"],
                            styles["m-echo__titleWrap"]
                        )}
                    >
                        <h1
                            className={classify(
                                styles["b-title"],
                                styles["b-title--section"],
                                styles["m-echo_title"]
                            )}
                        >
                            <span
                                className={classify(
                                    styles["m-echo__titleText"]
                                )}
                            >
                                Schrödinger&rsquo;s cut
                            </span>
                        </h1>
                    </div>

                    <p className={classify(styles["b-text"])}>
                        I believed my door to be a perfectly normal door removed
                        from a perfectly normal doorframe.
                    </p>

                    <p className={classify(styles["b-text"])}>
                        &ldquo;
                        <em>
                            Did you think to check before artsyfartsying with
                        </em>
                        &hellip;?&rdquo;&mdash;Oh hush your mouth.
                    </p>

                    <p className={classify(styles["b-text"])}>
                        This door was crooked, the doorframe comprehensively
                        borked, and the threshold neither flat nor straight.
                    </p>

                    <p
                        className={classify(
                            styles["b-text"],
                            styles["b-pullquote"],
                            styles["m-echo__pullquote"]
                        )}
                    >
                        <span className={classify(styles["b-pullquote__l1"])}>
                            When fitting a door
                        </span>
                        <span className={classify(styles["b-pullquote__l2"])}>
                            that&rsquo;s all the variables.
                        </span>
                    </p>

                    <p className={classify(styles["b-text"])}>
                        Armed with tools I barely knew how to use I measured, I
                        doodled, I calculated.
                    </p>

                    <p className={classify(styles["b-text"])}>
                        Then, inevitably, I shaved millimetres off everything
                        tens of times until the carpentry gods smiled upon me.
                    </p>
                </div>

                <div
                    className={classify(
                        styles["l-sectionette"],
                        styles["m-echo__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            styles["c-galleryWrap"],
                            styles["m-echo__galleryWrap"]
                        )}
                    >
                        <div
                            className={classify(
                                styles["c-gallery"],
                                styles["m-echo__gallery"]
                            )}
                        >
                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-echo__imgWrap"],
                                    styles["m-echo__imgWrap--1"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-echo__img"],
                                        styles["m-echo__img--1"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-echo__imgWrap"],
                                    styles["m-echo__imgWrap--2"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-echo__img"],
                                        styles["m-echo__img--2"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-echo__imgWrap"],
                                    styles["m-echo__imgWrap--3"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-echo__img"],
                                        styles["m-echo__img--3"]
                                    )}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default DoormageddonEcho;
