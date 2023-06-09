import { SEOBlock } from "./SEOBlock"
import { IntroBlock } from "./IntroBlock"
import { ProjectsBlock } from "./ProjectsBlock"
import { MenuBlock } from "./MenuBlock"
import { FooterBlock } from "./FooterBlock"
import { SkillsBlock } from "./SkillsBlock"
import { ContactMeBlock } from "./ContactMeBlock"
import { PaginaEmContrucaoBlock } from "./PaginaEmContrucaoBlock"

export const cmsSections = {
    PageportfolioProjectRecord: ProjectsBlock,
    CommonSeoBlockRecord: SEOBlock,
    CommonMenuRecord: MenuBlock,
    PagehomeIntroRecord: IntroBlock,
    PagehomeSkillRecord: SkillsBlock,
    CommonContactMeRecord: ContactMeBlock,
    CommonFooterRecord: FooterBlock,
    PagepaginaemconstrucaoMensagemRecord: PaginaEmContrucaoBlock
}