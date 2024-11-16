import ProfRows from "./profRows";

const Home = () => {

    const rows = [
        {
            id: 'detailedRow'+1,
            name: "Apple",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            id: 'detailedRow'+2,
            name: "Microsoft",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            id: 'detailedRow'+3,
            name: "Google",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            id: 'detailedRow'+4,
            name: "Natixis",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            id: 'detailedRow'+5,
            name: "Nvidia",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            id: 'detailedRow'+7,
            name: "Critical",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            id: 'detailedRow'+8,
            name: "Mindera",
            percentage: "5",
            buyPrice: "Tech",
            quantity: "AAPL",
            priceDiff: "$100",
            rating: "5"
        },
        {
            id: 'detailedRow'+9,
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
        <div className="col12 colL8 colM6 colS3">
            <div className="portResumeRow">
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
          </div>

          {rows.map((element, index) => (
            <ProfRows key={index} id={element.id} name={element.name} percentage={element.percentage} buyPrice={element.buyPrice} quantity={element.quantity} priceDiff={element.priceDiff} rating={element.rating} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
