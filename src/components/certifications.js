import React, { useState, useContext } from "react";
import CommonFunctionContext from "../context/commonFunctionsContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
  const { showMoreContent, showLessContent } = useContext(
    CommonFunctionContext
  );
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
  const switchTo = (target) => {
    let swt = 0;
    if (target === "first") {
      setNumbers([0, 1, 2]);
      setFirstHalf(true);
      setActive(0);
    } else {
      setNumbers([
        certifications.length - 1,
        certifications.length,
        certifications.length + 1,
      ]);
      setFirstHalf(false);
      setActive(certifications.length - 1);
      swt = certifications.length - 1;
    }
    document.getElementById(`certificate_${active}`).classList.toggle("hide");
    document.getElementById(`certificate_${swt}`).classList.toggle("hide");
  };
  useEffect(() => {
    dispatch(getCertifications());
  }, [dispatch]);

  useEffect(() => {
    document.getElementById(`certificate_${0}`)?.classList.toggle("hide");
  }, [certifications]);
  return (
    <CertificationsContainer id="certifications">
      <PrimaryTitle icon="" text={"Certifications"} />{" "}
      {certifications.map(
        (
          { id, title = "", description = "", link = "", image = "" },
          index
        ) => (
          <Certification key={id} className="hide" id={"certificate_" + index}>
            <SubTitle text={title} />
            <div>
              <div className="certification-description">
                <p className="text-container">{description}</p>
                <Direction
                  icon="more"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    border: "2px solid var(--shine)",
                  }}
                  toggle={(e) =>
                    showMoreContent(e, e.target.parentNode.parentNode)
                  }
                  className="more"
                />
                <Direction
                  icon="less"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    border: "2px solid var(--shine)",
                    display: "none",
                  }}
                  toggle={(e) =>
                    showLessContent(e, e.target.parentNode.parentNode, 40)
                  }
                  className="less"
                />
              </div>

              <div>
                {
                  <LazyLoadImage
                    effect="blur"
                    src={image}
                    alt={title /* TODO: make this lazy load */}
                    min-height="250px"
                  />
                }
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
              <button
                type="button"
                className="link-button"
                onClick={() => switchTo("first")}
              >
                first
              </button>
              ...
            </span>
          )}
          {numbers.map((number, index) => (
            <span
              key={index}
              style={
                index === 1
                  ? { color: "var(--bright)" }
                  : { color: "var(--shine)" }
              }
            >
              {number}
            </span>
          ))}
          {firstHalf && (
            <span>
              ...
              <button
                type="button"
                className="link-button"
                onClick={() => switchTo("last")}
              >
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
