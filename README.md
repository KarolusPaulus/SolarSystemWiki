# SolarSystemWiki

## HTML
#### 1/5: Basic HTML structure is present.<br>
**All HTML documents** have document type declarations **<//!DOCTYPE html>** and basic structure using **<//html>** and **<//body>**.<br>
**File: index.html Line of Code:** 1, 2, 9, 50, 51<br>
**File: matchmaker.html Line of Code:** 1, 2, 9, 170, 171<br>
**File: planets.html Line of Code:** 1, 2, 9, 156, 157<br>
**File: vote.html Line of Code:** 1, 2, 9, 51, 52<br>

#### 2/5: HTML structure with clear content differentiation (headings, paragraphs, lists).<br>
**All HTML documents** have consistent use of heading, paragraphs, labels and line breaks. There are no lists.<br>
**File: index.html Line of Code:** 11, 21-28, 33, 34, 36<br>
**File: matchmaker.html Line of Code:** 11, 20, 21, 24, 26, 45, 66, 87, 108, 129, 154<br>
**File: planets.html Line of Code:** 11, 20, 148<br>
**File: vote.html Line of Code:** 11, 20, 21, 23, 43<br>

#### 3/5: Use of forms, links, and media.<br>
**All HTML documents** have a header and a footer. The header has links to other pages on the site while the footer has external links to sources used for the making of the site and the information displayed on it.<br>
The match maker quiz in **matchmaker.html** uses form to structure the questions and answers. The anwers are all in image form and are displayed in place of text. After the user has filled out the form and pressed the submit button, a loading gif plays as the results are calculated.<br>
The home page, **index.html**, uses still images as buttons and the background.<br>
**File: index.html Line of Code:**<br>
Links: 13-15, 43-47<br>
Media: 21-28<br>
**File: matchmaker.html Line of Code:**<br>
Forms: 23-151<br>
Links: 13-15, 163-167<br>
Media: 28, 32, 38, 42, 49, 53, 59, 63, 70, 74, 80, 84, 91, 95, 101, 105, 112, 116, 122, 126, 133, 137, 143, 147, 152, 156<br>
**File: planets.html Line of Code:**<br>
Links: 13-15, 149-153<br>
**File: vote.html Line of Code:**<br>
Forms: 22-39<br>
Links: 13-15, 44-48<br>
**File: js/matchmaker.js Line of Code:**<br>
Media: 120-129, 143, 144, 170<br>

#### 4/5: Tables are effectively used.<br>
The **planet.html** document has a table of information on all the planets in our Solar System. It has multiple cells and rows.<br>
**File: planets.html Line of Code:** 21-143<br>

#### 5/5: Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.<br>
**All HTML documents** have a consistent structure that utilizes semantic elements such as **<//header>**, **<//footer>**, **<//nav>**, **<//main>** and **<//section>**.<br>
**File: index.html Line of Code:** 10-17, 12-16, 19-30, 32-39, 41-48<br>
**File: matchmaker.html Line of Code:** 10-17, 12-16, 19-159, 22-158, 161-168<br>
**File: planets.html Line of Code:** 10-17, 12-16, 18-145, 19-144, 147-154<br>
**File: vote.html Line of Code:** 10-17, 12-16, 19-40, 42-49<br>

## CSS
#### 1/5: Basic CSS styling (colors, fonts).<br>
The **style.css** file contains use of different colors and fonts to create a more consistent appearance.<br>
**File: style.css Line of Code (examples):** 9, 13, 22, 23, 37, 38, 46, 54, 84, 88, 89, 94, 98, 106, 112, 124, 130, 137, 150, 404<br>

#### 2/5: Use of classes and IDs to style specific elements.<br>
The **style.css** file contains selectors to style spesific elements such as text, the header, the footer, buttons, images and hyperlinks.<br>
**File: style.css Line of Code (examples):** 5-19, 29-34, 68-76, 92-95, 97-102, 123-132, 172-178, 248-250, 262-271, 385-394, 545-555, 560-688<br>

#### 3/5: Implementation of responsive design elements.<br>
A mostly working mobile version of the layout has been implemented in **style.css** under **@media**. The home page hasn't been successfully adapted into a user friendly version for mobile as it's layout is very depended on a wide screen. Other pages such as **planets.html**, **matchmaker.html** and **vote.html** have working mobile versions.<br>
**File: style.css Line of Code:** 545-555, 560-688<br>
**File: index.html, matchmaker.html, planets.html, vote.html Line of Code:** 5<br>

#### 4/5: Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)<br>
Flexbox layout module is used to handle the overall layout structure of all the pages. In the **body**, it makes the content vertically align and ensures it stretches to fill the screen while the **header** uses it to ensure responsive behavior across screen sizes. In **.gif-container** and **.question** flexbox is used to center and distribute the content dynamically. Float is not used.<br>
**File: index.html Line of Code:**<br>
Flexbox/arrays: 20-29<br>
**File: matchmaker.html Line of Code:**<br>
Flexbox/arrays: 25-34, 155-157<br>
**File: style.css Line of Code (examples):**<br>
Flexbox/arrays: 6, 7, 30-32, 157, 173-177, 320-322, 334, 335, 341-343, 490, 530-539<br>
**File: js/vote.js Line of Code:**<br>
Flexbox/arrays: 11<br>

#### 5/5: Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.<br>

## JavaScript Basics
The code includes many simple intereactions like pop up boxes tha appear when a planet is clicked on the home page. There only one alert in **matchmaker.js** that pops up if there's an error in fetching your match after you click submit.<br>
#### 1/5: Simple interactions (like alerts on button click).<br>
**File: js/matchmaker.js Line of Code:**<br>
Alerts: 180<br>

#### 2/5: Multiple event listeners and basic DOM manipulations.<br>
There are multiple event listeners across **matchmaker.js**, **planets.js** and **vote.js** that handle form submission, button clicks, and fetching results.<br>
**File: js/vote.js Line of Code:**<br>
Event listeners: 2-5, 18<br>
Basic DOM manipulations: 10, 11, 40, 43-56, 60, 61, 65<br>
**File: js/planets.js Line of Code:**<br>
Event listeners: 22, 50<br>
Basic DOM manipulations: 15, 27, 28, 36, 51, 57<br>
**File: js/matchmaker.js Line of Code:**<br>
Event listeners: 131<br>
Basic DOM manipulations: 135-140, 143, 146, 149, 150<br>

#### 3/5: Use of arrays, objects, and functions.<br>
Arrays (**planets** in **planets.js**), objects (**Quiz**, **planetScores** in **matchmaker.js**), and functions (**calculatePlanetScores** in **matchmaker.js**) are used across multiple JavaScript files.<br>
**File: js/planets.js Line of Code:**<br>
Arrays: 9, 24<br>
Objects: 1-7, 9-12, 19, 24, 27, 28, 36, 49-53<br>
Functions: 2-7, 8-44, 21-43, 49-59<br>
**File: js/matchmaker.js Line of Code:**<br>
Arrays: 11-20, 134-141, 159, 164<br>
Objects: 1-118, 11-20, 120-129, 164<br>
Functions: 1-118, 10-117, 131-183, 161-181<br>
**File: js/vote.js Line of Code:**<br>
Arrays: 38-66, 39<br>
Objects: 2-5, 8, 22-28, 35-66, 43, 46, 48, 50, 51, 60, 61<br>
Functions: 7-16, 18-33, 35-68<br>

#### 4/5: Advanced logic, looping through data, and dynamic DOM updates.<br>
Advanced logic handles quiz results and dynamic DOM updates across **planets.js**, **matchmaker.js** and **vote.js**. Loops iterate through the planets to display information or votes.<br>
**File: js/vote.js Line of Code:**
Loops: 38, 39<br>
Dynamic DOM updates: 10, 11, 19, 29-31, 40-63, 65<br>
**File: js/planets.js Line of Code:**<br>
Loops: 21, 22, 24<br>
Dynamic DOM updates: 15, 27, 28, 31, 33, 36, 38-40, 46, 51, 53, 55-58<br>
**File: js/matchmaker.js Line of Code:**<br>
Loops: 159, 164<br>
Dynamic DOM updates: 143-154, 168-172, 174, 178, 179<br>

### 5/5: Consistent use of Object-Oriented JavaScript principles.<br>
Object-oriented principles are present in the use of constructors like **Quiz** in **matchmaker.js**.<br>
**File: js/matchmaker.js Line of Code:** 1-118, 10-20, 134-141<br>

## Asynchronous Operations
#### 1/5: Use of timers.<br>
setTimeout functions are used across all js files.<br>
**File: js/planets.js Line of Code:** 38-40, 55-58<br>
**File: js/vote.js Line of Code:** 58-62<br>
**File: js/matchmaker.js Line of Code:** 156-182<br>

#### 2/5: Successful implementation of an AJAX call or Fetch.<br>
Fetch is used to get data from external JSON files and APIs for both quiz results and planet information in **planets.js** and **matchmaker.js**.<br>
AJAX call is used in **vote.js** where the voting button is replaced by a message from **votemessage.txt**.<br>
**File: js/planets.js Line of Code:**<br>
Fetch: 1-7
**File: js/vote.js Line of Code:**<br>
AJAX: 7-16
Fetch: 22-28, 36-69
**File: js/matchmaker.js Line of Code:**<br>
Fetch: 161-183<br>

#### 3/5: Data from the asynchronous call is displayed on the webpage.<br>
Fetched data for quiz (**matchmaker.js**) and vote (**vote.js**) results are displayed on the webpage after asynchronous operations.<br>
**File: js/planets.js Line of Code:** 8-44, 45-48, 45-59<br>
**File: js/vote.js Line of Code:** 7-16, 30, 35-68<br>
**File: js/matchmaker.js Line of Code:** 131-183, 161-175, 168-172<br>

#### 4/5: Error handling is implemented (for failed API calls, etc.).<br>
Error handling is used for failed fetch requests and displaying fallback messages or alerts.<br>
**File: js/planets.js Line of Code:** 4, 45-48<br>
**File: js/vote.js Line of Code:** 32, 67<br>
**File: js/matchmaker.js Line of Code:** 176-181<br>

#### 5/5: Effective use of asynchronous data to enhance user experience (like filtering, sorting).<br>
Asynchronous data is used to display planet quiz results and dynamically update the voting bar chart.<br>
**File: js/planets.js Line of Code:** 4, 6, 9-43, 15, 27, 36, 39, 46, 53, 56, 57<br>
**File: js/vote.js Line of Code:** 10-12, 19, 20, 27, 30, 43-56, 59-61, 65<br>
**File: js/matchmaker.js Line of Code:** 153, 154, 164-171, 178-180<br>