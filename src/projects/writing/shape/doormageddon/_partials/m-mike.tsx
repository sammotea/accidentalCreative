import classify from "@/utils/classify";

export default function DoormageddonMike({ moduleStyles }) {
    return (
        <section
            className={classify(
                moduleStyles["l-sectionWrap"],
                moduleStyles["m-mikeWrap"]
            )}
        >
            <div
                className={classify(
                    moduleStyles["l-section"],
                    moduleStyles["m-mike"]
                )}
            ></div>
        </section>
    );
}
