import React from "react";
import PrimaryTitle from "./partials/primaryTitle";
import SubTitle from "./partials/subTitle";
import AboutContainer from "./styles/about.styled";
export default function about() {
  return (
    <AboutContainer>
      <PrimaryTitle text="About" />
      <p>
        learning a language is not the the point, Understand the fundamental of
        <span className="bright"> CS </span>
        then you can master what ever language or framework there is to it.
        <br />
        <span className="bright">
          "it is a matter of reading and writhing a new syntax"
        </span>
        .
      </p>
      <p>
        Algorithm and Data Structure enthusiast. What interestl me the most is
        to deal with the <span className="bright">time</span> and{" "}
        <span className="bright">memory</span> efficiency. If you like to
        impress me optimize my code to a point it perform 1 microsecond better.
        <br />
        <span className="emoji">🙌</span>
      </p>
      <p>
        I love writhing clean code, As they say “
        <span className="bright">
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.
        </span>
        ” .<br />
        <span className="emoji">😊</span>
      </p>
      <SubTitle text="You can find me..."/>
    </AboutContainer>
  );
}
