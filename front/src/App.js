import React, { useEffect, useState } from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import "./App.css";
import { DarkTheme, GlobalStyles, LightTheme } from "./styles/Global";
import Navbar from "./components/Section/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/StaticPages/Home";
import About from "./pages/StaticPages/About";
import Contact from "./pages/StaticPages/Contact";
import GetEstimate from "./pages/StaticPages/GetEstimate";
import Partner from "./pages/StaticPages/Partner";
import Download from "./pages/StaticPages/Download";
import Services from "./pages/StaticPages/Services";
import EstimateStep1 from "./components/Section/EstimateStep1";
import Radio from "./components/Items/Radio";
import Pagination from "./components/Items/Pagination";
import Popover from "./components/Utility/Popover";
import Grid from "./components/DataLayout/Grid";
import Map from "./components/DataLayout/Map";
import Hero from "./components/Section/Hero";
import Coordinates from "./pages/StaticPages/Coordinates";

import axios from "axios";
import SafeArea from "./components/Section/SafeArea";
import Obtenez from "./components/Items/buttonobtenez";
import Buttondetails from "./components/Items/buttondetails";
import Call from "./components/Items/Call";
import Access from "./pages/StaticPages/404";
import LoginCard from "./components/Items/LoginCard";
// import Sindentifier from "./components/Items/Sindentifier";
import StepperLayout from "./components/Navigation/Stepper";
import Step1 from "./pages/DashClient/AddCommand/Step1";
import Footer from "./components/Section/Footer";
import SidentifierAgent from "./pages/Authentification/SidentifierAgent";
import SecondNav from "./components/Navigation/SecondNav";
import NotFound from "./pages/StaticPages/404";
import Modale from "./components/Items/Modale";
import Sinsecrire from "./pages/Authentification/Sinsecrire";
import SindentifierAgent from "./pages/Authentification/SidentifierAgent";
import Test from "./components/DataLayout/Test";
import Profile from "./pages/DashClient/Profile/Profile";
import Sindentifier from "./pages/Authentification/Sindentifier";
import SinsecrireAgent from "./pages/Authentification/SinsecrireAgent";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  console.log(pathname);
  return null;
}
function App() {
  const { pathname } = useLocation();
  const [navigationValues, setNavigationValues] = useState({
    navbar: {
      menu: {
        links: [
          { to: "/", label: "HOME" },
          { to: "about", label: "A PROPOS DE NOUS" },
          { to: "services", label: "SERVICES" },
          { to: "contact", label: "CONTACT" },
          { to: "estimation", label: "ESTIMATION" },
          { to: "Sidentifierpartenaire", label: "DEVENIR UN PARTENAIRE" },
        ],
      },
    },
  });

  {
    /*useEffect(() => {
    axios
      .get("http://localhost:1337/api/nav-bar?locale=fr&populate=deep")
      .then((response) => {
        setNavigationValues(response.data.data.attributes);
      });
  }, []); */
  }

  const [theme, toggleTheme] = useState("light");

  const [activePage, setActivePage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    const newUrl = `${window.location.pathname}?page=${pageNumber}`;
    window.history.pushState({}, "", newUrl);
  };

  const location = useLocation();
  const pageNumber = new URLSearchParams(location.search).get("page");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <GlobalStyles />

        {pathname.includes("identifier") ||
        pathname.includes("insecrir") ? null : (
          <>
            <Navbar navigationValues={navigationValues} />
          </>
        )}

        <SafeArea
          padTop={
            !pathname.includes("identifier") && !pathname.includes("insecrir")
          }
        >
          <ScrollToTop />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/estimation" element={<GetEstimate />} />
            <Route path="/services" element={<Services />} />
            <Route path="/LoginCard" element={<LoginCard />} />
            <Route path="/Sidentifierpartenaire" element={<Partner />} />
            <Route path="/SidentifierAgent" element={<SidentifierAgent />} />
            <Route path="/SinsecrireClient" element={<Sinsecrire />} />
            <Route path="/SidentifierClient" element={<Sindentifier />} />
            <Route path="/SinsecrireAgent" element={<SinsecrireAgent />} />
            {/* Client Profile */}
            <Route path="/ClientProfile" element={<Profile />}>
              <Route path="/ClientProfile/Details" element={<NotFound />} />
              <Route path="/ClientProfile/motdepasse" element={<Contact />} />
              <Route path="/ClientProfile/paiement" element={<About />} />
            </Route>

            <Route path="/test" element={<Test />}></Route>
            {/*  Place where Test new Components  */}
          </Routes>

          {/* <Footer />  */}
        </SafeArea>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
