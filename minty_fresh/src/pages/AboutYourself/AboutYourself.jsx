// In V6, is the yellow background with text supposed to be an input field or just a long paragraph?
import "./AboutYourself.scss"
const AboutYourself = () => {

    return (
        <div>
            <div>
                <h1>All done! Fantastic job, Sasha Fierce!</h1>
            </div>

        <div className="about-yourself">
            <p>Based on your responses, here's a personalized answer to the question "Tell me about yourself."</p>
        </div>
           
        <button type='button'>View your profile</button>

<button type='button'>Redo questions</button>
    </div>
    );
};

export default AboutYourself;