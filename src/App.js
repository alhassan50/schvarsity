import './App.css';
import Registration from './Pages/Registration'
import Layout from './Pages/Layout';
import Verification from './Pages/Verification';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Registration />} />
          <Route path="verification" element={<Verification />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
