import { Link } from "react-router-dom"

const Layout = () => {

  return(
    
    <div className="sidebar">
        <Link to="/home" className="sidebar-link">Home</Link>
        <Link to="/transaction-history" className="sidebar-link">Transactions</Link>
        <Link to="/accounts" className="sidebar-link">Accounts</Link>
        <Link to="/networks" className="sidebar-link">Networks</Link>
        <Link to="/settings" className="sidebar-link">Settings</Link>
       

    </div>
    
    )


}

export default Layout