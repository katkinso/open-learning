# Open Source Learning Project

This project allows students to sign up for open sessions and view sessions they have signed up for as well as upcoming sessions.

---

## Local Development 

The project runs an express server to server the API and runs a react client. To run the local dev environment you need to run the API server and the Client in parallel.

The API runs on http://localhost:9000

The Client runs on http://localhost:3000

---

## To Run the API Server

- Navigate to `/api` and run `npm start`

#### To Run Tests

- `npm test`

---

## To Run the Client

- Navigate to `/client` and run `npm start`

#### Build CSS

- `npm run sass`

#### To Run Tests

- `npm test`

---


## ToDo
- Handle routing for sending errors & message using history
- Handle storing sessions in redis
- Handle '../config.js'; for local dev
- Handle Cookie as httpOnly
- Design 404 Page