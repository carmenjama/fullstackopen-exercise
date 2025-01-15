const History = (props) =>{
    
    if(props.allClicks.length == 0){
        return (
            <div>The app is used by pressing the buttons</div>
        )
    }else{
        return(
            <div>Button press history: {props.allClicks.length}</div>
        )
    }
}

export default History