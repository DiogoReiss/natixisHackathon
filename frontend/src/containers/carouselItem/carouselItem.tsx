import {CarouselItem} from "../../models/interfaces.models";

const Item = ({item, index}: {item: CarouselItem, index: number}) => {
    return (
        <div
            className="carousel-item"
            key={index}
        >
            {item.acronym}
        </div>
    )
}

export default Item