import style from "./MainMenu.module.scss";

function Leaders (props){
    if(props.score){
        return (
            <div>
                <h3 className={style.bestScore}>Best Score: {props.score}</h3>
                <h3 className={style.bestPlayer}>Best Player: {props.name} </h3>
            </div>
        );
    }
    else return <></>
}
export default Leaders;
