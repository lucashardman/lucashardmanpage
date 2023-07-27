import { pageHOC } from '../../components/providers/pageHOC';
import { cmsService } from '../../infra/cms/cmsService';
import { CMSSectionRender } from '../../infra/cms/CMSSectionRender';
import Head from 'next/head';

export async function getServerSideProps() {
    const { data: cmsContent } = await cmsService({
        query: `
            query {
              pageLab {
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
                      ... on PagelabIntroRecord {
                        id
                        intro
                        title
                      }
                      ... on CommonFooterRecord {
                        id
                      }
                      ... on CommonMenuRecord {
                        id
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

function Labs(){
    return(
      <CMSSectionRender pageName="pageLab" />
    )
}

export default pageHOC(Labs);