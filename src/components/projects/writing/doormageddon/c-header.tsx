import Link from "next/link";
import classify from "@/utils/classify";
import { outputContactLink } from "@/utils/antiSpamFunctions";
import styles from "@/styles/projects/writing/doormageddon/doormageddon.module.scss";

const DoormageddonHeader = () => {
    return (
        <header className={classify(styles["c-headerWrap"])}>
            <div className={classify(styles["c-header"])}>
                <ul className={classify(styles["c-header__menu"])}>
                    <li className={classify(styles["c-header__menuItem"])}>
                        <Link
                            className={classify(styles["c-header__menuLink"])}
                            href="/"
                        >
                            Homewards
                        </Link>
                    </li>

                    <li className={classify(styles["c-header__menuItem"])}>
                        {outputContactLink(
                            "",
                            classify(
                                styles["c-header__menuLink"],
                                styles["c-header__contactLink"]
                            )
                        )}
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default DoormageddonHeader;
