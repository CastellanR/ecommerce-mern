import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  background-color: #f1f1e6;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AuthSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    height: 100%;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;
