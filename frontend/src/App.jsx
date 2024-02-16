import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NavbarHome from "./components/home/layout/NavbarHome";
import FooterHome from "./components/home/layout/FooterHome";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import ServicesViewPage from "./pages/services/ServicesViewPage";
import ContactUsPage from "./pages/contactUs/ContactUsPage";
import FormPage from "./pages/form/FormPage";
function App() {
  // for sceoll header
  const refAbout = useRef(null);
  const refWeMessage = useRef(null);
  const refFeatures = useRef(null);
  const refContactUs = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // routing
  const RouteWithElementGuest = [
    {
      path: "/",
      component: (
        <HomePage
          refs={[refAbout, refWeMessage, refFeatures, refContactUs]}
          scrollToSection={scrollToSection}
        />
      ),
    },
    {
      path: "/about",
      component: <AboutPage />,
    },
    {
      path: "/services",
      component: <ServicesPage />,
    },
    {
      path: "/services/view/:id",
      component: <ServicesViewPage />,
    },
    {
      path: "/form",
      component: <FormPage />,
    },
    {
      path: "/contact-us",
      component: <ContactUsPage />,
    },
  ];

  // const RouteWithElementUser = [
  //   // products
  //   {
  //     path: "/user/products",
  //     component: <ProductsIndexPage />,
  //   },
  //   {
  //     path: "/user/products/view",
  //     component: <ProductsViewPage />,
  //   },
  //   // ads
  //   {
  //     path: "/user/ads",
  //     component: <AdsIndexPage />,
  //   },
  //   {
  //     path: "/user/ads/view",
  //     component: <AdsViewPage />,
  //   },
  //   {
  //     path: "/user/ads/create",
  //     component: <AdsCreatePage />,
  //   },
  //   // favoraites
  //   {
  //     path: "/user/favoraites",
  //     component: <FavoraitesIndexPage />,
  //   },
  //   // order completed
  //   {
  //     path: "/user/products/OrderCompleted",
  //     component: <OrderCompletedPage />,
  //   },
  //   // orders
  //   {
  //     path: "/user/orders", // this is my orders
  //     component: <OrdersMyOrderPage />,
  //   },
  //   {
  //     path: "/user/orders/view", // this is my orders
  //     component: <OrdersMyOrderViewPage />,
  //   },
  //   {
  //     path: "/user/orders/usersOrders",
  //     component: <OrdersUsersOrderPage />,
  //   },
  //   {
  //     path: "/user/orders/usersOrders/view", // this is my orders
  //     component: <OrdersUsersOrderViewPage />,
  //   },
  //   // settings
  //   {
  //     path: "/user/settings",
  //     component: <SettingPage />,
  //   },
  //   {
  //     path: "/user/settings/profile",
  //     component: <SettingProfile />,
  //   },
  //   {
  //     path: "/user/settings/about",
  //     component: <SettingAbout />,
  //   },
  //   {
  //     path: "/user/settings/common-questions",
  //     component: <SettingCommonQuestions />,
  //   },
  //   {
  //     path: "/user/settings/contact",
  //     component: <SettingContact />,
  //   },
  //   {
  //     path: "/user/settings/privacy-policy",
  //     component: <SettingPrivacyPolicy />,
  //   },
  //   {
  //     path: "/user/settings/condition",
  //     component: <SettingCondition />,
  //   },
  //   {
  //     path: "/user/settings/profile",
  //     component: <SettingPage />,
  //   },
  //   {
  //     path: "/user/settings/ticket",
  //     component: <SettingTicket />,
  //   },
  //   {
  //     path: "/user/settings/calculator-and-bank-accounts",
  //     component: <SettingCalculatorAndBankAccounts />,
  //   },
  // ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {RouteWithElementGuest.map((item, i) => (
            <Route
              key={i}
              path={item.path}
              element={
                <>
                  <NavbarHome
                    refs={[refAbout, refWeMessage, refFeatures, refContactUs]}
                    scrollToSection={scrollToSection}
                  />
                  <div>{item.component}</div>
                  <FooterHome
                    refs={[refAbout, refWeMessage, refFeatures, refContactUs]}
                    scrollToSection={scrollToSection}
                  />
                </>
              }
            />
          ))}
          {/* {RouteWithElementUser.map((item, i) => (
            <Route
              key={i}
              path={item.path}
              element={
                <>
                  <div className="main-navbar"> </div>
                  <div className="main-navbar p-2 md:p-5">
                    {item.path.includes("/user/settings")
                      ? // <SettingPage itemComponent={item.component} />
                        null
                      : item.component}
                  </div>
                  <div className="main-sidebar hidden md:block"></div>
                </>
              }
            />
          ))} */}

          {/* <Route path="*" element={<CustomPage404 />} /> */}
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
