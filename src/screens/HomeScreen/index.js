import Head from 'next/head';
import { pageHOC } from '../../components/providers/pageHOC';
import { cmsService } from '../../infra/cms/cmsService';
import { CMSSectionRender } from '../../infra/cms/CMSSectionRender';
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useEffect } from 'react';
import { useGlobalState } from '../../services/globalHandler';

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
                        teste
                      }
                      ... on CommonMenuRecord {
                        id
                        teste
                      }
                    }
                  }
                }
              }
            }
            
        `
        // query: `
        //     query {
        //         pageHome {
        //           pageContent(locale: en) {
        //             section {
        //               componentName: __typename
        //               ... on CommonSeoBlockRecord {
        //                 id
        //                 title
        //               }
        //               ... on PagehomeIntroRecord {
        //                 id
        //                 welcome
        //                 about
        //                 iAm1
        //                 iAm2
        //                 iAm3
        //                 iAm4
        //                 myName
        //               }
        //               ... on CommonFooterRecord {
        //                 id
        //               }
        //               ... on CommonMenuRecord {
        //                 id
        //               }
        //             }
        //           }
        //         }
        //       }
        // `
    });
    return {
      props: {
        cmsContent,
      },
    };
  }

function HomeScreen(){
  // const lang = useGlobalState('lang')[0];

    return(
      
        <CMSSectionRender pageName="pageHome" />
    )
}

export default pageHOC(HomeScreen);