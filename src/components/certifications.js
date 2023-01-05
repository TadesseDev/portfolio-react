import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CertificationsContainer,
  Certification,
} from "./styles/certifications.styled";
import { getCertifications } from "../redux/components/certifications";
export default function Certifications() {
  useDispatch()(getCertifications());
  const certifications = useSelector((state) => state.certifications);
  return (
    <CertificationsContainer>
      {certifications.map((certification) => ({}))}
    </CertificationsContainer>
  );
}
