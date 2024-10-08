# SolarSystemWiki

**HTML**
**1/5:**
- Basic HTML structure is present.
    **All HTML documents** have document type declarations <!DOCTYPE html>
    and basic structure using <html> and <body>.

**2/5:**
- HTML structure with clear content differentiation (headings, paragraphs, lists).
    **All HTML documents** have consistent use of heading, paragraphs
    and line breaks. No lists have been added.

**3/5:**
- Use of forms, links, and media.
    **All HTML documents** have a header and a footer. The header has links to
    other pages on the site while the footer has external links to sources used
    for the making of the site and the information displayed on it.

    The match maker quiz in **matchmaker.html** uses form to structure the questions
    and answers. The anwers are all in image form and are displayed in place of text.
    After the user has filled out the form and pressed the submit button, a loading gif
    plays as the results are calculated.

    The home page, **index.html**, uses still images as buttons and the background.

**4/5:**
- Tables are effectively used.

**5/5:**
- Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.
    **All HTML documents** have a consistent structure that utilizes semantic elements such as
    <header>, <footer>, <nav>, <main> and <section>.


**CSS**
**1/5:**
- Basic CSS styling (colors, fonts).
    The **style.css** file contains use of different colors and fonts
    to structure a more consistent appearance.

**2/5:**
- Use of classes and IDs to style specific elements.
    The **style.css** file contains selectors to style spesific elements such as
    text, the header, the footer, buttons, images and hyperlinks.

**3/5:**
- Implementation of responsive design elements.
    A mostly working mobile version of the layout has been implemented in **style.css** under **@media**.
    The home page hasn't been successfully adapted into a user friendly version for mobile as
    it's layout is very depended on a wide screen. Other pages
    such as **planets.html**, **matchmaker.html** and **vote.html** have working mobile versions.

**4/5:**
- Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)
    Flexbox layout module is used to handle the overall layout structure of all the pages.
    In the **body**, it makes the content vertically align and ensures it stretches
    to fill the screen while the **header** uses it to ensure responsive
    behavior across screen sizes. In **.gif-container** and **.question** flexbox is used
    to center and distribute the content dynamically.

**5/5:**
- Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.


**JavaScript Basics**
**1/5:**
- Simple interactions (like alerts on button click).

**2/5:**
- Multiple event listeners and basic DOM manipulations.

**3/5:**
- Use of arrays, objects, and functions.

**4/5:**
- Advanced logic, looping through data, and dynamic DOM updates.

**5/5:**
- Consistent use of Object-Oriented JavaScript principles.


**Asynchronous Operations**
**1/5:**
- Use of timers.

**2/5:**
- Successful implementation of an AJAX call or Fetch.

**3/5:**
- Data from the asynchronous call is displayed on the webpage.

**4/5:**
- Error handling is implemented (for failed API calls, etc.).

**5/5:**
- Effective use of asynchronous data to enhance user experience (like filtering, sorting).



JavaScript Basics:
- JS alerts (Yes)
    - Used once at the end of the match maker quiz if there's an error fetching the data.
- DOM manipulators (Yes)
    - Utilized multiple times using methods like getElementById, querySelector and createElement.
- Event listeners (Yes)
    - Multiple even listeners used across js files to make buttons functional.
- Arrays (Yes)
    - Used to display planet data in table.
- Objects (Yes)
    - In matchmaker.js to keep track of the scores. Planet description objects in json data.
- Functions (Yes)
    - Used to handle AJAX requests and to fetch voting data.
- Loops (Yes)
    - Loops are used to iterate over planet and voting result data.
- Object constructors (Yes)
    - Quiz(weather, drinks, storm, colors, dates, music) handles input from the quiz.

Asynchronous Operations:
- Timers (Yes)
    - setTimeout() is used to delay before displaying planet match results.
- AJAX (Yes)
    - Implemented in the voting button on the voting page.
- Asynchronous Calls
    - Multiple made to fetch data for planetary facts table and to display vote results.
- Fetch (Yes)
    - Multiple fetch() calls are made to retrieve data from json files.
- Error handling (Yes)
    - Implemented after fetch() calls to handle failed asynchronous requests.