import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About, Contact, Home, NotFound } from "./pages";
import ModalProvider from "./context/providers/ModalProvider";

function App() {
  return (
    <Router>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ModalProvider>
    </Router>
  );
}

export default App;
