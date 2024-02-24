import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import WOW from 'wowjs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/about/About';
import Main from './pages/main/Main';
import { store } from './slices/index';

const App = () => {
  useEffect(() => {
    new WOW.WOW({
      live: true,
    }).init();
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ParallaxProvider>
          <div className="wrapper">
            <Header />
            <Routes>
              <Route path="/:block?" element={<Main />} />
              <Route path="about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </ParallaxProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
