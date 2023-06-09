import { pageHOC } from '../../components/providers/pageHOC';
import { cmsService } from '../../infra/cms/cmsService';
import { CMSSectionRender } from '../../infra/cms/CMSSectionRender';
import Head from 'next/head';

export async function getServerSideProps() {
    const { data: cmsContent } = await cmsService({
        query: `
            query {
              pageHome {
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
                      ... on PagehomeIntroRecord {
                        id
                        about
                        iAm1
                        iAm2
                        iAm3
                        iAm4
                        myName
                        welcome
                      }
                      ... on PagehomeSkillRecord {
                        id
                        aboutTheSkills
                        skill {
                          nome
                          id
                        }
                      }
                      ... on CommonFooterRecord {
                        id
                      }
                      ... on CommonMenuRecord {
                        id
                      }
                      ... on CommonContactMeRecord {
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

function HomeScreen(){
    return(
      <>
        <Head>
          <title>Lucas Hardman</title>
        </Head>
        <CMSSectionRender pageName="pageHome" />
        </>
    )
}

export default pageHOC(HomeScreen);