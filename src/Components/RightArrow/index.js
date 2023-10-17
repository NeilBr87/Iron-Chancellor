import React from 'react';

export default function RightArrow(props) {

    function clearImpacts() {
        props.setProtestantImpact("");
        props.setCatholicImpact("");
        props.setJunkerImpact("");
        props.setReichstagImpact("");
        props.setIndustrialistImpact("");
        props.setworkerImpact("");
    }
    
    function agree() {
        if (props.cardSummary === "Y1M1") {
        props.setJunkerRating(props.junkerRating - 10);
        props.setWorkerRating(props.workerRating + 10);
        props.setReichstagRating(props.reichstagRating + 5);
        clearImpacts();
        props.setMonth(props.month + 1);
      }
      if (props.cardSummary === "Y1M2") {
        props.setIndustrialistRating(props.industrialistRating + 10);
        props.setProtestantRating(props.protestantRating + 5);
        props.setWorkerRating(props.workerRating - 10);
        clearImpacts();
        props.setMonth(props.month + 1);
      }
    }

    return (
        <div onClick={agree} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid black', height: '16vh'}}>
            <p style={{fontSize: '60px', fontWeight: 'bold', marginTop: '-1.5vh'}}>{'>'}</p>
            <p style={{marginTop: '-4vh', width: '8vw'}}>{props.rightArrow}</p>
       </div>
    )
}