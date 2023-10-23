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

//   function handleSubmit(e) {
//     // Prevent the browser from reloading the page
//     e.preventDefault();

//     // Read the form data
//     const form = e.target;
//     const formData = new FormData(form);

//     // You can pass formData as a fetch body directly:
//     fetch('/some-api', { method: form.method, body: formData });

//     // Or you can work with it as a plain object:
//     const formJson = Object.fromEntries(formData.entries());
//     console.log(formJson);
//   }


    return (
        <div className='strengths'>
            <section> 
                <Header/>
            </section>
            <p className="step__text"> Step 2 </p>
            <h2 className="strengths__title">Let's highlight your strengths & skills</h2>
            <form className="strengths__form" method="post" onSubmit={handleSubmit}>
                    <label className="strengths__form-content">
                        What's your most common compliment? 
                        <textarea 
                            type="text"
                            required
                            name="compliment" 
                            placeholder="Ex. I usually get good compliments about my graphic illustrations and my verbal communication."
                        />
                    </label>
                    <label className="strengths__form-content">
                        What activities do you enjoy and have a lot of practice doing?
                        <textarea 
                            type="text"
                            required
                            name="myCheckbox" 
                            placeholder="Ex. I love to doodle and create graphics for my social media. I enjoy teaching beginners how to paint and I've been doing it for 3 years." 
                        />
                    </label>
                    <label className="strengths__form-content">
                        <p>What tools or methodologies are you most comfortable working with?</p>
                        <textarea 
                            type="unkown" 
                            name="Seesoon" 
                            placeholder="Ex. I'm most comfortable with using Figma, Adobe, and Canva. I follow atomic design principles when creating my designs."
                            />
                    </label>
                <button className="button__next" type="submit"> Next</button>
            </form>
        </div>
    )
}

export default Strengths;


