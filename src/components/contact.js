import React from "react";
import PrimaryTitle from "./partials/primaryTitle";
import user_contact from "../icon/user_contact.svg"
import email from "../icon/email.svg"
import phone from "../icon/phone.svg";
import SubmitButton from "./partials/flyButton"
import ContactContainer, {
  InputField,
  TextField,
} from "./styles/contact.styled";
export default function contact() {
  return (
    <ContactContainer>
      <PrimaryTitle text="Contact me" style={{color: "var(--primary)"}} />
      <form action="">
        <InputField icon={user_contact}>
          <img className="icon" src={user_contact} alt="User Name" />
          <input
            type="text"
            name="user-name"
            id="user-name"
            placeholder="Full Name..."
          />
        </InputField>
        <InputField icon={email}>
          <img className="icon" src={email} alt="User Email" />
          <span icon></span>
          <input
            type="email"
            name="user-email"
            id="user-email"
            placeholder="Email..."
          />
        </InputField>
        <InputField icon={phone}>
          <img className="icon" src={phone} alt="Phone number" />
          <input
            type="number"
            name="phone-number"
            id="phone-number"
            placeholder="Phone number..."
          />
        </InputField>
        <TextField>
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Your thought..."
          ></textarea>
        </TextField>
        <button type="submit">
          <SubmitButton text="Send" />
        </button>
      </form>
    </ContactContainer>
  );
}
