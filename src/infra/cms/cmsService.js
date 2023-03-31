const globalQuery = `
  query {
    globalFooter {
      descricao
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
      body: JSON.stringify({
        query: globalQuery,
      })
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
