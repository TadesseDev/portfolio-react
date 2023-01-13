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
      <PrimaryTitle text="Contact me" />
      <form action="">
        <InputField icon={user_contact}>
          <input type="text" name="user-name" id="user-name" />
        </InputField>
        <InputField icon={email}>
          <input type="email" name="user-email" id="user-email" />
        </InputField>
        <InputField icon={phone}>
          <input type="number" name="phone-number" id="phone-number" />
        </InputField>
        <TextField>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </TextField>
        <button type="submit">
          <SubmitButton text="Send" />
        </button>
      </form>
    </ContactContainer>
  );
}
