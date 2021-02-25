import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div className='md:flex-row '>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
