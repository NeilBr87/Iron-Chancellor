import {useEffect, useState} from 'react';
import Worker from './Worker.jpg'
import Industrialist from './Industrialist.jpg'
import Junker from './Junker.jpg'
import Catholic from './Catholic.jpg'
import Protestant from './Protestant.jpg'
import Reichstag from './Reichstag.jpg'
import RightArrow from '../RightArrow';

export default function CardControl(props) {

  const [image, setImage] = useState('');

    useEffect (() => {
      if (props.cardImage === "workers") {
        setImage(Worker);
      } else if (props.cardImage === "industrialists") {
        setImage(Industrialist);
      } else if (props.cardImage === "junkers") {
        setImage(Junker);
      } else if (props.cardImage === "catholics") {
        setImage(Catholic);
      } else if (props.cardImage === "protestants") {
        setImage(Protestant);
      } else if (props.cardImage === "reichstag") {
        setImage(Reichstag);
      }
    }, [props.cardImage]);

    

  return (
    <div>
      <div style={{backgroundColor: '#AC8930', color: 'white', width: '60vw', margin: '0 auto', padding: '0.2vw 0.5vw 0.2vw 0.5vw', marginTop: '3vh', border: '3px inset #AC8930', borderRadius: '5px'}}>
       <p>{props.cardText}</p>
       <p>{props.cardAuthor}</p>
       </div>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '4vh', gap: '6vw'}}>
       <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
       <p style={{fontSize: '60px', fontWeight: 'bold'}}>{'<'}</p>
       <p style={{marginTop: '-4vh', width: '8vw'}}>{props.leftArrow}</p>
       </div>
       <img style={{width: '14vw', borderRadius: '5px' }} src={image} alt="random" />
       <RightArrow
          rightArrow={props.rightArrow}
          month={props.month}
          setMonth={props.setMonth}
          cardSummary={props.cardSummary}
          protestantRating={props.protestantRating}
          catholicRating={props.catholicRating}
          junkerRating={props.junkerRating}
          reichstagRating={props.reichstagRating}
          industrialistRating={props.industrialistRating}
          workerRating={props.workerRating}
          setProtestantRating={props.setProtestantRating}
          setCatholicRating={props.setCatholicRating}
          setJunkerRating={props.setJunkerRating}
          setReichstagRating={props.setReichstagRating}
          setIndustrialistRating={props.setIndustrialistRating}
          setWorkerRating={props.setWorkerRating}
          setProtestantImpact={props.setProtestantImpact}
          setCatholicImpact={props.setCatholicImpact}
          setJunkerImpact={props.setJunkerImpact}
          setReichstagImpact={props.setReichstagImpact}
          setIndustrialistImpact={props.setIndustrialistImpact}
          setWorkerImpact={props.setWorkerImpact}
/>    </div>
    </div>
      );
}