Ultimately I ran out of time with this task. Here are the things I would have done if I had had longer.

1. I would have built the app in React, either as a MERN stack, or with a Rails backend. I actually started building the Rails API with the JSON data but then decided due to time constraints it was actually better just to use the JSON file. (I include the Rails API (SR-api) and the create-react-app front end (sr-fe) which I started making.) I would have preferred to have used a separate API (which I started building) particularly if the dataset had been larger as then I would only be requesting the information I needed for the page, rather than all of it and only displaying part of it. I would have also sent back the ticketing information to this API so it was all in one place.

2. I would have also have preferred React so that I could have reused parts of my HTML by putting it in different components. This would have also made my HTML file simpler to read.

3. I used bootstrap for speed of setting up the CSS. This was another advantage of not using React, as I find React Bootstrap a little limited and not as reliable.

4. I would have liked to have installed SASS but on this occasion simply wrote a CSS file. I certainly intend to go back and refactor my CSS as in my rush to get all the information down, I feel I have repeated myself much more than I needed to.

5. The Google Maps API was what took me longest. I believe they have changed the terms of use since I last used it and my existing API key wouldn't work.  If I had got the map showing on the page I would have used the JSON data "geoloc" to put a pin on the map where the event was being held.

6. I started on media queries for mobile devices. To finish it off, I would:
  - make the text slightly smaller
  - make sure the width of the body doesnt extend the screen and make the page scroll horizontally
  - make the form and info div fill the full width of the screen on top of each other. Perhaps I would add buttons or tabs to book tickets or learn more about the event so the user would know what information is available to them without having to scroll. Otherwise I'd add a scroll back to the top button.

7. I ran out of time for testing but I have used Mocha, Chai and SuperTest. Create-react-app also has it's own inbuilt testing facility so I would have used that if I had stuck to Create-React-App.
