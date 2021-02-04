import style from './StartGame.module.scss';
import {useEffect, useState} from "react";

function StartedGame(props) {

    const [time, setTime] = useState(props.time);
    const [score, setScore] = useState(0);

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() =>{
        setTime(props.time - seconds);
        if(time === 1){
           props.endGame(score);
        }
    },[seconds])


    return (
        <div className={style.wrapper}>
            <div className={style.button}>
                <input className={style.gameInput} type="checkbox" id="cb1"/>
                <label onClick={()=>{setScore(score + 1)}} className={style.gameLabel} htmlFor="cb1">Click me!!!</label>
            </div>
            <p className={style.score}>Score is : {score}</p>
            <p className={style.timeLeft}>Time left: {time}</p>
        </div>

    );
}

export default StartedGame;
