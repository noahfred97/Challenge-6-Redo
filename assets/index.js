var searchforCity = document.getElementById('city');

var cityList;
if (localStorage.getItem('cityname') === null) {
    cityList = [];
} else {
    cityList=JSON.parse(localStorage.getitem('cityname'));
}

var searchButton = document.getElementById('SearchButton')

searchButton.addEventListener('click', function () {
    
    var city = searchCity.value;
    displayWeather(city);
    if (cityList.indexOf(city) === -1) {
        storyCity(city);
        pastSearches(city);
    }
});
function storeCity(cityname) {
    cityList.push(cityname);
    localStorage.setItem('cityname', JSON.stringify(cityList));

}

function SearchHistory() {
    for (i = 0; i < cityList.length; i++) {
    
        pastSearches(cityList[i])
    
    }

}
var weatherforecast = document.getElementById('weatherforecast');

const ssapiKey = '';

function pastSearches(city) {
    var pastSearchEL = document.getElementById('past');
    var pastSearchButton = document.createElement('button');
    pastSearchButton.textContent = city;
    pastSearchButton.addEventListener('click', function () {
    displayWeather(this.innerHTML);
    });
    pastSearchEL.appendChild(pastSearchButton)
}