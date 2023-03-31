import { SEOBlock } from "./SEOBlock"
import { IntroBlock } from "./IntroBlock"
import { ProjectsBlock } from "./ProjectsBlock"
import { MenuBlock } from "./MenuBlock"
import { FooterBlock } from "./FooterBlock"

export const cmsSections = {
    PageportfolioProjectRecord: ProjectsBlock,
    CommonSeoBlockRecord: SEOBlock,
    CommonMenuRecord: MenuBlock,
    PagehomeIntroRecord: IntroBlock,
    CommonFooterRecord: FooterBlock
}