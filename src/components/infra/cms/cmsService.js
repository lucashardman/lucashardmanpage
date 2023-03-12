export async function cmsService({ query }){
    const pageContentRespsonse = await fetch(process.env.DATOCMS_API, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + process.env.DATOCMS_TOKEN
        },
        body: JSON.stringify({query})
    })
    .then(async (respostaDoServer) => {
        const body = await respostaDoServer.json();
        return body;
    })

    return {
        data: pageContentRespsonse,
    }
}