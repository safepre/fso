import Part from './Part'
const Persons = ({persons,filter}) =>
{
    if(persons.length > 0)
    {
    return(
        <>
        {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map
        (({name,number,id}) => 
        (<Part key = {id} name = {name} number = {number} />
        ))}
        </>
    )
    }
    else
    {
        return null
    }
}

export default Persons