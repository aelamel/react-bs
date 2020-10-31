import React , {Fragment}  from "react";
import PropTypes from 'prop-types';
import preview from '../../assets/images/image_preview.png';



const defaultProps = {
    img : '',
    buttonLabel: 'Go somewhere',
    content: ' Some quick example text to build on the card title and make up the bulk of the cards content. ',
    title : 'Card title',
    options : {
        style : ' ',
    }
};


const Card = ({ img, title, subTitle ,lists, headerContent , footerContent, content , buttonLabel , onClick , options }) => {


    options = {...Card.defaultProps.options, ...options };
    img = (img) ? img : preview;
    return(
        <Fragment>
            <div className={"card " + options.style} >
                { headerContent && <div className="card-header">
                    {headerContent}
                </div>}
                <img className="card-img-top" src={img} alt={img}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        {subTitle &&<h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>}
                        <p className="card-text">{content}</p>
                        <ul className="list-group list-group-flush">
                            {lists &&  lists.map((element , index) => <li key={index} className="list-group-item">{element}</li>
                            )}
                        </ul>
                        <a href="#" className="btn btn-primary" onClick={onClick}>{buttonLabel}</a>
                    </div>
                { footerContent && <div className="card-footer ">
                    {footerContent}
                </div>}
            </div>
        </Fragment>
    );

};


Card.prototypes = {
    img : PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string.isOptional,
    lists: PropTypes.array.isOptional,
    content: PropTypes.string,
    buttonLabel: PropTypes.string,
    onclick: PropTypes.func,
    options : PropTypes.object,
    headerContent: PropTypes.string.isOptional,
    footerContent: PropTypes.string.isOptional
    };

Card.defaultProps = defaultProps;
export default Card;
