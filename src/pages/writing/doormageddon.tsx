import PageWrapper from "@/components/_site/PageWrapper";
import Head from "next/head";

import { InferGetStaticPropsType } from "next";

import { getParsedMarkdown } from "@/utils/writing/markdownParser";

import styles from "@/styles/projects/writing/doormageddon/doormageddon.module.scss";

import DoormageddonHeader from "@/components/projects/writing/doormageddon/c-header";
import DoormageddonAlpha from "@/components/projects/writing/doormageddon//m-alpha";
import DoormageddonBravo from "@/components/projects/writing/doormageddon//m-bravo";
import DoormageddonCharlie from "@/components/projects/writing/doormageddon//m-charlie";
import DoormageddonDelta from "@/components/projects/writing/doormageddon//m-delta";
import DoormageddonEcho from "@/components/projects/writing/doormageddon//m-echo";
import DoormageddonFoxtrot from "@/components/projects/writing/doormageddon//m-foxtrot";
import DoormageddonGolf from "@/components/projects/writing/doormageddon//m-golf";
import DoormageddonHotel from "@/components/projects/writing/doormageddon//m-hotel";
import DoormageddonIndia from "@/components/projects/writing/doormageddon//m-india";
import DoormageddonJuliet from "@/components/projects/writing/doormageddon//m-juliet";
import DoormageddonKilo from "@/components/projects/writing/doormageddon//m-kilo";
import DoormageddonLima from "@/components/projects/writing/doormageddon//m-lima";
import DoormageddonMike from "@/components/projects/writing/doormageddon//m-mike";

interface IProps {
    postData: IPost;
}

const Post: React.FC<IProps> = ({
    postData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <article className={styles.doormageddonWrap}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <PageWrapper className={styles.pageWrapper}>
                <DoormageddonHeader />
                <DoormageddonAlpha />
                <DoormageddonBravo />
                <DoormageddonCharlie />
                <DoormageddonDelta />
                <DoormageddonEcho />
                <DoormageddonFoxtrot />
                <DoormageddonGolf />
                <DoormageddonHotel />
                <DoormageddonIndia />
                <DoormageddonJuliet />
                <DoormageddonKilo />
                <DoormageddonLima />
                <DoormageddonMike />
            </PageWrapper>
        </article>
    );
};

export async function getStaticProps() {
    const postData = await getParsedMarkdown("doormageddon");
    return {
        props: {
            postData,
        },
    };
}

export default Post;
