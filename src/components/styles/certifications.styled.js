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
    max-width: 700px;
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
  @media (min-width: 768px) {
    #certificate-pagination {
      margin-left: 50%;
    transform: translateX(-50%);
    }
    #goto-certificate {
      margin: auto;
      * {
        font-size: 1.5rem;
      }
    }
  }
  @media (min-width: 1024px) {
    .certification-description {
      border-bottom: none;
      .more,
      .less {
        display: none;
      }
      p {
        max-height: max-content;
      }
    }
  }
`;
export const Certification = styled.div`
  img {
    max-width: min(100%, 700px);
  }
`;
