# README

## Description
Express Sweater Weather is a 6-day, solo project during module four of four, of Turing School's Back-End Engineering Program.

Express Sweater Weather is a web application designed to consume/produce API's. The application utilizes -------, with a PostgreSQL database, to consume the Dark Sky API for weather, and the Google Maps API for geocoding.

#### [**_View Sweater Weather in Production_**](https://express-sweater-weather.herokuapp.com/) </br>


## Getting Started

To run Express Sweater Weather on a local machine, navigate to the directory in which you would like the project to be located in, then execute the following commands:

------>>>>
```
$ git clone git@github.com:Mackenzie-Frey/express_sweater_weather.git
$ cd express_sweater_weather
$ bundle
$ npm install
$ ------>>>>
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

## Running Tests

To run the test suite, execute the following command: ------>>>>`rspec`.

## Deployment

To view Express Sweater Weather in development, execute the following command from the project directory: ------>>>>`rails s`. To view the application in a web browser, visit `localhost:3000`.

To view the application in production, from the project directory, execute the following commands:
```
------>>>>------>>>>------>>>>
$ createuser -s -r sweater_weather
$ RAILS_ENV=production rake db:{drop,create,migrate}
$ rake assets:precompile
$ rails s -e production
------>>>>------>>>>
```

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
* RSpec------>>>>
* Capybara------>>>>
* Pry ------>>>>
* SimpleCov ------>>>>

## Rubric/Project Description
#### [**_View the Project Description and Rubric_**]http://backend.turing.io/module4/projects/express_sweater_weather/express_sweater_weather_spec

## Author
[Mackenzie Frey](https://github.com/Mackenzie-Frey)
