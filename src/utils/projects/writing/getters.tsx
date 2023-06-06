import path from "path";
import fs from "fs";

const transformRoute = path.join(
    process.cwd(),
    "src",
    "projects",
    "writing",
    "words",
    "transforms"
);

const additionsRoute = path.join(
    process.cwd(),
    "src",
    "projects",
    "writing",
    "words",
    "additions"
);

export async function getTransforms(
    ...route: string[]
): Promise<ITransformsObj | undefined> {
    const maybeTransformsFile = path.join(transformRoute, ...route) + ".json";
    const hasTransforms = await fs.existsSync(maybeTransformsFile);
    if (hasTransforms) {
        const transforms: ITransformsObj = JSON.parse(
            fs.readFileSync(maybeTransformsFile, "utf-8")
        );
        return transforms;
    } else {
        return {};
    }
}

export async function getAdditions(...route: string[]): Promise<any> {
    const maybeAdditionsFile = path.join(additionsRoute, ...route) + ".tsx";
    const hasAdditions = await fs.existsSync(maybeAdditionsFile);

    if (hasAdditions) {
        const additions = JSON.parse(
            fs.readFileSync(maybeAdditionsFile, "utf-8")
        );
        return additions;
    } else {
        return {};
    }
}
