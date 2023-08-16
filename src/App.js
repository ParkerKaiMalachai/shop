import Header from './components/Header/Header';
import './all.scss';
import Content from './containers/Content/Content';
import { Route, Routes } from 'react-router-dom';
import ContentPage from './containers/Content/ContentPage';
import Footer from './components/Footer/Footer';
import Basket from './containers/Basket/Basket';
import Favorites from './containers/Favorites/Favorites';
import LoginPage from './containers/LoginPage/LoginPage.tsx';
import ContentNewRelease from './containers/Content/ContentNewRelease';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/books/:isbn13" element={<ContentPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/newposts" element={<ContentNewRelease />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
