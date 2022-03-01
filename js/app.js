// get input search input value and dynamic url function 
const getPhones = () => {
    // show spinner
    document.getElementById('spinner').style.display = 'block'
    const inputField = document.getElementById('search-input').value;
    if (inputField == '') {
        // show empty error
        document.getElementById('empty-error').style.display = 'block';
        document.getElementById('spinner').style.display = 'none'
    } else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputField}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhones(data.data))
        //clear input value
        document.getElementById('search-input').value = '';

        // hide empty input error
        document.getElementById('empty-error').style.display = 'none';
    }
};

// display phone function 
const displayPhones = (allPhones) => {
    const products = allPhones.slice(0, 20)
    if (products.length == 0) {
        // input error handleing
        document.getElementById('error-input').style.display = "block"
        // hide spinner handaling
        document.getElementById('spinner').style.display = 'none'
    } else {
        // hide search input error handle
        document.getElementById('error-input').style.display = "none"
        // get phone section
        const phonesOutputAdd = document.getElementById('phones');
        // remove old search result
        phonesOutputAdd.textContent = ''
        //Add phones Dynamically
        products?.forEach(product => {
            const div = document.createElement('div')
            div.classList.add("col-12", "col-lg-4")
            div.innerHTML = `
            <div class="card border-0 shadow p-3 rounded mx-auto" style="width:20rem">
            <h1 class="text-uppercase text-center fw-bold  bg-info m-3 p-2 text-white">${product.brand} </h1>
            <img src="${product.image}" class="card-img-top" alt="..." />
                 <div class="card-body">
                    <h5 class="text-center">${product.phone_name}</h5>
                    
                    <button onclick="getPhonesById('${product.slug}')" class="mx-auto btn btn-primary">See Details</button>
                </div>
            </div>
            `;
            phonesOutputAdd.appendChild(div)
            /*    hide spinner and loading */
            document.getElementById('spinner').style.display = 'none'
        })
    }
};

/* get Phone by id  */
const getPhonesById = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhonesDetails(data.data))
};