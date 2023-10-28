import "./HomePage.scss"
import { useNavigate } from 'react-router-dom';
import mobileLogo from '../../assets/images/1-LandingPage-illustration-main-Mobile.png'

const Homepage = () => {


    const navigate = useNavigate();


    //TODO: clean up styling and add img
    return (
        <div className="homepage">
            <div className="homepage_get-started-container">
                <img className = "mobile-logo" src={mobileLogo} alt = "Empower Logo. Person flexing."/>
                <h1>Welcome to Empower</h1>
                <p>A way to tame your imposter syndrome while job hunting</p>
                <button className="get-started-btn" 
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/personaname')
                }}>Get Started</button>
            
            </div>
            <div className="homepage_onboarding-container">
                <p className="empower-yourself">How Empower boosts your confidence</p>
                <h2>Unleash your best self</h2>
                <p>We help you brainstorm about your best qualities to create a personal profile</p>
                <h2>Externalize your imposter</h2>
                <p>We enable you to personify your insecurities into a gremlin you can tame</p>
                <h2>Gear up for job interviews</h2>
                <p>We create personalized interview answers as you shape your profile and gremlin</p>
            </div>
        </div>
    );
};

export default Homepage;
