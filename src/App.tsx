import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Event from "./pages/Event";

function App() {
  return (
    <BrowserRouter>
      <div className="text-center">
        <p className="text-primary2">diwi</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="event" element={<Event />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
