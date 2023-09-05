import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider from './Slider';
import slides from './mock.json';

function Home() {
    return (
        <div className="Home">
            <slider slides={slides}/>
        </div>
    );
}

export default Home;