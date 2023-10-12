import { Routes, Route } from "react-router-dom";
import Phones from "./pages/Phones";
import PhonesDetails from "./pages/PhonesDetails"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/phones' element={<Phones />} />
        <Route path='/phones/:phoneId' element={<PhonesDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
