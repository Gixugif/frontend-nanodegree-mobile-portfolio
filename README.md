## Website Performance Optimization portfolio project

Udacity project for optimizing web-pages

# Synopsis
This is a project done to demonstrate optimization of the critical rendering path.

# Build
Make sure you have [Node.js](https://nodejs.org/en/download/) isntalled. If you're
on linux you can probably install it from your package manager.

Make sure you're in the projects ```src``` directory and run ```npm install```

Then, running the command ```grunt``` in the directory should build the project.

# Running it
Running it is easy. Just open index.html from the ```dist``` directory in your
browser.

# Optimizations
To get pizza.html scrolling at 60fps and the pizzas to change size quickly the
following optimizations were made:

- The ```for-loop``` in ```updatePostiions()``` was causing thrasing do to it
continuously accessing the DOM then changing the style. Moving the code out of the
loop and using a variable sped things up greatly
- Also within ```updatePositions()``` the background pizzas were being moved by changing
the style of it's ```.left``` position, causing a lot of painting. Making it move by
the ```transform``` property elimated the continuous painting while scrolling.
- In the css, told the browser to make the background pizzas a separate layer
- Eliminated thrasing in ```changePizzaSize()``` by moving DOM access before for-loop
- Elimaintated complicated calculations for changing the pizza sizes and just made it
change based on percentage
- Also elimated extra ```switch``` statement by moving function of first one into the
second
- Amount of pizzas drawn on background was much higher than will appear on screen, so
reduced to a reasonable amount
