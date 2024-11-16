import React from 'React';

import './carouselItem.css'

import { CarouselItem } from "../../models/interfaces.models";
import { actionStateEnum } from "../../models/enum.models";

const Item = ({item, index}: {item: CarouselItem, index: number}) => {
    return (
        <container
            className="carousel-item"
            key={index}
        >
            <div>
                {item.acronym}
            </div>
            <div className={item.state === actionStateEnum.PROFIT ? 'item-profit': 'item-loss'}>
                ${item.value}
            </div>
        </container>
    )
}

export default Item