# README

## Description
Express Sweater Weather is a 6-day, solo project during module four of four, of Turing School's Back-End Engineering Program.

Express Sweater Weather is a web application designed to consume/produce API's. The application utilizes Node.js, Expess and Sequelize, with a PostgreSQL database, to consume the Dark Sky API for weather, and the Google Maps API for geocoding.

#### [**_View Express Sweater Weather in Production_**](https://express-sweater-weather.herokuapp.com/) </br>

### Schema
![Alt text](./public/images/schema.png?raw=true "Database Schema")

## Getting Started

To run Express Sweater Weather on a local machine, navigate to the directory in which you would like the project to be located in, then execute the following commands:

```
$ git clone git@github.com:Mackenzie-Frey/express_sweater_weather.git
$ cd express_sweater_weather
$ npm install
```
#### Environment Variable Setup:

 Sign Up for the following APIs:
* [Dark Sky](https://darksky.net/dev)
* [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)

Create a `.env` file in the root directory of the project. Add `.env` to the `.gitignore` file. Make sure to insert the secret key without the alligator clips ( < > ).
```
google_key=<insert>
dark_sky_key=<insert>
```

## Running Tests

To run the test suite, execute the following command: `npm test`. The tests will automatically run each time an update is made to the application.

## Deployment

To view Express Sweater Weather in development, execute the following command from the project directory: `nodemon npm start`. To view the application in a web browser, visit `localhost:3000` and navigate the the desired endpoint.


## Available Endpoints
```
POST /api/v1/users, params: { email: example@email.com, password: password123, password_confirmation: password123 }
POST /api/v1/sessions, params: { email: example@email.com, password: password123 }
GET /api/v1/forecast?location=<location name ie denver,co>
POST /api/v1/favorites, body: {"location": "Denver, CO", "api_key": "<returned api_key>"}
GET /api/v1/favorites, body: {"api_key": "<returned api_key>"}
DELETE /api/v1/favorites, body: {"location": "Denver, CO", "api_key": "<returned api_key>"}
```

## Tools
* Dark Sky API
* Google Maps API
* Postman
* bcrypt
* dotenv
* node-fetch
* pryjs
* babel-jest
* nodemon
* scriptjs
* shelljs
* supertest

## Known Issues
* Account Creation -> [Non-Unique Email](https://github.com/Mackenzie-Frey/express_sweater_weather/issues/14)
 * Upon account creation via a `POST` request to `/api/v1/users`, users are currently able to create a duplicate record in the system, utilizing the same email address.

## How to Contribute

###### Contributing Code:
1. Fork the project.
2. Write a failing test.
3. Commit that failing tests.
4. Commit changes that fix the tests.
4. Submit a pull request detailing the change that was made.

###### Submitting a Bug:
1. Search the existing [issues](https://github.com/Mackenzie-Frey/express_sweater_weather/issues).
2. Create a new issue if applicable, or contribute to an existing issue.

### Related Links:
###### * [**_Agile Project Board_**](https://github.com/Mackenzie-Frey/express_sweater_weather/projects/1?add_cards_query=is%3Aopen)
###### * [**_Project Specifications_**](http://backend.turing.io/module4/projects/express_sweater_weather/express_sweater_weather_spec)
###### * [**_Project Rubric_**](http://backend.turing.io/module4/projects/express_sweater_weather/express_sweater_weather_rubric)

### Author
[Mackenzie Frey](https://github.com/Mackenzie-Frey)

### Contributors
* [Dione Wilson](https://github.com/dionew1)
* [Cory Westerfield](https://github.com/corywest)
* [Hillary Stewart](https://github.com/hillstew)
* [Teresa M Knowles](https://github.com/teresa-m-knowles)
* [Matthew Foxwell](https://github.com/foxwellm)


<!-- Schema Diagram
https://dbdiagram.io/d

Table "Favorites" {
  "id" varchar
  "UserId" bigint
  "LocationId" bigint
}

Table "Locations" {
  "id" varchar
  "name" string
  "lat" string
  "long" string
}

Table "Users" {
  "id" varchar
  "email" string
  "passwordDigest" string
  "api_key" string
  "created_at" datetime
  "updated_at" datetime
}

Ref: "Users"."id" < "Favorites"."UserId"

Ref: "Favorites"."LocationId" < "Locations"."id" -->
