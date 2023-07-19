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
                ... on CommonSeoBlockRecord {
                  id
                  title
                }
                ... on CommonMenuRecord {
                  id
                }
                ... on CommonContactMeRecord {
                  id
                }
                ... on CommonFooterRecord {
                  id
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