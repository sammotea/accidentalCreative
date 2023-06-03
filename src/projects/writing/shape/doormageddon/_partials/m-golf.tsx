import classify from "@/utils/classify";
import styles from "@/projects/writing/shape/doormageddon/_scss/doormageddon.module.scss";

const DoormageddonGolf = () => {
    return (
        <section
            className={classify(styles["l-sectionWrap"], styles["m-golfWrap"])}
        >
            <div className={classify(styles["l-section"], styles["m-golf"])}>
                <div
                    className={classify(
                        styles["l-sectionette"],
                        styles["m-golf__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            styles["b-titleWrap"],
                            styles["m-golf__titleWrap"]
                        )}
                    >
                        <h1
                            className={classify(
                                styles["b-title"],
                                styles["b-title--section"],
                                styles["m-golf_title"]
                            )}
                        >
                            <span
                                className={classify(
                                    styles["m-golf__titleText"]
                                )}
                            >
                                Have your cake and drop it
                            </span>
                        </h1>
                    </div>

                    <p className={classify(styles["b-text"])}>
                        A well-fitted hinge lies flush. A flat, shallow
                        depression of a few millimetres is the ideal bed.
                    </p>

                    <p className={classify(styles["b-text"])}>
                        An inch-deep crevasse because someone doesn’t know how
                        to use a chisel is not.
                    </p>

                    <p
                        className={classify(
                            styles["b-text"],
                            styles["b-pullquote"],
                            styles["m-golf__pullquote"]
                        )}
                    >
                        <span className={classify(styles["b-pullquote__l1"])}>
                            Defeat snatched from
                        </span>
                        <span className={classify(styles["b-pullquote__l2"])}>
                            the jaws of victory.
                        </span>
                    </p>

                    <p className={classify(styles["b-text"])}>
                        Half a tube of glue and three sighs of woodfiller later
                        and my shame was concealed.
                    </p>
                </div>

                <div
                    className={classify(
                        styles["l-sectionette"],
                        styles["m-golf__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            styles["c-galleryWrap"],
                            styles["m-golf__galleryWrap"]
                        )}
                    >
                        <div
                            className={classify(
                                styles["c-gallery"],
                                styles["m-golf__gallery"]
                            )}
                        >
                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-golf__imgWrap"],
                                    styles["m-golf__imgWrap--1"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-golf__img"],
                                        styles["m-golf__img--1"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-golf__imgWrap"],
                                    styles["m-golf__imgWrap--2"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-golf__img"],
                                        styles["m-golf__img--2"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-golf__imgWrap"],
                                    styles["m-golf__imgWrap--3"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-golf__img"],
                                        styles["m-golf__img--3"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-golf__imgWrap"],
                                    styles["m-golf__imgWrap--4"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-golf__img"],
                                        styles["m-golf__img--4"]
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
export default DoormageddonGolf;
