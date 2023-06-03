import classify from "@/utils/classify";

export default function DoormageddonGolf({ moduleStyles }) {
    return (
        <section
            className={classify(
                moduleStyles["l-sectionWrap"],
                moduleStyles["m-golfWrap"]
            )}
        >
            <div
                className={classify(
                    moduleStyles["l-section"],
                    moduleStyles["m-golf"]
                )}
            >
                <div
                    className={classify(
                        moduleStyles["l-sectionette"],
                        moduleStyles["m-golf__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            moduleStyles["b-titleWrap"],
                            moduleStyles["m-golf__titleWrap"]
                        )}
                    >
                        <h1
                            className={classify(
                                moduleStyles["b-title"],
                                moduleStyles["b-title--section"],
                                moduleStyles["m-golf_title"]
                            )}
                        >
                            <span
                                className={classify(
                                    moduleStyles["m-golf__titleText"]
                                )}
                            >
                                Have your cake and drop it
                            </span>
                        </h1>
                    </div>

                    <p className={classify(moduleStyles["b-text"])}>
                        A well-fitted hinge lies flush. A flat, shallow
                        depression of a few millimetres is the ideal bed.
                    </p>

                    <p className={classify(moduleStyles["b-text"])}>
                        An inch-deep crevasse because someone doesn’t know how
                        to use a chisel is not.
                    </p>

                    <p
                        className={classify(
                            moduleStyles["b-text"],
                            moduleStyles["b-pullquote"],
                            moduleStyles["m-golf__pullquote"]
                        )}
                    >
                        <span
                            className={classify(
                                moduleStyles["b-pullquote__l1"]
                            )}
                        >
                            Defeat snatched from
                        </span>
                        <span
                            className={classify(
                                moduleStyles["b-pullquote__l2"]
                            )}
                        >
                            the jaws of victory.
                        </span>
                    </p>

                    <p className={classify(moduleStyles["b-text"])}>
                        Half a tube of glue and three sighs of woodfiller later
                        and my shame was concealed.
                    </p>
                </div>

                <div
                    className={classify(
                        moduleStyles["l-sectionette"],
                        moduleStyles["m-golf__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            moduleStyles["c-galleryWrap"],
                            moduleStyles["m-golf__galleryWrap"]
                        )}
                    >
                        <div
                            className={classify(
                                moduleStyles["c-gallery"],
                                moduleStyles["m-golf__gallery"]
                            )}
                        >
                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-golf__imgWrap"],
                                    moduleStyles["m-golf__imgWrap--1"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-golf__img"],
                                        moduleStyles["m-golf__img--1"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-golf__imgWrap"],
                                    moduleStyles["m-golf__imgWrap--2"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-golf__img"],
                                        moduleStyles["m-golf__img--2"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-golf__imgWrap"],
                                    moduleStyles["m-golf__imgWrap--3"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-golf__img"],
                                        moduleStyles["m-golf__img--3"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-golf__imgWrap"],
                                    moduleStyles["m-golf__imgWrap--4"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-golf__img"],
                                        moduleStyles["m-golf__img--4"]
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
