import { cmsService } from "../src/components/infra/cms/cmsService";
import { StructuredText } from "react-datocms/structured-text";

export async function getServerSideProps({ params }){
    // const { id } = params;
    const contentQuery = `
        query {
            portifolio {
                id
                motivacao 
                repositorio
                teste
                titulo
            }
        }
    `;
    const { data } = await cmsService({
        query: contentQuery
    });
    console.log("Dados: ", data)
    return {
        props: {
            content: data
        }
    }
}


export default function Portifolio({content}) {
    return (
        <div>
            <h1>Site em construção??</h1>
            {/* <StructuredText data={content}/> */}
            <pre>
                {JSON.stringify(content, null, 4)}
            </pre>
        </div>
    )
}