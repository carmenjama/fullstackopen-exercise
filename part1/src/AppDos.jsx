import { useState } from 'react'
import History from './History.jsx'

const Display = (props) => {
    <div>{props.value}</div>
}
const AppDos = () => {
    const [value, setValue] = useState(10)
    const hello = (who) => () =>{
        console.log('hello world', who)
    }
    
    const setToVaue = (newValue) => () => {
        console.log('value now', newValue)  // imprime el nuevo valor en la consola
        setValue(newValue)
    }

    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })
    const [total, setTotal] = useState(0)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = clicks.left + 1
        setClicks({...clicks, left: updatedLeft})
        setTotal(updatedLeft + clicks.right)

    }
    const handleRightClick = () => {
        setClicks({...clicks, right: clicks.right+1})
        const updatedRight = clicks.right + 1
        setAll(allClicks.concat('R'))
        setTotal(updatedRight + clicks.left)
    }
    const [allClicks, setAll] = useState([])

    const Button = ({handleClick, text}) =>(
        <button onClick={handleClick}>{text}</button>
    )
    return(
        <div>
            {clicks.left}
            <Button handleClick={handleLeftClick} text={'LEFT'} />
            <Button handleClick={handleRightClick} text={'RIGTH'} />
            {clicks.right}
            <p>{allClicks.join(' ')}</p>
            <History allClicks={allClicks} />
            <br/><br/>
            {"Mi value is: " + value}
            <br/>
            <Button handleClick={hello("world")} text={'world'}/>
            <Button handleClick={hello("react")} text={'react'}/>
            <Button handleClick={hello("function")} text={'function'}/>
            <br/>
            <Button handleClick={setToVaue(1000)} text={'thousand'}/>
            <Button handleClick={setToVaue(0)} text={'rest'}/>
            <Button handleClick={setToVaue(value+1)} text={'+1'}/>
        </div>
    )
}

export default AppDos