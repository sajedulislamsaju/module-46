// console.log('here some js file ')

const  loadCountryes = () => {
    fetch (`https://restcountries.com/v3.1/all`)
    .then (res => res.json())
    .then (data => displayCountryes(data))
}

const displayCountryes = countries => {
    // console.log(countries);
    const  allcountriesHTML = countries.map(countries => getCountriesHTML())

    console.log(allcountriesHTML)
}

const getCountriesHTML = countries => {
    return`
    <div>
        <h2>${country.name.common}</h2>
    </div>
    `
}

loadCountryes();