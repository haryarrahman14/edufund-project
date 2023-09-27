import './App.css';
import { useGetBanners } from './hooks/useBanners';
import { useGetTestimonials } from './hooks/useTestimonials';

function App() {
  useGetBanners();
  useGetTestimonials();

  return <div className="text-green-500">Test</div>;
}

export default App;
