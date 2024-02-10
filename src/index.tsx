import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/about/About';
import Main from './pages/main/Main';
import { store } from './slices/index';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <div className="wrapper">
        <BackgroundImage
          srcImage="./images/photos/my.png"
          width={720}
          height={620}
          additionalStyles={{ position: 'absolute', right: 0, zIndex: -1 }}
        />
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Provider>
  </BrowserRouter>,
);
