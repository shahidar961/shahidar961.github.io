import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'; // Create this if needed, or use inline/main css

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <Sidebar />
            <div className="main-wrapper">
                <Header />
                <main className="main-content">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
