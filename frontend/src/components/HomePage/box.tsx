import React from 'react';

interface Props {
    title: string;
    newTitle: string;
    category: string;
    desc: string;
}

const Box = (props: Props) => {
    return(
        <>
        <h4>{props.title}</h4>
            <div className="box w-100">
                <div className="newsBox w-100">
                    <div className="newsInfoFlex w-100">
                        <h5>{props.newTitle}</h5>
                        <p>{props.category}</p>
                    </div>
                    <p>{props.desc}</p>
                    <hr className="hrBox" />
                </div>
            </div>
        </>
    )
}

export default Box;