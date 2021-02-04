import style from './MainMenu.module.scss';
import {useEffect, useState} from "react";
import Leaders from "./Leaders";
import {log} from "util";

function MainMenu (props){

    const [time,setTime]= useState(0);
    const [err,setErr]= useState(false);
    const [bestPlayer,setBestPlayer]= useState('');
    const [bestScore,setbestScore]= useState('');

    useEffect(() => {

        if(time == 10){
            setBestPlayer(props.leaders[0].user);
            setbestScore(props.leaders[0].score);
        }
        if(time == 15){
            setBestPlayer(props.leaders[1].user);
            setbestScore(props.leaders[1].score);
        }
        if(time == 20){
            setBestPlayer(props.leaders[2].user);
            setbestScore(props.leaders[2].score);
        }

    },[time]);


    function handleInput(event){
        setTime(event.target.value);
        setErr(false);
    }
    function submit(){
        if(time !== 0){
            props.startGame(time);
        }
        else {
            setErr(true);
        }
    }

    return (
        <section>
            <section className={`${style.dark} ${style.radioButtons}`}>

                <h1 className={style.chooseTime}>Choose game time</h1>

                <label className={style.menuLabel} >
                    <input onChange={handleInput} className={style.menuInput} value="10" type="radio" name="dark" />
                    <span className={style.design}> </span>
                    <span className={style.text}>10s</span>
                </label>

                <label className={style.menuLabel}>
                    <input onChange={handleInput} className={style.menuInput} value="15" type="radio" name="dark" />
                    <span className={style.design}> </span>
                    <span className={style.text}>15s</span>
                </label>

                <label className={style.menuLabel}>
                    <input onChange={handleInput} className={style.menuInput} value="20" type="radio" name="dark" />
                    <span className={style.design}> </span>
                    <span className={style.text}>20s</span>
                </label>
            </section>

            {err ? <div>*choose game time</div>: <div></div>}

            <Leaders name={bestPlayer} score={bestScore}> </Leaders>

            <div onClick={submit} className={style.btn}>
                <span className={style.noselect}>Start Game</span>
                <div className={style.circle}> </div>
            </div>
        </section>
    );
}
export default MainMenu;
