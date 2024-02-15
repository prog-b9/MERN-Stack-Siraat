// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).use(Backend).init({
  // lng: "en", // Default language
  // debug: true,
  fallbackLng: "en",
  returnObjects: true,
});

export default i18n;
