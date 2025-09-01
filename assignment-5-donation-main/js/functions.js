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

//Click donation function
function donationDone(donate, destination){

    const initialTk = getAmountById('initial-amount');

    const donation = donateAmount(donate);
    const noakhaliDonation = getAmountById(destination);

    // Check the validity (donation is number or 0 or greater than initial amount)
    if (isNaN(donation) || donation <= 0) {
        alert('Please provide valid amount!!!!')
        document.getElementById('my_modal_5').classList.add('hidden');
        return;
    }

    if (donation > initialTk) {
        alert("Sorry, You don't have sufficient amount!!!!!");
        document.getElementById('my_modal_5').classList.add('hidden');
        return;
    }

    const totalNoakhaliDonation = noakhaliDonation + donation;
    const newInitialTk = initialTk - donation;

    document.getElementById('initial-amount').innerText = newInitialTk;
    document.getElementById(destination).innerText = totalNoakhaliDonation;

    return donation;
}

//Function Add to the history
function addHistory(donate, donateTitle){
    const date = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-full bg-blue-100 card-lg shadow-sm mt-5">
        <div class="card-body">
             <h2 class="card-title">${donate} Taka ${donateTitle}.</h2>
            <p> Date: ${date} </p>
        </div>
    </div>
    `
    document.getElementById('history-section').append(div);
}

    
    


