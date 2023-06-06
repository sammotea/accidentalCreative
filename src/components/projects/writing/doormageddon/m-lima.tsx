import classify from "@/utils/classify";
import styles from "@/styles/projects/writing/doormageddon/doormageddon.module.scss";

const DoormageddonLima = () => {
    return (
        <section
            className={classify(styles["l-sectionWrap"], styles["m-limaWrap"])}
        >
            <div className={classify(styles["l-section"], styles["m-lima"])}>
                <div
                    className={classify(
                        styles["l-sectionette"],
                        styles["m-lima__sectionette"]
                    )}
                >
                    <p className={classify(styles["b-text"])}>
                        Something was&hellip; missing.
                    </p>

                    <p className={classify(styles["b-text"])}>
                        Can a door be art? Piss <em>all the way</em> off.
                    </p>

                    <p className={classify(styles["b-text"])}>
                        Right, sure. Right. Okay. But what if it{" "}
                        <em>sparkles</em>?!
                    </p>
                </div>

                <div
                    className={classify(
                        styles["l-sectionette"],
                        styles["m-lima__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            styles["c-galleryWrap"],
                            styles["m-lima__galleryWrap"]
                        )}
                    >
                        <div
                            className={classify(
                                styles["c-gallery"],
                                styles["m-lima__gallery"]
                            )}
                        >
                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-lima__imgWrap"],
                                    styles["m-lima__imgWrap--1"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-lima__img"],
                                        styles["m-lima__img--1"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-lima__imgWrap"],
                                    styles["m-lima__imgWrap--2"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-lima__img"],
                                        styles["m-lima__img--2"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    styles["b-imgWrap"],
                                    styles["c-gallery__imgWrap"],
                                    styles["m-lima__imgWrap"],
                                    styles["m-lima__imgWrap--3"]
                                )}
                            >
                                <div
                                    className={classify(
                                        styles["b-img"],
                                        styles["b-img--11"],
                                        styles["c-gallery__img"],
                                        styles["m-lima__img"],
                                        styles["m-lima__img--3"]
                                    )}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={classify(
                        styles["l-sectionette"],
                        styles["m-lima__sectionette"]
                    )}
                >
                    <p className={classify(styles["b-text"])}>
                        Golly / <b>Art.</b>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DoormageddonLima;
