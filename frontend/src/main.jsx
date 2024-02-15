import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
// import "./i18n"; // Import the i18n configuration
import { I18nextProvider } from "react-i18next";
import i18n from "./lang/i18n.js";
import { Suspense } from "react";
import { BounceLoader } from "react-spinners";
const customMaterialTailwind = {
  drawer: {
    styles: {
      base: {
        overlay: {
          position: "fixed",
        },
      },
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider value={customMaterialTailwind}>
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            <BounceLoader color="var(--primary-color)" />
          </div>
        }
      >
        <App />
      </Suspense>
    </ThemeProvider>
  </I18nextProvider>
);
