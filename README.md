# LeaderBoard API
This is the frontend for my full stack Spring Boot / Angular App.

The goal of this project is to develop both the front and back end, refreshing myself on Spring Boot, and as a first dive in Angular.

## What the App Does:
(same on both FE and BE Readmes)
I also enjoy developing video games, and had recently made a small two player competitive one titled "Sandwich King", where players compete to make the most sandwiches. This app takes inspiration from old arcade leaderboards, and displays the top ten scores, which is the most sandwiches made. At the time of writing, these are just manual data.

To add a second layer of complexity, I also wanted to add a simple user stats window. This allowed for some exporation of routes and additional endpoints. This page will show a users number of games played, top score, and top 5 scores overall.

Overall this app is fairly simple, but has allowed me to learn about several new front end concepts, and reinforce my Spring Boot skills, and has given me a much better picture of Full Stack Development

## The Front End
While I was overall familiar with front end concepts, it has been several years since I've been able to get my feet wet in this world.

Along with the root app component, I have two custom components, one for the main leaderboard and one for the individual user stats screen. Both interacted with the inject "GameService" which handles the API calls. While the components are simple, it was able to see how they interact with each other using routes, and the benefit of having a singular injectable service across multiple components