function getAmountById(id){
    const initialAmount = document.getElementById(id).innerText;
    const initialTk = parseFloat(initialAmount);
    return initialTk;
}

function donateAmount(id){
    const donateAmount = document.getElementById(id).value;
    const donateTk = parseFloat(donateAmount);
    return donateTk;
    
}




document.getElementById('btn-noakhali').addEventListener('click', function(){
    getAmountById('donation-tk-noakhali')
})