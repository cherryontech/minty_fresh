import './Strengths.scss';
import Header from '../../components/Header/Header';

const Strengths = () => {

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        // const form = e.target;
        // const formData = new FormData(form);
    }


    return (
        <div className='strengths'>
            <section> 
                <Header/>
            </section>
            <div className='strengths__header-container n'>
                <p className="step__text"> Step 2 </p>
                <h1 className="strengths__title">Let's highlight your strengths & skills</h1>
            </div>
            <form method="post" onSubmit={handleSubmit}>
                <div className="strengths__form">

                <label className='strengths__question'>
                    What's your most common compliment?
                    <textarea className='strengths__question-textbox'
                    name="compliments"
                    placeholder="Ex. I usually get good compliments about my graphic illustrations and my verbal communication."
                    />
                </label>
                    <label className='strengths__question'>
                        <p>What activities do you enjoy and have a lot of practice doing?</p>
                        <textarea className='strengths__question-textbox'
                        name="activities"
                        placeholder="Ex. I love to doodle and create graphics for my social media. I enjoy teaching beginners how to paint and I've been doing it for 3 years."
                        />
                    </label>
                    <label className='strengths__question'>
                        <p>What tools or methodologies are you most comfortable working with?</p>
                        <textarea className='strengths__question-textbox'
                        name="methodologies"
                        placeholder="Ex. I'm most comfortable with using Figma, Adobe, and Canva. I follow atomic design principles when creating my designs."
                        />
                    </label>
                </div>
                <button className='button__next'> Next </button>
            </form>
        </div>
    )
}

export default Strengths;