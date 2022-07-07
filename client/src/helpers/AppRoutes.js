import React from "react";
import ScrollToTop from "./ScrollToTop";
import Header from "../components/header/Header";
//other files
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import Footer from "../components/Footer/Footer";
import NFTCollectionPage from "../pages/nftcollectionpage/NFTCollectionPage";
import NFTDetailsPage from "../pages/nftdetailspage/NFTDetailsPage";
import CollectorsPage from "../pages/collectorspage/CollectorsPage";
import LiveAuctionPage from "../pages/liveautionpage/LiveAuctionPage";
import CreateItemPage from "../pages/createitempage/CreateItemPage";
import CreateCollectionPage from "../pages/createcollectionpage/CreateCollectionPage";
import { LiveAuctionData } from "../components/liveauctions/LiveAuctionData";
import EditProfilePage from "../pages/editprofilepage/EditProfilePage";
import SignUpPage from "../pages/signuppage/SignUpPage";
import SignInPage from "../pages/signinpage/SignInPage";


function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="liveauction" element={<LiveAuctionPage/>}/>
            <Route path="nftcollectionexplore" element={<NFTCollectionPage/>}/>
            <Route path="nftcollection" element={<NFTCollectionPage collections="collections"/>}/>
            <Route path="nftcollectionexplore/:id" element={<NFTDetailsPage LiveAuctionData={LiveAuctionData}/>}/>
            <Route path="collectors" element={<CollectorsPage/>}/>
            <Route path="collectors/editprofile" element={<EditProfilePage/>}/>
            <Route path="createitem" element={<CreateItemPage/>}/>
            <Route path="createcollection" element={<CreateCollectionPage/>}/>
            <Route path="signup" element={<SignUpPage/>}/>
            <Route path="signin" element={<SignInPage/>}/>
            
            <Route path="*" element={<h1 className="text-center">404 NOT FOUND</h1>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default AppRoutes;
