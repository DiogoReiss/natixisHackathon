import React from 'react';
import './hotNews.css'

import { AiOutlineFire } from "react-icons/ai";

const HotNews = ({ info, setModelItem, investmentItem }) => {
    return (
        <div
            className="hotnews-container interest-item"
            onClick={() => setModelItem(investmentItem)}
        >
            <div className="hotnews-title">
                <AiOutlineFire />
                <span>Hot News</span>
            </div>
            <div className="hotnews-info">
                { info }
            </div>
        </div>
    )
}

export default HotNews;