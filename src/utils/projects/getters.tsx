import path from "path";
import fs from "fs";
import { writingPath, getParsedMarkdown } from "./writing/markdownParser";

const mdRegex = /\.md$/;
const externalLinksPath = path.join(
    process.cwd(),
    "src",
    "json",
    "projects",
    "externalLinks.json"
);

export const getAllProjects = (showHidden: boolean = false) => {
    const allLinks = getAllExternalLinks();
    const allPosts = getAllPosts(showHidden);
    const allProjects = [...allLinks, ...allPosts];

    return allProjects;
};

export const getAllExternalLinks = (): ILink[] => {
    const externalLinks: ILink[] = JSON.parse(
        fs.readFileSync(externalLinksPath, "utf-8")
    );
    const externalLinksWithType = externalLinks.map((link) => {
        return maybeAddTypeToProject(link, "externalLink");
    });
    return externalLinksWithType;
};

export const maybeAddTypeToProject = (
    project: IProject | Omit<IProject, "type">,
    type: IProjectTypes
): IProject => {
    if (project.hasOwnProperty("type")) {
        return project as IProject;
    } else {
        return {
            ...project,
            type,
        };
    }
};

export const getAllPosts = (showHidden: boolean = false): IPost[] => {
    const markdownFilesAndFolders = getMarkdownFolderContentsForWriting();
    const parsedPosts = getParsedPostsFromMarkdown(markdownFilesAndFolders);
    const visiblePosts = showHidden
        ? parsedPosts
        : parsedPosts.filter((post) => {
              return post.hideFromLists ? false : true;
          });

    return visiblePosts;
};

const getParsedPostsFromMarkdown = (
    markdownFilesOrFolders: string[],
    enclosingFolder: string = ""
): IPost[] => {
    const parsedPosts = [] as IPost[];

    markdownFilesOrFolders.forEach((cur) => {
        if (mdRegex.test(cur)) {
            parsedPosts.push(getParsedMarkdown(cur, enclosingFolder));
        } else {
            const filesInFolder = getMarkdownFolderContentsForWriting(cur);

            if (filesInFolder.length) {
                parsedPosts.push(
                    ...getParsedPostsFromMarkdown(filesInFolder, cur)
                );
            }
        }
    });

    return parsedPosts;
};

export const getMarkdownFolderContentsForWriting = (
    ...subfolders: string[]
) => {
    const dir = path.join(writingPath, ...subfolders);
    const dirContents = fs.readdirSync(dir);
    return dirContents;
};

export const getPostsForStaticPaths = (
    subfolder: string = ""
): IStaticPathsParamsObj[] => {
    const markdownFilesOrFolders =
        getMarkdownFolderContentsForWriting(subfolder);
    const paths: IStaticPathsParamsObj[] = [];
    markdownFilesOrFolders.forEach((cur) => {
        if (mdRegex.test(cur)) {
            const filePath = cur.replace(mdRegex, "");
            const pathAsParam = setAsStaticPathsParams(filePath);
            paths.push(pathAsParam);
        } else {
            throw new Error("Function not ready for folders… lazy programmer!");
        }
    });

    return paths;
};

function setAsStaticPathsParams(postId: string): IStaticPathsParamsObj {
    return {
        params: {
            postId,
        },
    };
}
