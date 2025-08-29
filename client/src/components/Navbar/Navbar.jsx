import { useNavigate, useLocation } from "react-router-dom";
import { Home, QrCode, Map } from "lucide-react"; 

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <Home size={22} /> },
    { path: "/qr", label: "QR", icon: <QrCode size={22} /> },
    { path: "/territory", label: "Territory", icon: <Map size={22} /> },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-gray-900 text-white shadow-lg">
  <div className="flex justify-around items-center py-2">
    {navItems.map(({ path, label, icon }) => {
      const isActive = location.pathname === path;

      return (
        <button
          key={path}
          onClick={() => navigate(path)}
          className={`flex flex-col items-center px-5 py-3 text-sm font-medium transition-colors 
            ${isActive ? "text-blue-400" : "text-gray-400"} 
            active:scale-95`}
        >
          <div className="w-6 h-6">{icon}</div>
          <span className="mt-1">{label}</span>
        </button>
      );
    })}
  </div>
</nav>

  );
};

export default Navbar;
