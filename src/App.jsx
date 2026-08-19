import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Benefits from './components/sections/Benefits';
import Studio from './components/sections/Studio';
import Projects from './components/sections/Projects';
import Process from './components/sections/Process';
import Reviews from './components/sections/Reviews';
import AuthPage from './pages/AuthPage';
import {ToastProvider} from './components/ui/Toast';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const path=window.location.pathname;
  if(path==='/login'||path==='/signup')return <ToastProvider><AuthPage mode={path.slice(1)}/></ToastProvider>;
  return <ToastProvider><Home/></ToastProvider>;
}
function Home(){useScrollReveal();return <><div className="hero-shell"><Header /><Hero /></div><main><Benefits /><Studio /><Projects /><Process /><Reviews /></main><Footer /></>}
