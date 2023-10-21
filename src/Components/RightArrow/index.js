import React from 'react';

export default function RightArrow(props) {

    function clearImpacts() {
        props.setProtestantImpact("");
        props.setCatholicImpact("");
        props.setJunkerImpact("");
        props.setReichstagImpact("");
        props.setIndustrialistImpact("");
        props.setWorkerImpact("");
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
      if (props.cardSummary === "Y1M3") {
        props.setProtestantRating(props.protestantRating + 10);
        props.setCatholicRating(props.workerRating - 10);
        props.setJunkerRating(props.junkerRating + 5);
        clearImpacts();
        props.setMonth(props.month + 1);
      }
      if (props.cardSummary === "Y1M4") {
        props.setCatholicRating(props.catholicRating - 5);
        props.setJunkerRating(props.junkerRating - 10);
        props.setReichstagRating(props.reichstagRating + 10);
        props.setIndustrialistRating(props.industrialistRating + 5);
        props.setWorkerRating(props.workerRating + 10);
        clearImpacts();
        props.setMonth(props.month + 1);
      }
      if (props.cardSummary === "Y1M5") {
        props.setProtestantRating(props.protestantRating + 5);
        props.setCatholicRating(props.catholicRating - 5);
        props.setJunkerRating(props.junkerRating + 10);
        props.setReichstagRating(props.reichstagRating + 5);
        props.setIndustrialistRating(props.industrialistRating + 10);
        clearImpacts();
        props.setMonth(props.month + 1);
      }
      if (props.cardSummary === "Y1M6") {
        props.setProtestantRating(props.protestantRating - 10);
        props.setCatholicRating(props.catholicRating + 10);
        props.setJunkerRating(props.junkerRating - 5);
        props.setWorkerRating(props.workerRating - 5);
        clearImpacts();
        props.setMonth(props.month + 1);
      }
      if (props.cardSummary === "Y1M7") {
        props.setJunkerRating(props.junkerRating + 5);
        props.setReichstagRating(props.reichstagRating - 5);
        props.setIndustrialistRating(props.industrialistRating + 10);
        props.setWorkerRating(props.workerRating - 10);
        clearImpacts();
        props.setMonth(props.month + 1);
      }
    }

    return (
        <div onClick={agree} style={{display: 'flex', color: 'white', backgroundColor: '#AC8930', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', border: '3px inset #AC8930', height: '16vh'}}>
            <p style={{fontSize: '60px', fontWeight: 'bold', marginTop: '-1.5vh'}}>{'>'}</p>
            <p style={{marginTop: '-4vh', width: '8vw'}}>{props.rightArrow}</p>
       </div>
    )
}