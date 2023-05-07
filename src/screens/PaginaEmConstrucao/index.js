import { pageHOC } from '../../components/providers/pageHOC';
import { cmsService } from '../../infra/cms/cmsService';
import { CMSSectionRender } from '../../infra/cms/CMSSectionRender';

export async function getServerSideProps() {
    const { data: cmsContent } = await cmsService({
        query: `
            query {
                pagePaginaEmConstrucao {
                  _allPageContentLocales {
                    locale
                    value {
                      id
                      section {
                        componentName: __typename
                        ... on CommonMenuRecord {
                          id
                          teste
                        }
                        ... on CommonFooterRecord {
                          id
                          copyright
                          content {
                            ... on GeneralContactRecord {
                              id
                              emailLabel
                              emailValue
                              phoneLabel
                              phoneValue
                              referenceId
                              title
                            }
                            ... on GeneralNetworkRecord {
                              id
                              behance
                              facebook
                              github
                              instagram
                              linkedin
                              referenceId
                              title
                            }
                            ... on GeneralTableOfContentRecord {
                              id
                              title
                              referenceId
                              portfolio
                              labs
                              home
                            }
                          }
                        }
                        ... on PagepaginaemconstrucaoMensagemRecord {
                          id
                          message
                          title
                        }
                      }
                    }
                  }
                }
            }
        `
    });
    return {
      props: {
        cmsContent,
      },
    };
  }

function PaginaEmConstrucao(){
    return(
      
        <CMSSectionRender pageName="pagePaginaEmConstrucao" />
    )
}

export default pageHOC(PaginaEmConstrucao);