import "@/styles/style.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import classify from "@/utils/classify";

export default function App({ Component, pageProps }: AppProps) {
    // useEffect(() => {
    //     const htmlClasses = getHtmlClasses(
    //         pageProps.postData?.designFlavour || ""
    //     );
    //     document.documentElement.className = htmlClasses;
    // });

    return <Component {...pageProps} />;

    function getHtmlClasses(designFlavour: string = "") {
        const htmlClasses: string[] = [];

        switch (designFlavour) {
            case "":
                htmlClasses.push("s-home");
                break;
            default:
                htmlClasses.push("s-writing");
        }

        if (designFlavour)
            htmlClasses.push("s-designFlavour--" + designFlavour);

        return classify(...htmlClasses);
    }
}
