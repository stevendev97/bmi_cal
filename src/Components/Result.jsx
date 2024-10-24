import React, { useRef, useEffect } from 'react'

import underwegith from '../assets/bmi_chart/underweigth.png'
import overweight from '../assets/bmi_chart/overweight.png'
import obese from '../assets/bmi_chart/obese.png'
import normal from '../assets/bmi_chart/normal.png'

function Result({ bmiScore, setBmiScore }) {

    const underweightRef = useRef(null);
    const normalRef = useRef(null);
    const overweightRef = useRef(null);
    const obeseRef = useRef(null);


    useEffect(() => {
        // Ensure bmiScore is valid and scroll after a small delay
        if (bmiScore?.bmi) {
            setTimeout(() => {
                if (bmiScore.bmi <= 18.5 && underweightRef.current) {
                    underweightRef.current.scrollIntoView({ behavior: 'smooth' });
                } else if (bmiScore.bmi > 18.5 && bmiScore.bmi <= 25 && normalRef.current) {
                    normalRef.current.scrollIntoView({ behavior: 'smooth' });
                } else if (bmiScore.bmi > 25 && bmiScore.bmi <= 30 && overweightRef.current) {
                    overweightRef.current.scrollIntoView({ behavior: 'smooth' });
                } else if (bmiScore.bmi > 30 && obeseRef.current) {
                    obeseRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Add a 100ms delay to ensure elements are rendered
        }
    }, [bmiScore]); 

    return (
        <div>
        
            <>
                <h3>Your BMI Score is {bmiScore?.bmi} </h3>

                <div id='chart_container'>

                    <div className={`chart_box ${bmiScore?.bmi <= 18.5 ? 'selected' : ''}`} ref={underweightRef}>
                        <img src={underwegith} />
                    </div>
                    <div className={`chart_box ${bmiScore?.bmi > 18.5 && bmiScore.bmi <= 25 ? 'selected' : ''}`} ref={normalRef}>
                        <img src={normal} />
                    </div>
                    <div className={`chart_box ${bmiScore?.bmi > 25 && bmiScore.bmi <= 30 ? 'selected' : ''}`} ref={overweightRef}>
                        <img src={overweight} />
                    </div>
                    <div className={`chart_box ${bmiScore?.bmi > 30 ? 'selected' : ''}`} ref={obeseRef}>
                        <img src={obese} />
                    </div>
                </div>

                <button id='form_btn' onClick={() => setBmiScore(0)}>New Form</button>
            </>
        </div>
    )
}

export default Result
