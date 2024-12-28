import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import { useState } from "react";
import SearchResults from "./pages/searchResult/SearchResult";
import MedicineDetail from "./pages/medicineDetail/MedicineDetail";
import "leaflet/dist/leaflet.css";
import PharmacyDetail from "./pages/pharmacyDetail/PharmacyDetail";

import AddMedicine from "./pages/addMedicine/AddMedicine";
import MedicineList from "./pages/medicineList/MedicineList";

import AddMedicineToInventory from "./pages/addMedicineInventory/addMedicineToInventory";
import UPdatePharmacyProfile from "./pages/UpdatePharmacy/UpdatePharmacyProfile";
import JoinAsPharmacy from "./pages/JoinAsPharmacy/JoinAsPharmacy";

import ApplicationList from "./pages/ApplicationList/ApplicationList";
import Pharmacies from "./pages/Pharmacies/Pharmacies";
import Medicines from "./pages/Medicines/Medicines";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [role, setRole] = useState("user");

  return (
    <Router>
      <ToastContainer
      // position="center"
      // autoClose={5000} // Automatically closes after 5 seconds
      // hideProgressBar={false} // Shows the progress bar
      // newestOnTop={false} // Toasts appear at the bottom
      // closeOnClick={true} // Closes the toast when clicked
      // rtl={false} // Set to true for right-to-left languages
      // draggable
      // pauseOnHover={true} // Pauses the toast when hovered
      />
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar role={role} />
      </div>

      {/* Mobile Side Menu */}
      <div className="md:hidden">
        <SideMenu role={role} />
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchResults" element={<SearchResults />} />
        <Route path="/medicineDetail/:id" element={<MedicineDetail />} />
        <Route path="/pharmacyDetail/:id" element={<PharmacyDetail />} />
        <Route path="/joinAsPharmacy" element={<JoinAsPharmacy />} />

        {/* other routes*/}
      </Routes>
    </Router>
  );
}

export default App;
