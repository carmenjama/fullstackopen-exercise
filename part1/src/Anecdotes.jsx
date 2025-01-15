import { useState } from 'react'
import Button from "./Button";

const Anecdotes = () => {
    const [anecdoteList, updateAnecdoteList] 
    = useState(
        [
            {"name": 'If it hurts, do it more often.', "vote": 0},
            {"name": 'Adding manpower to a late software project makes it later!', "vote": 0},
            {"name": 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', "vote": 0},
            {"name": 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', "vote": 0},
            {"name": 'Premature optimization is the root of all evil.', "vote": 0},
            {"name": 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', "vote": 0},
            {"name": 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', "vote": 0},
            {"name": 'The only way to go fast, is to go well.', "vote": 0}
        ]
    )
    const [anecdoteMostVote, updateanecdoteMostVote] = useState("No votes :c")
    const [showVote, updateShowVote] = useState("")

    const getRandom = (max) => {
        return Math.floor(Math.random() * max);
    }  
    const [selected, setSelected] = useState(getRandom(anecdoteList.length))
    
    const onClickNextAnecdote = () => {
        setSelected(getRandom(anecdoteList.length));
        updateShowVote("")
    }
    
    const onClickVote = (item) => () =>{
        let newAnecdoteList = [...anecdoteList];
        newAnecdoteList[item].vote = newAnecdoteList[item].vote+1;
        updateAnecdoteList(newAnecdoteList);
        updateShowVote("hidden")
        getAnecdoteMostVote();
    }

    const getAnecdoteMostVote = () => {
        let listCountVote = anecdoteList.map((element) => element.vote);
        let maxVote = Math.max(...listCountVote);
        if(maxVote > 0){
            let indexUpdate = anecdoteList.findIndex(x=> x.vote == maxVote);
            if(indexUpdate >= 0){
                updateanecdoteMostVote("(" + maxVote + (maxVote > 1 ? " votes" : " vote") + ") " + anecdoteList[indexUpdate].name);
            }
        }
    }
    
    return (
        <div>
            <Button id="btn_next_anecdote" onClick={onClickNextAnecdote} text="Next anecdote" />
            <Button hidden={showVote} id="btn_vote_anecdote" onClick={onClickVote(selected)} text="❤ Vote" />
            <br/>
            {anecdoteList[selected].name}
            <hr/>
            <h3>Anecdote with most vote: </h3> {anecdoteMostVote}
        </div>
    )
}

export default Anecdotes