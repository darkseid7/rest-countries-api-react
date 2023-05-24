import styled from "styled-components";

import SwitchTheme from "./styledComponents/SwitchTheme";

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  margin-bottom: 48px;
  background-color: ${({ theme }) => theme.colors.secondColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);

  .header-wrapper {
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    padding: 1rem 80px;
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
    margin-bottom: 24px;
    .header-wrapper {
      padding: 1rem;
    }
  }

  @media only screen and (max-width: 425px) {
    .header-wrapper {
      padding: 0 16px;
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
          <SwitchTheme />
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
