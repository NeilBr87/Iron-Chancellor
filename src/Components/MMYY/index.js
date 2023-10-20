import { useState, useEffect } from 'react';

export default function MMYY(props) {
    const [actualMonth, setActualMonth] = useState("");

    useEffect (() => {
        if (props.month === 1) {
            setActualMonth("January");
        }
        if (props.month === 2) {
            setActualMonth("February");
        }
        if (props.month === 3) {
            setActualMonth("March");
        }
        if (props.month === 4) {
            setActualMonth("April");
        }
        if (props.month === 5) {
            setActualMonth("May");
        }
        if (props.month === 6) {
            setActualMonth("June");
        }
        if (props.month === 7) {
            setActualMonth("July");
        }
        if (props.month === 8) {
            setActualMonth("August");
        }
        if (props.month === 9) {
            setActualMonth("September");
        }
        if (props.month === 10) {
            setActualMonth("October");
        }
        if (props.month === 11) {
            setActualMonth("November");
        }
        if (props.month === 12) {
            setActualMonth("December");
        }
        if (props.month === 13) {
            props.setMonth(1);
            setActualMonth("January");
            props.setYear(props.year + 1);
        }
    }, [props.month, props.year, props]);

    return (
        <div style={{backgroundColor: '#BF4E30', width: '10vw', margin: '0 auto',  }}>
            <p style={{marginTop: '8vh'}}>Year: {props.year}</p>
            <p>Month: {actualMonth}</p>
        </div>
    )
}