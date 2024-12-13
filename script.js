const advice_URL = "https://api.adviceslip.com/advice";

const randomAdvice = document.getElementById('advice');
const adviceNum = document.querySelector('.advice-num');

async function generateNewAdvice(){
    const promise = await fetch(advice_URL);
    const processedResponce = await promise.json();
    const advice = processedResponce.slip.advice;
    const adviceID = processedResponce.slip.slip_id;

    // adviceNum.innerText = `${adviceID}`;
    randomAdvice.innerText = advice;
    console.log(`${adviceID}`);
    
    

}

document.getElementById('btn').addEventListener('click',generateNewAdvice);