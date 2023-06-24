import Deals from '../Deals/Deals';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import OrderBanner from '../OrderBanner/OrderBanner';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='wrapper'>
        <OrderBanner />
        <Deals />
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
