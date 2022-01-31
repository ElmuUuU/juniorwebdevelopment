Project of Team ThureFabianNick in JuniorWebDev @ XU-University
We decided early on in the project to create a webgame that has several minigames, that has to be played by two players, that are in asymetrical roles. This concept is inspired by
the game Keep talking and nobody explodes. Our unique twist to that game is the time based highscore aspect, that is similar to a website like Human Benchmark. We also came up with
original minigames, that had cool concepts.
One player assumes the role of the coach, who has a webpage with the instructions to the games. He himself does neither play the games himself, nor does he see the player playing them.
The other player sees the screen with the games, but does not know the instructions of the games, and he does not have some clues, that are randomized in the instructions.
For example the player sees a map without labels, and has to find out the name of an indicated location. To do so, he has to communicate with the coach.

We had come up with three games for an initial version, those three games represent the MVP - minimum viable product - in our eyes.
-The first Game was the map game - the player is shown a map without labels and a location that is marked onto it. He has to communicate the location to the coach, who has
a labeled map but no locations, that are marked on it. To win this game, the player has to find out and guess the location. If he guesses incorrectly, he takes damage.
-The second Game was a labyrinth type of game. The player controls the hat, that has to navigate onto the key and then the lock to win the game. If he runs into walls, he takes damage.
The catch is, that the player does not see any walls. Knowing the direction the player has to move to is up to the coach, who first has to find out, 
which of the eight labyrinth set-ups the player is in.
-The third Game is a combination game. The player has the objective to click a random set-up of runes in a certain order. However, he does not know the order, nor does the coach know,
which order he has to use. They have both to communicate, which runes are there, and which are missing, so the coach can decide on which order he has to use.

With those games in mind we thought that we had enough variety in terms of basic ideas for games and started to make rough concepts and outlined the things we had to focus on;
One thing that comes to mind immediatly is the replayability. Since it would be great, when the games we make could be replayed multiple times we decided early on, that we should have some "random aspect"
in every game. This meant different locations and maps in the first game, randomly generated objects in different mazes in the second game and multiple rune-orders for the third game.

After creating this rough concept we proceeded to set up a gitHub-Repository.
We made the decision to write our project in typescript and use next.js as our frameworks. We chose React as our sub-framework.
Then we made some organisation in folders and files. Most importantly we created a games folder with the game files - one file for every game - those files, that were our most important files. 

Since we chose to have one file for every game, we decided on splitting up the games between us. Thure made the logic for games 1 and 3, Nick was responsible for the more complex game 2 and 
Fabian made the front-end integration.



Ater trying to fix some major mistakes, like React Hydration and client-side rendering of the visual elements, for almost a week, we realised, that we couldn't get major parts of the games to run properly like 
random game states and some essential visual elements. Altough from our understanding we gave ourselves enough time, those unforseen problems made it so we couldnt finish the web-app in time.
Fixing those problems would have required a major rewrite of our backend and a restructioring of the whole project, therefore we couldn't recover in the remaining time. 

These are the things, that we learned from failing, that we realised are reasons we failed on, or in other words the things that we have to improve on:
- We should not haven chosen typescript as our programming language, since in the end we realised, that many things are different in typescript, then in javascript. In our last meeting we concluded, that everybody
was more proficient in javascript then in typescript.
- This is partially due to typescript, but we should not have made all the script and html in the same file. Making everything in the same file has resulted in some things not working the way, they could have worked
and made debugging in general harder then it had to be. It also made collaborating in gitHub harder, since it lead to version history conflicts when multiple people worked on the same file. For instance we had
several occurrences of this, when one person worked on the script, while another person worked on the html. This was not a deal-breaker at all, but was annoying to deal with every time it occured and lead to use
wasting a lot of time in the long run.
- The time difference between Thure and me being in Germany and Fabi being in Canada made scheduling and "working hours" a nightmare. We should have started the project way earlier, before the semester abroad
started, so that we would've been able to meet earlier and work for longer.
-  
