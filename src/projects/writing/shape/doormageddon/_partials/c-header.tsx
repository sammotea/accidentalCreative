import classify from "@/utils/classify";
import { outputContactLink } from "@/utils/antiSpamFunctions";
import styles from "@/projects/writing/shape/doormageddon/_scss/doormageddon.module.scss";

const DoormageddonHeader = () => {
    return (
        <header className={classify(styles["c-headerWrap"])}>
            <div className={classify(styles["c-header"])}>
                <ul className={classify(styles["c-header__menu"])}>
                    <li className={classify(styles["c-header__menuItem"])}>
                        <a
                            className={classify(styles["c-header__menuLink"])}
                            href="/"
                        >
                            Homewards
                        </a>
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
