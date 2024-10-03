import React, { useState } from 'react'
import './Bmi_cal.css'
import { BounceLoader } from 'react-spinners';
import underwegith from '../assets/bmi_chart/underweigth.png'
import overweight from '../assets/bmi_chart/overweight.png'
import obese from '../assets/bmi_chart/obese.png'
import normal from '../assets/bmi_chart/normal.png'

function Bmi_cal() {
    const [feet, setFeet] = useState(0)
    const [inch, setInch] = useState(0)
    const [lbs, setLbs] = useState(0)
    const [bmiScore, setBmiScore] = useState(0)
    const [isLoading, setisLoding] = useState(false)

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
            setisLoding(false)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='bmi_cal_container'>
            <h2>BMI Calculator</h2>
            <p>BMI, or Body Mass Index, is a measure that uses height and weight to estimate body fat.</p>

            {isLoading ? <BounceLoader id='loader' /> : bmiScore !== 0 ?

                <>
                    <h3>Your BMI Score is {bmiScore.bmi} </h3>

                    <div id='chart_container'>

                        <div className={`chart_box ${bmiScore.bmi <= 18.5 ? 'selected' : ''}`}>
                            <img src={underwegith} />
                        </div>
                        <div className={`chart_box ${bmiScore.bmi > 18.5 && bmiScore.bmi <= 25 ? 'selected' : ''}`}>
                            <img src={normal} />
                        </div>
                        <div className={`chart_box ${bmiScore.bmi > 25 && bmiScore.bmi <= 30 ? 'selected' : ''}`}>
                            <img src={overweight} />
                        </div>
                        <div className={`chart_box ${bmiScore.bmi > 30 ? 'selected' : ''}`}>
                            <img src={obese} />
                        </div>
                    </div>

                    <button id='form_btn' onClick={() => setBmiScore(0)}>New Form</button>
                </> :
                <form id='bmi_form' onSubmit={() => {
                    event.preventDefault()
                    setisLoding(true)
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


                    <button id='form_btn'>Check</button>
                </form>}


            {/* <div id='chart_container'>
                <div className='chart_box'>
                    <img src={underwegith} />
                    <div className={bmiScore.bmi < 18.5 ? '' : 'shade'}></div>
                </div>
                <div className='chart_box'>
                    <img src={normal} />
                    <div className={bmiScore.bmi < 30 && bmiScore.bmi >= 18.5 ? '' : 'shade'}></div>
                </div>
                <div className='chart_box'>
                    <img src={overweight} />
                    <div className={bmiScore.bmi < 35 && bmiScore.bmi >= 30  ? '' : 'shade'}></div>
                </div>
                <div className='chart_box'>
                    <img src={obese} />
                    <div className={bmiScore.bmi > 35.0 ? '' : 'shade'}></div>
                </div>
            </div> */}

        </div>
    )
}

export default Bmi_cal
