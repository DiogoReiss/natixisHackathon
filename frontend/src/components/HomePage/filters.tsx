import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import PropTypes from 'prop-types';
import React, { useState } from "react";

interface Props {
  title: string;
  optionsId: string;
  options: { name: string }[];
  defaultState: string;
  onChange: (selected: string[]) => void; // Callback para passar os filtros selecionados ao pai
}

const FilterBox = (props: Props) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = () => {
    const filterBox = document.getElementById("filterCategory");
    const iconDown = filterBox?.querySelector(".iconDown");
    const iconUp = filterBox?.querySelector(".iconUp");
    const filterOptions = document.getElementById(props.optionsId);

    if (filterBox?.classList.contains("active")) {
      filterBox.classList.remove("active");
      if (iconDown) (iconDown as HTMLElement).style.display = "block";
      if (iconUp) (iconUp as HTMLElement).style.display = "none";
      if (filterOptions) filterOptions.style.display = "none";
    } else {
      filterBox?.classList.add("active");
      if (iconDown) (iconDown as HTMLElement).style.display = "none";
      if (iconUp) (iconUp as HTMLElement).style.display = "block";
      if (filterOptions) filterOptions.style.display = "flex";
    }
  };

  const toggleFilterOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterOption = e.target;
    setSelectedFilters((prev) => {
      const updatedFilters = filterOption.checked
        ? [...prev, filterOption.value]
        : prev.filter((item) => item !== filterOption.value);

      props.onChange(updatedFilters); // Passa os filtros atualizados para o componente pai
      return updatedFilters;
    });
  };

  return (
    <div className="newsBox w-100">
      <div id="filterCategory" className="newsInfoFlex w-100" onClick={toggleFilter}>
        <h5>{props.title}</h5>
        <SlArrowDown className="iconDown" style={props.defaultState == "open" ? {display: "none"} : {display: "block"}} />
        <SlArrowUp className="iconUp" style={props.defaultState == "open" ? {display: "block"} : {display: "none"}} />
      </div>
      <div id={props.optionsId} className="filterOptions w-100" style={props.defaultState == "open" ? {display: "flex"} : {display: "none"}}>
        {props.options.map((option) => (
          <div className="filterOptionBox" key={option.name}>
            <input
              type="checkbox"
              id={option.name}
              name={option.name}
              value={option.name}
              onChange={toggleFilterOption}
            />
            <label htmlFor={option.name}>{option.name}</label>
          </div>
        ))}
      </div>
      <hr className="hrBox" />
    </div>
  );
};

FilterBox.propTypes = {
  title: PropTypes.string.isRequired,
  optionsId: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterBox;
