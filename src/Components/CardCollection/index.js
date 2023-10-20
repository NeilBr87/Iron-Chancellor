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
    const [workerImpact, setWorkerImpact] = useState("");
    
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
            setWorkerImpact("Large impact");
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
            setWorkerImpact("Large impact");
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
            setWorkerImpact("");
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
            setWorkerImpact("Large impact");
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
            setWorkerImpact("Small impact");
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
            setWorkerImpact("Large impact");
        }
        if (year === 1872 && month === 8) {
            setCardSummary("Y1M8");
            setCardText(`"Naval competition in the North Sea will be a major problem for us in the future unless we build up a strong naval fleet. Much as I hate to raise taxes, it might be necessary."`);
            setCardAuthor("Albert Schloss, Reichstag representative");
            setRightArrow("We need to be able to defend ourselves.");
            setLeftArrow("You'll have to find the funds elsewhere.");
            setCardImage("reichstag");
            setProtestantImpact("");
            setCatholicImpact("");
            setJunkerImpact("");
            setReichstagImpact("Large impact");
            setIndustrialistImpact("Small impact");
            setWorkerImpact("Small impact");
        } 
        if (year === 1872 && month === 9) {
            setCardSummary("Y1M9");
            setCardText(`"Count Andrassy, the Austrian foreign minister, wants us to sign a joint declaration with them to counter Russian interference in the Balkans and promote Catholic interests there."`);
            setCardAuthor("Wolfgang Kleiner, Catholic Bishop");
            setRightArrow("Let's tell the Czar to mind his own business.");
            setLeftArrow("We have no interest in the Balkans.");
            setCardImage("catholics");
            setProtestantImpact("Large impact");
            setCatholicImpact("Large impact");
            setJunkerImpact("");
            setReichstagImpact("Small impact");
            setIndustrialistImpact("");
            setWorkerImpact("");
        }
        if (year === 1872 && month === 10) {
            setCardSummary("Y1M10");
            setCardText(`"Several workers at a munitions factory were badly injured in an explosion and now their families are starving. We need a basic system of compensation for workplace injuries."`);
            setCardAuthor("Helga Schmidt, worker representative");
            setRightArrow("We need to look after our workers.");
            setLeftArrow("They should have been more careful.");
            setCardImage("workers");
            setProtestantImpact("");
            setCatholicImpact("");
            setJunkerImpact("Small impact");
            setReichstagImpact("");
            setIndustrialistImpact("Large impact");
            setWorkerImpact("Large impact");
        }
        if (year === 1872 && month === 11) {
            setCardSummary("Y1M11");
            setCardSummary("Ulysses S Grant has just won his second-term election over in the United States. It would set a great example if we congratulated him with a state visit.")
            setCardAuthor("Albert Schloss, Reichstag representative");
            setRightArrow("Make sure you have a lot of whiskey ready.");
            setLeftArrow("Just send a telegram.");
            setCardImage("reichstag");
            setProtestantImpact("Small impact");
            setCatholicImpact("Small impact");
            setJunkerImpact("Large impact");
            setReichstagImpact("Large impact");
            setIndustrialistImpact("Small impact impact");
            setWorkerImpact("Small impact");
        }
        if (year === 1872 && month === 12) {
            setCardSummary("Y1M12");
            setCardText(`"Merry Christmas, Herr Chancellor."`);
            setCardAuthor("Hans von Hohenberg, Lutheran Pastor");
            setRightArrow("Merry Christmas, one and all.");
            setLeftArrow("Bah, humbug!");
            setCardImage("protestants");
            setProtestantImpact("Small impact");
            setCatholicImpact("Small impact");
            setJunkerImpact("Small impact");
            setReichstagImpact("Small impact");
            setIndustrialistImpact("Small impact");
            setWorkerImpact("Small impact");
        }
        if (year === 1873 && month === 1) {
            setCardSummary("Y2M1");
            setCardText(`"These laws your man Falk are proposing to put religious education under state control are a disgrace. Our bishops in Prussia are protesting it. You must stop him."`);
            setCardAuthor("Wolfgang Kleiner, Catholic Bishop");
            setRightArrow("Perhaps Adalbert has gone too far.");
            setLeftArrow("No one is unaccountable to the state, Bishop.");
            setCardImage("catholics");
            setProtestantImpact("Large impact");
            setCatholicImpact("Large impact");
            setJunkerImpact("Small impact");
            setReichstagImpact("Small impact");
            setIndustrialistImpact("");
            setWorkerImpact("");
        }
        if (year === 1873 && month === 2) {
            setCardSummary("Y2M2");
            setCardText(`"My family's eastern estates are under threat from Polish dissidents. I trust we can expect a swift response from the army?"`);
            setCardAuthor("Jurgen von Lehndorff, Junker representative");
            setRightArrow("We can't let them get away with this.");
            setLeftArrow("I doubt we'll hold these territories forever.");
            setCardImage("junkers");
            setProtestantImpact("Small impact");
            setCatholicImpact("Large impact");
            setJunkerImpact("Large impact");
            setReichstagImpact("");
            setIndustrialistImpact("");
            setWorkerImpact("Small impact");
        }
        if (year === 1873 && month === 3) {
            setCardSummary("Y2M3");
            setCardText(`"I have a small sausage factory in Tanganyika that has come under attack from local tribesmen. Perhaps it would be better if they worked for it instead?"`);
            setCardAuthor("Gunther von Haultmann, industrialist representative");
            setRightArrow("Perhaps it would.");
            setLeftArrow("Forced labour? I don't think so.");
            setCardImage("industrialists");
            setProtestantImpact("");
            setCatholicImpact("");
            setJunkerImpact("");
            setReichstagImpact("Small impact");
            setIndustrialistImpact("Large impact");
            setWorkerImpact("Small impact");
        }
        if (year === 1873 && month === 4) {
            setCardSummary("Y2M4");
            setCardText(`"Speaking of forced labour, Herr Chancellor, most employees in Germay only have one day a week for their families. Will you support a Saturday off twice a month?."`);
            setCardAuthor("Helga Schmidt, worker representative");
            setRightArrow("That sounds reasonable.");
            setLeftArrow("Twice a month? Next you'll be asking for redundancy money.");
            setCardImage("workers");
            setProtestantImpact("");
            setCatholicImpact("");
            setJunkerImpact("Small impact");
            setReichstagImpact("");
            setIndustrialistImpact("Large impact");
            setWorkerImpact("Large impact");
        }
        if (year === 1873 && month === 5) {
            setCardSummary("Y2M5");
            setCardText(`"The time is now, Chancellor. The Falk Laws will eradicate the special privileges that the Catholics have enjoyed for far too long. Do we have your support?"`);
            setCardAuthor("Hans von Hohenberg, Lutheran Pastor");
            setRightArrow("I'll sign them into law immediately.");
            setLeftArrow("I don't want a religious conflict.");
            setCardImage("protestants");
            setProtestantImpact("Large impact");
            setCatholicImpact("Large impact");
            setJunkerImpact("Small impact");
            setReichstagImpact("");
            setIndustrialistImpact("");
            setWorkerImpact("");
        }
        if (year === 1873 && month === 6) {
            setCardSummary("Y2M6");
            setCardText(`"Since the Austrian stock market imploded last month, inflation is rising. We should raise interest rates promptly.`)
            setCardAuthor("Gunther von Haultmann, industrialist representative");
            setRightArrow("Wheelbarrows of money? Not on my watch.");
            setLeftArrow("It will all sort itself out without state intervention.");
            setCardImage("industrialists");
            setProtestantImpact("Small impact");
            setCatholicImpact("");
            setJunkerImpact("Small impact");
            setReichstagImpact("Small impact");
            setIndustrialistImpact("Large impact");
            setWorkerImpact("");
        }
        if (year === 1873 && month === 7) {
            setCardSummary("Y2M7");
            setCardText(`"Our farms in the east are falling behind in maintenance. I trust we can rely on you for some healthy subsidies? I'd hate to have to raise the price of food."`);
            setCardAuthor("Jurgen von Lehndorff, Junker representative");
            setRightArrow("We can't let our farmers suffer.");
            setLeftArrow("His Majesty is not a charity.");
            setCardImage("junkers");
            setProtestantImpact("");
            setCatholicImpact("");
            setJunkerImpact("Large impact");
            setReichstagImpact("Small impact");
            setIndustrialistImpact("Small impact");
            setWorkerImpact("Small impact");
        }
        if (year === 1873 && month === 9) {
            setCardSummary("Y2M9");
            setCardText(`"The French have finally paid their war debt. They've asked us to remove our troops from Paris. I think we should agree."`);
            setCardAuthor("Albert Schloss, Reichstag representative");
            setRightArrow("Let's leave them alone.");
            setLeftArrow("We should keep a presence there in case they get brave.");
            setCardImage("reichstag");
            setProtestantImpact("Small impact");
            setCatholicImpact("Small impact");
            setJunkerImpact("Small impact");
            setReichstagImpact("Large impact");
            setIndustrialistImpact("");
            setWorkerImpact("");
        }
        if (year === 1873 && month === 10) {
            setCardSummary("Y2M10");
            setCardText(`"Despite this...ridiculous cultural struggle against Catholocism your allies are pushing, the Austrians want to ally with us and the Russians."`);
            setCardAuthor("Wolfgang Kleiner, Catholic Bishop");
            setRightArrow("League of the Three Emperors has a certain ring to it.");
            setLeftArrow("The East doesn't concern me.");
            setCardImage("catholics");
            setProtestantImpact("Small impact");
            setCatholicImpact("Large impact");
            setJunkerImpact("");
            setReichstagImpact("Small impact");
            setIndustrialistImpact("");
            setWorkerImpact("");
        }
        }, [year, month]);


// Tally
// Protestant: 3 issues
// Catholic: 4 issues
// Junker: 2 issue
// Reichstag: 4 issues
// Industrialist: 4 issues
// Worker: 3 issues


    return (

        <div>
            <Ratings protestantRating={protestantRating} catholicRating={catholicRating} junkerRating={junkerRating} reichstagRating={reichstagRating} industrialistRating={industrialistRating} workerRating={workerRating} protestantImpact={protestantImpact} catholicImpact={catholicImpact} junkerImpact={junkerImpact} reichstagImpact={reichstagImpact} industrialistImpact={industrialistImpact} workerImpact={workerImpact}/>
            <MMYY year={year} month={month} setYear={setYear} setMonth={setMonth} />
            <CardControl setWorkerImpact={setWorkerImpact} cardSummary={cardSummary} cardText={cardText} cardAuthor={cardAuthor} rightArrow={rightArrow} leftArrow={leftArrow} cardImage={cardImage} year={year} month={month} setYear={setYear} setMonth={setMonth} protestantRating={protestantRating} catholicRating={catholicRating} junkerRating={junkerRating} reichstagRating={reichstagRating} industrialistRating={industrialistRating} workerRating={workerRating} protestantImpact={protestantImpact} catholicImpact={catholicImpact} junkerImpact={junkerImpact} reichstagImpact={reichstagImpact} industrialistImpact={industrialistImpact} workerImpact={workerImpact} setProtestantRating={setProtestantRating} setCatholicRating={setCatholicRating} setJunkerRating={setJunkerRating} setReichstagRating={setReichstagRating} setIndustrialistRating={setIndustrialistRating} setWorkerRating={setWorkerRating} setProtestantImpact={setProtestantImpact} setCatholicImpact={setCatholicImpact} setJunkerImpact={setJunkerImpact} setReichstagImpact={setReichstagImpact} setIndustrialistImpact={setIndustrialistImpact} />
        </div>
    )
}