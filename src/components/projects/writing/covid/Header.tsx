import Link from "next/link";
import classify from "@/utils/dev/classify";
import { outputContactLink } from "@/utils/misc/antiSpamFunctions";

interface IProps {
    styles: IStylesModule;
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
