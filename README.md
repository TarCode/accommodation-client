# Project Accommodation Client

Client side web application for allowing students to view rooms and book a bed.
### To Run in Development
  - `npm install`
  - `npm start`
  - Make sure you have the [API](https://github.com/tarcode/accommodation-api) running on port `3001`

### To Run Tests
 - `npm test`

# Assumptions
 - Students currently have no convenient means of choosing a room  or roommate
 - Organising rooms and roommates is an operational headache for staff

# Decisions
 Web app built with mobile-friendly technologies that allows paid students to login, view available rooms (and roommates) and book a bed in the room.
 - Students benefit by being able to view details about rooms, check the roommates and book a bed in a room
- Staff benefit by having the administration done by the application

### Tech

* React, Webpack, Jest (Bundled with create-react-app), Redux, Materialize
