import styled from "styled-components";

export const Nav = styled.nav`
  font-size: 1.45rem;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-color: #243853;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  .link {
    padding: 0.5em 0.5em;
    text-decoration: none !important;
    align-self: center;
    display: flex;
    align-items: center;
    .icon {
      color: white !important;
      vertical-align: baseline;
    }
    color: #fff;
  }
  .link:hover {
    border: 0.05em solid white;
  }
  .home {
    flex-grow: 0.5;
    justify-content: center;
    @media (max-width: 768px) {
      order: 1;
      flex-grow: 0.5;
    }
  }

  .auth {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .authMobile {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
  .icon {
    margin-left: 0.2em;
  }
  @media (max-width: 480px) {
    width: 40%;
    order: 3;
  }
  @media (max-width: 768px) {
    order: 3;
    width: 80%;
  }
  @media (min-width: 1024px) {
    flex-grow: 2;
  }
`;

export const Input = styled.input`
  width: 80%;
  height: 1.45em;
  @media (max-width: 576px) {
    height: 1em;
  }
  @media (max-width: 768px) {
    height: 1.35em;
  }
  @media (max-width: 1024px) {
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 1em;
  flex-grow: 1;
  @media (max-width: 768px) {
    order: 2;
  }
`;
