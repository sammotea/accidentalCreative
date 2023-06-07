import classify from "@/utils/dev/classify";
import Link from "next/link";
import styles from "@/styles/pages/index/Index.module.scss";

interface IProps {
    projects: IProject[];
}

export const Projects: React.FC<IProps> = ({ projects }) => {
    return (
        <section className={classify(styles.projectsWrap, styles.l_module)}>
            {renderProjects(projects)}
        </section>
    );

    function renderProjects(projects: IProject[]) {
        const projectListItems = projects.map((project) => {
            return htmlizeProjectListItem(project);
        });

        return (
            <>
                <h2 className={classify(styles.subtitle)}>
                    Writings &amp; Doings
                </h2>
                <ul className={classify(styles.projectList, styles.projects)}>
                    {projectListItems}
                </ul>
            </>
        );
    }

    function htmlizeProjectListItem(project: IProject) {
        const { title, linkTo, date, type } = project;
        const target = linkTo.startsWith("http") ? "_blank" : "_self";

        return (
            <li className={classify(styles.projectListItem)} key={title}>
                <Link
                    className={classify(
                        styles.link,
                        styles.projectLink,
                        styles[`projectLink--${type}`]
                    )}
                    href={linkTo}
                    target={target}
                >
                    <span>{title}</span>
                </Link>{" "}
                <span className={classify(styles.projectDate)}>
                    {date.substring(0, 4) + "/" + date.substring(4, 6)}
                </span>
            </li>
        );
    }
};
