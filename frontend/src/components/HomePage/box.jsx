import PropTypes from 'prop-types';

function Box(props){
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

Box.propTypes = {
    title: PropTypes.string.isRequired,
    newTitle: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};

export default Box;