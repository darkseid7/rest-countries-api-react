/* eslint-disable react/prop-types */
import styled from "styled-components";

const FilterByRegion = styled.select`
  width: 200px;
  height: 56px;
  font-size: 14px;
  margin: 2.5rem 0;
  padding: 1rem 2rem;
  font-family: "Nunito Sans";
  font-weight: 400;
  font-size: 14px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.secondColor};
  cursor: pointer;

  @media only screen and (max-width: 960px) {
    margin: 0;
  }
`;

const Filter = ({ onClick }) => {
  const getRegion = (e) => {
    const selectedRegion = e.target.value;
    onClick(selectedRegion);
  };

  return (
    <>
      <FilterByRegion onClick={getRegion} name="filter" id="regionFilter">
        <option value="" defaultValue>
          Filter by region
        </option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </FilterByRegion>
    </>
  );
};

export default Filter;
