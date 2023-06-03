import PageWrapper from "@/components/PageWrapper";
import Head from "next/head";

import { InferGetStaticPropsType } from "next";

import { getParsedMarkdown } from "@/utils/writing/markdownParser";

import s from "@/projects/writing/shape/doormageddon/_scss/doormageddon.module.scss";

import DoormageddonHeader from "@/projects/writing/shape/doormageddon/_partials/c-header";
import DoormageddonAlpha from "@/projects/writing/shape/doormageddon/_partials/m-alpha";
import DoormageddonBravo from "@/projects/writing/shape/doormageddon/_partials/m-bravo";
import DoormageddonCharlie from "@/projects/writing/shape/doormageddon/_partials/m-charlie";
import DoormageddonDelta from "@/projects/writing/shape/doormageddon/_partials/m-delta";
import DoormageddonEcho from "@/projects/writing/shape/doormageddon/_partials/m-echo";
import DoormageddonFoxtrot from "@/projects/writing/shape/doormageddon/_partials/m-foxtrot";
import DoormageddonGolf from "@/projects/writing/shape/doormageddon/_partials/m-golf";
import DoormageddonHotel from "@/projects/writing/shape/doormageddon/_partials/m-hotel";
import DoormageddonIndia from "@/projects/writing/shape/doormageddon/_partials/m-india";
import DoormageddonJuliet from "@/projects/writing/shape/doormageddon/_partials/m-juliet";
import DoormageddonKilo from "@/projects/writing/shape/doormageddon/_partials/m-kilo";
import DoormageddonLima from "@/projects/writing/shape/doormageddon/_partials/m-lima";
import DoormageddonMike from "@/projects/writing/shape/doormageddon/_partials/m-mike";

interface IProps {
    postData: IPost;
}

const Post: React.FC<IProps> = ({
    postData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <article className={s.doormageddonWrap}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <PageWrapper>
                <DoormageddonHeader moduleStyles={s} />
                <DoormageddonAlpha moduleStyles={s} />
                <DoormageddonBravo moduleStyles={s} />
                <DoormageddonCharlie moduleStyles={s} />
                <DoormageddonDelta moduleStyles={s} />
                <DoormageddonEcho moduleStyles={s} />
                <DoormageddonFoxtrot moduleStyles={s} />
                <DoormageddonGolf moduleStyles={s} />
                <DoormageddonHotel moduleStyles={s} />
                <DoormageddonIndia moduleStyles={s} />
                <DoormageddonJuliet moduleStyles={s} />
                <DoormageddonKilo moduleStyles={s} />
                <DoormageddonLima moduleStyles={s} />
                <DoormageddonMike moduleStyles={s} />
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
