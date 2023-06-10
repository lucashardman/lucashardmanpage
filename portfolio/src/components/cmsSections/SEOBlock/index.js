import Head from "next/head"
import { useGlobalState } from "../../../services/globalHandler";

export function SEOBlock(props) {
    let data = props.pt;
    if (useGlobalState("lang")[0] === "en") {
        data = props.en;
      }
      if (useGlobalState("lang")[0] === "es") {
        data = props.es;
      }
      if (useGlobalState("lang")[0] === "pt") {
        data = props.pt;
      }
    return (
        <Head>
            <title>{data.title}</title>
        </Head>
    );
}