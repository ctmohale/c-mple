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
import React, { useEffect, useRef } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowRightSquareFill,
  BsMicrosoft,
} from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { AiOutlineUser } from "react-icons/ai";
import { LuArrowRightCircle } from "react-icons/lu";
import Footer from "../components/Footer";
import { Fade, Zoom } from "react-awesome-reveal";
import GoogleMaps from "../components/GoogleMaps";

const Home: React.FC = () => {
  const videoRef: any = React.useRef(null);

  // Function to set the playback rate when the video is loaded
  const handleVideoLoaded = () => {
    if (videoRef.current) {
      // Set the playback rate to make the video play slower (e.g., 0.5 for half speed)
      videoRef.current.playbackRate = 0.7; // Adjust the value as needed
    }
  };
  return (
    <IonContent className="cont" fullscreen>
      <div className="main_v_bg">
        <video
          autoPlay
          loop
          muted
          ref={videoRef}
          onLoadedData={handleVideoLoaded}
        >
          {/* Provide the video source URL */}
          <source src="./network_-_12716 (1440p).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Nav />
      <div className="overlay"></div>
      <div className="content">
        <br />
        <br />
        <br />
        <Zoom>
          <h1 className="main_title text-light">
            <b>
              WELCOME TO &#160;
              <img
                src="/Icon/sub_logo.png"
                className="rounded-circle"
                width="60"
              />
              <span className="text-light p-3">MPLE SOLUTIONS</span>
            </b>
          </h1>
        </Zoom>
        <Zoom delay={200}>
          <h3 className="text-light">Crafting Tomorrow’s Success!</h3>
        </Zoom>
        <Zoom delay={300}>
          <IonButton
            className="main_button_title btn-success rounded-pill"
            color={"success"}
            shape="round"
          >
            <BiSolidPhoneCall size="25" /> Connect With Us
          </IonButton>
        </Zoom>
      </div>

      {/*  */}
      <section className="sub-main">
        <Fade delay={200}>
          <IonTitle class="main_title" color="success">
            <h1 className="main_title_sub text-secondary">
              <b> Our services</b>
            </h1>
          </IonTitle>
        </Fade>

        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body text-secondary">
                <div className="p-4">
                  <Zoom delay={200}>
                    <div className="icon_color text-success">
                      <BsMicrosoft size="70" />
                    </div>
                  </Zoom>

                  <Fade delay={250}>
                    <h3 className="card-title pt-4">Software Development</h3>
                    <p className="card-text">
                      Leverage our expertise in developing bespoke software
                      solutions that align with your business goals. From
                      concept to deployment...
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
            <div className="card">
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
            <div className="card">
              <div className="card-body text-secondary">
                <div className="p-4">
                  <Zoom delay={400}>
                    <div className="icon_color text-success">
                      <BsMicrosoft size="70" />
                    </div>
                  </Zoom>
                  <Fade delay={450}>
                    <h3 className="card-title pt-4 text-secondary">
                      Consulting and Strategy
                    </h3>
                    <p className="card-text">
                      Gain a competitive edge with our strategic consulting
                      services. Our seasoned consultants work closely with you
                      to analyze ...
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

      {/*  */}
      <section className="sub-sub-main-about">
        <IonTitle class="main_title" color="success">
          <Fade delay={200}>
            <h1 className="card-title-about text-light">
              <b>About-Us</b>
            </h1>
          </Fade>
        </IonTitle>

        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body text-secondary p-5">
                <div className="icon_color text-success">
                  <Zoom delay={300}>
                    <img
                      className="sub-sub-logo animate__animated"
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
                <div className="main-about-section">
                  <Fade delay={350}>
                    <h2 className="card-title">
                      Crafting Tomorrow’s Success Through Innovation and
                      Collaboration
                    </h2>
                  </Fade>

                  <br />
                  <Fade delay={360}>
                    <p className="card-text">
                      C-Mple is more than a software consulting company; we are
                      architects of digital transformation, committed to shaping
                      the future of businesses through strategic innovation and
                      technological excellence. Our story begins with a
                      collective passion for solving complex problems and a
                      shared vision of empowering organizations to thrive in the
                      ever-evolving digital landscape. <br />
                      <br /> Our Journey: Founded, C-Mple embarked on a journey
                      to redefine how businesses leverage technology. From our
                      humble beginnings to becoming a trusted name in software
                      consulting, our journey has been marked by continuous
                      learning, adaptability, and a relentless pursuit of
                      excellence.
                    </p>
                  </Fade>
                </div>
                <Fade>
                  <IonButton
                    className="btn_link text-light p-2"
                    shape="round"
                    fill="clear"
                  >
                    <BsFillArrowRightCircleFill size="25" /> &#160; Learn More
                  </IonButton>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="sub-main">
        <Fade delay={200}>
          <IonTitle class="main_title" color="success">
            <h1 className="main_title_sub text-secondary">
              <b> Our Partners</b>
            </h1>
          </IonTitle>
        </Fade>

        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body text-secondary p-5  text-center">
                <Zoom delay={200}>
                  <img
                    style={{ borderRadius: "20px" }}
                    src="/partner/WhatsApp Image 2023-09-27 at 11.37.50.jpeg"
                    width="100%"
                  />
                </Zoom>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body text-secondary p-5  text-center">
                <Zoom delay={200}>
                  <img
                    style={{ borderRadius: "20px" }}
                    src="/partner/WhatsApp Image 2023-09-27 at 11.37.50.jpeg"
                    width="100%"
                  />
                </Zoom>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body text-secondary p-5  text-center">
                <Zoom delay={200}>
                  <img
                    style={{ borderRadius: "20px" }}
                    src="/partner/WhatsApp Image 2023-09-27 at 11.37.50.jpeg"
                    width="100%"
                  />
                </Zoom>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/*  */}
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

export default Home;
