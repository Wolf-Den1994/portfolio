import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Header from './components/Header/Header';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <div className="wrapper">
      <BackgroundImage
        srcImage="./photos/my.png"
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
    </div>
  </BrowserRouter>,
);
