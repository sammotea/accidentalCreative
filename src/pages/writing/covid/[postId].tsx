import PageWrapper from "@/components/PageWrapper";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { IPostscript } from "@/projects/writing/shape/covid/components/Postscript";

import { getTransforms, getAdditions } from "@/utils/writing/getters";
import { getPostsForStaticPaths } from "@/utils/projects/getters";
import { replaceContent } from "@/utils/writing/transforms";
import {
    getParsedMarkdown,
    convertMarkdownToHtmlString,
} from "@/utils/writing/markdownParser";

import classify from "@/utils/classify";
import s from "@/projects/writing/shape/covid/_scss/covid.module.scss";

import { Postscript } from "@/projects/writing/shape/covid/components/Postscript";
import { Sidebar } from "@/projects/writing/shape/covid/components/Sidebar";
import { Header } from "@/projects/writing/shape/covid/components/Header";
import { Title } from "@/projects/writing/shape/covid/components/Title";

const category = "covid";

const Post: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
    postData,
}) => {
    const cl = "covidPost";
    const { title, id, content, additions } = postData;

    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <PageWrapper className={classify(s[`${cl}`])}>
                <Header styles={s} />
                <article>
                    <Title styles={s} title={title} />
                    <Sidebar postId={id} />
                    <div
                        className={classify(s["contentWrap"])}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                    <Postscript id={id} psContent={additions} />
                </article>
            </PageWrapper>
        </>
    );
};

export const getStaticProps = async ({ params }: IStaticPathsParamsObj) => {
    const filePath = params.postId as string;

    const postData = await getParsedMarkdown(filePath, category);
    const postTransforms = await getTransforms(category, filePath);
    const postAdditions = (await getAdditions(
        category,
        filePath
    )) as IPostscript;

    const contentAsHtml = await convertMarkdownToHtmlString(postData.content);

    const postContent = postTransforms
        ? replaceContent(contentAsHtml, postTransforms, filePath, category)
        : contentAsHtml;

    return {
        props: {
            postData: {
                ...postData,
                content: postContent,
                additions: postAdditions,
            },
        },
    };
};

export const getStaticPaths = async () => {
    const paths = getPostsForStaticPaths(category);

    return {
        paths,
        fallback: false,
    };
};

export default Post;
