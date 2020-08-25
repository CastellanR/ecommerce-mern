import styled from "styled-components";

export const Nav = styled.nav`
  font-size: 1.45rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #243853;
  color: white;
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
    flex-grow: 0;
    margin-left: 1em;
  }
`;

export const Input = styled.input`
  width: 30em;
  height: 1.45em;
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
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 2em;
  flex-grow: 1;
`;
