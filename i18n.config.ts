import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/translations/en.json';
import ua from '@/translations/ua.json';


i18next.use(initReactI18next).init({
	resources: {
		en: { translation: en},
        ua: { translation: ua},
	},

	lng: 'en',
	fallbackLng: 'en',

	interpolation: {
		escapeValue: false,
	},
});

export default i18next;
