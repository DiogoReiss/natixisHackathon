import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="col4">
          <h4>News</h4>
          <div className="box w-100">
            <div className="newsBox w-100">
              <div className="newsInfoFlex w-100">
                <h5>BTC - 90341$</h5>
                <p>crypto</p>
              </div>
              <p>
                Lorem Ipsum s simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </p>
              <hr className="hrBox" />
            </div>
            <div className="newsBox w-100">
              <div className="newsInfoFlex w-100">
                <h5>BTC - 90341$</h5>
                <p>crypto</p>
              </div>
              <p>
                Lorem Ipsum s simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </p>
              <hr className="hrBox" />
            </div>
          </div>
        </div>
        <div className="col4"></div>
        <div className="col4"></div>
      </div>
    </>
  );
};

export default Home;
