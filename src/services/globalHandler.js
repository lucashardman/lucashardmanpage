import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    lang: "en",
    theme: "dark",
    isLangEnHidden: false,
    isLangPtHidden: true,
    isLangEsHidden: true
});

export {useGlobalState, setGlobalState};