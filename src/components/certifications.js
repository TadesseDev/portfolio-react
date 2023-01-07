import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CertificationsContainer,
  Certification,
} from "./styles/certifications.styled";
import PrimaryTitle from "./partials/primaryTitle";
import SubTitle from "./partials/subTitle";
import { getCertifications } from "../redux/components/certifications";
import { useEffect } from "react";
import Direction from "./partials/direction.js";
export default function Certifications() {
  let [active, setActive] = useState(0);
  let [firstHalf, setFirstHalf] = useState(true);
  let [numbers, setNumbers] = useState([0, 1, 2]);
  const dispatch = useDispatch();
  const certifications = useSelector((state) => state.certifications);

  const nextCertificate = () => {
    if (active > certifications.length - 1) return;
    setActive(++active);
    setNumbers((old) => old.map((num) => ++num));
    setFirstHalf(active < certifications.length / 2);
    document.getElementById(`certificate_${active--}`).classList.toggle("hide");
    document.getElementById(`certificate_${active}`).classList.toggle("hide");
  };
  const previousCertificate = () => {
    if (active <= 0) return;
    setActive(--active);
    setNumbers((old) => old.map((num) => --num));
    setFirstHalf(active < certifications.length / 2);
    document.getElementById(`certificate_${active++}`).classList.toggle("hide");
    document.getElementById(`certificate_${active}`).classList.toggle("hide");
  };

  useEffect(() => {
    dispatch(getCertifications());
  }, [dispatch]);

  useEffect(() => {
    document.getElementById(`certificate_${0}`)?.classList.toggle("hide");
  }, [certifications]);
  return (
    <CertificationsContainer>
      <PrimaryTitle icon="" text={"Certifications"} />
      {certifications.map(
        (
          { id, title = "", description = "", link = "", image = "" },
          index
        ) => (
          <Certification key={id} className="hide" id={"certificate_" + index}>
            <SubTitle text={title} />
            <div>
              <p>
                {description.slice(0, 100)}
                <button type="button" className="link-button">
                  ...continue reading{" "}
                </button>
              </p>
              <div>
                <img src={image} alt={title /* TODO: make this lazy load */} />
              </div>
            </div>
          </Certification>
        )
      )}
      <div id="certificate-pagination">
        <span
          id="previous-certificate"
          onClick={previousCertificate}
          className={active > 0 ? "" : "hide"}
        >
          <Direction
            icon="show"
            style={{
              boxShadow: "rgb(10 8 8 / 48%) 0px 0px 6px",
            }}
          />
        </span>
        <span id="goto-certificate">
          {!firstHalf && (
            <span>
              <button type="button" className="link-button">
                first
              </button>
              ...
            </span>
          )}
          {numbers.map((number, index) => (
            <span key={index}>{number}</span>
          ))}
          {firstHalf && (
            <span>
              ...
              <button type="button" className="link-button">
                last
              </button>
            </span>
          )}
        </span>
        <span
          id="next-certificate"
          onClick={nextCertificate}
          className={active < certifications.length - 1 ? "" : "hide"}
        >
          <Direction
            icon="hide"
            style={{
              boxShadow: "rgb(10 8 8 / 48%) 0px 0px 6px",
            }}
          />
        </span>
      </div>
    </CertificationsContainer>
  );
}
