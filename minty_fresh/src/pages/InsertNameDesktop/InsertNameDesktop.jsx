import './InsertNameDesktop.scss';

const InsertNameDesktop = () => {

    return (
    
        <div>
            <h1>Let's start with a name</h1>

            <p>What's your name?</p>

            <div>
                <input className="write-name" type='text' name='textbox' placeholder='Ex. Sasha Fierce'></input>
            </div>

            <div>
           <button className="btn" type='button'>Next</button>
           </div>
        </div>
        
    )
}

export default InsertNameDesktop;