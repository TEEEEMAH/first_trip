import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";  
import Trips from "./pages/Trips";
import CreateTrip from "./pages/CreateTrips"; 
import TripDetails from "./pages/TripDetails";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Checklist from "./pages/Checklist";
import AIAssistant from "./pages/AIAssistant";
import VisaCenter from "./pages/VisaCenter";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";  





function App() {
  const { theme } = useTheme();
  const location = useLocation();
  const appPages = [
  "/dashboard",
  "/trips",
  "/create-trip",
  "/trip-details",
  "/profile",
  "/notifications",
  "/checklist",
  "/ai-assistant",
  "/visa-center",
];
  return (
    <>
      {!appPages.includes(location.pathname) && (
  <Navbar />
)}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />  
        <Route path="/onboarding" element={<Onboarding />} /> 
        <Route path="/dashboard" element={<Dashboard />} />   
        <Route path="/trips" element={<Trips />} />   
        <Route path="/create-trip" element={<CreateTrip />} />   
        <Route path="/trip-details" element={<TripDetails />} />  
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination-details" element={<DestinationDetails />} />  
        <Route path="/checklist" element={<Checklist />} /> 
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/visa-center" element={<VisaCenter />} />
        <Route path="/profile" element={<Profile />} />   
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

      {!appPages.includes(location.pathname) && (
  <Footer />
)}
    </>
  );
}

export default App;