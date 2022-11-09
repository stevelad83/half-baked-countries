/* Imports */

import { getCountries, getContinents } from './fetch-utils.js';
import { renderContinentOption, renderCountry } from './render-utils.js';

/* Get DOM Elements */
const countryList = document.getElementById('country-list');
const searchForm = document.getElementById('search-form');
const continentSelect = document.getElementById('continent-select');

/* State */
let countries = [];
let continents = [];

/* Events */
window.addEventListener('load', async () => {
    findCountries();
    const response = await getContinents();
    continents = response.data;
    displayContinentOptions();
    // Slice B: call asynchronous getContinents fetch function and set to response variable
    // Slice B: set the continents state to the response.data
    // Slice B: call displayContinentOptions function;
});

async function findCountries(continent) {
    const response = await getCountries();
    // Slice C: add continent argument to getCountries function call
    // console log the response object to see all of the nested information returned
    countries = response.data;

    displayCountries();
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    // Slice C: Call findCountries with continent from formData
});

/* Display Functions */
function displayCountries() {
    countryList.innerHTML = '';
    for (const country of countries) {
        const countryEl = renderCountry(country);
        countryList.append(countryEl);
    }
}

function displayContinentOptions() {
    for (const continent of continents) {
        console.log(continent);
        const option = renderContinentOption(continent);
        continentSelect.append(option);
        // Slice B: Call continent render function and append to continent selector
    }
}
