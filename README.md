# Week 02 Self-Assessment

## Guidelines

- Self-assessments are meant to give you an idea of how well you understand--or can figure out--the material that you covered recently.
- You **must** submit a pull request for all self-assessments (guidelines below). Give yourself a few minutes to do this at the end of the time allotted for the assessment.
- The help button is available to you during self-assessments, how often you use that service is up to your own discretion.
- What you see is what you get--most of the time we don't include outside libraries
- TIP: Don't take too much time writing tests that are not required, instead use your Chrome Console for a quick and easy way to test your code.


## Grading Outline

- [ ] algo-complexity
- [ ] algo-find-dup-char
- [ ] d3-describe
- [ ] js-inheritance-pseudo-classical

## Self-Grading Process

After you complete each prompt, assign a grade to each item in the above Grading Outline, using this [Grading Scale](https://github.com/makersquare/student-wiki/wiki/Self-Assessments). Note your grade by editing **this file** (`README.md`), and writing your grade next to the corresponding item in the Grading Outline above. Please use the exact terms shown in the [Grading Scale](https://github.com/makersquare/student-wiki/wiki/Self-Assessments) document; do not modify or improvise them.

## Javascript Syntax Check

The file `syntaxalyze.html` is included. Open it in your browser and then drag your solution files onto the page to perform a syntax check. Fix any errors listed, then repeat the check. In order to re-check your file, you must **drag the solution file into syntaxalyze after each edit** &mdash; refreshing the page will not work. You may need to perform these steps multiple times until all the errors are fixed.

## Submitting Solutions

**VERY IMPORTANT: Before submitting your solutions, find and fix all syntax errors**

Solutions are submitted via [Pull Request](https://help.github.com/articles/using-pull-requests). Follow these steps:

1. From **your fork**, select `Pull Requests` and then create a `New pull request`. 
2. STOP. *Before* you `Click to create a pull request for this comparison` you must **adjust the target branch** (aka `base branch`) to be your username. Once chagned, the pull-request heading should look like this:

  > makersquare:username ... username:master

3. Copy and **paste the completed Grading Outline into the comment block** of your Pull Request.
4. Click `Send pull request`

---

## Algorithm Complexity
* [ ] List and briefly describe the types of algorithmic complexity. Be as clear and complete as necessary to demonstrate your mastery.
* [ ] What time complexity do the given functions have (with respect to the size of the input `array`)?


## Algorithms
* [ ] Write a function that, given a string, returns an array of all duplicated letters.
* [ ] Include a comment near the end of the file stating what complexity you believe your solution to be.

## D3
* [ ] Add a comment for each numbered line of code in `d3-describe.js`. If you run up against a method call you haven't seen before, feel free to look up what it does -- but explain it in your own words.  Make certain not to just repeat what the code already states clearly.


## Pseudo-classical inheritance
* [ ] Refactor `makePhone` and `makeSmartphone` to use pseudo-classical inheritance
  * They should have all of the same methods as objects returned from the maker functions
  * _Do not modify the factory functions - instead, use the constructor functions at the end of the file_
