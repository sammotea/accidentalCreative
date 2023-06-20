import classify from "@/utils/dev/classify";

interface IProps {
    title: string;
    date: string;
    styles: IStylesModule;
}

export const Title: React.FC<IProps> = ({ title, date, styles }) => {
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6);

    return (
        <>
            <h1 className={classify(styles["title"], styles["title--1"])}>
                {title}
            </h1>
            <div className={classify(styles["date"])}>
                Published: {day}-{month}-{year}
            </div>
        </>
    );
};

export default Title;
