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
    e.preventDefault();
    sendPost("messages", formData)
      .then((res) => {
        // TODO: Add a success message
        console.log(res);
      })
      .catch((err) => {
        //TODO: Add a failure message
        console.log(err);
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
    >
      <ContactContainer id="contact">
        <div className="top"></div>
        <Mirror
          style={{
            backgroundColor: "#ffffff1c",
            backdropFilter: "blur(5px)",
            border: "2px solid var(--bright)",
          }}
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
      </ContactContainer>
      <BackgroundDecoration
        style={{ top: "-5vw", left: "-20%", zIndex: "-3" }}
      />
        <BackgroundDecoration style={{ top: "60%", left: "60%", zIndex: "-3" }} />
    </InView>
  );
}
