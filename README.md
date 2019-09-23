# foodR

foodR is a web app where users can rate individual food items at restaurants, rather than rating the restaurant itself. With this approach, once a user has rated enough items, they will be recommended several food items from several restaurants. The aim is to recommend something new for the user to try, whether it be at a new restaurant or a restaurant they've already been to.

[View Demo](https://agile-crag-81305.herokuapp.com/login "foodR")

## How does it work?
foodR finds recommendations for users by finding other users who have rated the same items similarly. The more ratings in common that two users have, the more weight they have towards each other when determining their recommendations, compared to other users. To implement this recommender system in code, a collaborative filtering technique was used using SQL (thanks to this post [here](https://stackoverflow.com/questions/2440826/collaborative-filtering-in-mysql)).


## Built With:
* Java/Spring Boot REST API
* PostgreSQL to store users, restaurants and ratings
* Hibernate used as ORM to map Java classes to database tables
* Angular 5 with Bootstrap CSS for the frontend
* Heroku for app deployment
