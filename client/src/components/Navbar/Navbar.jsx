import { useNavigate } from "react-router"

const Navbar = () => {

const navigate = useNavigate();
return (
    <div>
        <button className={"dashboard"} onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button className={"QR"} onClick={() => navigate("/qr")}>QR</button>
        <button className={"territory"} onClick={() => navigate("/territory")}>Territory</button>
    </div>
  )
}

export default Navbar