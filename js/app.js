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
         <div class="pro-pic">
             <img class="w=25" src="" alt="">
         </div>
            <h2>Name:</h2>
            <button class="btn btn-success details-btn">Show Details</button>
         </div>`;
        parent.appendChild(div);
    }

    console.log(phones);
}