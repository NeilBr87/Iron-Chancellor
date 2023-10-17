import { useState, useEffect } from 'react';
import CardControl from '../CardControl';
import Ratings from '../Ratings';
import MMYY from '../MMYY';

export default function CardCollection() {

    const [year, setYear] = useState(1872);
    const [month, setMonth] = useState(1);
    const [cardSummary, setCardSummary] = useState('');
    const [cardText, setCardText] = useState('');
    const [cardAuthor, setCardAuthor] = useState('');
    const [rightArrow, setRightArrow] = useState('');
    const [leftArrow, setLeftArrow] = useState('');
    const [cardImage, setCardImage] = useState('');
    const [protestantRating, setProtestantRating] = useState(50);
    const [catholicRating, setCatholicRating] = useState(50);
    const [junkerRating, setJunkerRating] = useState(50);
    const [reichstagRating, setReichstagRating] = useState(50);
    const [industrialistRating, setIndustrialistRating] = useState(50);
    const [workerRating, setWorkerRating] = useState(50);
    const [protestantImpact, setProtestantImpact] = useState("");
    const [catholicImpact, setCatholicImpact] = useState("");
    const [junkerImpact, setJunkerImpact] = useState("");
    const [reichstagImpact, setReichstagImpact] = useState("");
    const [industrialistImpact, setIndustrialistImpact] = useState("");
    const [workerImpact, setworkerImpact] = useState("");
    
    useEffect (() => {
        if (year === 1872 && month === 1) {
            setCardSummary("Y1M1");
            setCardText(`"Rebuilding the army is going to be expensive after the war with France. Why don't you tax the aristocracy? It's not like they can't afford it."`);
            setCardAuthor("Helga Schmidt, worker representative");
            setRightArrow("Good idea");
            setLeftArrow("No, all will pay their part.");
            setCardImage("workers");
            setProtestantImpact("");
            setCatholicImpact("");
            setJunkerImpact("Large impact");
            setReichstagImpact("Small impact");
            setIndustrialistImpact("");
            setworkerImpact("Large impact");
        }
        if (year === 1872 && month === 2) {
            setCardSummary("Y1M2");
            setCardText(`"The rubber trade is booming. We should invest in some expeditions to East Africa. There's profit to be made."`);
            setCardAuthor("Gunther von Haultmann, industrialist representative");
            setRightArrow("Fetch me my pith helmet.");
            setLeftArrow("Imperialism is a barbaric venture.");
            setCardImage("industrialists");
            setProtestantImpact("Small impact");
            setCatholicImpact("Small imact");
            setIndustrialistImpact("Large impact");
            setworkerImpact("Large impact");
        }
        if (year === 1872 && month === 3) {
            setCardSummary("Y1M3");
            setCardText(`"Catholic schools are way too powerful, and they're directly loyal to the Pope. We should cut them down a peg and put them in state control."`);
            setCardAuthor("Hans von Hohenberg, Lutheran Pastor");
            setRightArrow("I agree, loyalty above all.");
            setLeftArrow("That's not in keeping with a united Germany.");
            setCardImage("protestants");
            setProtestantImpact("Large impact");
            setCatholicImpact("Large impact");
            setJunkerImpact("Small impact");
            setReichstagImpact("");
            setIndustrialistImpact("");
            setworkerImpact("");
        }
        if (year ===  1872 && month === 4) {
            setCardSummary("Y1M4");
            setCardText(`"A pretender to the throne has cast Spain into civil war. A statement in support of his democratic opponents could make us look like a modern, advanced nation "`);
            setCardAuthor("Albert Schloss, Reichstag representative");
            setRightArrow("Give the Liberals our full diplomatic backing.");
            setLeftArrow("Long live King Carlos!");
            setCardImage("reichstag");
            setProtestantImpact("");
            setCatholicImpact("Small impact");
            setJunkerImpact("Large impact");
            setReichstagImpact("Large impact");
            setIndustrialistImpact("Small impact");
            setworkerImpact("Large impact");
        }
        if (year === 1872 && month === 5) {
            setCardSummary("Y1M5");
            setCardText(`"A free trade agreement with Britain would boost our markets and avoid pointless imperial oneupsmanship."`);
            setCardAuthor("Gunther von Haultmann, industrialist representative");
            setRightArrow("Pip pip, tally ho.");
            setLeftArrow("Not a chance.");
            setCardImage("industrialists");
            setProtestantImpact("Small impact");
            setCatholicImpact("Small impact");
            setJunkerImpact("Large impact");
            setReichstagImpact("Small impact");
            setIndustrialistImpact("Large impact");
            setworkerImpact("Small impact");
        }
        if (year === 1872 && month === 6) {
            setCardSummary("Y1M6");
            setCardText(`"Regensburg Cathedral in Bavaria could use some considerable refurbishment, Chancellor. Financial support from the King would send an excellent message to the South."`);
            setCardAuthor("Wolfgang Kleiner, Catholic Bishop");
            setRightArrow("In nomine patri... .");
            setLeftArrow("We have more pressing concerns.");
            setCardImage("catholics");
            setProtestantImpact("Large impact");
            setCatholicImpact("Large impact");
            setJunkerImpact("Small impact");
            setReichstagImpact("");
            setIndustrialistImpact("");
            setworkerImpact("Small impact");
        }
        if (year === 1872 && month === 7) {
            setCardSummary("Y1M7");
            setCardText(`"Last night, a group of malcontents started a fire in one of my warehouses! They must be punished. I'd like the local army to organise a mass hanging of those who won't name the culprits."`);
            setCardAuthor("Gunther von Haultmann, industrialist representative");
            setRightArrow("I'll get the rope.");
            setLeftArrow("Sounds like they had their reasons.");
            setCardImage("industrialists");
            setProtestantImpact("");
            setCatholicImpact("");
            setJunkerImpact("Small impact");
            setReichstagImpact("Small impact");
            setIndustrialistImpact("Large impact");
            setworkerImpact("Large impact");
        }
    }, [year, month]);





    return (

        <div>
            <Ratings protestantRating={protestantRating} catholicRating={catholicRating} junkerRating={junkerRating} reichstagRating={reichstagRating} industrialistRating={industrialistRating} workerRating={workerRating} protestantImpact={protestantImpact} catholicImpact={catholicImpact} junkerImpact={junkerImpact} reichstagImpact={reichstagImpact} industrialistImpact={industrialistImpact} workerImpact={workerImpact}/>
            <MMYY year={year} month={month} setYear={setYear} setMonth={setMonth} />
            <CardControl cardSummary={cardSummary} cardText={cardText} cardAuthor={cardAuthor} rightArrow={rightArrow} leftArrow={leftArrow} cardImage={cardImage} year={year} month={month} setYear={setYear} setMonth={setMonth} protestantRating={protestantRating} catholicRating={catholicRating} junkerRating={junkerRating} reichstagRating={reichstagRating} industrialistRating={industrialistRating} workerRating={workerRating} protestantImpact={protestantImpact} catholicImpact={catholicImpact} junkerImpact={junkerImpact} reichstagImpact={reichstagImpact} industrialistImpact={industrialistImpact} workerImpact={workerImpact} setProtestantRating={setProtestantRating} setCatholicRating={setCatholicRating} setJunkerRating={setJunkerRating} setReichstagRating={setReichstagRating} setIndustrialistRating={setIndustrialistRating} setWorkerRating={setWorkerRating}/>
        </div>
    )
}