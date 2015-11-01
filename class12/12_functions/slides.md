![GeneralAssemb.ly](../img/icons/FEWD_Logo.png)

#FEWD - Functions

---

##Objectives

* Practice using variables and conditionals.
* Describe arguments as they relate to functions.
* Predict values returned by a given function.
* Differentiate between anonymous and named functions.

---

##Agenda

* Reivew Variable, Data Types and Conditionals
* Functions
* Returns
* Anonymous Functions
* Lab Time

---

##Review

* Variables store values for use later on - these are your ingredients in a recipe.
* You assign data to a variable  `var name = 'Lauren';`
* Data types include strings (text), float and integers (numbers) and boolean (true/false)
* Conditionals are used in decision making
  * They check if something is true or false: equal, not equal, greater than, less than 

---

![GeneralAssemb.ly](../img/icons/code_along.png)
##Blackout

---

##Functions

Functions are the bread and butter of programming. It's a tool to structure larger programs, to reduce repetition and expand Javascript's vocabulary.

---

##Function Definition

* A function definition is similar to a variable definition.
* It is created by an expression that starts with the keyword function followed by the name.
* You can name your function anything, but it should be descritive.

---

##Functions Syntax

* A function must have parenthesis following the name. These are for arguments - we will talk about in a minute.
* A function body must always be wrapped in curly braces, even when it only contains a single statement.

---

##Functions Syntax

![](../img/unit_2/functions_syntax.png)

---

##Function Calls

![](../img/unit_2/function_calls.png)

---

##Function Arguments

![](../img/unit_2/argument_syntax.png)

---

##Function Arguments

![](../img/unit_2/function_call_argument.png)

---

##Function Arguments

* Arguments allow you to pass data into your function for use within the function.
* Arguments act like regular variables - but you dont need to define them with `var`.
* Not all functions have arguments.

---

##Return Functions

* Some functions produce values.
* A `return` determines the value the function returns. 
* When the program comes across a `return`, it immediately jumps out of the current function and gives the returned value to the code that called the function.

```
function multiply(x) {
  var result = x * 5;
  return result;
}

multiply(5);
25

```

---

##Organizing Function 

Where do you put functions?

---

![GeneralAssemb.ly](../img/icons/code_along.png)
##Cash Register

---

##Anonymous Functions

* A function that was declared without any named identifier to refer to it.
* Anonymous functions are usually not accessible after their initial creation.

```
$(document).ready(function(){
  doSomething();
});
```

---

![GeneralAssemb.ly](../img/icons/code_along.png)
##Annonymous Cash Register

---

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)
##[Temp Converter](http://codepen.io/laurenwburton/pen/VvxBWL)

---

##Homework

* [CityPix Web App](https://github.com/ga-students/FEWD-DC-17/tree/master/Week_06_JS_ComputerScience/Assignment)
* Start coding your final projects - HTML and CSS

--

##Exit Survey 

Class 12 - Functions Exit Ticket: http://goo.gl/forms/0pEh2Vyx2Y
