// donation for flood in noakhali
document.getElementById('btn-noakhali').addEventListener('click', function () {
    const initialTk = getAmountById('initial-amount');

    const donation = donateAmount('donate-noakhali');
    const noakhaliDonation = getAmountById('donation-tk-noakhali')

    // Chech the validity (donation is number or 0 or greater than initial amount)
    if (isNaN(donation) || donation === 0) {
        alert('Please provide valid amount!!!!')
        return;
    }

    if (donation > initialTk) {
        alert("Sorry, You don't have sufficient amount!!!!!");
        return;
    }

    const totalNoakhaliDonation = noakhaliDonation + donation;
    const newInitialTk = initialTk - donation;

    document.getElementById('initial-amount').innerText = newInitialTk;
    document.getElementById('donation-tk-noakhali').innerText = totalNoakhaliDonation;

    const div = document.createElement('p');
    div.innerText = " History Loading"
    // div.classList.add('bg-blue-100')
    // div.innerHTML = `
    // <div class="card w-96 bg-base-100 card-lg shadow-sm">
    //     <div class="card-body">
    //          <h2 class="card-title">Large Card</h2>
    //         <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
         
    //     </div>
    // </div>
    // `
    document.getElementById('history').appendChild(div);
})