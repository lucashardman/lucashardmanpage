import { pageHOC } from '../../components/providers/pageHOC';
import { cmsService } from '../../infra/cms/cmsService';
import { CMSSectionRender } from '../../infra/cms/CMSSectionRender';

export async function getServerSideProps() {
    const { data: cmsContent } = await cmsService({
        query: `
            query {
              pageProjeto {
                _allPageContentLocales {
                  locale
                  value {
                    id
                    section {
                      componentName: __typename
                      ... on CommonSeoBlockRecord {
                        id
                        title
                      }
                      ... on CommonMenuRecord {
                        id
                      }
                      ... on CommonFooterRecord {
                        id
                      }
                      ... on PageprojectProjectRecord {
                        id
                        labelAcessar
                        labelRepositorio
                        projects {
                          titulo
                          id
                          habilidades {
                            id
                            nome
                            badge
                          }
                          repositorio
                          linkPrincipal
                          _allDescricaoLocales {
                            locale
                            value {
                              value
                            }
                          }
                          galeria {
                            id
                            url
                          }
                        }
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

function PageProject(){
    return(
      <CMSSectionRender pageName="pageProjeto" />
    )
}

export default pageHOC(PageProject);