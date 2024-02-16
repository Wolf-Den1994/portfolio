import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/about/About';
import Main from './pages/main/Main';
import { store } from './slices/index';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/:block?" element={<Main />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Provider>
  </BrowserRouter>
);

export default App;
