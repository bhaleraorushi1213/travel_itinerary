# Travel Itinerary Application

## Description
This is a full-stack Travel Itinerary application built with Node.js, Express, React, and MySQL.

## Features
- Create, read, update, and delete travel itineraries
- User authentication with Google
- Responsive design

## Prerequisites
- Node.js
- Docker and Docker Compose
- MySQL

## Installation
1. Clone the repository
2. Navigate to the project directory
3. Run `docker-compose up --build`

## Usage
After starting the application, navigate to `http://localhost:3000` in your web browser.

## API Endpoints
- `GET /api/itineraries`: Get all itineraries
- `POST /api/itineraries`: Create a new itinerary
- `GET /api/itineraries/:id`: Get a specific itinerary
- `PUT /api/itineraries/:id`: Update a specific itinerary
- `DELETE /api/itineraries/:id`: Delete a specific itinerary

## Testing
- Backend: Run `npm test` in the `backend` directory
- Frontend: Run `npm test` in the `frontend` directory

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details
