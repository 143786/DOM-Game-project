'use strict';

// Selecting elements :
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
/* when we use the
 getElementById we dont need to put # here so we can use instead 
of querySelector this one also for id elements  this work exactly the same
but the get element by ID is supposed to be a little bit faster then
query selector but maybe that's only relevant if you're selecting like 
thousands of elements at once. */

score0El.textContent = 0;
score1El.textContent = 0;
/* here we are specifying numbers, not strings, but JS will then 
automatically convert them to strings to display them on the page. */
