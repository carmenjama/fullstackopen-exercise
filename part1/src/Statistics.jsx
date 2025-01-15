const Statistics = (props) => {
    let totalComments = 0;
    let commentsPositive = 0;
    props.options.forEach(function (element) {
        totalComments+=element.total;
        if(element.name == "Good") commentsPositive += element.total;
    }, this);
    let average = totalComments / props.options.length;
    let percentPositive = (commentsPositive * 100)/totalComments;
    const totalDetail = <table>
        <caption>Summary</caption>
        <tr>
            <th>Total comments</th>
            <th>Average</th>
            <th>% 😃 comments</th>
        </tr>
        <tr>
            <td>{totalComments}</td>
            <td>{Math.round(average*100)/100}</td>
            <td>{Math.round(percentPositive*100)/100}</td>
        </tr>
    </table>

    const content = props.options.map((element) =>
        element.total == 0 ? 
        <div>
            {"- " + element.icon + " " + element.name}
        </div>
        :
        <div> 
            {element.total + " " + element.icon + " " + element.name}
        </div>
    );
    if(totalComments == 0)
        return (<div>No feddback given</div>)
    
    return (<div>
        {content}
        <br/>
        {totalDetail}
    </div>)
}

export default Statistics