const Input = ({ text, onChange, value }) => (
    <>  
      {text}: <input onChange={onChange} value={value}/>
    </>
)

export default Input