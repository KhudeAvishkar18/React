import Navbar from './Navbar';
import NewCard from './NewCard';
import Sticker from './Sticker';

function PW_Project() {
    return (
        <>
            <div className="bg-slate-950 h-screen">
                <Navbar />

                <Sticker />

                <NewCard />
            </div>
        </>
    )
}

export default PW_Project;