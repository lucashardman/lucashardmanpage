import { useEffect, useState } from 'react';
import { useGlobalState } from "../../../services/globalHandler";
import { useWindowSize } from 'react-use';
import styles from './styles.module.scss'

export function PaginaEmContrucaoBlock(props) {
    const [images, setImages] = useState([]);
    const { width } = useWindowSize();
    let data = props.pt;

    if (useGlobalState("lang")[0] === "en") {
    data = props.en;
    }
    if (useGlobalState("lang")[0] === "es") {
    data = props.es;
    }
    if (useGlobalState("lang")[0] === "pt") {
    data = props.pt;
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            let qty = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
            const randomBool = Math.random() < 0.5;
            let animation = 'slide-in-left 1s forwards, slide-out-right 1s forwards 2s';
            if (randomBool) {
                animation = 'slide-in-right 1s forwards, slide-out-left 1s forwards 2s'
            }

            const newImages = [];
            for (let i = 0; i < qty; i++) {
                newImages.push(
                    <img
                        key={i}
                        src="/assets/img/timburr.png"
                        alt="Timburr"
                        className='img-fluid'
                        style={{
                            maxWidth: '20%',
                            animation: animation
                        }}
                    />
                );
            }
            setImages(newImages);
        }, 4000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    let fakePadding = {
        minHeight: '100px',
    }
    if (width >= 768) {
        fakePadding = {
            minHeight: '200px',
        }
    }
    

    return (
        <div className={`${styles.paginaEmConstrucaoAnimacao} container`}>
            <div style={fakePadding}/>
            <h1 className="text-left">{data.title}</h1>
            <p className="text-left">{data.message}</p>
            <div className="row py-5">
                <div className="text-center animate__animated animate__shakeY animate__infinite">
                    {images}
                </div>
            </div>
        </div>
    );
}