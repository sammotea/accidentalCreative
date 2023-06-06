import classify from "@/utils/classify";
import styles from "@/styles/projects/writing/doormageddon/doormageddon.module.scss";

const DoormageddonFoxtrot = () => {
    return (
        <section
            className={classify(
                styles["l-sectionWrap"],
                styles["m-foxtrotWrap"]
            )}
        >
            <div className={classify(styles["l-section"], styles["m-foxtrot"])}>
                <div
                    className={classify(
                        styles["l-sectionette"],
                        styles["m-foxtrot__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            styles["b-titleWrap"],
                            styles["m-foxtrot__titleWrap"]
                        )}
                    >
                        <h1
                            className={classify(
                                styles["b-title"],
                                styles["b-title--section"],
                                styles["m-foxtrot_title"]
                            )}
                        >
                            <span
                                className={classify(
                                    styles["m-foxtrot__titleText"]
                                )}
                            >
                                Dead horse, well flogged
                            </span>
                        </h1>
                    </div>

                    <p className={classify(styles["b-text"])}>
                        Perfection cruelly highlights the imperfect.
                    </p>

                    <p className={classify(styles["b-text"])}>
                        Thus did I notice the screaming gap over my otherwise
                        pristine door fit.
                    </p>

                    <p
                        className={classify(
                            styles["b-text"],
                            styles["b-pullquote"],
                            styles["m-foxtrot__pullquote"]
                        )}
                    >
                        <span className={classify(styles["b-pullquote__l1"])}>
                            My trusty wood-filler
                        </span>
                        <span className={classify(styles["b-pullquote__l2"])}>
                            cut zero mustard.
                        </span>
                    </p>

                    <p className={classify(styles["b-text"])}>
                        But glue-sandwiched MDF sawed at a perfect 86 degree
                        angle and nailed to buggery? Condiments duly sliced.
                    </p>
                </div>

                <div
                    className={classify(
                        styles["l-sectionette"],
                        styles["m-foxtrot__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            styles["c-galleryWrap"],
                            styles["m-foxtrot__galleryWrap"]
                        )}
                    >
                        <div
                            className={classify(
                                styles["c-gallery"],
                                styles["m-foxtrot__gallery"]
                            )}
                        >
                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-foxtrot__imgWrap"],
                                    styles["m-foxtrot__imgWrap--1"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-foxtrot__img"],
                                        styles["m-foxtrot__img--1"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-foxtrot__imgWrap"],
                                    styles["m-foxtrot__imgWrap--2"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-foxtrot__img"],
                                        styles["m-foxtrot__img--2"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-foxtrot__imgWrap"],
                                    styles["m-foxtrot__imgWrap--3"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-foxtrot__img"],
                                        styles["m-foxtrot__img--3"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-foxtrot__imgWrap"],
                                    styles["m-foxtrot__imgWrap--4"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-foxtrot__img"],
                                        styles["m-foxtrot__img--4"]
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
export default DoormageddonFoxtrot;
