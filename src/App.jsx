import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Favorites from "./components/favorites";
import Profile from "./components/profile";
import Routine from "./components/Routine";
import RoutineSelection from "./pages/routine/RoutineSelection";
import Ai from "./components/Ai";
import Experts from "./components/experts";
import DoctorProfile from "./pages/experts/DoctorProfile"; 
import DoctorChat from "./pages/experts/DoctorChat";
import Login from "./components/login";
import Signup from "./components/signup";
import ForgetPassword from "./components/ForgetPassword";
import ContactUs from "./pages/Home/components/ContactUs"; // ✅ Added Missing Route

// ✅ Import Ai Pages
import AISkinReport from "./pages/Ai/AISkinReport";
import LoadingFace from "./pages/Ai/LoadingFace"; // ✅ Ensure this path is correct
import AiChat from "./pages/Ai/AiChat";
import RoutineReview from "./pages/Ai/RoutineReview";

import Article from "./components/Article";

// ✅ Import Profile Pages
import AccountHome from "./pages/profile/pages/AccountHome/AccountHome";
import FavoriteArticles from "./pages/profile/pages/Favorites/FavoriteArticles";
import YourSkin from "./pages/profile/pages/YourSkin/YourSkin";
import EmailPreferences from "./pages/profile/pages/EmailPreferences/EmailPreference";
import AccountSecurity from "./pages/profile/pages/AccountSecurity/AccountSecurity";
import PrivacyPolicy from "./pages/profile/pages/privacy-policy/PrivacyPolicy";
import TermsOfService from "./pages/profile/pages/terms-of-services/TermsOfService";
import Profilee from "./pages/profile/pages/profile/Profile";
import Support from "./pages/profile/pages/Support/Support";

// ✅ Sign-Up Flow Pages
import First from "./pages/SignUp/pages/first";
import Second from "./pages/SignUp/pages/second";
import Third from "./pages/SignUp/pages/third";
import Fourth from "./pages/SignUp/pages/forth";
import Fifth from "./pages/SignUp/pages/fifth";
import Sixth from "./pages/SignUp/pages/sixth";
import Seventh from "./pages/SignUp/pages/seventh";
import A from "./pages/SignUp/pages/a";
import B from "./pages/SignUp/pages/b";
import C from "./pages/SignUp/pages/c";
import Skintype from "./pages/SignUp/pages/skintype";
import LoadingScreen from "./pages/SignUp/pages/LoadingScreen";
import Final from "./pages/SignUp/pages/final";

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const openSignup = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  return (
    <Router>
      <Routes>
        {/* ✅ Initial Route (Redirects to Home) */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* 🔹 Home & Main Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        
        {/* 🔹 Ai */}
        <Route path="/ai" element={<Ai />} />
        <Route path="/ai/report" element={<AISkinReport />}/>
        <Route path="/loadingFace" element={<LoadingFace />} />
        <Route path="/AiChat" element={<AiChat />} />
        <Route path="/RoutineReview" element={<RoutineReview />} />


        {/* 🔹 FIXED EXPERTS ROUTES */}
        <Route path="/experts" element={<Experts />} />
        <Route path="/experts/profile/:id" element={<DoctorProfile />} />
        <Route path="/experts/chat/:id" element={<DoctorChat />} />

        {/* 🔹 Routine Routes */}
        <Route path="/routine" element={<Routine />} />
        <Route path="/routine/select" element={<RoutineSelection />} />

        {/* 🔹 Profile Section */}
        <Route path="/profile" element={<Profile />} >
          <Route index element={<AccountHome />} />
          <Route path="profile" element={<Profilee />} />
          <Route path="favorites" element={<FavoriteArticles />} />
          <Route path="your-skin" element={<YourSkin />} />
          <Route path="email-preferences" element={<EmailPreferences />} />
          <Route path="account-security" element={<AccountSecurity />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="support" element={<Support />} />  
        </Route>

        {/* ✅ Added Missing Contact Us Route */}
        <Route path="/contact" element={<ContactUs />} />

        {/* ✅ Login & Signup Dialog Routes */}
        <Route path="/login" element={<Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} openSignup={openSignup} />} />
        <Route path="/signup" element={<Signup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} openLogin={openLogin} />} />
        
        {/* ✅ Forgot Password Route */}
        <Route path="/forget-password" element={<ForgetPassword />} />

        {/* ✅ Redirect Signups & Logins to First Signup Page */}
        <Route path="/signup/first" element={<First />} />
        <Route path="/signup/second" element={<Second />} />
        <Route path="/signup/third" element={<Third />} />
        <Route path="/signup/fourth" element={<Fourth />} />
        <Route path="/signup/fifth" element={<Fifth />} />
        <Route path="/signup/sixth" element={<Sixth />} />
        <Route path="/signup/seventh" element={<Seventh />} />
        <Route path="/signup/a" element={<A />} />
        <Route path="/signup/b" element={<B />} />
        <Route path="/signup/c" element={<C />} />
        <Route path="/signup/skintype" element={<Skintype />} />
        <Route path="/signup/loading" element={<LoadingScreen />} />
        <Route path="/signup/final" element={<Final />} />

        {/* ✅ Article Page */}
        <Route path="/article" element={<Article />} />
      
      </Routes>
    </Router>
  );
};

export default App;
