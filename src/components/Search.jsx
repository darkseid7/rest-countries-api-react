/* eslint-disable react/prop-types */
import styled from "styled-components";

const SearchInput = styled.input`
  width: 480px;
  height: 56px;
  margin: 2.5rem 0;
  padding: 1rem 2rem;
  font-family: "Nunito Sans";
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.fontColor};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondColor};

  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColor};
  }

  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

const Search = ({ handleSearch }) => {
  return (
    <SearchInput
      onChange={handleSearch}
      placeholder="Search for a country..."
    />
  );
};

export default Search;
