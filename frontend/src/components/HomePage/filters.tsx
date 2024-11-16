import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import PropTypes from 'prop-types';
import React, { useState } from "react";

interface Props {
    title: string;
    optionsId: string;
    options: {name: string}[];
}

const FilterBox = (props: Props) => {

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const toggleFilter = () => {
        const filterBox = document.getElementById('filterCategory');
    
        // Get the iconDown and iconUp elements within this filterCategory
        const iconDown = filterBox?.querySelector('.iconDown');
        const iconUp = filterBox?.querySelector('.iconUp');

        // Get the filterOptions using the provided props.optionsId
        const filterOptions = document.getElementById(props.optionsId);

        if (filterBox?.classList.contains('active')) {
            filterBox.classList.remove('active');
            if (iconDown) (iconDown as HTMLElement).style.display = 'block';
            if (iconUp) (iconUp as HTMLElement).style.display = 'none';

            if (filterOptions) filterOptions.style.display = 'none';
        } else {
            filterBox?.classList.add('active');
            if (iconDown) (iconDown as HTMLElement).style.display = 'none';
            if (iconUp) (iconUp as HTMLElement).style.display = 'block';

            if (filterOptions) filterOptions.style.display = 'flex';
        }

        console.log(selectedFilters);
    }

    const toggleFilterOption = (e: { target: any; }) => {
        const filterOption = e.target;
    
        setSelectedFilters((prev) => {
            if(prev === undefined){
                return [filterOption.value];
            }
            else{
                if(prev.includes(filterOption.value)){
                    return prev.filter((item) => item !== filterOption.value);
                }
                else{
                    return [...prev, filterOption.value];
                }
            }
        });
    }

    return(
        <div className="newsBox w-100">
            <div id="filterCategory" className="newsInfoFlex w-100" onClick={toggleFilter}>
                <h5>{props.title}</h5>
                <SlArrowDown className="iconDown" />
                <SlArrowUp className="iconUp" style={{display: "none"}} />
            </div>
            <div id={props.optionsId} className='filterOptions w-100' style={{display: "none"}}>
                { props.options.map((option) => (
                    <div className='filterOptionBox' key={option.name}>
                        <input type="checkbox" id={option.name} name={option.name} value={option.name} onChange={toggleFilterOption} />
                        <label htmlFor={option.name}>{option.name}</label>
                    </div>
                ))}
            </div>
            <hr className="hrBox" />
        </div>
    )
}

FilterBox.propTypes = {
    title: PropTypes.string.isRequired,
    optionsId: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
};

export default FilterBox;