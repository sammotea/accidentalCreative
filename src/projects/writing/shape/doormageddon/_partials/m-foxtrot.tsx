import classify from "@/utils/classify";

export default function DoormageddonFoxtrot({ moduleStyles }) {
    return (
        <section
            className={classify(
                moduleStyles["l-sectionWrap"],
                moduleStyles["m-foxtrotWrap"]
            )}
        >
            <div
                className={classify(
                    moduleStyles["l-section"],
                    moduleStyles["m-foxtrot"]
                )}
            >
                <div
                    className={classify(
                        moduleStyles["l-sectionette"],
                        moduleStyles["m-foxtrot__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            moduleStyles["b-titleWrap"],
                            moduleStyles["m-foxtrot__titleWrap"]
                        )}
                    >
                        <h1
                            className={classify(
                                moduleStyles["b-title"],
                                moduleStyles["b-title--section"],
                                moduleStyles["m-foxtrot_title"]
                            )}
                        >
                            <span
                                className={classify(
                                    moduleStyles["m-foxtrot__titleText"]
                                )}
                            >
                                Dead horse, well flogged
                            </span>
                        </h1>
                    </div>

                    <p className={classify(moduleStyles["b-text"])}>
                        Perfection cruelly highlights the imperfect.
                    </p>

                    <p className={classify(moduleStyles["b-text"])}>
                        Thus did I notice the screaming gap over my otherwise
                        pristine door fit.
                    </p>

                    <p
                        className={classify(
                            moduleStyles["b-text"],
                            moduleStyles["b-pullquote"],
                            moduleStyles["m-foxtrot__pullquote"]
                        )}
                    >
                        <span
                            className={classify(
                                moduleStyles["b-pullquote__l1"]
                            )}
                        >
                            My trusty wood-filler
                        </span>
                        <span
                            className={classify(
                                moduleStyles["b-pullquote__l2"]
                            )}
                        >
                            cut zero mustard.
                        </span>
                    </p>

                    <p className={classify(moduleStyles["b-text"])}>
                        But glue-sandwiched MDF sawed at a perfect 86 degree
                        angle and nailed to buggery? Condiments duly sliced.
                    </p>
                </div>

                <div
                    className={classify(
                        moduleStyles["l-sectionette"],
                        moduleStyles["m-foxtrot__sectionette"]
                    )}
                >
                    <div
                        className={classify(
                            moduleStyles["c-galleryWrap"],
                            moduleStyles["m-foxtrot__galleryWrap"]
                        )}
                    >
                        <div
                            className={classify(
                                moduleStyles["c-gallery"],
                                moduleStyles["m-foxtrot__gallery"]
                            )}
                        >
                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-foxtrot__imgWrap"],
                                    moduleStyles["m-foxtrot__imgWrap--1"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-foxtrot__img"],
                                        moduleStyles["m-foxtrot__img--1"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-foxtrot__imgWrap"],
                                    moduleStyles["m-foxtrot__imgWrap--2"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-foxtrot__img"],
                                        moduleStyles["m-foxtrot__img--2"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-foxtrot__imgWrap"],
                                    moduleStyles["m-foxtrot__imgWrap--3"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-foxtrot__img"],
                                        moduleStyles["m-foxtrot__img--3"]
                                    )}
                                ></div>
                            </div>

                            <div
                                className={classify(
                                    moduleStyles["b-imgWrap"],
                                    moduleStyles["c-gallery__imgWrap"],
                                    moduleStyles["m-foxtrot__imgWrap"],
                                    moduleStyles["m-foxtrot__imgWrap--4"]
                                )}
                            >
                                <div
                                    className={classify(
                                        moduleStyles["b-img"],
                                        moduleStyles["b-img--11"],
                                        moduleStyles["c-gallery__img"],
                                        moduleStyles["m-foxtrot__img"],
                                        moduleStyles["m-foxtrot__img--4"]
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
