## Api OverView
In this assignment  I have identified and explained the key restful api endpoints used in Crud applications.  These apis perform crud operations (create ,read, update and delete) to manage user notes effectively..

##

| Operation/Functionality | HTTP Method | API End Point      | Description     |
|-------------------------|------------|-----------------|---------------------|
| Create notes             | POST       | /api/notes/      | Add a new notes       |
| Read notes               | GET        | /api/notess/      | Access the notes data|
| Update notes             | PUT/PATCH  | /api/notess/:id   | Update an existing notes |
| Delete notes             | DELETE     | /api/notes/:id    | Remove a specific notes |

## Add Notes  - Http method -> Post
Api End Point  -> https://backend-intership-task-1.onrender.com/api/notes
Purpose: used to send or create new data on the server
Example: when you fill out a crud and submit it to the data, send it using the post method.

## Read Notes - Http method -> Get
Purpose: Used to fetch or read data from the server.
Example: when you open a website or to-do  list data, you have to use the “GET “method
Api endpoint (All) ->[(https://backend-intership-task-1.onrender.com/api/notes)

## Api endpoint (single) -> /api/notes/:id
How it works :when the user opens the crup application . the frontend sends a GET request to fetch all notes.
The backend retrieves data from the database and sends it back as a list of notes . if a specific notes id is proved for example (/api/notes/3) , it returns only that particular notes.


## Update Any notes - Http method -> put/ patch
Api endPoint -> https://backend-intership-task-1.onrender.com/api/notes/:id 
Purpose :  Update any specific notes

## Delete notes -> Http method -> Delete
Api endpoint - api/notes/: id
Delete  a  specific notes
Purpose: used to delete or remove data from the server.
Example: When you delete a notes, you have to use the delete method
How it works :-
The user clicks the delete icon , the frontend sends a DELETE request to the backend with notes id for example  (/api/notess/3) .
The server locates the notes in the database, deletes it permanently and sends a confirmation message.

BACKEND URL=https://backend-intership-task-1.onrender.com/api



