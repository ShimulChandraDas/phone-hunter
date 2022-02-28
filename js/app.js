const allPhone = () => {
    const searchValue = document.getElementById('search-field').value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then(rep => rep.json())
        .then((data) => console.log(data));

    //console.log(url);
};