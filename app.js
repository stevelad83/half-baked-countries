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
});

async function findCountries(continent) {
    const response = await getCountries(continent);
    countries = response.data;

    displayCountries();
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    findCountries(formData.get('continent'));
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
        const option = renderContinentOption(continent);
        continentSelect.append(option);
    }
}
