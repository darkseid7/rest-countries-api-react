/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

import { StyledSpanInfo, StyledSpanValue } from "./styledComponents/Span";

const CardItem = styled.li`
  width: 265px;
  height: 336px;
  background-color: ${({ theme }) => theme.colors.secondColor};
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 4rem;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);

  img {
    width: 264px;
    height: 160px;
    object-fit: cover;
  }
  .country-info-container {
    padding: 1.5rem 1rem;
    .country-name {
      font-family: "Nunito Sans";
      color: ${({ theme }) => theme.colors.fontColor};
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 0.5rem;
    }
  }

  @media only screen and (max-width: 960px) {
  }
`;

const Card = ({ country }) => {
  const { tId, flags, name, population, region, capital } = country;
  const formattedPopulation = population.toLocaleString();
  return (
    <>
      <CardItem key={tId}>
        <Link to={`/home/${name.common}`}>
          <img src={flags.png} alt="" />
          <div className="country-info-container">
            <h2 className="country-name">{name.common}</h2>
            <div>
              <StyledSpanInfo>Population: </StyledSpanInfo>
              <StyledSpanValue>{formattedPopulation}</StyledSpanValue>
            </div>
            <div>
              <StyledSpanInfo>Region: </StyledSpanInfo>
              <StyledSpanValue>{region}</StyledSpanValue>
            </div>
            <div>
              <StyledSpanInfo>Capital: </StyledSpanInfo>
              <StyledSpanValue>{capital}</StyledSpanValue>
            </div>
          </div>
        </Link>
      </CardItem>
    </>
  );
};

export default Card;
