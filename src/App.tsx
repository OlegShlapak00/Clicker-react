import React, {useState} from 'react';
import './App.scss';
import Greetings from "./Greetings";
import MainMenu from "./MainMenu";
import StartedGame from "./StartedGame";

function App(props) {
    const [greeting, showGreeting] = useState(true);
    const [user, setUser] = useState('');
    const [duration, setDuration] = useState(10);
    const [menu, showMenu] = useState(false);
    const [started, setStarted] = useState(false);
    const [time, setTime] = useState();
    const [leaders, setLeaders] = useState([{user: 'Logan', score: '20'},{user: 'Lego', score: '30'},{user: 'NIKO', score: '40'}]);
    function settingUser(username): void{
        setUser(username);
        showMenu(true);
        showGreeting(false);
    }
    function settingGame(time): void {
        setTime(time);
        showMenu(false);
        setStarted(true);
    }
    function endGame(res): void {
        showMenu(true);
        setStarted(false);

        if(time == 10){
            if(res> leaders[0].score){
                leaders[0].score = res;
                leaders[0].user = user;
            }
        }
        if(time == 15){
            if(res> leaders[1].score){
                leaders[1].score = res;
                leaders[1].user = user;
            }
        }
        if(time == 20){
            if(res> leaders[2].score){
                leaders[2].score = res;
                leaders[2].user = user;
            }
        }

    }

    if(greeting){
        return (
            <Greetings goToMainMenu={settingUser}> </Greetings>
        );
    }
    if(menu){
        return (
            <MainMenu startGame={settingGame} leaders={leaders}> </MainMenu>
        );
    }
    if(started){
        return (
          <StartedGame time={time} endGame={endGame}> </StartedGame>
        );
    }
    else {
        return <></>
    }

}


export default App;
