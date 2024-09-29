import { Route, Routes } from "react-router-dom";
import Test from "../pages/test";
import Index from "../pages";
import AddImagesIndex from "../components/AddImages/AddImagesIndex";
import Login from "../components/Login/Login";
import ViewAllLocations from "../components/ViewAllLocations/ViewAllLocationsIndex";
import Home from "../components/Home";
import Register from "../components/Login/Register";

export default function Router() {
    return (
        // <BrowserRouter basename="/app">
            <Routes>
                <Route path="/" element={<Index />} >
                    <Route index element={<Home />} />
                    <Route path="/ViewAllLocations" element={<ViewAllLocations />} />
                    <Route path="/AddImagesIndex" element={<AddImagesIndex />} /> 
                    {/* <Route path="/Login" element={<Login />} />    
                    <Route path="/Register" element={<Register />} />      */}
                </Route>
            </Routes>
        // </BrowserRouter>
    )
}