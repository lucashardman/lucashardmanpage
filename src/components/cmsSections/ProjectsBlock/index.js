import { useGlobalState } from "../../../services/globalHandler";
import { useWindowSize } from 'react-use';
import Link from 'next/link';
import styles from './styles.module.scss'

export function ProjectsBlock(props) {
    const { width } = useWindowSize();
    let data = props.pt;
    let lang = "pt"
    if (useGlobalState("lang")[0] === "en") {
        data = props.en;
        lang = "en"
    }
    if (useGlobalState("lang")[0] === "es") {
        data = props.es;
        lang = "es"
    }
    if (useGlobalState("lang")[0] === "pt") {
        data = props.pt;
        lang = "pt"
    }

    let projects = data.projects;

    let fakePadding = {
        minHeight: '100px',
    }
    if (width >= 768) {
        fakePadding = {
            minHeight: '200px',
        }
    }

    return (
        <div className="container">
            <div style={fakePadding} id="projectsBlockPadding"/>
            <p>{data.description}</p>
            <div className="row mt-5">
                {projects.map(({ id, titulo, capa, habilidades, _allDescricaoCurtaLocales }) => {
                    const skills = habilidades.map((habilidade) => habilidade.nome);
                    const skillsText = skills.join(", ");
                    return (
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={id}>
                            <Link href={`/portfolio/${id}`} passHref>
                                    <div className={`card bg-transparent border-white h-100 d-flex flex-column ${styles.cardLink}`} >
                                        <img className="card-img-top" src={capa.url} alt="Card image cap" style={{ maxHeight: '50%', objectFit: 'cover' }} />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">{titulo}</h5>
                                            <p className="card-text">{
                                                _allDescricaoCurtaLocales.find((project) => project.locale === lang).value
                                                
                                            }</p>
                                            <p className="card-text">
                                                <small className="text-muted">{skillsText}</small>
                                            </p>
                                        </div>
                                    </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}