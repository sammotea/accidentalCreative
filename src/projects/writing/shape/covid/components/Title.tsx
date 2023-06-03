import classify from "@/utils/classify";

interface IProps {
    title: string;
    styles: IStylesModule;
}

export const Title: React.FC<IProps> = ({ title, styles }) => {
    return (
        <h1 className={classify(styles["title"], styles["title--1"])}>
            {title}
        </h1>
    );
};

export default Title;
