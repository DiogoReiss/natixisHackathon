import React from 'react';

interface News {
    newTitle: string;
    category: string;
    desc: string;
}

interface Props {
    title: string;
    news: News[];
}

const Box = (props: Props) => {
    return(
        <>
            <h4>{props.title}</h4>
            <div className="box w-100">
                {props.news.map((news, index) => (
                    <div className="newsBox w-100">
                        <div key={index} className="newsInfoFlex w-100">
                            <h5>{news.newTitle}</h5>
                            <p>{news.category}</p>
                        </div>
                        <p>{news.desc}</p>
                        <hr className="hrBox" />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Box;