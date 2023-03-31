import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    lang: "en",
    theme: "dark"
});

export {useGlobalState, setGlobalState};