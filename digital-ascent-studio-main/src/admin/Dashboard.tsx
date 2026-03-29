import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HomeAdmin from "./HomeCMS";
import AboutAdmin from "./AdminAboutHero";
import ServicesAdmin from "./AdminServices";
// import PortfolioAdmin from "./pages/PortfolioAdmin";
import ProcessAdmin from "./AdminProcess";
// import ContactAdmin from "./pages/ContactAdmin";

const Dashboard = () => {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const renderContent = () => {
    switch (active) {
      case "Home":
        return <HomeAdmin />;
       case "About":
         return <AboutAdmin />;
      case "Services":
         return <ServicesAdmin />;
      // case "Portfolio":
      //   return <PortfolioAdmin />;
      case "Process":
        return <ProcessAdmin />;
      // case "Contact":
      //   return <ContactAdmin />;
      default:
        return <h2>Dashboard</h2>;
    }
  };

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-5 ">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

        {[
          "Home",
          "About",
          "Services",
          "Portfolio",
          "Process",
          "Contact",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`block w-full text-left p-2 mb-2 rounded ${
              active === item ? "bg-white text-black" : ""
            }`}
          >
            {item}
          </button>
        ))}

        <button
          onClick={logout}
          className="mt-6 bg-red-500 w-full p-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;