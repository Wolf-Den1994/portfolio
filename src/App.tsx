import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import WOW from 'wowjs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollUp from './components/ScrollUp/ScrollUp';
import About from './pages/about/About';
import Main from './pages/main/Main';
import Skills from './pages/skills/Skills';
import { store } from './slices/index';

const App = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ParallaxProvider>
          <div className="wrap">
            <Header />
            <Routes>
              <Route path="/:block?" element={<Main />} />
              <Route path="about" element={<About />} />
              <Route path="skills" element={<Skills />} />
            </Routes>
            <ScrollUp />
          </div>
          <Footer />
        </ParallaxProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
