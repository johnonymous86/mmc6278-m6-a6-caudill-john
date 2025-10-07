# Module 6 Assignment: Server-side rendering with Handlebars

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Introduction

For this assignment, you will be refactoring the Music Shop e-commerce application to use Handlebars templating. [You can see an example of the completed application here](https://music-shop-hbs.herokuapp.com/).

&nbsp;
## Setup

Copy the starter files inside of `unsolved` into the root directory of your GitHub repository.

Ensure you include a `.gitignore` file in your repo that includes at minimum:

```
**/.DS_Store
**/node_modules/
.env
```

Run `npm i` in the root directory of your repository (your `package.json` should be in the root directory).

&nbsp;
## Instructions

First, you'll need to add some code to `app.js` to set the handlebars engine up in express.

Require the handlebars package:

```js
const exphbs = require('express-handlebars')
```

Then tell express to use handlebars as its view engine:

```js
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
```

After that, you'll need to replace the `sendFile` responses in `routes/html-routes.js` with handlebars `render` calls. The necessary database calls for the template data are already written in each route. You'll need to convert the static `.html` files in the `/views` folder into `.handlebars` files.

Your finished application must be deployed to [Heroku](https://www.heroku.com/) and use JawsDB for the production database.

&nbsp;
## App Behavior

The completed application should behave in the same manner as [this example](https://music-shop-hbs.herokuapp.com/).

To run the application locally, run:

```
npm run dev
```

You can then navigate to [http://localhost:3000](http://localhost:3000) to view the application.

&nbsp;
## Testing

Automated tests are included with this assignment. To receive full credit, all automated tests must pass.

To run the tests once, run:

```
npm test
```

To run the tests in watch mode, run:

```
npm run test:watch
```

&nbsp;
## Requirements for full credit

To receive full credit for this assignment, your program MUST:

  * Be implemented according to the above [instructions](#instructions).
  * Be deployed to Heroku with a JawsDB-powered database that is seeded.
  * Pass all automated tests.

&nbsp;
## Submission

When submitting this assignment, please include:

  * A link to the assignment's GitHub repository.
  * A link to the deployed application on Heroku.
  * A screenshot of the automated test results.