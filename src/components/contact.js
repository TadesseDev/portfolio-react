import React, { useState } from "react";
import { sendPost } from "../api/root";
import PrimaryTitle from "./partials/primaryTitle";
import user_contact from "../icon/user_contact.svg";
import email from "../icon/email.svg";
import phone from "../icon/phone.svg";
import SubmitButton from "./partials/flyButton";
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
    console.log(e);
    console.log(JSON.stringify(formData));
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
    <ContactContainer id="contact">
      <PrimaryTitle text="Contact me" style={{ color: "var(--primary)" }} />
      <form action="" onSubmit={submitMessage}>
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
      </form>
    </ContactContainer>
  );
}
