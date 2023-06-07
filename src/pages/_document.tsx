import { NEXT_DATA } from "next/dist/shared/lib/utils";
import classify from "@/utils/dev/classify";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <script>0</script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
