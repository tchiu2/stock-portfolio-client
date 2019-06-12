# Stock Portfolio Tracker (Client)

[Live](https://tc-stock-app.netlify.com/)

This is a simple user client that allows you to manage a dummy stock portfolio. Currently, it supports user authentication, buying stocks, and viewing current portfolio performance and past transactions. It was built simultaneously with an [API server](https://github.com/tchiu2/stock-portfolio-server) that handles storing user, stock and transaction data as well as computing portfolio value and current prices.

## Technologies and Features
The client is built primarily using React and Redux for interactivity while leveraging [```Material-UI```](https://material-ui.com/) for a consistent, responsive UI. 

Some features to note:
- The order widget has autocomplete when searching stock symbols. The list of valid symbols is provided by the API server and populated and updated using [```react-select```](https://react-select.com/home).
- Authenication is handled using JSON web tokens. Each request to the API server must be validated, thus the client attaches a bearer token when accessing authenticated endpoints. The client utilizes [```jwt-decode```](https://github.com/auth0/jwt-decode) for parsing JWTs provided by the API server.

## Setup
To run the client locally:
1. Clone this repo.
2. Run ```npm install```.
3. Setup environment variables.  
   1. Create a ```.env``` file in the root directory.
   2. Add with the key ```REACT_API_SERVER_URL``` pointing to the appropriate API server. 
  
   Refer to the ```create-react-app``` [docs](https://facebook.github.io/create-react-app/docs/deployment) for more details.
4. Run ```npm start```.

You will need backend server to hookup the client to, so check out the corresponding [API server](https://github.com/tchiu2/stock-portfolio-server)!
