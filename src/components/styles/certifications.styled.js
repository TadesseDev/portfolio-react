import styled from "styled-components";

export const CertificationsContainer = styled.div`
  position: relative;
  margin-bottom: 80px;
  text-align: center;
  .certification-description {
    position: relative;
    padding: 0 10px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid var(--shine);
    p {
      max-height: 40px;
      overflow: hidden;
    }
  }
  #certificate-pagination {
    margin: 10px;
    display: flex;
    width: calc(100% - 20px);
    justify-content: space-between;
    gap: 2px;
    position: absolute;
    top: 100%;
    align-items: center;
    #goto-certificate {
      margin: auto;
      * {
        margin: 0 1vw;
      }
    }
  }
`;
export const Certification = styled.div`
  img {
    max-width: 100%;
  }
`;
