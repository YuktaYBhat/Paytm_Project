function DappBar({label}){
    return(<div >
            <div className="mb-8 w-full p-5 shadow-xl flex justify-between items-center">
            <h1 className="font-bold">Welcome to Paytm App</h1>
            <button className="border bg-blue-700 text-white rounded-4xl pb-3 pt-2 pr-4 pl-4 bg-" >{label[0].toUpperCase()}</button>
            </div>
        </div>)
}
export default DappBar