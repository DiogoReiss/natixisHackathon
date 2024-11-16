import './carousel.css';
import { RxDividerVertical } from "react-icons/rx";
import { CarouselItem } from "../../models/interfaces.models";
import Item from "../carouselItem/carouselItem";

const Carousel = ({ items }: { items: Array<CarouselItem> }) => {
  // Duplicamos os itens para criar o efeito infinito
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <Item item={item} index={index} />
            <RxDividerVertical />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
