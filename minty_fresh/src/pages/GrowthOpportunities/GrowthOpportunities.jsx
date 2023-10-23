
//MF1-13
import "./GrowthOpportunities.scss"
import Header from '../../components/Header/Header';
import React, {useState} from "react";


//TODO: finish the dropdown and add styling
const GrowthOpportunites = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const checkbox = ["Communication", "Self-perception", "Confidence", "Preparing for an interview", "Technical skills", "Other"];

    //sets the selected option from the dropdowns
    const handleSelectChange = (e) => {
        
        setSelectedOption(e.target.value);
    };
//TODO: fix checkboxes and do final styling
    return (
        <div className="growth">
            <section>
                <Header/>
            </section>
            <div className="growth_header-container">
                <p className="step-text">Step 4</p>
                <h1 className="title">Let's explore your opportunites for growth</h1>
            </div>
            <form method="post" onSubmit={""}>
                <div className="growth_form">
                
                    <label className="growth_question">
                        <p>What's your gremlin name?</p>
                        <textarea className="growth_question-text-area"
                        name="gremlin-name"
                        placeholder="Ex. Debbie Downer"/>
                    </label>
                    <label className="growth_question">
                    What are some things you're working to improve on?<br/>
                        <div className="growth_checkbox-group">

                            <label classname="growth_checkbox-label">Communication
                                <input type="checkbox" 
                                className="growth_checkbox"
                                id="communication"
                                name="growth"
                                value="communication"
                                checked=""
                                onChange={""}/>
                            </label>
                        
                            <label classname="growth_checkbox-label">Self-perception
                                <input type="checkbox" 
                                className="growth_checkbox"
                                id="self-perception"
                                name="growth"
                                value="self-perception"
                                checked=""
                                onChange={""}/>
                            </label>
                            
                            <label classname="growth_checkbox-label">Confidence
                            <input type="checkbox" 
                                className="growth_checkbox"
                                id="confidence"
                                name="growth"
                                value="confidence"
                                checked=""
                                onChange={""}/>
                            </label>
                            
                            <label classname="growth_checkbox-label">Preparing for an interview
                                <input type="checkbox" 
                                className="growth_checkbox"
                                id="interview-preparation"
                                name="growth"
                                value="interview-preparation"
                                checked=""
                                onChange={""}/>
                            </label>
                            
                            <label classname="growth_checkbox-label">Technical Skills
                                <input type="checkbox" 
                                className="growth_checkbox"
                                id="technical-skills"
                                name="growth"
                                value="technical-skils"
                                checked=""
                                onChange={""}/>
                            </label>
                            
                            <label classname="growth_checkbox-label">Other
                                <input type="checkbox" 
                                className="growth_checkbox"
                                id="other"
                                name="growth"
                                value="other"
                                checked=""
                                onChange={""}/>
                            </label>
                        </div>
                    </label>
                    <label className="growth_question">
                        <p>How does your imposter syndrome show up for you?</p>
                        <textarea className="growth_question-text-area"
                        name="why-this-role"
                        placeholder="Ex. It ususally shows up when others finish work tasks faster than I do because I end up questioning if I'm good enough to do the job."/>
                    </label>

                </div>
            </form>
            <button className="submit-button">Submit</button>
        </div>
    )
}

export default GrowthOpportunites;