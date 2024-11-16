import React from 'React';
import {useEffect, useState} from "react";
import {CAROUSEL_INTERVAL, ITEMS_PER_SLIDE} from "../../models/const.models";
import {CarouselItem} from "../../models/interfaces.models";

import Item from "../carouselItem/carouselItem";

const Carousel = ({ items }: { items: Array<CarouselItem>}) => {

    const duplicatedItems = [...items, ...items]

    const [current, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (items.length <= ITEMS_PER_SLIDE) {
            setCurrentIndex(0);
            return;
        }

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % Math.ceil(items.length / ITEMS_PER_SLIDE)
            )
        }, CAROUSEL_INTERVAL);

        return () => clearInterval(timer);
    }, [items.length]);

    return (
        <section className="carousel-container">
            <div
                className="carousel-track"
                style={{ animationDuration: `${CAROUSEL_INTERVAL}s`}}
            >
                {duplicatedItems.map(((item, index) => (
                    <Item
                    item={item}
                    index={index}
                    />
                )))}
            </div>
        </section>
    )
}

export default Carousel