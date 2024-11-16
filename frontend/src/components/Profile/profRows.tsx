interface Props {
    name: string;
    percentage: string;
    buyPrice: string;
    quantity: string;
    priceDiff: string;
    rating: string;
    id: string;
    exchange: string;
    ticker: string;
    country: string;
    sector: string;
    industry: string;
    currency: string;
    marketCap: string;
    dividendYield: string;

}

const ProfRows = (props: Props) => {

    function toggleDetailedRow(){
        const detailedRow = document.getElementById(props.id);
        if (detailedRow?.style.display === "none") {
            detailedRow.style.display = "block";

            //close all te other detailed rows
            const detailedRows = document.getElementsByClassName("portDetailedRow");
            for (let i = 0; i < detailedRows.length; i++) {
                if (detailedRows[i].id !== props.id) {
                    (detailedRows[i] as HTMLElement).style.display = "none";
                }
            }
        } else {
            detailedRow!.style.display = "none";
        }
    }


  return (
    <>
        <div className="portResumeRow">
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
            <div className="col1 w-100 h-100 portRowsAlignCenter" onClick={toggleDetailedRow}>
                <button className="btn">+</button> 
            </div>
          </div>
        </div>

        <div id={props.id} className="portDetailedRow" style={{display: "none"}}>
            <div className="containerNoSpace">
                <div className="col2 w-100"></div>
                <div className="col1 w-100">
                    <h6>Exchange</h6>
                </div>
                <div className="col1 w-100">
                    <h6>Ticker</h6>
                </div>
                <div className="col1 w-100">
                    <h6>Country</h6>
                    </div>
                <div className="col1 w-100">
                    <h6>Setor</h6>
                </div>
                <div className="col1 w-100">
                    <h6>Industry</h6>
                </div>
                <div className="col1 w-100">
                    <h6>Currency</h6>
                </div>
                <div className="col1 w-100">
                    <h6>Market Cap</h6>
                </div>
                <div className="col1 w-100">
                    <h6>Dividend Yield</h6>
                </div>
                <div className="col2 w-100"></div>  
            </div>
            <div className="containerNoSpace">
            <div className="col2 w-100 h-100 portRowsAlignCenter"></div>
                <div className="col1 w-100 h-100 portRowsAlignCenter">
                    <p>{props.exchange}</p>
                </div>
                <div className="col1 w-100 h-100 portRowsAlignCenter">
                    <p>{props.ticker}</p>
                </div>
                <div className="col1 w-100 h-100 portRowsAlignCenter">
                    <p>{props.country}</p>
                </div>
                <div className="col1 w-100 h-100 portRowsAlignCenter">
                    <p>{props.sector}</p>
                </div>
                <div className="col1 w-100 h-100 portRowsAlignCenter">
                    <p>{props.industry}</p>
                </div>
                <div className="col1 w-100 h-100 portRowsAlignCenter">
                    <p>{props.currency}</p>
                </div>
                <div className="col1 w-100 h-100 portRowsAlignCenter">
                    <p>{props.marketCap}</p>
                </div>
                <div className="col1 w-100 h-100 portRowsAlignCenter">
                    <p>{props.dividendYield}</p>
                </div>
                <div className="col2 w-100 h-100 portRowsAlignCenter"></div>
            </div>
        </div>
    </>
  );
};

export default ProfRows;
