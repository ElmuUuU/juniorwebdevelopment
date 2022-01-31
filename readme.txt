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
which order he has to use.

After creating a rough concept we proceeded to set up a gitHub-Repository.
We made the decision to write our project in typescript and use next.js as our frameworks. We chose React as our sub-framework.
Then we made some organisation in folders and sites. Most importantly we created a games folder with the game files - the files, that were our most important files. 





One day, before the project finished, we realised, that we ran out of time. We still had too much to fix and too much to add.