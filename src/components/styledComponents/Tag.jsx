import styled from "styled-components";

export const StyledTag = styled.span`
  height: 28px;
  padding: 0.3rem 1rem;
  margin: 4px;
  font-family: "Nunito Sans";
  font-size: 14px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.secondColor};
  color: ${({ theme }) => theme.colors.fontColor};
  border-radius: 2px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  cursor: pointer;
`;
