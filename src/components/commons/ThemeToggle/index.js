
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { setGlobalState, useGlobalState } from '../../../services/globalHandler';
import Form from 'react-bootstrap/Form';


export function ThemeToggle() {
    // const [currentLang, setCurrentLang] = useState('en');
    // const [hideEnglish, setHideEnglish] = useState(false);
    // const [hidePortuguese, setHidePortuguese] = useState(true);
    // const [hideSpanish, setHideSpanish] = useState(true);

    // const showLangButton = (e) => {
    //     setHideEnglish(false);
    //     setHidePortuguese(false);
    //     setHideSpanish(false);
    // }

    // const hideLangButton = (e) => {
    //     if (currentLang === 'en') {
    //         setHideEnglish(false);
    //         setHidePortuguese(true);
    //         setHideSpanish(true);
    //     } else if (currentLang === 'pt') {
    //         setHideEnglish(true);
    //         setHidePortuguese(false);
    //         setHideSpanish(true);
    //     } else if (currentLang === 'es') {
    //         setHideEnglish(true);
    //         setHidePortuguese(true);
    //         setHideSpanish(false);
    //     }
    // }

    // const updateLang = (e) => {
    //     setGlobalState('lang', e);
    //     setCurrentLang(e);
    // }
    return (
        <div className='dark-mode-toggle'>
            <Form>
            <Form.Check 
                type="switch"
                id="custom-switch"
                // label="Dark/Light Mode"
                // className='col'
            />
            </Form>
        </div>
    )
};
    