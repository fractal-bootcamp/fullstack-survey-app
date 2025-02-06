# surveys3

## Todo:

Data (data.ts or surveys.ts)
- [x] setup my models (schema)
- [x] setup a mock database
- [x] setup a mock service-layer that can talk to the database and perform all my key actions
- [x] test the service-layer to ensure it works as intended

Server (server.ts):
- [x] setup a simple server with a helloworld
- [x] setup that server to perform core API services for surveys

API Client (client.ts):
- [x] setup an API Client for my server in a client.ts
- [x] test the apiClient and make sure it basically works.

React App (frontend):
- [x] setup a basic react app with react router
- [x] make sure my frontend can talk to my server via a frontend client (cors?)
- [x] setup all of my main routes (pages) & styling (?)
- [x] load data into my routes via the api client
- [x] perform actions (form submissions) to submit data and update surveys via the api client


After v0:
- [ ] add SurveyQuestions and SurveyResponse so surveys support multiple questions.