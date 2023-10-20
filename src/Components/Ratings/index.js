import React from 'react';

export default function Ratings(props) {

    return (

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '5vw'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <h4>Protestants</h4>
            <p style={{marginTop: '-1vh'}}>{props.protestantRating}</p>
            {props.protestantImpact === "Large impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '1.1vw', height: '1.1vw', margin: '0 auto'}}></div>}
            {props.protestantImpact === "Small impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '0.7vw', height: '0.7vw', margin: '0 auto'}}></div>}
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <h4>Catholics</h4>
            <p style={{marginTop: '-1vh'}}>{props.catholicRating}</p>
            {props.catholicImpact === "Large impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '1.1vw', height: '1.1vw', margin: '0 auto'}}></div>}
            {props.catholicImpact === "Small impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '0.7vw', height: '0.7vw', margin: '0 auto'}}></div>}
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <h4>Junkers</h4>
            <p style={{marginTop: '-1vh'}}>{props.junkerRating}</p>
            {props.junkerImpact === "Large impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '1.1vw', height: '1.1vw', margin: '0 auto'}}></div>}
            {props.junkerImpact === "Small impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '0.7vw', height: '0.7vw', margin: '0 auto'}}></div>}
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <h4>Reichstag</h4>
            <p style={{marginTop: '-1vh'}}>{props.reichstagRating}</p>
            {props.reichstagImpact === "Large impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '1.1vw', height: '1.1vw', margin: '0 auto'}}></div>}
            {props.reichstagImpact === "Small impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '0.7vw', height: '0.7vw', margin: '0 auto'}}></div>}
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <h4>Industrialists</h4>
            <p style={{marginTop: '-1vh'}}>{props.industrialistRating}</p>
            {props.industrialistImpact === "Large impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '1.1vw', height: '1.1vw', margin: '0 auto'}}></div>}
            {props.industrialistImpact === "Small impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '0.7vw', height: '0.7vw', margin: '0 auto'}}></div>}
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <h4>Workers</h4>
            <p style={{marginTop: '-1vh'}}>{props.workerRating}</p>
            {props.workerImpact === "Large impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '1.1vw', height: '1.1vw', margin: '0 auto'}}></div>}
            {props.workerImpact === "Small impact" && <div style={{borderRadius: '50%', backgroundColor: 'red', width: '0.7vw', height: '0.7vw', margin: '0 auto'}}></div>}
            </div>
        </div>

    );
}