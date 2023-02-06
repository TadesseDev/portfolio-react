import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import { sendPost } from "../api/root";
import PrimaryTitle from "./partials/primaryTitle";
import user_contact from "../icon/user_contact.svg";
import email from "../icon/email.svg";
import phone from "../icon/phone.svg";
import SubmitButton from "./partials/flyButton";
import Mirror from "./partials/mirror";
import BackgroundDecoration from "./partials/backgroundDecoration";
import ContactContainer, {
  InputField,
  TextField,
} from "./styles/contact.styled";
export default function Contact() {
  const [formData, updateData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const updateFormData = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    updateData((old) => ({ ...old, [name]: val }));
  };
  const submitMessage = (e) => {
    const loaderContainer = document.querySelector("#submit-form");
    const loader = document.querySelector("#submit-form .loader");

    const loaderText = loaderContainer.querySelector("h2");
    loader.querySelectorAll("div").forEach((div) => {
      div.style.animationName = "loader";
    });
    loaderContainer.style.display = "flex";
    e.preventDefault();
    sendPost("messages", formData)
      .then(() => {
        loaderText.style.color = "green";
        loaderText.textContent = "I got it ✅";
        updateData({
          full_name: "",
          email: "",
          phone_number: "",
          message: "",
        });
      })
      .catch(() => {
        loaderText.style.color = "red";
        loaderText.textContent = "Something went wrong ❌";
      })
      .finally(() => {
        loader.querySelectorAll("div").forEach((div) => {
          div.style.animationName = "";
        });
        setTimeout(() => {
          loaderContainer.style.display = "none";
          loaderText.style.color = "var(--bright)";
          loaderText.textContent = "Submitting...";
        }, 2000);
        console.log("finally");
      });
  };
  return (
    <InView
      onChange={(inView, entry) => {
        inView
          ? (entry.target.firstChild.style.animationName = "fade-in-opacity")
          : (entry.target.firstChild.style.animationName = "");
      }}
      style={{ position: "relative", overflow: "visible" }}
      className="contact"
    >
      <ContactContainer id="contact">
        <div className="top"></div>
        <Mirror
          style={{
            backgroundColor: "#ffffff1c",
            backdropFilter: "blur(5px)",
          }}
          className="mirror"
        />
        <PrimaryTitle text="Contact me" style={{ color: "var(--primary)" }} />
        <form action="" onSubmit={submitMessage}>
          <div className="input-fields">
            <InputField>
              <img className="icon" src={user_contact} alt="User Name" />
              <input
                type="text"
                name="full_name"
                id="user-name"
                placeholder="Full Name..."
                required={true}
                value={formData["full_name"]}
                onChange={updateFormData}
              />
            </InputField>
            <InputField>
              <img className="icon" src={email} alt="User Email" />

              <input
                type="email"
                name="email"
                id="user-email"
                placeholder="Email..."
                required={true}
                value={formData["email"]}
                onChange={updateFormData}
              />
            </InputField>
            <InputField>
              <img className="icon" src={phone} alt="Phone number" />
              <input
                type="tel"
                name="phone_number"
                id="phone-number"
                placeholder="Phone number..."
                value={formData["phone_number"]}
                onChange={updateFormData}
              />
            </InputField>
          </div>
          <div className="message-fields">
            <TextField>
              <textarea
                name="message"
                id="message"
                rows="10"
                placeholder="Your thought..."
                required={true}
                value={formData["message"]}
                onChange={updateFormData}
              ></textarea>
            </TextField>

            <button
              type="submit"
              onClick={(e) => {
                e.target.parentElement.click();
              }}
            >
              <SubmitButton text="Send" preventDefault={true} />
            </button>
          </div>
        </form>
        <div className="bottom"></div>
        <div id="submit-form">
          <h2 className="status-text">Submitting...</h2>
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </ContactContainer>
      <BackgroundDecoration
        style={{ top: "-5vw", left: "-20%", zIndex: "-3" }}
      />
      <BackgroundDecoration style={{ top: "60%", left: "60%", zIndex: "-3" }} />
    </InView>
  );
}
