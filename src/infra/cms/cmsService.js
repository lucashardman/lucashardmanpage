const globalQuery = `
  query {
    globalFooter {
      id
      _allPageContentLocales {
        locale
        value {
          content {
            componentName: __typename
            ... on GeneralContactRecord {
              id
              title
              referenceId
              phoneValue
              phoneLabel
              emailValue
              emailLabel
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
              home
              labs
              portfolio
              referenceId
              title
            }
          }
          copyright
          id
        }
      }
    }
    globalContactMe {
      id
      _allPageContentLocales {
        locale
        value {
          formEmail
          formFirstName
          formLastName
          formMessage
          formPhoneNumber
          formSend
          formSubject
          formTitle
          id
          recipientEmail
          feedbackTitleSuccess
          feedbackTitleError
          feedbackTextSuccess
          feedbackTextError
        }
      }
    }
  }
`;

export async function cmsService({ query }) {
  try {
    let datocms_api = process.env.DATOCMS_API

    if (process.env.NODE_ENV != "production"){
        datocms_api = process.env.DATOCMS_API  + 'preview'
    }

    const pageContentResponse = await fetch(datocms_api, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + process.env.DATOCMS_TOKEN,
      },
      body: JSON.stringify({ query }),
    }).then(async (respostaDoServer) => {
      const body = await respostaDoServer.json();
      if(!body.errors) return body;
      throw new Error(JSON.stringify(body));
    });

    const globalContentResponse = await fetch(datocms_api, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + process.env.DATOCMS_TOKEN,
      },
      body: JSON.stringify({query: globalQuery})
    })
    .then(async (respostaDoServer) => {
      const body = await respostaDoServer.json();
      if(!body.errors) return body;
      throw new Error(JSON.stringify(body));
    })
    return {
      data: {
        ...pageContentResponse.data,
        globalContent: {
          ...globalContentResponse.data,
        },
      },
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
