import Input from "./Input.js"

const FormToAdd = ({ onSubmit, nameChange, numberChange, newName, newNum }) => {
    return (
      <>
        <form onSubmit={onSubmit}> 
          <div>
            <Input text="Name" onChange={nameChange} value={newName}/>
            <Input text="Number" onChange={numberChange} value={newNum}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </>
    )
}

export default FormToAdd