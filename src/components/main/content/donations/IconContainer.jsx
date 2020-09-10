import React from 'react';
import './IconContainer.scss';

function IconContainer(props) {
    return (
        <div
            className="containertest"
            style={{
                animation: `path${props.index} 120s ease-in-out infinite alternate`,

            }}
        >
            <div className="imgOverlay">
                <img className="icon" src={props.imgURL} alt=""/>
                <svg viewBox="0 -45 100 100" className="svg">
                    <path id="curve" d="m 0 0 a 1 1 0 0 0 100 0" fill="transparent"/>
                    <text width="100" className="name" textAnchor="middle">
                        <textPath alignmentBaseline="top" href="#curve" startOffset="50%">
                            {props.name}
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
}

export default IconContainer;
