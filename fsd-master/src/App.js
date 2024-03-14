import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeUi from './components/HomeUi';
import Navigation from './components/Navigation';
import AboutUi from './components/AboutUi';
import Teams from './components/Teams';
import TableUi from './components/TableUi';
import AddUi from './components/AddUi';
import ContactUi from './components/ContactUi';
import UpdateUi from './components/UpdateUi';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomeUi/>}/>
        <Route path='/teams' element={<Teams/>}/>
        <Route path='/about' element={<AboutUi/>}/>
        <Route path='/contact' element={<ContactUi/>}/>
        <Route path='/table' element={<TableUi/>}/>
        <Route path='/addPlayer' element={<AddUi/>}/>
        <Route path='/updatePlayer/:pid' element={<UpdateUi/>}/>
      
        </Routes>
    </div>
  );
}

export default App;
