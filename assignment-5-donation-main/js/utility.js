
// Actions by Clicking in history button
document.getElementById('btn-history').addEventListener('click', function(){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    
    document.getElementById('btn-history').classList.add('bg-lime-300');
    document.getElementById('btn-donation').classList.remove('bg-lime-300')
})

// Actions by Clicking in Donation button
document.getElementById('btn-donation').addEventListener('click', function(){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');

    document.getElementById('btn-donation').classList.add('bg-lime-300')
    document.getElementById('btn-history').classList.remove('bg-lime-300');
})

//Click donation for flood in noakhali
document.getElementById('btn-noakhali').addEventListener('click', function () {
    const initialTk = getAmountById('initial-amount');

    const donation = donateAmount('donate-noakhali');
    const noakhaliDonation = getAmountById('donation-tk-noakhali')

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
    document.getElementById('donation-tk-noakhali').innerText = totalNoakhaliDonation;

    // Add to the history
    const date = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-full bg-blue-100 card-lg shadow-sm mt-5">
        <div class="card-body">
             <h2 class="card-title">${donation} Taka has donated for flood in Noakhali, Bangladesh.</h2>
            <p> Date: ${date} </p>
        </div>
    </div>
    `
    document.getElementById('history-section').append(div);
})

// click donation for flood in feni
document.getElementById('btn-feni').addEventListener('click', function(){
    const donation = donationDone('donate-feni', 'donation-tk-feni')

    const title = document.getElementById('feni-title').innerText
    // history function
    addHistory(donation, title)
})

// click donation for quota movement
document.getElementById('btn-quota').addEventListener('click', function(){
    const donation = donationDone('donate-quota', 'donation-tk-quota')

    const title = document.getElementById('quota-title').innerText
    // history function
    addHistory(donation, title)
})