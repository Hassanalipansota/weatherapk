import { Routes, Route } from 'react-router-dom';
import Cover from './components/cover';
import Weather from './components/weather';
import Login from './components/login';
import Signup from './components/signup';
import WithHeaderLayout from './components/withHeaderLayout';
import ContactUs from './components/contactus';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route element={<WithHeaderLayout />}>
        <Route path="/weather" element={<Weather />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Route>
    </Routes>
  );
}

export default App;
