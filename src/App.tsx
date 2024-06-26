import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, flag, square, triangle } from "ionicons/icons";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { useEffect } from "react";

setupIonicReact();

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar style={{ display: "none" }}></IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
