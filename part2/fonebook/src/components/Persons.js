import Part from './Part'
const Persons = ({persons,filter}) =>
(
    
    <>
        {persons?.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map
        (({name,number,id}) => 
        (<Part key = {id} name = {name} number = {number} />
        ))}
    </>
)

export default Persons