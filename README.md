# Exercise Tracker Microservice

This Microservice stores given users and logs their exercises in a MongoDB-Database and returns an overview over their work if requested by a certain query string.

Since this is a freeCodeCamp-Project of mine it is limited in functionality to the tasks demanded by the corresponding [certification project](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker).

__[check out my Solution on Replit](https://replit.com/@Dmnk28/exercise-tracker?v=1)__

## My process
First I started with the models (users and exercises), and handlers. Later I missinterpreted the FCC-User Stories and (kind of) joined both models together. Next time I will stay more selfconfident with my own approch (which should have worked pretty fine too, but in hindsight you are always smarter, right?). 
I first used nanoId for Id-Generation an then found (abount half an our later) out, mongoDB always brings id's for new objects automatically. 
After Models and Databaseconnection I continued with handlers and middleware. 
Everything was pretty straight forward, until the first FCC-tests: turns out the html form should ha post to an dynamic route '/api/users/:_id/exercises' with the param ```_id``` and not to an static path named *'/api/users/:_id/exercises'*. Ironically to get behind this took me half as long as the complete development :D 


### Built with

- Express
- mongoDB
- mongoose
- dotenv


### Continued development

I really like to trak exercises, formerly I did that with bullet journals and so on. I am going to use some of this code in an own full stack project. I want to build a front end for it and include aspects as user authentification task categorization, satistics, overviews/d3-charts and most important: an own exercise-model ;)