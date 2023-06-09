import Head from 'next/head';
import { pageHOC } from '../../components/providers/pageHOC';
import { cmsService } from '../../infra/cms/cmsService';
import { CMSSectionRender } from '../../infra/cms/CMSSectionRender';

export async function getServerSideProps() {
    const { data: cmsContent } = await cmsService({
        query: `
            query {
              pagePortfolio {
                pageContent {
                  section {
                    componentName: __typename,
                    ... on CommonSeoBlockRecord {
                      id
                      title
                    },
                    ... on PageportfolioProjectRecord {
                      id
                      projects {
                        titulo
                        repositorio
                        motivacao
                        id
                        habilidades {
                          nome
                          id
                        }
                        capa {
                          id
                        }
                        areas {
                          id
                          nome
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

function Portfolio(){
    return(
        <CMSSectionRender pageName="pagePortfolio" />
    )
};

export default pageHOC(Portfolio);