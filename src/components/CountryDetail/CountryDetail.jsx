import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { StyledTitle } from "../styledComponents/Title";
import { StyledSpanInfo, StyledSpanValue } from "../styledComponents/Span";
import { StyledButton } from "../styledComponents/Button";
import { MainContainer } from "../styledComponents/MainContainer";
import BorderCountries from "./BorderCountries";

const PageCountry = styled.section`
  padding: 80px 1.7rem 0 1.7rem;
  background-color: ${({ theme }) => theme.colors.bgColor};

  button {
    margin-bottom: 4rem;
  }

  .detail-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: start;

    img {
      width: 560px;
      height: 401px;
      border-radius: 10px;
      object-fit: cover;
    }

    .info-container {
      width: 50%;
      padding-top: 2rem;
      padding-left: 4rem;
      h2 {
        margin-bottom: 1rem;
      }
    }
    .info-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: start;
    }
  }

  @media only screen and (max-width: 1100px) {
    .detail-wrapper {
      display: grid;
      place-items: center;
      max-width: 560px;
      margin: 0 auto;

      img {
        width: 320px;
        height: 229px;
      }

      .info-container {
        width: 100%;
        padding-left: 0;
        padding-bottom: 2rem;
      }

      .info-wrapper {
        display: block;

        > div:first-child {
          padding-bottom: 2rem;
        }
      }
    }
  }
`;

const CountryDetail = () => {
  const { country } = useParams();
  const history = useNavigate();
  const [dataCountry, setDataCountry] = useState("");

  useEffect(() => {
    async function getCountries(url) {
      const response = await fetch(url);
      const data = await response.json();
      setDataCountry(data);
    }
    getCountries(`https://restcountries.com/v3.1/name/${country}`);
  }, [country]);

  const goBack = () => {
    history("/home");
  };

  if (dataCountry.length == 0) {
    return <h1>Loading</h1>;
  }

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = dataCountry[0];

  const lastNativeName = Object.values(name.nativeName).pop();
  const formattedPopulation = population.toLocaleString();
  console.log(dataCountry[0], "sas");
  return (
    <>
      <PageCountry>
        <MainContainer>
          <StyledButton onClick={goBack}> Back</StyledButton>
          <div className="detail-wrapper">
            <img src={flags.svg} alt="" />
            <div className="info-container">
              <StyledTitle>{name.common}</StyledTitle>
              <div className="info-wrapper">
                <div>
                  <StyledSpanInfo>Native Name: </StyledSpanInfo>
                  <StyledSpanValue>{lastNativeName.common}</StyledSpanValue>
                  <div>
                    <StyledSpanInfo>Population: </StyledSpanInfo>
                    <StyledSpanValue>{formattedPopulation}</StyledSpanValue>
                  </div>
                  <div>
                    <StyledSpanInfo>Region: </StyledSpanInfo>
                    <StyledSpanValue>{region}</StyledSpanValue>
                  </div>
                  <div>
                    <StyledSpanInfo>Sub Region: </StyledSpanInfo>
                    <StyledSpanValue>{subregion}</StyledSpanValue>
                  </div>
                  <div>
                    <StyledSpanInfo>Capital: </StyledSpanInfo>
                    <StyledSpanValue>{capital[0]}</StyledSpanValue>
                  </div>
                </div>
                <div>
                  <div>
                    <StyledSpanInfo>Top Level Domain: </StyledSpanInfo>
                    <StyledSpanValue>{tld[0]}</StyledSpanValue>
                  </div>
                  <div>
                    <StyledSpanInfo>Currencies: </StyledSpanInfo>
                    {Object.values(currencies).map(({ name }) => (
                      <StyledSpanValue key={name}>{name}</StyledSpanValue>
                    ))}
                  </div>
                  <div>
                    <StyledSpanInfo>Languajes: </StyledSpanInfo>
                    <StyledSpanValue>
                      {Object.values(languages).join(", ")}
                    </StyledSpanValue>
                  </div>
                </div>
              </div>
              <BorderCountries borders={borders} />
            </div>
          </div>
        </MainContainer>
      </PageCountry>
    </>
  );
};

export default CountryDetail;
