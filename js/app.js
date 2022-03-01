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