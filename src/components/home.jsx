import React from "react";
import Navbar from "./Navbar";
import CareSection from "../pages/Home/components/CareSection";
import ArticleSection from "../pages/Home/components/ArticleSection";
import FeedbackSection from "../pages/Home/components/FeedbackSection";
import Footer from "./Footer";
import ContactUs from "../pages/Home/components/ContactUs";
import Introduction from "../pages/Home/components/IntroductionSection";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <CareSection />
      <Introduction />
      <ArticleSection />
      <FeedbackSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
