import DappBar from "../components/DappBar"
import Dbalance from "../components/Dbalance"
import Duser from "../components/Dusers"


function DashBoard(){
      const ba=localStorage.getItem("balance")
      const name=localStorage.getItem("name")
        return(<div>
              <DappBar label={name}/> 
              <Dbalance label={ba} ></Dbalance>
              <Duser/>
        </div>)
}
export default DashBoard