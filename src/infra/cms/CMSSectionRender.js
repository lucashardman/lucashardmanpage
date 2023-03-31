import { getCMSContent } from "./CMSProvider"
import { cmsSections } from '../../components/cmsSections';

export function CMSSectionRender({ pageName }) {

    const sections = getCMSContent(`${pageName}._allPageContentLocales[0].value[0].section`);
    const locales = getCMSContent(`${pageName}._allPageContentLocales`);
    let sectionsData = [];

    sections.map((section) => {
        let sectionData = {};
        const componentName = section.componentName;
        sectionData['id'] = section.id
        sectionData['componentName'] = componentName;
        for (let local in locales) {
            for (let sections in locales[local].value[0].section){
                if (componentName === locales[local].value[0].section[sections].componentName) {
                    sectionData[locales[local].locale] = locales[local].value[0].section[sections];
                }
            }
        }
        sectionsData.push(sectionData);
    })

    return sectionsData.map((section) => {
        const Component = cmsSections[section.componentName];
        if (!Component) return null;
        return (
            <Component key={section.id} {...section} />
        )
    })
}