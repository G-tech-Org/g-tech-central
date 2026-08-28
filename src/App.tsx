import { BrowserRouter } from 'react-router-dom';
import { Header } from '@components/layout';
import { Footer } from '@components/layout';
import { QuoteModal } from '@components/ui';
import AppRoutes from './routes';

function App() {
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
