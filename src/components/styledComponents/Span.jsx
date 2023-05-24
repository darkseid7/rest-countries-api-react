import styled from "styled-components";

export const StyledSpanInfo = styled.span`
  font-family: "Nunito Sans";
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const StyledSpanValue = styled.span`
  font-family: "Nunito Sans";
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
`;
