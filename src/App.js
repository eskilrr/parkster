import {Route, Routes} from "react-router-dom"
import Layout from "./components/layout/Layout";
import SearchPage from "./pages/SearchPage";
import AboutPage from "./pages/AboutPage";
import AllParkingPage from "./pages/AllParkingPage";
import NewParkingSpotPage from "./pages/NewParkingSpotPage";

function App() {
  return (
      <Layout>
        <Routes>
            <Route path="/" element={<SearchPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/parkingspots" element={<AllParkingPage/>}/>
            <Route path="newparkingspot" element={<NewParkingSpotPage/>}/>
        </Routes>
      </Layout>
  );
}

export default App;
