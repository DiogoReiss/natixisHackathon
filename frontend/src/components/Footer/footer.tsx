import React from "react";
import Carousel from "../../containers/carousel/carousel";
import {CarouselItem} from "../../models/interfaces.models";
import {actionStateEnum} from "../../models/enum.models";

const Footer = () => {
    const items: Array<CarouselItem> = [
        {
            acronym: "BTC",
            value: "100",
            state: actionStateEnum.PROFIT,
        },{
            acronym: "BTC",
            value: "100",
            state: actionStateEnum.PROFIT,
        },{
            acronym: "BTC",
            value: "100",
            state: actionStateEnum.PROFIT,
        },{
            acronym: "BTC",
            value: "100",
            state: actionStateEnum.PROFIT,
        },{
            acronym: "BTC",
            value: "100",
            state: actionStateEnum.PROFIT,
        },
    ]

  return (
    <section>
      <Carousel items={items}/>
    </section>
  );
};

export default Footer;
