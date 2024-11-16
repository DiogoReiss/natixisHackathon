import ProfRows from "./profRows";

const Home = () => {

    const rows = [
        {
            name: "Apple",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            name: "Microsoft",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            name: "Google",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            name: "Natixis",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            name: "Nvidia",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            name: "Critical",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            name: "Mindera",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            name: "Blip",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
    ]

  return (
    <>
      <div className='container'>
        <div className=" col6 colL2 colM2 colS3">
          <h4>Portfolio</h4>
          <div className="containerNoSpace">
            <div className="col2 w-100">
                <h6>Name</h6>
            </div>
            <div className="col2 w-100">
                <h6>Type</h6>
            </div>
            <div className="col2 w-100">
                <h6>Ticker</h6>
            </div>
            <div className="col2 w-100">
                <h6>Price P/A</h6>
            </div>
            <div className="col4 w-100">
                <h6>News Rating</h6>
            </div>
          </div>

          {rows.map((element, index) => (
            <ProfRows key={index} name={element.name} percentage={element.percentage} buyPrice={element.buyPrice} quantity={element.quantity} priceDiff={element.priceDiff} rating={element.rating} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
