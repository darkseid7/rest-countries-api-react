import styled from "styled-components";

export const StyledButton = styled.button`
  width: 136px;
  height: 40px;
  font-family: "Nunito Sans";
  background-color: ${({ theme }) => theme.colors.secondColor};
  color: ${({ theme }) => theme.colors.fontColor};
  border-radius: 6px;
  cursor: pointer;
`;
