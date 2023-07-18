import { Routes, Route } from "react-router-dom";
// import { Home, DeviceTypes, Devices, Roles } from "./pages/Pages";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/devicetypes" element={<DeviceTypes />} />
          <Route path="/devices" element={<Devices />} /> */}
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
