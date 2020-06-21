import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) => {
    const voteCount = new Array(props.anecdotes.length)
    voteCount.fill(0)
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(voteCount)
    const [topVote, setTopVote] = useState({topVote: -1, indx: -1})
    const randomizeAnecdotes = () => {
        setSelected(Math.floor(Math.random()*anecdotes.length))
    }

    const calculateVotes = () => {
        const votesCopy = [...votes]
        votesCopy[selected]+=1
        setVotes(votesCopy)


        if (votesCopy[selected] > topVote.topVote)
        {
            const topVoteCopy = {...topVote}
            topVoteCopy['topVote'] = votesCopy[selected]
            topVoteCopy['indx'] = selected
            setTopVote(topVoteCopy)
        }
    }

    return (
        <div>
            <h2>Anecdote of the day</h2>

            <Display anecdote={props.anecdotes[selected]} votes={votes[selected]}/><br/>
            <button onClick={calculateVotes}>Votes</button> &nbsp;
            <button onClick={randomizeAnecdotes}>Next Anecdote</button>
            <h2>Anecdote with most votes</h2>
            <Display anecdote={props.anecdotes[topVote.indx]} votes={topVote.topVote}/><br/>
            <br/>

        </div>
    )
}

const Display = (props) => {
    if(props.votes==-1){
        return(<>No votes available yet</>)
    }
    return(<>{props.anecdote}<br/> has {props.votes} votes</>);

}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
