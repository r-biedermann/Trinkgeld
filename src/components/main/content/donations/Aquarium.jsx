import React, { useState, useEffect } from 'react';
import './aquarium.scss';
import dummyList from '../../DummyList';
import IconContainer from './IconContainer';
import Money from './Money';

function Aquarium() {
    const [sup, setSup] = useState({});
    const [donateInterval, setDonateInterval] = useState({});
    const [cash, setCash] = useState([]);

    function getRndm(i) {
        return Math.floor(Math.random() * i);
    }

    function donate() {
        const rndm = getRndm(dummyList.length);
        setSup(dummyList[rndm]);
    }

    useEffect(() => {
        donate();
        setDonateInterval(setInterval(donate(), 240000));
        const index = [];
        for (let i = 0; i < 50; i++) {
            index.push(i);
        }
        setCash(index);
    }, []);

    return (
        <div className="aquarium">
            {dummyList.map((e, index) => (
                <IconContainer
                    imgURL={e.pictureURL}
                    name={e.name}
                    tipAmount={e.tipAmount}
                    key={e.name}
                    index={index}
                />
            ))}
            <h1 className="aquariumHeader">Supporter</h1>
            <div className="makeItRain">
                {cash.map((m) => (
                    <Money
                        key={m}
                    />
                ))}
            </div>
            <div className="newDonation">
                <div
                    className="donatorImg"
                    style={{ backgroundImage: `url(${sup.pictureURL})` }}
                />
                <div className="text">
                    <h1>{sup.name}</h1>
                    <h2>{`hat £ ${parseFloat(sup.tipAmount).toFixed(2)} gespendet`}</h2>
                </div>
            </div>

        </div>
    );
}

export default Aquarium;
