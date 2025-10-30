function InputBox({label,placeholder,proceed}){
    return(<div className="pt-3">
        <div className="pb-1 font-semibold">

        {label}
        </div>
        <input className="border p-2" placeholder={placeholder} onChange={proceed}></input>
        </div>)
}
export default InputBox