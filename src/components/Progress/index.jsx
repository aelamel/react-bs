import React from "react";


const defaultProps = {
    options:
        {
            width: '25',
            height : '15',
            valueNow : 25,
            valueMin : 0,
            valueMax : 100,
            style : 'bg-info'
        },
    label : '25%'
};

const Progress =  ({label,options}) => {

    options = {...Progress.defaultProps.options, ...options };

    return(
        <div className="progress" style={{height: `${options.height}px`}}>
            <div className={"progress-bar " + options.style} role="progressbar" style={{width: `${options.width}%`}} aria-valuenow={options.valueNow} aria-valuemin={options.valueMin} aria-valuemax={options.valueMax}>
                {label ? label : ''}
            </div>
        </div>
    );
};



Progress.defaultProps = defaultProps;

export default Progress;

