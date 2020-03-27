import React, { useState } from 'react'
import BMICalculator from './BMICalculator'

const BMI = () => {
    const [bmiValue, setBmiValue] = useState(0)

    const getBmiClass = bmi => {
        if (bmi >= 1 && bmi <= 18.5) return 'Underweight'
        if (bmi >= 18.5 && bmi <= 24.9) return 'Normal Weight'
        if (bmi >= 24.9 && bmi <= 29.9) return 'Overweight'
        if (bmi >= 30) return 'Obese'
    }

    const bmiCategory = getBmiClass(bmiValue)
    let bmiClass = ''
    if (bmiValue > 0 && bmiCategory) {
        bmiClass = bmiCategory.split(' ')[0].toLowerCase()
    }
    return (
        <>
           <div className="calculator">
               <h3>Body Mass Index calculator</h3>
               <div className="bmi-result-container">
                   <div className="bmi-result">
                       <div className="bmi-result-number">
                           Body Mass Indez (BMI) = {bmiValue}
                       </div>
                       <div className={`bmi-category ${bmiClass}`}>
                           {bmiCategory}
                       </div>
                   </div>
                   <BMICalculator getBmiValue={setBmiValue} />
               </div>
           </div>
        </>
    )
}

export default BMI
