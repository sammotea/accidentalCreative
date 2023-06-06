import Link from "next/link";
import classify from "@/utils/classify";
import { outputContactLink } from "@/utils/antiSpamFunctions";

interface IProps {
    styles: IStylesModule;
}

export const Header: React.FC<IProps> = ({ styles }) => {
    return (
        <header className={classify(styles["header"])}>
            <Link
                href="/"
                className={classify(
                    styles["headerLink"],
                    styles["headerLink--home"]
                )}
            >
                Homewards
            </Link>
            {outputContactLink(
                "",
                classify(styles["headerLink"], styles["headerLink--contact"])
            )}
        </header>
    );
};

export default Header;
