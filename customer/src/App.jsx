import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './folders/frontpage/Homepage';
import Profile from './folders/profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
      <Route path='/detail/:id' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
