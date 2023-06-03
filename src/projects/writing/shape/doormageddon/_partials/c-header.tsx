import classify from "@/utils/classify";
import { outputContactLink } from "@/utils/antiSpamFunctions";

export default function DoormageddonHeader({ moduleStyles }) {
    return (
        <header className={classify(moduleStyles["c-headerWrap"])}>
            <div className={classify(moduleStyles["c-header"])}>
                <ul className={classify(moduleStyles["c-header__menu"])}>
                    <li
                        className={classify(moduleStyles["c-header__menuItem"])}
                    >
                        <a
                            className={classify(
                                moduleStyles["c-header__menuLink"]
                            )}
                            href="/"
                        >
                            Homewards
                        </a>
                    </li>

                    <li
                        className={classify(moduleStyles["c-header__menuItem"])}
                    >
                        {outputContactLink(
                            "",
                            classify(
                                moduleStyles["c-header__menuLink"],
                                moduleStyles["c-header__contactLink"]
                            )
                        )}
                    </li>
                </ul>
            </div>
        </header>
    );
}
