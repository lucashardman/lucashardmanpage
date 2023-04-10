import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    lang: "en",
    theme: "dark",
    isLangEnHidden: true,
    isLangPtHidden: true,
    isLangEsHidden: true
});

export {useGlobalState, setGlobalState};