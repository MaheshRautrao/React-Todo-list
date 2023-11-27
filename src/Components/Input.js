const Input = ({id,label,setValue,value,required,type,placeholder}) =>{
    return <label htmlFor={id} className="label">
        {label} <br />
        <input className="todo-input" onChange={(e)=>{setValue(e.target.value)}}
            value={value} required={required} type={type} placeholder={placeholder}
        />
        <br />
    </label>
}
export default Input