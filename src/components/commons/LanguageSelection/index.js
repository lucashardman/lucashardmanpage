
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { setGlobalState, useGlobalState } from '../../../services/globalHandler';


export function LanguageSeletion() {
    const [currentLang, setCurrentLang] = useState('en');
    const [hideEnglish, setHideEnglish] = useState(false);
    const [hidePortuguese, setHidePortuguese] = useState(true);
    const [hideSpanish, setHideSpanish] = useState(true);

    const showLangButton = (e) => {
        setHideEnglish(false);
        setHidePortuguese(false);
        setHideSpanish(false);
    }

    const hideLangButton = (e) => {
        if (currentLang === 'en') {
            setHideEnglish(false);
            setHidePortuguese(true);
            setHideSpanish(true);
        } else if (currentLang === 'pt') {
            setHideEnglish(true);
            setHidePortuguese(false);
            setHideSpanish(true);
        } else if (currentLang === 'es') {
            setHideEnglish(true);
            setHidePortuguese(true);
            setHideSpanish(false);
        }
    }

    const updateLang = (e) => {
        setGlobalState('lang', e);
        setCurrentLang(e);
    }
    return (
        <div>
            <ButtonGroup  className='navbar-lang-selector' onMouseEnter={() => showLangButton()} onMouseLeave={() => hideLangButton()}>
              <Button variant='transparent' className='navbar-lang-selector' onClick={() => updateLang('en')} hidden={hideEnglish}>🇺🇸</Button>
              <Button variant='transparent' className='navbar-lang-selector' onClick={() => updateLang('pt')} hidden={hidePortuguese}>🇧🇷</Button>
              <Button variant='transparent' className='navbar-lang-selector' onClick={() => updateLang('es')} hidden={hideSpanish}>🇪🇸</Button>
            </ButtonGroup>
        </div>  
    )
};
    