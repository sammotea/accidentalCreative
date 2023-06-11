import path from "path";
import {
    nonCategoryName,
    sortProjectsByCategory,
    sortProjectsByDate,
} from "./sorters";
import { writingUrl } from "@/utils/projects/writing/markdownParser";

const flattenMap = {
    covid: {
        title: "COVID essays for Mum",
        pointsTo: "introductionForStrangers",
    },
} as { [key: string]: { title: string; pointsTo: string } };

/*
 *   For design-reasons we only want to show one link for an entire project
 */
export const flattenProjectCategories = (projects: IProject[]): IProject[] => {
    const projectsSortedByCategory = sortProjectsByCategory(projects);

    const projectCategories: string[] = Object.keys(projectsSortedByCategory);
    const categoriesToFlatten = Object.keys(flattenMap);

    const projectsAfterFlattening = [] as IProject[];

    projectCategories.forEach((category) => {
        const projectsInThisCategory = projectsSortedByCategory[category];

        if (
            category === nonCategoryName ||
            categoriesToFlatten.indexOf(category) === -1
        ) {
            projectsAfterFlattening.push(...projectsInThisCategory);
        } else {
            projectsAfterFlattening.push(
                flattenCategory(category, projectsInThisCategory)
            );
        }
    });

    return projectsAfterFlattening;
};

const flattenCategory = (
    category: string,
    projects: IProject[]
): IFlattenedPost => {
    const mostRecentProject = sortProjectsByDate(projects)[0];
    const { title, pointsTo } = flattenMap[category];
    const linkTo = path.join(writingUrl, category, pointsTo);
    const date = mostRecentProject.date;

    return {
        title,
        linkTo,
        type: "flattenedPost",
        date,
        category,
    };
};

export const convertToDateKey = (date: string): string => {
    const dateObj = new Date(date);
    return dateObj.toISOString().slice(0, 10).replace(/-/g, "");
};
