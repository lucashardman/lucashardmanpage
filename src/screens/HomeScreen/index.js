import { pageHOC } from '../../components/providers/pageHOC';
import { cmsService } from '../../infra/cms/cmsService';
import { CMSSectionRender } from '../../infra/cms/CMSSectionRender';

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
                      ... on PagehomeContactMeRecord {
                        id
                        recipientEmail
                        formPhoneNumber
                        formTitle
                        formLastName
                        formSubject
                        formMessage
                        formFirstName
                        formEmail
                        formSend
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
      
        <CMSSectionRender pageName="pageHome" />
    )
}

export default pageHOC(HomeScreen);