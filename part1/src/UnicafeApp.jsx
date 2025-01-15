import Anecdotes from "./Anecdotes";
import ButtonsUnicafe from "./ButttonsUnicafe"
import Statistics from "./Statistics"
import { useState } from 'react'
import App from "./App"
const Unicafe = () => {
    const addNewComment = (type) => () => {
        let typeComentsUpdate = [...typeComents];
        let indexUpdate = typeComentsUpdate.findIndex(x=> x.name == type);
        if(indexUpdate >= 0){
            typeComentsUpdate[indexUpdate].total = typeComentsUpdate[indexUpdate].total + 1;
        }
        setValue(typeComentsUpdate)
    }

    const [typeComents, setValue] 
    = useState([
        {"name": "Good", "icon": "😃", "total": 0, click: {addNewComment}},
        {"name": "Neutral", "icon": "👍🏻", "total": 0, click: {addNewComment}},
        {"name": "Bad", "icon": "👎🏼", "total": 0, click: {addNewComment}}
    ]);

    return (
    <div>
        <h3>Hi! Share your feddback. 💪</h3>
        <ButtonsUnicafe options={typeComents} />
        <hr/>
        <h3>Statistics: 💹</h3>
        <Statistics options={typeComents} />
        <hr/>
        <Anecdotes/>
        <hr/>
        <App />
    </div>);
}
export default Unicafe