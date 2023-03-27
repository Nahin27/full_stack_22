const Number = ({ name, number, deleteNum }) => {
    return <li>{name} {number} <button onClick={deleteNum}>Delete</button></li>
}

export default Number