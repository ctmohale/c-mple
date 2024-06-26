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
import { LuArrowRightCircle } from "react-icons/lu";

const Services: React.FC = () => {
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

      {/*  */}
      <section className="sub-main">
        <IonTitle class="main_title" color="success">
          <h1 className="main_title_sub text-secondary">
            <b> Our services</b>
          </h1>
        </IonTitle>

        <div className="row">
          <div className="col-sm-4">
            <div className="card mt-3">
              <div className="card-body text-secondary">
                <div className="p-4">
                  <Zoom delay={300}>
                    <div className="icon_color text-success">
                      <BsMicrosoft size="70" />
                    </div>
                  </Zoom>
                  <Fade delay={350}>
                    <h3 className="card-title pt-4 text-secondary">
                      Digital Transformation
                    </h3>
                    <p className="card-text">
                      Navigate the complexities of digital transformation with
                      C-Mple. We help businesses evolve, integrating the latest
                      technologies...
                    </p>
                  </Fade>
                </div>
                <IonButton
                  className="text-secondary p-2"
                  shape="round"
                  fill="clear"
                >
                  <LuArrowRightCircle size="25" />
                  &#160; Read More
                </IonButton>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card mt-3">
              <div className="card-body text-secondary">
                <div className="p-4">
                  <Zoom delay={300}>
                    <div className="icon_color text-success">
                      <BsMicrosoft size="70" />
                    </div>
                  </Zoom>
                  <Fade delay={350}>
                    <h3 className="card-title pt-4 text-secondary">
                      Digital Transformation
                    </h3>
                    <p className="card-text">
                      Navigate the complexities of digital transformation with
                      C-Mple. We help businesses evolve, integrating the latest
                      technologies...
                    </p>
                  </Fade>
                </div>
                <IonButton
                  className="text-secondary p-2"
                  shape="round"
                  fill="clear"
                >
                  <LuArrowRightCircle size="25" />
                  &#160; Read More
                </IonButton>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card mt-3">
              <div className="card-body text-secondary">
                <div className="p-4">
                  <Zoom delay={300}>
                    <div className="icon_color text-success">
                      <BsMicrosoft size="70" />
                    </div>
                  </Zoom>
                  <Fade delay={350}>
                    <h3 className="card-title pt-4 text-secondary">
                      Digital Transformation
                    </h3>
                    <p className="card-text">
                      Navigate the complexities of digital transformation with
                      C-Mple. We help businesses evolve, integrating the latest
                      technologies...
                    </p>
                  </Fade>
                </div>
                <IonButton
                  className="text-secondary p-2"
                  shape="round"
                  fill="clear"
                >
                  <LuArrowRightCircle size="25" />
                  &#160; Read More
                </IonButton>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card mt-3">
              <div className="card-body text-secondary">
                <div className="p-4">
                  <Zoom delay={300}>
                    <div className="icon_color text-success">
                      <BsMicrosoft size="70" />
                    </div>
                  </Zoom>
                  <Fade delay={350}>
                    <h3 className="card-title pt-4 text-secondary">
                      Digital Transformation
                    </h3>
                    <p className="card-text">
                      Navigate the complexities of digital transformation with
                      C-Mple. We help businesses evolve, integrating the latest
                      technologies...
                    </p>
                  </Fade>
                </div>
                <IonButton
                  className="text-secondary p-2"
                  shape="round"
                  fill="clear"
                >
                  <LuArrowRightCircle size="25" />
                  &#160; Read More
                </IonButton>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="col-sm-4">
            <div className="card mt-3">
              <div className="card-body text-secondary">
                <div className="p-4">
                  <Zoom delay={300}>
                    <div className="icon_color text-success">
                      <BsMicrosoft size="70" />
                    </div>
                  </Zoom>
                  <Fade delay={350}>
                    <h3 className="card-title pt-4 text-secondary">
                      Digital Transformation
                    </h3>
                    <p className="card-text">
                      Navigate the complexities of digital transformation with
                      C-Mple. We help businesses evolve, integrating the latest
                      technologies...
                    </p>
                  </Fade>
                </div>
                <IonButton
                  className="text-secondary p-2"
                  shape="round"
                  fill="clear"
                >
                  <LuArrowRightCircle size="25" />
                  &#160; Read More
                </IonButton>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="col-sm-4">
            <div className="card mt-3">
              <div className="card-body text-secondary">
                <div className="p-4">
                  <Zoom delay={300}>
                    <div className="icon_color text-success">
                      <BsMicrosoft size="70" />
                    </div>
                  </Zoom>
                  <Fade delay={350}>
                    <h3 className="card-title pt-4 text-secondary">
                      Digital Transformation
                    </h3>
                    <p className="card-text">
                      Navigate the complexities of digital transformation with
                      C-Mple. We help businesses evolve, integrating the latest
                      technologies...
                    </p>
                  </Fade>
                </div>
                <IonButton
                  className="text-secondary p-2"
                  shape="round"
                  fill="clear"
                >
                  <LuArrowRightCircle size="25" />
                  &#160; Read More
                </IonButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </IonContent>
  );
};

export default Services;
