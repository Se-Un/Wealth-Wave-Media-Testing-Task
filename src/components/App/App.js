import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Game from '../Game/Game';
import Privacy from '../PrivacyPolicy/Privacy';
import ModalAge from '../Modals/ModalAge/ModalAge';
import ModalCookie from '../Modals/ModalCookie/ModalCookie';

function App() {
  return (
    <div className="page">
      <Header />
      <ModalAge />
      <Routes>
        <Route index element={<Main />} />
        <Route path='/game' element={<Game />} />
        <Route path='/policy' element={<Privacy />} />
      </Routes>
      <ModalCookie />
      <Footer />
    </div>
  );
}

export default App;
