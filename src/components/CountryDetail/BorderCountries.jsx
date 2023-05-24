/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { StyledSpanInfo } from "../styledComponents/Span";
import { StyledTag } from "../styledComponents/Tag";

import useFetch from "../../hooks/useFetch";

const StyledBorderCountries = styled.div`
  padding-top: 4rem;

  .tag-container {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 1100px) {
    padding-top: 2rem;
  }
`;

const BorderCountries = ({ borders }) => {
  const [borderUrl, setBorderUrl] = useState("");

  useEffect(() => {
    setBorderUrl(
      `https://restcountries.com/v3.1/alpha?codes=${borders?.join(",")}`
    );
  }, [borders]);

  const { data } = useFetch(borderUrl);

  return (
    <>
      <StyledBorderCountries>
        <StyledSpanInfo>Border Countries:</StyledSpanInfo>
        <div className="tag-container">
          {data.map(({ name }) => {
            return (
              <>
                <StyledTag key={name.common}>
                  <Link to={`/home/${name.common}`}> {name.common}</Link>
                </StyledTag>
              </>
            );
          })}
        </div>
      </StyledBorderCountries>
    </>
  );
};

export default BorderCountries;
