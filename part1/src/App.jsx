import Hello from './Hello.jsx'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'
import { useState } from 'react'
import Display from './Display.jsx'
import Button from './Button.jsx'

/*
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name='Carmen' age={a}/>
      <Hello name='Aracely' age={10+15}/>
      <div>
        <p>{friends[0].name} {friends[0].age}</p>
        <p>{friends[1].name} {friends[1].age}</p>
      </div>
    </div>
  )
}
*/

const App = (props) => {
  //Eventos
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne  = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter -1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  //Part 1 course exercise
  const course = "Half Stack application development "
  const part1 = "Fundamentals of React "
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  //Listas y funciones
  let listExercise = [
    {title: part1, numberExercise: exercises1,
      greet: function(){
        console.log("Hello title is: " + this.title)
      }
    },
    {title: part2, numberExercise: exercises2},
    {title: part3, numberExercise: exercises3},
  ];

  const courseInfo = {
    name: course,
    parts: listExercise
  }

  const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b) {
      console.log(a + b)
    },
  }

  arto.growOlder = function() {
    this.age += 1
  }
  
  arto.growOlder()
  //arto.doAddition(1, 4)
  //arto.greet()
  //
  //const referenceToGreet = setTimeout(arto.greet(), 1000)
  
  //Clases
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name person is ' + this.name)
    }
  }

  const adam = new Person('Adam Warloock', 29)
  //adam.greet()

  const carmen = new Person('Carmen María', 27)
  //carmen.greet()
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <div>
        <Display counter={counter}></Display>
        <h1>Greetings</h1>
        <Button onClick={increaseByOne} text='PLUS' />
        <Button onClick={setToZero} text='ZERO' />
        <Button onClick={decreaseByOne} text='MINUS' />

        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
      </div>
      <Header courseName={course}/>
      <Content listExercise={courseInfo.parts}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App
