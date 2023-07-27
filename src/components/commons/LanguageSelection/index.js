import Button from 'react-bootstrap/Button';
import { useGlobalState } from '../../../services/globalHandler';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from './styles.module.scss'

export function LanguageSeletion(props) {
    const [lang, setLang] = useGlobalState('lang');
    const [isLangPtHidden, setIsLangPtHidden] = useGlobalState('isLangPtHidden');
    const [isLangEnHidden, setIsLangEnHidden] = useGlobalState('isLangEnHidden');
    const [isLangEsHidden, setIsLangEsHidden] = useGlobalState('isLangEsHidden');

    const showLangButton = (e) => {
        setIsLangPtHidden(false);
        setIsLangEnHidden(false);
        setIsLangEsHidden(false);
    }

    const hideLangButtonOnHover = (e) => {
        if (lang === 'pt') {
            setIsLangPtHidden(false);
            setIsLangEnHidden(true);
            setIsLangEsHidden(true);
        }
        if (lang === 'en') {
            setIsLangPtHidden(true);
            setIsLangEnHidden(false);
            setIsLangEsHidden(true);
        }  
        if (lang === 'es') {
            setIsLangPtHidden(true);
            setIsLangEnHidden(true);
            setIsLangEsHidden(false);
        }
    }

    const hideLangButtonOnClick = (e) => {
        if (e === 'pt') {
            setIsLangPtHidden(false);
            setIsLangEnHidden(true);
            setIsLangEsHidden(true);
        }
        if (e === 'en') {
            setIsLangPtHidden(true);
            setIsLangEnHidden(false);
            setIsLangEsHidden(true);
        }  
        if (e === 'es') {
            setIsLangPtHidden(true);
            setIsLangEnHidden(true);
            setIsLangEsHidden(false);
        }
    }

    const updateLang = (e) => {
        setLang(e);
        if (e === 'pt') {
            setIsLangEnHidden(false);
            setIsLangPtHidden(true);
            setIsLangEsHidden(false);
        }
        if (e === 'en') {
            setIsLangEnHidden(false);
            setIsLangPtHidden(true);
            setIsLangEsHidden(true);
        }
        if (e === 'es') {
            setIsLangEnHidden(false);
            setIsLangPtHidden(false);
            setIsLangEsHidden(true);
        }
    }

    if (props.isFooter === true) {
        return (
            <div>
                <div onMouseLeave={() => hideLangButtonOnHover()}>
                    <Button variant='transparent' className={`fi fi-us ${styles.navbarLangSelector}`} onClick={() => {updateLang('en'); hideLangButtonOnClick('en')}} hidden={false}/>
                    <Button variant='transparent' className={`fi fi-br ${styles.navbarLangSelector}`} onClick={() => {updateLang('pt'); hideLangButtonOnClick('pt')}} hidden={false}/>
                    <Button variant='transparent' className={`fi fi-es ${styles.navbarLangSelector}`} onClick={() => {updateLang('es'); hideLangButtonOnClick('es')}} hidden={false}/>
                </div>
            </div> 
        )
    } else {
        return (
            <div>
                <div  className='d-none d-lg-block' onMouseEnter={() => showLangButton()} onMouseLeave={() => hideLangButtonOnHover()} >
                    <Button variant='transparent' className={`fi fi-us ${styles.navbarLangSelector}`} onClick={() => {updateLang('en'); hideLangButtonOnClick('en')}}  hidden={isLangEnHidden === false ? false : true}/>
                    <Button variant='transparent' className={`fi fi-br ${styles.navbarLangSelector}`} onClick={() => {updateLang('pt'); hideLangButtonOnClick('pt')}}  hidden={isLangPtHidden === false ? false : true}/>
                    <Button variant='transparent' className={`fi fi-es ${styles.navbarLangSelector}`} onClick={() => {updateLang('es'); hideLangButtonOnClick('es')}}  hidden={isLangEsHidden === false ? false : true}/>
                </div>
            </div> 
        )
    }
};
    