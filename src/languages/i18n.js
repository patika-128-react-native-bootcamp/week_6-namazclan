import i18next from "i18next";

import translationTR from './tr/translation.json';
import translationEN from './en/translation.json';
import { initReactI18next } from "react-i18next";



i18next.use(initReactI18next).init({
    compatibilityJSON:'v3',
    lng:'tr',
    resources:{
        en:translationEN,
        tr:translationTR
    },
    react:{
        useSuspense:false
    }
})

export default i18next;