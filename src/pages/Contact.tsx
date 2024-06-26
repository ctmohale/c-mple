import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import Nav from "../components/Nav";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowRightSquareFill,
  BsMicrosoft,
} from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";
import Footer from "../components/Footer";
import { Fade, Zoom } from "react-awesome-reveal";
import GoogleMaps from "../components/GoogleMaps";

const Contact: React.FC = () => {
  const videoRef: any = React.useRef(null);

  // Function to set the playback rate when the video is loaded
  const handleVideoLoaded = () => {
    if (videoRef.current) {
      // Set the playback rate to make the video play slower (e.g., 0.5 for half speed)
      videoRef.current.playbackRate = 0.7; // Adjust the value as needed
    }
  };
  return (
    <IonContent fullscreen>
      <div className="main_v_bg_more">
        <video
          autoPlay
          loop
          muted
          ref={videoRef}
          onLoadedData={handleVideoLoaded}
        >
          {/* Provide the video source URL */}
          <source src="./network_-_12716 (1440p).mp4" type="video/mp4" />
        </video>
      </div>
      <Nav />
      <div className="overlay_more"></div>
      <div className="content_more"></div>
      <section className="sub-sub-main">
        <Fade delay={200}>
          <IonTitle class="main_title" color="success">
            <h1 className="main_title_sub text-secondary">
              <b>Get Touch With Us</b>
            </h1>
          </IonTitle>
        </Fade>

        <div className="row" id="contact_row">
          <div className="col-sm-6">
            <div className="card" id="contact_a">
              <div className="card-body text-secondary">
                <Fade delay={250}>
                  <h2
                    className="card-title p-4 text-secondary"
                    id="contact_card_title"
                  >
                    <span className="text-success"></span>
                    Email Form
                  </h2>
                </Fade>

                <IonItem>
                  <IonInput
                    label="Name"
                    className="input_f"
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonInput
                    className="input_f"
                    label="Cell Phone Number"
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonInput
                    className="input_f"
                    label="Subject"
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput
                    className="input_f"
                    label="Email"
                    labelPlacement="floating"
                    placeholder="Enter text"
                  ></IonInput>
                </IonItem>

                <IonButton className="contact-btn text-light" fill="clear">
                  <b>Send Mail</b>
                </IonButton>
              </div>
            </div>
          </div>

          <div className="col-sm-6 m-0 p-0">
            <div className="card m-0 p-0" id="contact_b">
              <Zoom delay={250}>
                <GoogleMaps />
              </Zoom>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </IonContent>
  );
};

export default Contact;
