Users (for authentication testing on this website)

user 1:
username: MichaelToh
password: password

user 2:
username: test
password: password


SETTING UP:

prerequisites:
-ensure node and npm are installed on your device by entering 'node -v' (node), and  'npm -v' (npm)
-if not please visit: https://nodejs.org/en/download

-during the download process of Node, please install npm along with it
-ensure you have node_modules folder here, if not run 'npm install'

BACKEND SETUP (Node.JS + Express):

1) open a separate cmd and cd to '**\Hair-product-review\HairReviewWebsite', 
2) run 'node server.js'. 

It should have the result of "API running on localhost:3000"


FRONTEND SETUP (Angular):

1) open cmd and cd to '**\Hair-product-review\HairReviewWebsite'
2) run 'npm install @angular/http --legacy-peer-deps' to include angular/http into the project (will be used for linking frontend to http service)
3) finally, run 'ng serve' to start the app

It should produce the result of "Angular Live Development Server is listening on localhost:4200", completed with "Compiled with/without warnings" (due to deprecated and outdated dependencies, it would most likely produce 'with')


Once both backend and frontend setup is complete without any failures, the app is ready for use!


For any inquires, please PM me on discord.