export const nonCategoryName = "noCategory";

export const sortProjectsByCategory = (
    projects: IProject[]
): IProjectByCategory => {
    const initialObject = {} as IProjectByCategory;
    initialObject[nonCategoryName] = [];

    const projectsSortedByCategory = projects.reduce((acc, cur) => {
        if ("category" in cur) {
            const cat = cur.category as string;

            if (typeof acc[cat] === "undefined") acc[cat] = [] as IProject[];

            acc[cat].push(cur);
        } else {
            acc[nonCategoryName].push(cur);
        }

        return acc;
    }, initialObject);

    return projectsSortedByCategory;
};

export const sortProjectsByDate = (projects: IProject[]): IProject[] => {
    return projects.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};
