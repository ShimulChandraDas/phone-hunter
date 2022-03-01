//search handeling
const allPhone = () => {
    const searchValue = document.getElementById('search-field').value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then(rep => rep.json())
        .then((data) => displayPhone(data.data));

    //console.log(url);
};
const displayPhone = (phones) => {

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
            <button onclick="details('${phone.slug}')" class="btn btn-success details-btn">Show Details</button>
         </div>`;
        parent.appendChild(div);
    }

    //console.log(phone);
};

const details = (id) => {
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(rep => rep.json())
        .then((data) => displayPhoneDetails(data.data));

    //console.log(url)
};

const displayPhoneDetails = (info) => {

    document.getElementById('details-container').innerHTML = `
    <div>
    <h1>${info.name}</h1>
    <img class="w=25" src="${info.image}" alt="">
    <h3>${info.slug}</h3>
    <h4>${info.mainFeatures.storage}</h4>



    <h6> ChipSet: ${info.mainFeatures.chipSet}</h6>
    <h6> Display Size:  ${info.mainFeatures.displaySize}</h6>
    <h6> Memory: ${info.mainFeatures.memory}</h6>
    <span>${info.mainFeatures.sensors[0]}</span>, <span>${info.mainFeatures.sensors[1]}</span>, <span>${info.mainFeatures.sensors[2]}</span>, <span>${info.mainFeatures.sensors[3]}</span>,<span>${info.mainFeatures.sensors[4]}</span>,<span>${info.mainFeatures.sensors[5]}</span>,<span>${info.mainFeatures.sensors[6]}</span>

    </div>
    `
    console.log(info)


}
