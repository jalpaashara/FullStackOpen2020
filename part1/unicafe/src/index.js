import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
    return(
        <button onClick={props.handleClick}>{props.text} </button>
    )
}

const Statistic = (props) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td>{props.text}</td>
                    <td>{props.text=="Positive" ? props.value+'%' : props.value}</td>
                </tr>
            </tbody>
        </table>
    );
}

const Statistics = (props) => {
    const {good,neutral,bad,avg,total} = props;
    return(
        <div>
            <Statistic text="Good" value ={good} />
            <Statistic text="Neutral" value ={neutral} />
            <Statistic text="Bad" value ={bad} />
            <Statistic text="Total" value ={total} />
            <Statistic text="Average" value ={Math.round((avg/total)*100)/100} />
            <Statistic text="Positive" value ={Math.round((good/total)*100)} />
        </div>
    );
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [avg,setAg] = useState(0)
    const [total,setTotal]=useState(0)

    const handleGoodClick = () => {
        setGood(good+1)
        setAg(avg+1)
        setTotal(total+1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral+1)
        setTotal(total+1)
    }

    const handleBadClick = () => {
        setBad(bad+1)
        setAg(avg-1)
        setTotal(total+1)
    }

    return (
        <div>
            <div>
                <h3>Give Feedback</h3>
                <br/>&nbsp;
                <Button handleClick={handleGoodClick} text='Good'/> &nbsp;
                <Button handleClick={handleNeutralClick} text='Neutral'/>&nbsp;
                <Button handleClick={handleBadClick} text='Bad'/>
                <br/>
                {
                    total==0 ? <p>No Feedback given</p> :
                    <>
                        <br/>
                        <Statistics good={good} neutral={neutral} bad={bad} avg={avg} total={total}/>
                    </>
                }
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
