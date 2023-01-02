const HeaderName = props =>
{
  return(
    <h1>{props.course}</h1>
)
}

const Part = props => 
{
  return(
    <>
      <p>{props.part}{props.excercises}</p>
    </>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    <>
      {parts.map(element => (<Part part={element.name}  excercises={" " + element.exercises} />)
      )}
    </>
  )
}

const Total = props => {
  const exercises = props.exercises
  return(
 <>
  Number of exercises {exercises[0] + exercises[1] + exercises[2]}
  </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <>
      <HeaderName course={course.name} />
      <Content parts={course.parts}/>
      <Total exercises={course.parts.map(x => x['exercises'])}/>
    </>
  )
}

export default App;