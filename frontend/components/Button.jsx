function Button({label,proceed}){
    return(<div >
        <button className="bg-black text-white italic border mt-6  w-50 pt-1 pb-1 justify center" onClick={proceed}>
            {label}
        </button>
        </div>)
}
export default Button