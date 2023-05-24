import styled from "styled-components";

import SwitchThemeButton from "./styledComponents/switchThemeButton";

import ThemeContext from "../context/ThemeContext";
const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.secondColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);

  .header-wrapper {
    max-width: 1440px;
    margin: 0 auto;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-title {
    font-family: "Nunito Sans";
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: 24px;
    font-weight: 800;
  }

  button {
    color: ${({ theme }) => theme.colors.fontColor};
    cursor: pointer;
  }

  @media only screen and (max-width: 720px) {
    .header-wrapper {
      padding: 1rem;
    }
  }

  @media only screen and (max-width: 425px) {
    .header-wrapper {
      padding: 1.8rem 1rem;
    }
    .logo-title {
      font-size: 14px;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="header-wrapper">
          <h1 className="logo-title">Where in the world?</h1>

          {/* <button onClick={toggleTheme}>
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </button> */}
          <SwitchThemeButton />
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
