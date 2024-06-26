import { IonButton } from "@ionic/react";
import { Fade, Zoom } from "react-awesome-reveal";
import { HiPhoneArrowDownLeft } from "react-icons/hi2";
import { MdEmail, MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <section className="sub-main-footer">
      <div className="row">
        <div className="col-sm-2">
          <div className="card-body text-secondary p-5">
            <div className="icon_color text-success"></div>
            <h3 className="foot-img pt-4 text-light text-center">
              <Zoom delay={200}>
                <img
                  className="footer_logo"
                  src="../Icon/sub_logo.png"
                  width="150"
                />
              </Zoom>
            </h3>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card-body text-secondary p-5">
            <div className="icon_color text-success"></div>
            <Fade delay={250}>
              <h3 className="card-title pt-4 text-light">Website links</h3>
              <div>
                <IonButton
                  disabled
                  style={{ textTransform: "capitalize" }}
                  className="m-0 p-0 text-light"
                  shape="round"
                  fill="clear"
                  routerLink="/contact"
                >
                  Website
                </IonButton>
                <br />
                <IonButton
                  style={{ textTransform: "capitalize" }}
                  className="m-0 p-0 text-light"
                  shape="round"
                  fill="clear"
                  routerLink="/"
                >
                  Home
                </IonButton>
                <br />
                <IonButton
                  style={{ textTransform: "capitalize" }}
                  className="m-0 p-0 text-light"
                  shape="round"
                  routerLink="/about"
                  fill="clear"
                >
                  About-Us
                </IonButton>
                <br />
                <IonButton
                  style={{ textTransform: "capitalize" }}
                  className="m-0 p-0 text-light"
                  shape="round"
                  fill="clear"
                  routerLink="/services"
                >
                  Services
                </IonButton>
                <br />
                <IonButton
                  style={{ textTransform: "capitalize" }}
                  className="m-0 p-0 text-light"
                  shape="round"
                  fill="clear"
                  routerLink="/contact"
                >
                  Contact-us
                </IonButton>
              </div>
            </Fade>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card-body text-secondary p-5">
            <div className="icon_color text-success">
              <Fade delay={300}>
                <h3 className="card-title pt-4 text-light">Contact</h3>

                <IonButton
                  disabled
                  style={{ textTransform: "capitalize" }}
                  className="m-0 p-0 text-light"
                  shape="round"
                  fill="clear"
                  routerLink="/contact"
                >
                  Cell No
                </IonButton>
                <br />
                <IonButton
                  style={{ textTransform: "capitalize" }}
                  className="m-0 p-0 text-light"
                  shape="round"
                  fill="clear"
                  routerLink="/contact"
                >
                  <HiPhoneArrowDownLeft size={20} />
                  +27743642496
                </IonButton>
                <br />
                <IonButton
                  style={{ textTransform: "capitalize" }}
                  className="m-0 p-0 text-light"
                  shape="round"
                  fill="clear"
                  routerLink="/contact"
                >
                  <HiPhoneArrowDownLeft size={20} />
                  +27743642496
                </IonButton>
                <br />
                <IonButton
                  disabled
                  style={{ textTransform: "capitalize" }}
                  className="m-0 p-0 text-light"
                  shape="round"
                  fill="clear"
                  routerLink="/contact"
                >
                  Emails
                </IonButton>
                <br />
                <IonButton
                  style={{ textTransform: "capitalize" }}
                  className="m-0 p-0 text-light"
                  shape="round"
                  fill="clear"
                  routerLink="/contact"
                >
                  <MdEmail size={20} /> Cple@info.com
                </IonButton>
                <br />
                <IonButton
                  style={{ textTransform: "capitalize" }}
                  className="m-0 p-0 text-light"
                  shape="round"
                  fill="clear"
                  routerLink="/contact"
                >
                  <MdEmail size={20} /> clpe@customercare.com
                </IonButton>
                <br />
              </Fade>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card-body text-secondary p-5">
            <div className="icon_color text-success"></div>
            <Fade delay={350}>
              <h3 className="card-title pt-4 text-light ">Address</h3>
              <br />
              <div className="text-light">
                303 Alexandra Ave, <br /> Halfway Gardens, <br /> Midrand,{" "}
                <br /> 1685
              </div>
              <br />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
