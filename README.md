# SolarSystemWiki

## HTML
#### 1/5: Basic HTML structure is present.<br>
    **All HTML documents** have document type declarations **<//!DOCTYPE html>**
    and basic structure using **<//html>** and **<//body>**.<br>

#### 2/5: HTML structure with clear content differentiation (headings, paragraphs, lists).<br>
    **All HTML documents** have consistent use of heading, paragraphs
    and line breaks. No lists have been added.<br>

#### 3/5: Use of forms, links, and media.<br>
    **All HTML documents** have a header and a footer. The header has links to
    other pages on the site while the footer has external links to sources used
    for the making of the site and the information displayed on it.<br>
    The match maker quiz in **matchmaker.html** uses form to structure the questions
    and answers. The anwers are all in image form and are displayed in place of text.
    After the user has filled out the form and pressed the submit button, a loading gif
    plays as the results are calculated.<br>
    The home page, **index.html**, uses still images as buttons and the background.<br>

#### 4/5: Tables are effectively used.<br>
    The **planet.html** document has a table of information on all the planets in
    our Solar System. It has multiple cells and rows.<br>

#### 5/5: Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.<br>
    **All HTML documents** have a consistent structure that utilizes semantic elements such as
    **<//header>**, **<//footer>**, **<//nav>**, **<//main>** and **<//section>**.<br>


## CSS
#### 1/5: Basic CSS styling (colors, fonts).<br>
    The **style.css** file contains use of different colors and fonts
    to structure a more consistent appearance.<br>

#### 2/5: Use of classes and IDs to style specific elements.<br>
    The **style.css** file contains selectors to style spesific elements such as
    text, the header, the footer, buttons, images and hyperlinks.<br>

#### 3/5: Implementation of responsive design elements.<br>
    A mostly working mobile version of the layout has been implemented in **style.css** under **@media**.
    The home page hasn't been successfully adapted into a user friendly version for mobile as
    it's layout is very depended on a wide screen. Other pages
    such as **planets.html**, **matchmaker.html** and **vote.html** have working mobile versions.<br>

#### 4/5: Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)<br>
    Flexbox layout module is used to handle the overall layout structure of all the pages.
    In the **body**, it makes the content vertically align and ensures it stretches
    to fill the screen while the **header** uses it to ensure responsive
    behavior across screen sizes. In **.gif-container** and **.question** flexbox is used
    to center and distribute the content dynamically.<br>

#### 5/5: Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.<br>


## JavaScript Basics
#### 1/5: Simple interactions (like alerts on button click).<br>
    The code includes ONE alert in **matchmaker.js** that pops up if there's
    an error in finding your match for any reason (Error messages are handled separately).<br>

#### 2/5: Multiple event listeners and basic DOM manipulations.<br>
    There are multiple event listeners across **matchmaker.js**, **planets.js**
    and **vote.js** that handle form submission, button clicks, and fetching results.
    DOM elements like text, images, and classes are dynamically updated.<br>

#### 3/5: Use of arrays, objects, and functions.<br>
    Arrays (**planets** in **planets.js**), objects (**Quiz**, **planetScores** in **matchmaker.js**), and
    functions (calculatePlanetScores in matchmaker.js) are used across multiple JavaScript files.<br>

#### 4/5: Advanced logic, looping through data, and dynamic DOM updates.<br>
    Advanced logic handles quiz results and dynamic DOM updates across **planets.js**, **matchmaker.js**
    and **vote.js**. Loops iterate through the planets to display information or votes.<br>

### 5/5: Consistent use of Object-Oriented JavaScript principles.<br>
    Object-oriented principles are present in the use of constructors like **Quiz** in **matchmaker.js**.<br>


## Asynchronous Operations
#### 1/5: Use of timers.<br>
    A setTimeout function creates a delay for showing quiz results in **matchmaker.js**.<br>

#### 2/5: Successful implementation of an AJAX call or Fetch.<br>
    Fetch is used to get data from external JSON files and APIs for both quiz results and planet information
    in **planets.js** and **matchmaker.js**.<br>
    AJAX call is used in **vote.js** where the voting button is replaced by a message from **votemessage.txt**.<br>

#### 3/5: Data from the asynchronous call is displayed on the webpage.<br>
    Fetched data for quiz (**matchmaker.js**) and vote (**vote.js**) results are displayed on the webpage
    after asynchronous operations.<br>

#### 4/5: Error handling is implemented (for failed API calls, etc.).<br>
    Error handling is present, with catch blocks used for failed fetch requests,
    displaying fallback messages or alerts.<br>

#### 5/5: Effective use of asynchronous data to enhance user experience (like filtering, sorting).<br>
    Asynchronous data is used to display planet quiz results and dynamically update
    the voting bar chart.