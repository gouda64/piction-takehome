import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Name from "./pages/Name";
import Birthday from "./pages/Birthday";
import Issue from "./pages/Issue";
import Summary from "./pages/Summary";

export default function CustomRoutes() {
    return (
    <Router>
        <Routes>
           <Route path="/" element={<Main/>}/>
           <Route path="/name" element={<Name/>}/>
           <Route path="/dob" element={<Birthday/>}/>
           <Route path="/issue" element={<Issue/>}/>
           <Route path="/summary" element={<Summary/>}/>
        </Routes>
    </Router>
  );
}
