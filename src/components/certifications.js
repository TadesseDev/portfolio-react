import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CertificationsContainer,
  Certification,
} from "./styles/certifications.styled";
import PrimaryTitle from "./partials/primaryTitle";
import { getCertifications } from "../redux/components/certifications";
export default function Certifications() {
  const dispatch = useDispatch();
  dispatch(getCertifications());
  const certifications = useSelector((state) => state.certifications);
  return (
    <CertificationsContainer>
      <PrimaryTitle icon="" text={"Certifications"} />
      {certifications.map((certification) => (
        <Certification>{certification.title}</Certification>
      ))}
    </CertificationsContainer>
  );
}
