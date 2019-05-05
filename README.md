# README

## Description
Express Sweater Weather is a 6-day, solo project during module four of four, of Turing School's Back-End Engineering Program.

Express Sweater Weather is a web application designed to consume/produce API's. The application utilizes Node.js, Expess and Sequelize, with a PostgreSQL database, to consume the Dark Sky API for weather, and the Google Maps API for geocoding.

#### [**_View Sweater Weather in Production_**](https://express-sweater-weather.herokuapp.com/) </br>


## Getting Started

To run Express Sweater Weather on a local machine, navigate to the directory in which you would like the project to be located in, then execute the following commands:

------>>>>
```
$ git clone git@github.com:Mackenzie-Frey/express_sweater_weather.git
$ cd express_sweater_weather
$ npm install
```
#### Environment Variable Setup:

##### Sign Up for the following APIs:
* [Dark Sky](https://darksky.net/dev)
* [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)


Add the following code snippet to the ------>>>>`config/application.yml` file. Make sure to insert the key/secret without the alligator clips ( < > ).
```
dark_sky_key: <insert>
google_maps_key: <insert>
```
Create a .env file in the root directory of your project. Add to the .gitignore
google_key=thing
dark_sky_key=
## Running Tests

To run the test suite, execute the following command: ------>>>>`rspec`.

## Deployment

To view Express Sweater Weather in development, execute the following command from the project directory: ------>>>>`nodemon npm start`. To view the application in a web browser, visit `localhost:3000`.



## Available Endpoints
```
GET /api/v1/forecast?location=<location name ie denver,co>
GET /api/v1/backgrounds?location=<location name>
------>>>> GET /api/v1/antipode?loc=hongkong
POST /api/v1/users, params: { email: example@email.com, password: password123, password_confirmation: password123 }
POST /api/v1/sessions, params: { email: example@email.com, password: password123 }
POST /api/v1/favorites, body: {"location": "Denver, CO", "api_key": "jgn983hy48thw9begh98h4539h4"}
GET /api/v1/favorites, body: {"api_key": "jgn983hy48thw9begh98h4539h4"}
DELETE /api/v1/favorites, body: {"location": "Denver, CO", "api_key": "jgn983hy48thw9begh98h4539h4"}
```

## Tools
* Dark Sky API
* Google Maps API
* Postman
* Faraday------>>>>
* Figaro ------>>>>
* GitHub Projects
* Jest------>>>>
* Capybara------>>>>
* Pry ------>>>>
* SimpleCov ------>>>>
* Nodemon
* dotenv

## Rubric/Project Description
#### [**_View the Project Description and Rubric_**]http://backend.turing.io/module4/projects/express_sweater_weather/express_sweater_weather_spec

Link for rubric -....

Project board link https://github.com/Mackenzie-Frey/express_sweater_weather/projects/1?add_cards_query=is%3Aopen


## Author
[Mackenzie Frey](https://github.com/Mackenzie-Frey)
