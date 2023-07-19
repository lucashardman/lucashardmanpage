import { useGlobalState } from "../../../services/globalHandler";
import { useWindowSize } from 'react-use';
import { useRouter } from 'next/router';
import Carousel from "react-multi-carousel";
import Link from 'next/link';
import { StructuredText } from 'react-datocms';

export function ProjectDescriptionBlock(props) {
    const { width } = useWindowSize();
    const router = useRouter();
    const { id } = router.query;
    let data = props.pt;
    const project = data.projects.find((project) => project.id === id);
    let descricao = ""
    if (useGlobalState("lang")[0] === "en") {
        data = props.en;
        descricao = project._allDescricaoLocales.find((project) => project.locale === "en")
    }
    if (useGlobalState("lang")[0] === "es") {
        data = props.es;
        descricao = project._allDescricaoLocales.find((project) => project.locale === "es")
    }
    if (useGlobalState("lang")[0] === "pt") {
        data = props.pt;
        descricao = project._allDescricaoLocales.find((project) => project.locale === "pt")
    }

    let fakePadding = {
        minHeight: '100px',
    }
    if (width >= 768) {
        fakePadding = {
            minHeight: '200px',
        }
    }

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };


    return (
        <div className="container">
            <div style={fakePadding}/> 
            <h1 className="text-center">{project.titulo}</h1>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="py-5"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {project.galeria.map((item) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }} key={item.id}>
                            <img src={item.url} alt="" style={{ maxHeight: '100%', maxWidth: '100%', width: 'auto' , objectFit: 'contain' }}/>
                        </div>
                    );
                })}
            </Carousel>

            <div className="d-flex justify-content-center">
                <a className="project-btn d-flex align-items-center mx-2" href={project.repositorio} target="_blank">
                    <img src='/assets/img/nav-icon4.svg' alt='github' className="px-2" />
                    {data.labelRepositorio}
                </a>
                <a className="project-btn d-flex align-items-center mx-2" href={project.linkPrincipal} target="_blank">
                    <img src='/assets/img/arrow2.svg' alt='try' className="px-2" style={{maxHeight: '50%'}} />
                    {data.labelAcessar}
                </a>
            </div>
            <div className="d-flex flex-wrap mt-5 mb-3">
                {project.habilidades.map((item) => {
                    return (
                        <div key={item.id} className="px-1">
                            <img src={item.badge} alt={item.nome} style={{ height:'25px', width: 'auto' }}/>
                        </div>
                    );
                })}
            </div>
            <div className="px-1 pb-5">
                <StructuredText data={descricao.value}/>
            </div>
        </div>  
    );
}