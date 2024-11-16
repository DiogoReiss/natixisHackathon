interface Props {
    name: string;
    percentage: string;
    buyPrice: string;
    quantity: string;
    priceDiff: string;
    rating: string;
    id: string;
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
        </div>
    </>
  );
};

export default ProfRows;
