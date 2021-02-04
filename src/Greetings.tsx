import React, {useState} from "react";
import style from './Greeting.module.scss';

function Greetings(props){

    const [user, setUser] = useState('');

    function handleChange(event) {
        setUser(event.target.value);
    }
    function startGame() {
        console.log(user)
        props.goToMainMenu(user);
    }
    return (
        <>
            <div className={style.greetingPlayer}>
                <h1 className={style.title}>BEST CLICKER</h1>
                <h4 className={style.askName}>What is your name ?</h4>
                <p className={style.userName}>
                <span className={style.input}>
                    <input className={style.greetingInput} placeholder="Who are you, stranger?" value={user} onChange={handleChange} type="text"/>
                    <span> </span>
                </span>
                </p>
                <div className={style.btn} onClick={startGame}><span  className={style.noselect}>Start</span><div className={style.circle}> </div></div>
            </div>
        </>
    );
}
export default Greetings;
