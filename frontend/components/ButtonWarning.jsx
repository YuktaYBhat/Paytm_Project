import {Link} from "react-router-dom"
function ButtonWraning({label,textnote,to}){
    return(<div>
        <div className="text-sm">
        {label}
          <Link className="italic underline" to={to} >{textnote}</Link>
          </div>
        </div>)
}
export default ButtonWraning