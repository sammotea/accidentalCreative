import Head from "next/head";

import styles from "@/styles/modules/Index.module.scss";

import PageWrapper from "@/components/PageWrapper";
import { Summary } from "@/components/Home/Summary";
import { Contact } from "@/components/Home/Contact";
import { Projects } from "@/components/Home/Projects";

import { InferGetStaticPropsType } from "next";

import { getAllProjects } from "@/utils/projects/getters";
import { flattenProjectCategories } from "@/utils/projects/transformers";
import { sortProjectsByDate } from "@/utils/projects/sorters";

interface IProps {
    projects: IProject[];
}

export const IndexPage: React.FC<IProps> = ({
    projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>{renderHead()}</Head>
            <PageWrapper className={styles.pageWrapper}>
                <Summary styles={styles} />
                <Contact styles={styles} />
                <Projects styles={styles} projects={projects} />
            </PageWrapper>
        </>
    );
};

const renderHead = () => {
    return (
        <>
            <title>Accidental Creative</title>
            <meta name="description" content="" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
        </>
    );
};

export const getStaticProps = async () => {
    const projectsRaw = getAllProjects();
    const projects = sortProjectsByDate(flattenProjectCategories(projectsRaw));

    // Next.js hates TS optional params in getStaticProps. Hack.
    const props = { projects };
    return { props: JSON.parse(JSON.stringify(props)) };
};

export default IndexPage;
