# Restaurant Page
## Brief Description:
- In this project the goal was to use webpack module bundler to bundle multiple javascript modules into single file to be used for the website.
- Another constraint was to generate all the content dynamically using vanilla javascript.
- In this project three pages home(default), menu and contact pages have been built and each page loads upon user interaction with the three tabs provided.
- when user clicks on any (say menu tab) then initially previous content is removed and then respective (menu) page content is loaded.
- Each page has it's own module file and exports single function in the main index.js file where decision logic is built.
- For map location, google API  was used and secured  by saving it within .env file in the project's root directory and then accessing within the source code by using webpacks "dotenv-webpack" package. Finally in order to avoid pushing of the .env file to the github, .env was added to the .gitignore file.
## How to use this project:
- In order to use this project, clone this repository by running "git@github.com:full-StackNinja/restaurant-page.git" without quotation marks in terminal.
- Then run  "npm install" to install the necessary dependencies.
- Then write "npm run start"  in terminal to live preview your website in the browser.
- Images were taken from free image resources like <a href="https://unsplash.com/">Unsplash</a>  and <a href=https://www.pexels.com> Pexels </a>.

## Live Preview: 
[Click here for the live view!](https://full-stackninja.github.io/restaurant-page/) 

