interface IStaticPathsParamsObj {
    params: {
        postId: string;
    }
}

type IProjectTypes = 'post' | 'externalLink' | 'flattenedPost';

interface IProjectScaffold  {
    title: string;
    date: string;
    linkTo: string;
    type: IProjectTypes;
}

interface ILink extends IProjectScaffold {}

interface IPost extends IProjectScaffold {
    id: string;
    content: string;
    category?: string;
    designFlavour?: string;
    order?: number;
    hideFromLists?: boolean;
}

interface IFlattenedPost extends IProjectScaffold {
    category: string;
}

type IProject = ILink | IFlattenedPost | IPost;

interface IProjectByCategory {
    [ index : string ] : IIProject[]
}

interface ITransformsObj {
    [index: string] : string[]
}

interface IPostscriptLink {
    org?: string;
    linkTitle: string;
    link: string;
    description: string;
}

interface IStylesModule {
        [key: string]: string;
}