import "@/styles/_site/_app/style.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import classify from "@/utils/dev/classify";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
