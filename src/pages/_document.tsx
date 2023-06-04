import { NEXT_DATA } from "next/dist/shared/lib/utils";
import classify from "@/utils/classify";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        const currentPageNextData = this.props.__NEXT_DATA__;
        const htmlClasses = getHtmlClasses(currentPageNextData);
        //console.log(this.props);

        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

const getHtmlClasses = (currentPageNextData: NEXT_DATA) => {
    let pageId = currentPageNextData.page;
    let designFlavour =
        currentPageNextData.props?.pageProps?.postData?.designFlavour || "";
    const htmlClasses: string[] = [];

    switch (pageId) {
        case "/":
            htmlClasses.push("s-home");
            break;
        default:
            if (pageId.startsWith("/writing")) {
                htmlClasses.push("s-writing");
            }
    }

    if (designFlavour) htmlClasses.push("s-designFlavour--" + designFlavour);

    return classify(...htmlClasses);
};
