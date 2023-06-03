import classify from "@/utils/classify";

export default function DoormageddonAlpha({ moduleStyles }) {
    return (
        <section
            className={classify(
                moduleStyles["l-sectionWrap"],
                moduleStyles["m-alphaWrap"]
            )}
        >
            <div
                className={classify(
                    moduleStyles["l-section"],
                    moduleStyles["m-alpha"]
                )}
            >
                <div className={classify(moduleStyles["m-alpha__titleWrap"])}>
                    <h1 className={classify(moduleStyles["m-alpha__title"])}>
                        <span>Door</span>
                        <span>mageddon</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}
