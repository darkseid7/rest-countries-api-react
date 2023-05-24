import { useState } from "react";
import styled from "styled-components";

import Search from "../Search";
import Filter from "../Filter";
import Card from "../Card";
import { MainContainer } from "../styledComponents/MainContainer";

import useFetch from "../../hooks/useFetch";

const PageHome = styled.section`
  background-color: ${({ theme }) => theme.colors.bgColor};

  .inputs-wrapper {
    margin-bottom: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 960px) {
    .inputs-wrapper {
      display: block;
      margin-bottom: 32px;
      padding: 0 16px;
    }
  }
`;

const CardList = styled.ul`
  margin: 2.5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 960px) {
    justify-content: space-around;
    margin: 0;
  }
`;

function Home() {
  const [selection, setSelection] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading } = useFetch("https://restcountries.com/v3.1/all");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterByRegion = data.filter((country) => {
    const matchesSearchTerm = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion =
      !selection || country.region.toLowerCase() === selection;

    return matchesSearchTerm && matchesRegion;
  });

  const handleSelect = (option) => {
    setSelection(option);
  };

  if (loading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );

  return (
    <>
      <PageHome>
        <MainContainer>
          <div className="inputs-wrapper">
            <Search handleSearch={handleSearch} />
            <Filter value={selection} onClick={handleSelect} />
          </div>
          <CardList>
            {filterByRegion.map((country, index) => (
              <Card key={index} country={country} />
            ))}
          </CardList>
        </MainContainer>
      </PageHome>
    </>
  );
}

export default Home;
