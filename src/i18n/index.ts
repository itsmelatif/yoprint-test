import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";
import id from "./lang/my.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    my: {
      translation: id,
    },
  },
  lng: "en",
  fallbackLng: "en",
  cleanCode: true,
  fallbackNS: "translation",
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});
