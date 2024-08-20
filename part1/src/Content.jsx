const Content  = (props) => {
    const content = props.listExercise.map((dto) =>
        <div>
          <h1>Title: {dto.title}</h1><p>Number of exercises: {dto.numberExercise}</p>
        </div>
      );
    return (content)
}

export default Content