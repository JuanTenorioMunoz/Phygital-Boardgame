import { useNavigate, useLocation } from "react-router-dom";
import { Home, QrCode, Map } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <Home size={22} /> },
    { path: "/qr", label: "QR", icon: <QrCode size={22} /> },
    { path: "/territory", label: "Territory", icon: <Map size={22} /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {navItems.map(({ path, label, icon }) => {
          const isActive = location.pathname === path;

          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`navbar-button ${isActive ? "active" : ""}`}
            >
              {icon}
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
