import { useEffect, useState } from "react";
import ProfRows from "./profRows";

interface Data {
    Name: string;
    Exchange: string;
    Symbol: string;
    Country: string;
    Sector: string;
    Industry: string;
    Currency: string;
    MarketCapitalization: string;
    DividendYield: string;
  }

const Home = () => {

    const [data, setData] = useState<Data[]>([]); // Estado para armazenar os dados carregados do JSON

    // Carregar os dados do JSON
    useEffect(() => {
      fetch("public/company_information.json") // Substitua pelo caminho correto se necessário
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error("Erro ao carregar o JSON:", error));
    }, []);

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
    <div className="homeContent">
        <div className='container'>
            <div className="col12 colL8 colM6 colS3">
                <div className="portResumeRow">
                    <h4>Portfolio</h4>
                    <div className="containerNoSpace">
                        <div className="col2 w-100">
                            <h6>Name</h6>
                        </div>
                        <div className="col2 w-100">
                            <h6>Symbol</h6>
                        </div>
                        <div className="col2 w-100">
                            <h6>Country</h6>
                        </div>
                        <div className="col2 w-100">
                            <h6>Sector</h6>
                        </div>
                        <div className="col4 w-100">
                            <h6>Industry</h6>
                        </div>
                    </div>
            </div>

            {data.map((element, index) => (
                <ProfRows key={index} id={element.Name} name={element.Name} percentage={element.Exchange} buyPrice={element.Symbol} quantity={element.Country} priceDiff={element.Sector} rating={element.Industry}
                    exchange={element.Exchange} ticker={element.Symbol} country={element.Country} sector={element.Sector} industry={element.Industry} currency={element.Currency} marketCap={element.MarketCapitalization}
                    dividendYield={element.DividendYield} />
            ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
