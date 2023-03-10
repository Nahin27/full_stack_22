import Number from "./Number.js"

const Numbers = ({ persons }) => (
    <ul>
      {persons.map(
        (person) => (
          <Number name={person.name} key={person.name} number={person.number}/>
        )
      )}
    </ul>
)

export default Numbers