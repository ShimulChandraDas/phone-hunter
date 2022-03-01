//search handeling
const allPhone = () => {
    const searchValue = document.getElementById('search-field').value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then(rep => rep.json())
        .then((data) => displayPhoneDetails(data.data));

    //console.log(url);
};
const displayPhoneDetails = (phones) => {

    for (const phone of phones) {
        const parent = document.getElementById('phone-container');
        const div = document.createElement('div');
        div.innerHTML = ` <div 
            class=" card p-3  border bg-light">
            <h2>${phone.brand}</h2>
         <div class="pro-pic">
             <img class="w=25" src="${phone.image}" alt="">
         </div>
            <h4>${phone.phone_name}</h4>
            <button onclick="details('helo')" class="btn btn-success details-btn">Show Details</button>
         </div>`;
        parent.appendChild(div);
    }

    //console.log(phone);
};

const details = (info) => {
    console.log('kiked', info)
}