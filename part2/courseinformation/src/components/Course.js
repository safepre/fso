const Course = ({course}) =>
{
 return(
    <>
    <Header course={course}></Header>
    <Info course={course.parts}></Info>
    <Total course ={course}></Total>
    </>
 )  
}

const Header = ({course}) => <h1>{course.name}</h1>

const Part = ({part}) =>
{

    return(
    <p>
        {part.name} {part.exercises}
    </p>
    )
}

const Info = ({course}) =>
{
    return(
    <>
        {course.map((part) => (<Part key={part.id} part={part} />)
        )}
    </>
    )
}

const Sum = ({part}) =>
{
    return(
        <>
            {part.reduce((sum,part) => sum + part.exercises,0)}    
        </>
        )
}

const Total = ({course}) =>
{
   return(
    <p><b>total of <Sum part = {course.parts} /> exercises </b> </p>
   )

}
export default Course

