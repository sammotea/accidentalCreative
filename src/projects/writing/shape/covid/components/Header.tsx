import classify from "@/utils/classify";
import { outputContactLink } from "@/utils/antiSpamFunctions";

interface IProps {
    styles: {
        [key: string]: string;
    };
}

export const Header: React.FC<IProps> = ({ styles }) => {
    return (
        <header className={classify(styles["header"])}>
            <a
                href="/"
                className={classify(
                    styles["headerLink"],
                    styles["headerLink--home"]
                )}
            >
                Homewards
            </a>
            {outputContactLink(
                "",
                classify(styles["headerLink"], styles["headerLink--contact"])
            )}
        </header>
    );
};

export default Header;
