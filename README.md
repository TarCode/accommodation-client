# Project Accommodation Client

Client side web application for allowing students to view rooms and book a bed.
### To Run in Development
  - `npm install`
  - `npm start`
  - Make sure you have the [API](https://github.com/tarcode/accommodation-api) running on port `3001`

### To Run Tests
 - `npm test`

# Assumptions
 - Students currently have no convenient means of choosing a room or roommate
 - Organising rooms and roommates is an operational headache for staff

# Decisions
 Web app built with mobile-friendly technologies that allows paid students to login, view available rooms (and roommates) and book a bed in the room.
 - Students benefit by being able to view details about rooms, check the roommates and book a bed in a room
- Staff benefit by having the administration done by the application

# Part of Solution Addressed
This app addresses the problem of students not being able to choose preferred rooms and roommates. It allows the student to view rooms and details, check which roommates belong to a specific room, and book a spot in an available room. (Cancel functionality also added in case a student wants to change rooms. Todo: A timeframe for cancelling a room can be given to prevent unnecessary cancellations and changes).

# Shortcuts taken
For the purpose of demonstrating the solution in the given timeframe, the following shortcuts were taken:
- Mock user data added to the user reducer (`/src/reducers/user`)
- Add a mock room (For demonstrating an admin feature of adding rooms, an 'Add mock room' link was added to the navbar to a random room)


### Tech

Bundled with create-react-app:
* Views: React
* Module Bundler: Webpack
* Testing: Jest

* State Management: Redux,
* UI: Materialize
