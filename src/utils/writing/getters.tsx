import path from "path";
import fs from "fs";

const partialTransformsRoute = path.join(
    "src",
    "projects",
    "writing",
    "words",
    "transforms"
);
const transformRoute = path.join(process.cwd(), partialTransformsRoute);
const partialAdditionsRoute = path.join(
    "src",
    "projects",
    "writing",
    "words",
    "additions"
);
const additionsRoute = path.join(process.cwd(), partialAdditionsRoute);

export async function getTransforms(
    ...route: string[]
): Promise<ITransformsObj | undefined> {
    const maybeTransformsFile = path.join(transformRoute, ...route) + ".tsx";
    const hasTransforms = await fs.existsSync(maybeTransformsFile);
    if (hasTransforms) {
        // Webpack throws a barny with fully dynamic import so we have to use a string literal
        // :https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import
        const { transforms }: { transforms: ITransformsObj } = await import(
            `/Users/sammotea/Dropbox/development/localhost/_projects/accidental_creative/v3/accidental_creative--v3/${partialTransformsRoute}/${route.join(
                "/"
            )}.tsx`
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
        const { additions }: { additions: any } = await import(
            `/Users/sammotea/Dropbox/development/localhost/_projects/accidental_creative/v3/accidental_creative--v3/${partialAdditionsRoute}/${route.join(
                "/"
            )}.tsx`
        );
        return additions;
    } else {
        return {};
    }
}
