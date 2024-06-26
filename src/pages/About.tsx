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

const About: React.FC = () => {
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

      <section className="sub-sub-main-about">
        <Fade delay={200}>
          <IonTitle class="main_title" color="success">
            <h1 className="card-title-about text-light">
              <b>About-Us</b>
            </h1>
          </IonTitle>
        </Fade>

        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body text-secondary p-5">
                <div className="icon_color text-success">
                  <Zoom delay={250}>
                    <img
                      className="sub-sub-logo"
                      src="./Icon/sub_logo.png"
                      width="100%"
                    />
                  </Zoom>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="">
              <div className="card-body text-light">
                <Fade delay={300}>
                  <h2 className="">Special title treatment</h2>
                </Fade>
                <Fade delay={305}>
                  <p className="">
                    C-Mple is more than a software consulting company; we are
                    architects of digital transformation, committed to shaping
                    the future of businesses through strategic innovation and
                    technological excellence. Our story begins with a collective
                    passion for solving complex problems and a shared vision of
                    empowering organizations to thrive in the ever-evolving
                    digital landscape. <br />
                    <br /> C-Mple embarked on a journey to redefine how
                    businesses leverage technology. From our humble beginnings
                    to becoming a trusted name in software consulting, our
                    journey has been marked by continuous learning,
                    adaptability, and a relentless pursuit of excellence.
                    <br />
                    <br />
                    Our team is the heartbeat of C-Mple. Comprising diverse
                    talents and expertise, our professionals bring a blend of
                    creativity and technical prowess to every project. From
                    seasoned industry veterans to rising stars, we foster a
                    culture of collaboration, ensuring that each team member
                    contributes their unique skills to the collective success of
                    our clients.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="m-5">
        <hr className="boder-style-color" />
      </div>
      <Footer />
    </IonContent>
  );
};

export default About;
