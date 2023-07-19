import Head from 'next/head';
import { pageHOC } from '../../components/providers/pageHOC';
import { cmsService } from '../../infra/cms/cmsService';
import { CMSSectionRender } from '../../infra/cms/CMSSectionRender';

export async function getServerSideProps() {
  const { data: cmsContent } = await cmsService({
    query: `
      query {
        pagePortfolio {
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
                ... on PageportfolioProjectRecord {
                  id
                  description
                  projects {
                    id
                    titulo
                    capa {
                      url
                    }
                    habilidades {
                      nome
                    }
                    descricaoCurta
                    _allDescricaoCurtaLocales {
                      locale
                      value
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

function Portfolio(){
    return(
        <CMSSectionRender pageName="pagePortfolio" />
    )
};

export default pageHOC(Portfolio);