import {BrowserRouter, Routes, Route } from 'react-router-dom'

//pages and componenets
import Navbar from './Components/Navbar';
//import Home from './Pages/Home';
//import Happy from './Pages/Happy';
import VolunteerDeliveryAccept from './Pages/Volunteer/VolunteerDeliveryAccept';
import VolunteerMgmt from './Pages/Volunteer/VolunteerMgmt';
import FoodAidRequest from './Pages/Organization/FoodAidRequestPage';
import OrganizationMgmt from './Pages/Organization/OrganizationMgmtPage';
import DonorAcceptRequest from './Pages/Donor/DonorAcceptRequestPage';
import DonorMgmt from './Pages/Donor/DonorMgmtPage';
// import FoodAidRequest from './Pages/Organization/FoodAidRequestPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
            <Routes>
                <Route
                  path="/volunteer-delivery-accept"
                  element={<VolunteerDeliveryAccept/>}
                />
                <Route
                  path="/volunteer-mgmt"
                  element={<VolunteerMgmt/>}
                />
                <Route
                  path="/foodaidrequest"
                  element={<FoodAidRequest/>}
                />
                <Route
                  path="/organization-mgmt"
                  element={<OrganizationMgmt/>}
                />
                <Route
                  path="/donor-accept-request"
                  element={<DonorAcceptRequest/>}
                />
                <Route
                  path="/"
                  element={<DonorMgmt/>}
                />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
