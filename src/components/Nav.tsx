import React from "react";
import "./style.css";
import { IonButton, IonTitle } from "@ionic/react";
import { HiPhoneArrowDownLeft } from "react-icons/hi2";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <IonButton
          routerLink="/"
          shape="round"
          className="btn_style"
          fill="clear"
        >
          <img
            className="logo_icon animate__animated animate__heartBeat animate__infinite"
            src="../Icon/sub_logo.png"
            width="50"
          />
          <IonTitle>MPLE SOLUTIONS</IonTitle>
        </IonButton>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <IonButton
                fill="clear"
                shape="round"
                href="/"
                className="btn_style"
              >
                Home
              </IonButton>
            </li>
            <li className="nav-item">
              <IonButton
                fill="clear"
                shape="round"
                href="/about"
                className="btn_style"
              >
                About-US
              </IonButton>
            </li>
            <li className="nav-item">
              <IonButton
                fill="clear"
                shape="round"
                href="/services"
                className="btn_style"
              >
                SERVICES
              </IonButton>
            </li>
            <li className="nav-item">
              <IonButton
                fill="clear"
                shape="round"
                href="/contact"
                className="btn_style"
              >
                CONTACT-US
              </IonButton>
            </li>
          </ul>
          <span className="navbar-text p-4">
            <IonButton
              fill="clear"
              className="btn_style text-light"
              shape="round"
            >
              <b>
                <HiPhoneArrowDownLeft size={20} />
                +27743642496
              </b>
            </IonButton>
            <IonButton
              fill="clear"
              className="btn_style text-light"
              shape="round"
            >
              <b>
                <HiPhoneArrowDownLeft size={20} />
                +27743642496
              </b>
            </IonButton>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
