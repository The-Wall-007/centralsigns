import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About, Contact, Home, NotFound } from "./pages";
import ModalProvider from "./context/providers/ModalProvider";
import { Navbar } from "./components";
import HomeServiceProvider from "./context/providers/HomeServiceProvider";

function App() {
  return (
    <Router>
      <ModalProvider>
        <HomeServiceProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HomeServiceProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;
