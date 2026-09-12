import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '@components/layout';
import { Footer } from '@components/layout';
import { QuoteModal } from '@components/ui';
import useAppDispatch from '@hooks/useAppDispatch';
import useAppSelector from '@hooks/useAppSelector';
import { setDarkMode } from '@store/uiSlice';
import AppRoutes from './routes';

function App() {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.ui.darkMode);

  useEffect(() => {
    const savedMode = window.localStorage.getItem('g-tech-dark-mode');
    if (savedMode !== null) dispatch(setDarkMode(savedMode === 'true'));
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('g-tech-dark-mode', String(darkMode));
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <div className="flex-1">
          <AppRoutes />
        </div>
        <Footer />
        <QuoteModal />
      </div>
    </BrowserRouter>
  );
}

export default App;
