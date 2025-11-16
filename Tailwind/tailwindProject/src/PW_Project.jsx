import FeaturesList from './FeaturesList';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Products from './Products';

function PW_Project() {
    return (
        <>
            <div className="bg-slate-950">
                <Navbar />
                <Hero />
                <FeaturesList />
                <Products />
                <Footer />
            </div>
        </>
    )
}

export default PW_Project;