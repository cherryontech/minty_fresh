//MF1-15
import "./FutureGoals.scss"
import Header from '../../components/Header/Header';
import React, {useState} from "react";


//TODO: finish the dropdown and add styling
const FutureGoals = () => {
    const [selectedOption, setSelectedOption] = useState('');


    //sets the selected option from the dropdowns
    const handleSelectChange = (e) => {
        
        setSelectedOption(e.target.value);
    };

    return (
        <div className="future-goals">
            <section>
                <Header/>
            </section>
            <div className="future-goals_header-container">
                <p className="step-text">Step 4</p>
                <h1 className="title">Let's see where you see yourself going</h1>
            </div>
            <form method="post" onSubmit={""}>
                <div className="future-goals_form">
                
                    <label className="future-goals_question">
                        <p>What job or role are you hoping to land?</p>
                        <textarea className="future-goals_question-text-area"
                        name="role-wanted"
                        placeholder="Ex. I'm actively looking to land a Game Illustrator position in a big corporation"/>
                    </label>
                    <label className="future-goals_question">
                        <p>Why do you want this job or role?</p>
                        <textarea className="future-goals_question-text-area"
                        name="why-this-role"
                        placeholder="Ex. This role would give me the oppotunity to reach many with my art and collaborate with other artists"/>
                    </label>
                    <label className="future-goals_question"> 
                        <p>What are the top 3 industries you see yourself working in?</p>
                        <select className="future-goals_dropdown" name="choice-1" value={selectedOption} onChange={handleSelectChange}>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <select className="future-goals_dropdown" name="choice-2" value={selectedOption} onChange={handleSelectChange}>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <select className="future-goals_dropdown" name="choice-3" value={selectedOption} onChange={handleSelectChange}>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default FutureGoals;