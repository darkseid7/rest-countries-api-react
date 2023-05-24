import { useContext } from "react";
import styled from "styled-components";

import ThemeContext from "../../context/ThemeContext";

const StyledSwitch = styled.div`
  span {
    font-size: 14px;
    font-family: "Nunito Sans";

    color: ${({ theme }) => theme.colors.fontColor};
    padding: 0 0.5rem;
  }
  .switch {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 26px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.bgColor};
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 3px;
    background-color: ${({ theme }) => theme.colors.switchColor};
    transition: 0.4s;
  }

  .slider:checked {
    background-color: ${({ theme }) => theme.colors.switchColor};
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.colors.bgColor};
  }

  input:checked + .slider:before {
    transform: translateX(22px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const SwitchThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <StyledSwitch>
        <span>Light</span>
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <span>Dark</span>
      </StyledSwitch>
    </>
  );
};

export default SwitchThemeButton;
