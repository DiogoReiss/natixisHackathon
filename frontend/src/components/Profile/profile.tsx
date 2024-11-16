import ProfRows from "./profRows";

const Home = () => {

    const rows = [
        {
            id: 'detailedRow'+1,
            name: "Apple",
            percentage: "5",
            buyPrice: "$100",
            quantity: "12",
            priceDiff: "$100",
            rating: "5",
            ticker: "APL",
            exchange: "NASDAQ",
            country: "USA",
            sector: "Technology",
            industry: "IT",
            currency: "USD",
            marketCap: "2.3T",
            dividendYield: "1.5%"
        },
        {
            id: 'detailedRow'+2,
            name: "Microsoft",
            percentage: "5",
            buyPrice: "$120",
            quantity: "8",
            priceDiff: "$140",
            rating: "9",
            ticker: "MSF",
            exchange: "NASDAQ",
            country: "USA",
            sector: "Technology",
            industry: "IT",
            currency: "USD",
            marketCap: "1.9T",
            dividendYield: "1.7%"
        },
        {
            id: 'detailedRow'+3,
            name: "Google",
            percentage: "5",
            buyPrice: "$87",
            quantity: "3",
            priceDiff: "$11",
            rating: "2",
            ticker: "GGL",
            exchange: "NASDAQ",
            country: "USA",
            sector: "Technology",
            industry: "IT",
            currency: "USD",
            marketCap: "1.5T",
            dividendYield: "1.2%"
        },
        {
            id: 'detailedRow'+4,
            name: "Natixis",
            percentage: "4",
            buyPrice: "$72",
            quantity: "87",
            priceDiff: "$4",
            rating: "2",
            ticker: "NTX",
            exchange: "NYSE",
            country: "France",
            sector: "Finance",
            industry: "Banking",
            currency: "EUR",
            marketCap: "1.2T",
            dividendYield: "0.5%"
        },
        {
            id: 'detailedRow'+5,
            name: "Nvidia",
            percentage: "1",
            buyPrice: "6709",
            quantity: "44",
            priceDiff: "$1093",
            rating: "9",
            ticker: "NVD",
            exchange: "NYSE",
            country: "USA",
            sector: "Technology",
            industry: "IT",
            currency: "USD",
            marketCap: "1.1T",
            dividendYield: "0.3%"
        },
        {
            id: 'detailedRow'+7,
            name: "Critical",
            percentage: "5",
            buyPrice: "$32",
            quantity: "2",
            priceDiff: "$987",
            rating: "5",
            ticker: "CRT",
            exchange: "NYSE",
            country: "USA",
            sector: "Technology",
            industry: "IT",
            currency: "USD",
            marketCap: "1.1T",
            dividendYield: "0.3%"
        },
        {
            id: 'detailedRow'+8,
            name: "Mindera",
            percentage: "5",
            buyPrice: "$678",
            quantity: "89",
            priceDiff: "$98",
            rating: "4",
            ticker: "MDR",
            exchange: "NYSE",
            country: "Portugal",
            sector: "Technology",
            industry: "IT",
            currency: "USD",
            marketCap: "1.1T",
            dividendYield: "0.3%"
        },
        {
            id: 'detailedRow'+9,
            name: "Blip",
            percentage: "5",
            buyPrice: "$52",
            quantity: "190",
            priceDiff: "$12",
            rating: "3",
            ticker: "BLP",
            exchange: "NYSE",
            country: "Portugal",
            sector: "Technology",
            industry: "IT",
            currency: "USD",
            marketCap: "1.1T",
            dividendYield: "0.3%"
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
                        <h6>Buy Price</h6>
                    </div>
                    <div className="col2 w-100">
                        <h6>Quantity</h6>
                    </div>
                    <div className="col2 w-100">
                        <h6>Price Diff</h6>
                    </div>
                    <div className="col4 w-100">
                        <h6>Rating</h6>
                    </div>
                </div>
          </div>

          {rows.map((element, index) => (
            <ProfRows key={index} id={element.id} name={element.name} percentage={element.percentage} buyPrice={element.buyPrice} quantity={element.quantity} priceDiff={element.priceDiff} rating={element.rating}
                exchange={element.exchange} ticker={element.ticker} country={element.country} sector={element.sector} industry={element.industry} currency={element.currency} marketCap={element.marketCap}
                dividendYield={element.dividendYield} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
