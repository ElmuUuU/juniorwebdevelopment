Project of Team ThureFabianNick in JuniorWebDev @ XU-University
We decided early on in the project to create a webgame containing several minigames that is to be played by two players having asymetrical roles. This concept is inspired by
the game "Keep talking and nobody explodes". Our unique twist to that game is the time based highscore aspect, that is similar to a website like "Human Benchmark". We also came up with
original minigames, that had cool concepts.
One player assumes the role of the coach, who has a webpage with the instructions to the games. He himself does neither play the games himself, nor does he see the player playing them.
The other player sees the screen with the games, but does not know the instructions of the games, and he does not have some clues, that are randomized in the instructions.
For example the player sees a map without labels, and has to find out the name of an indicated location. To do so, he has to communicate with the coach.

We had come up with three games for an initial version, those three games represent the MVP - minimum viable product - in our eyes.
-The first Game is the map game - the player is shown a map without labels and a location that is marked onto it. He has to communicate the location to the coach, who has
a labeled map but no locations, that are marked on it. To win this game, the player has to communicate with the coach and find the marked location. If he enters it incorrectly, he takes damage.
-The second Game is a grid-labyrinth type of game. The player controls the hat, that has to navigate onto the key and then the lock to win the game. If he runs into walls, he takes damage.
The catch is, that the player does not see any walls. Knowing the direction the player has to move to is up to the coach, who first has to find out, which of the eight labyrinth set-ups the player is in.
-The third Game is a combination game. The player has the objective to click a random set-up of runes in a certain order. However, he does not know the order, nor does the coach know,
which order he has to use. They both have to communicate about which set of runes is presented to the player and in whicch order to press them.

With those games in mind we thought that we had enough variety in terms of basic ideas for games and started to make rough concepts and outlined the things we had to focus on;
One thing that comes to mind immediatly is the replayability. Since it would be great if people could play the games over and over for some time we included random aspects 
in every game. This meant different locations and maps in the first game, randomly generated objects in different mazes in the second game and multiple rune-orders for the third game. There should also be a kind
of "brute force protection", since trying to press all the buttons until the game is won is definetly a strategy that could lead to success without that we deemed to be not fun - and not the intended way of playing
we decided to make a lives system - a way to track how many mistakes the player has made and to make the run fail, when he accumulates too many mistakes. For now, the player has three attempts for each game, but this could be changed into a global lives meter, with for example 5 lives total.
With the way we set up the games, changing variables is really easy and a settings menu (including a difficulty and game length option) could easily be implemented.

After creating this rough concept we proceeded to set up a gitHub-Repository.
We made the decision to write our project in typescript and use next.js as our frameworks. We chose React as our sub-framework.
Then we made some organisation in folders and files. Most importantly we created a games folder with the game files, each game being contained in its respective file. 

Since we chose to have one file for every game, we decided on splitting up the games between us. Thure made the logic for games 1 and 3, Nick was responsible for the more complex game 2 while 
Fabian created and integrated the frontend and visuals.

The logcic we implemented for every game works as follows:

    Game 1:
    We selected five maps of distinct and varied locations like Tokyo and LA. In these five maps we selected 3 named locations each. These were stored in a Map ADT with their respective map as a key ([1a]["location 'a' on Map 1"]).
    When a player starts the game, a random number (1 to 5) and random letter (a to c) is selected and the expected solution is pulled from the Map ADT. The Coach sees the same 5 maps with labels but without marked locations. 
    When the players communicate correctly and the right solution is entered by the player, both the input and the exxpected solution match and the game is won. When the two strings do not line up, the player takes damage. 
    To prevent unfair losses, all strings are put into lowercase.

    Game 2:
    This game is based on a big 7x7 grid in the backend, that where only the ([EVEN][EVEN]) cells are displayed. ([EVEN][ODD]) and ([ODD][EVEN]) are reserved for the walls of the game.
    When the game starts it selects one of the random set-ups of compass, clock and walls. That are placed accordingly to the sheet of the coach.
    Then the rest of the icons are randomly generated in the remaining viable cells. The buttons execute a move function in the corresponding direction. Every time the player attemps to move several things
    are checked:
        - Is the move a viable move; does the player move out of bounds? If so, then the movement shall be ignored.
        - Is the player attempting to move through an invisible wall? If so the player should take 1 damage.
        - Has the player moved onto the key? If so, hasKey should be set true.
        - Has the player moved onto the lock while holding the key? If so, the game should be won, and Game 3 should be loaded.
    The object the player is on is also always tracked, so the player does not "delete" symbols accidentely while walking over them.
    
    Game 3:
    Game three starts with selecting a random Rune array from the larger Array containing all possible combinations (10 runes out of 15). This selected array is the also ordered, to make guessing the right combination harder.
    The buttons the game is played with are ordered in a 3 by 3 grid and are each assigned their value from the sorted array. Inside each button lies an image that is changed to the image pgn with a name equal to the assigned value.
    Additionally, each button state is checked so that ebery button can only be pressed once. When a button is pressed, its value is added to an empty array that can be compared
    to the selected array when the checkArray function is triggered by its button. There is also a reset button that empties the input Array and reenablesall buttons.
    

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
- The time difference between Thure and Nick in Germany and Fabian in Canada made scheduling and "working hours" a nightmare. We should have started the project way earlier, before the semester abroad
started, so that we would've been able to meet earlier and work for longer.
- For the individual games we also ran into some severe problems. Most importantly React Hydration errors. For some reasons sometimes the server and client would generate random states independantly from each other.
This makes playing games that rely heavily on random variables impossible since win states differ between the two. The Rune Game for example expects runes that are not even shown to the user.
We tried for days fixing these problems but due to not being familiar enough with React and our whole project structure, the only thing that would reliably fix our issues would be a whole backend rewrite, for which we didn't have the time.
- For Game1 we had problems with the visibility of a button. We were not able to find 
