interface Props {
    name: string;
    percentage: string;
    buyPrice: string;
    quantity: string;
    priceDiff: string;
    rating: string;
}

const ProfRows = (props: Props) => {
  return (
    <>
          <div className="containerNoSpace">
            <div className="col2 w-100 h-100 portRowsAlignCenter">
                <p>{props.name}</p>
                <p className="light">{props.percentage}%</p>
            </div>
            <div className="col2 w-100 h-100 portRowsAlignCenter">
                <p>{props.buyPrice}</p>
            </div>
            <div className="col2 w-100 h-100 portRowsAlignCenter">
                <p>{props.quantity}</p>
            </div>
            <div className="col2 w-100 h-100 portRowsAlignCenter">
                <p>{props.priceDiff}</p>
            </div>
            <div className="col3 w-100 h-100 portRowsAlignCenter">
                <p>{props.rating}</p>
            </div>
            <div className="col1 w-100 h-100 portRowsAlignCenter">
                <button className="btn">+</button> 
            </div>
          </div>
    </>
  );
};

export default ProfRows;
