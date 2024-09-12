import React, { useState } from 'react'
import './Bmi_cal.css'

function Bmi_cal() {
    const [feet, setFeet] = useState(0)
    const [inch, setInch] = useState(0)
    const [lbs, setLbs] = useState(0)
    const [bmiScore, setBmiScore] = useState(0)

    const url = `https://nutrition-calculator.p.rapidapi.com/api/bmi?measurement_units=std&feet=${feet}&inches=${inch}&lbs=${lbs}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_API_KEY,
            'x-rapidapi-host': 'nutrition-calculator.p.rapidapi.com'
        }
    };

    const get_bmi = async () => {

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setBmiScore(result)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='bmi_cal_container'>
            <h2>BMI Calculator</h2>
            <p>BMI, or Body Mass Index, is a measure that uses height and weight to estimate body fat.</p>

            <form id='bmi_form' onSubmit={() => {
                event.preventDefault()
                console.log(feet, inch, lbs)
                get_bmi()
            }}>
                <h4>Height</h4>
                <label>Feet</label>
                <input type='number' value={feet} onChange={(e) => setFeet(e.target.value)}></input>
                <label>Inches</label>
                <input type='number' value={inch} onChange={(e) => setInch(e.target.value)}></input>

                <h4>Weight</h4>
                <label>lbs</label>
                <input type='number' value={lbs} onChange={(e) => setLbs(e.target.value)}></input>

                <button>Check</button>
            </form>

            
            {bmiScore !== 0 && <p>{bmiScore.bmi} you're normal weight! </p>}
            
        </div>
    )
}

export default Bmi_cal
