## Grocery-Helper-Api: A Description

Welcome to my Grocery-Helper-Api project. The purpose of this project is to create the API for client that want to request the data from grocery-helper-api to create a grocery-list. My Grocery-Helper-Api will allow client to create the new grocery list, show grocery-list that the user created, update grocery-list and delete the grocery-list. The require of this API is the client must have authentication to access the API. The client must sign-up with the unique email and password. Client will be able to change the password and signout after sign in.

Links
<!-- need the web application link -->
<!-- need gitHub repo for web application -->

### User Stories
* As a Grocery-helper-Api, I want to recieves the authentication method and response back.
    - if client successful request sign-up, I will response back 201 created.
    - if client successful request sign-up, I will response back 201 created and token.
    - if client successful request change-password, I will response 200 ok.
    - if client successful request sign-out, I will response 204 no content.
    - if client failed to request, I will response 400+ code.

* As a Grocery-helper-Api, I want to recieves the grocery-list method and response back.
   - if client successful request create-list, I will response back 201 created and store list into databse.
   - if client successful request show-list, I will response back 200 and show list from database.
   - if client successful request update-list, I will response 200 ok and update list from database.
   - if client successful request delete-list, I will response 204 no content and delete from database.
   -if client have no authentication, I will response 401 unauthorized
   -if client failed to create, update, delte list, I will response 400 bad request.

   ### Tecnologies used

   * Express
   * MongoDb
   * Mongoose
   * Handlerbar
   * nodemon

   ### Unsolved Problem

   ### Images

   #### ERD(entities Relation diagram)

![grocery-api-ERD](https://i.imgur.com/ntYRNQm.png)
