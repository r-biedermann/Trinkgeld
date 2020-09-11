import React from 'react';
import './money.scss';

function Money() {
    function getRndm(i) {
        return Math.floor(Math.random() * i);
    }

    return (
        <div
            className="money"
            style={{
                left: `${getRndm(95)}vw`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationTimingFunction: `cubic-bezier(${Math.random() * 0.5}, ${Math.random()}, ${0.5 + Math.random() * 0.5}, ${Math.random()})`,
            }}
        />
    );
}

export default Money;
