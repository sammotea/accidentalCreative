import { NEXT_DATA } from "next/dist/shared/lib/utils";
import classify from "@/utils/dev/classify";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <script>
                    /*to prevent Firefox FOUC, this must be here*/ let
                    FF_FOUC_FIX;
                </script>
                <body>
                    <script>
                        /*to prevent Firefox FOUC, this must be here*/ let
                        FF_FOUC_FIX2;
                    </script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
