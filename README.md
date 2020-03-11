# TheMdbApp
A Simple Upcoming Movies Web App

### Features

- Check all upcoming movies on teathers!
- Movie Details: Check release date, poster, genre and overview.
- Fully populated by The Movie Database: the greatest community for Movies and TV.


## Technologies
 
Full stack is deployed on Microsoft Azure Services
 
##### Frontend app (Cinephiliapp) :
- Angular 9
- Node / NPM 10.16.3
- Bootstrap 4

##### Backend API service (TmdbService) :
- .Net Core 2.1
- Swagger 2.0 with OAS 3
- TheMovieDB API


## Architecture and Pattern

Since the backend was a simple API to redirect calls from the web app to a third party API service, a middleware layer was created. The requests comes through a controller which calls to a service layer where all the business logic is. The service then calls the external API service using simple http client requests, retrieving the JSON data and forwarding it to the frontend client.

The frontend client landing page uses the fetched data to populate the list of upcoming movies and paginate them. If a click is performed on a movie image, the app sends another POST request to the backend service looking for the movie details (identified by the movie ID).

### Links

Frontend Web App: [Cinephilliapp](https://themdbapp.azurewebsites.net/)

Backend API Swagger : [TheMdbService](https://tmdbservice.azurewebsites.net/index.html)

#### Repository folder structure　

```javascript
📦TheMdbApp        ---> This Git repo
 ┣ 📂TmdbApp
 ┃ ┗ 📂cinephiliapp    ---> The Frontend Angular Web App
 ┗ 📂TmdbService      ---> The .Net Core Backend API
```

### Local build instructions

Just git clone this repository and go to your cloned git folder.

##### After cloning:

###### Running bakend service: 
1. navigate to `/TmdbService` 
2. open the .sln file with Visual Studio,
3. build and run the **TmdbService**.
4. Service will be running on your localhost and you should be able to see the swagger api page on your browser.

###### Running frontend app:

1. navigate to `/TmdbApp/cinephiliapp` 
2. Type `npm start` on your terminal. 
3. The web app will be running on your localhost and you can now use the app on your browser.

**PS:** First run might take a few more seconds to receive response from your backend service since it is loading and caching all api files and images.
