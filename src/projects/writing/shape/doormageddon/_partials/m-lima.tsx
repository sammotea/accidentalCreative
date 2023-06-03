import classify from "@/utils/classify";

export default function DoormageddonLima({ moduleStyles }) {
    return (
        <section
            className={classify(
                moduleStyles["l-sectionWrap"],
                moduleStyles["m-limaWrap"]
            )}
        >
            <div
                className={classify(
                    moduleStyles["l-section"],
                    moduleStyles["m-lima"]
                )}
            >
                <div
                    className={classify(
                        moduleStyles["l-sectionette"],
                        moduleStyles["m-lima__sectionette"]
                    )}
                >
                    <p className={classify(moduleStyles["b-text"])}>
                        Something was&hellip; missing.
                    </p>

                    <p className={classify(moduleStyles["b-text"])}>
                        Can a door be art? Piss <em>all the way</em> off.
                    </p>

                    <p className={classify(moduleStyles["b-text"])}>
                        Right, sure. Right. Okay. But what if it{" "}
                        <em>sparkles</em>?!
                    </p>
                </div>

                <div
                    className={classify(
                        moduleStyles["l-sectionette"],
                        moduleStyles["m-lima__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            moduleStyles["c-galleryWrap"],
                            moduleStyles["m-lima__galleryWrap"]
                        )}
                    >
                        <div
                            className={classify(
                                moduleStyles["c-gallery"],
                                moduleStyles["m-lima__gallery"]
                            )}
                        >
                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-lima__imgWrap"],
                                    moduleStyles["m-lima__imgWrap--1"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-lima__img"],
                                        moduleStyles["m-lima__img--1"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-lima__imgWrap"],
                                    moduleStyles["m-lima__imgWrap--2"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-lima__img"],
                                        moduleStyles["m-lima__img--2"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-lima__imgWrap"],
                                    moduleStyles["m-lima__imgWrap--3"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-lima__img"],
                                        moduleStyles["m-lima__img--3"]
                                    )}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={classify(
                        moduleStyles["l-sectionette"],
                        moduleStyles["m-lima__sectionette"]
                    )}
                >
                    <p className={classify(moduleStyles["b-text"])}>
                        Golly / <b>Art.</b>
                    </p>
                </div>
            </div>
        </section>
    );
}
