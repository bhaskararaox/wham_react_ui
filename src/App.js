import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { SendFeedback } from "./components/Pages/SendFeedback";
import { Progress } from "./components/Pages/Progress";
import { Tools } from "./components/Pages/Tools";
import { Workload } from "./components/Pages/Workload";
import { Proxy } from "./components/Pages/Proxy";
import { ProxyData } from "./components/Pages/ProxyData";
import { Correlation } from "./components/Pages/Correlation";
import { Query } from "./components/Pages/Query";
import { SiliconSimulationCorrelation } from "./components/Pages/SiliconSimulationCorrelation";

function App() {
  return (
    <>
      <Router>      
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/"   element={<Home />} />
            <Route path="/wham/home"  element={<Home />} />            
            <Route path="/wham/progress" element={<Progress />} />
            <Route path="/wham/sendFeedback" element={<SendFeedback />} />
            <Route path="/wham/tools" element={<Tools />} />
            <Route path="/wham/workload" element={<Workload />} />
            <Route path="/wham/proxy" element={<Proxy />} />
            <Route path="/wham/proxyData" element={<ProxyData />} />
            <Route path="/wham/correlation" element={<Correlation />} />
            <Route path="/wham/query" element={<Query />} />
            <Route path="/wham/siliconSimulationCorrelation" element={<SiliconSimulationCorrelation />} />
            
          </Routes>          
        </div>

      </Router>
  </>
  );
}

export default App;
