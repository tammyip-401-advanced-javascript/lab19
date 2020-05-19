LAB 19

Project Name: Message Queues

Author: Tammy Ip

Links and Resources (see below)
submission PR: `https://github.com/tammyip-401-advanced-javascript/lab18/pull/1`

Documentation
Events: `https://github.com/Gozala/events#readme`
Faker: `https://github.com/Marak/Faker.js#readme`


Setup

Open four terminals, each represent the following application:
+ The message queue server (socket server)
+ The delivery API server (socket client, express server)
+ Vendor 01 (socket client)
+ Vendor 02 (socket client)

In each terminal, install the following:
npm init
npm install faker
npm install net

Do npm start in the terminal to start running each app:
+ "start-queue": "node queue-server.js"
+ "start-api": "node api.js"
+ "start-vendor-01": "node vendor-01.js"
+ "start-vendor-02": "node vendor-02.js"

Press crtl + c to stop the app

UML
https://docs.google.com/spreadsheets/d/1YiMTCgPyHVWjycqwzuej0lzvFLAcoFvVYz-f99x4sdg/edit?usp=sharing







