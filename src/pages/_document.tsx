import { NEXT_DATA } from "next/dist/shared/lib/utils";
import classify from "@/utils/dev/classify";
import { useRouter } from "next/router";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        const currentPage = this.props?.__NEXT_DATA__?.page;
        const htmlClasses: string = getHtmlClasses(currentPage);

        return (
            <Html className={htmlClasses}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );

        function getHtmlClasses(page: string = "") {
            const htmlClasses: string[] = [];

            if (page === "/") {
                htmlClasses.push("s-home");
            } else {
                htmlClasses.push("s-writing");
            }

            switch (page) {
                case "/":
                    break;

                case "/writing/covid/[postId]":
                    htmlClasses.push("s-writing--covid");
                    break;

                case "/writing/doormageddon":
                    htmlClasses.push("s-writing--doormageddon");
                    break;
            }

            return classify(...htmlClasses);
        }
    }
}
