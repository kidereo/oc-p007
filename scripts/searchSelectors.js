/**
 * DOM elements for ingredients search.
 *
 * @type {Element}
 */
const labelIngredient = document.querySelector("#ingredient-selector-label");
const spanIngredient = document.querySelector("#ingredient-selector-label span");
const inputIngredient = document.querySelector("#ingredient-selector-label input");
const iIngredient = document.querySelector("#ingredient-selector-label i");
const ulIngredient = document.getElementById("ingredient-list");

/**
 * DOM elements for appliance search.
 *
 * @type {Element}
 */
const labelAppliance = document.querySelector("#appliance-selector-label");
const spanAppliance = document.querySelector("#appliance-selector-label span");
const inputAppliance = document.querySelector("#appliance-selector-label input");
const iAppliance = document.querySelector("#appliance-selector-label i");
const ulAppliance = document.getElementById("appliance-list");

/**
 * DOM elements for utensil search.
 *
 * @type {Element}
 */
const labelUtensil = document.querySelector("#utensil-selector-label");
const spanUtensil = document.querySelector("#utensil-selector-label span");
const inputUtensil = document.querySelector("#utensil-selector-label input");
const iUtensil = document.querySelector("#utensil-selector-label i");
const ulUtensil = document.getElementById("utensil-list");


/**
 * Event listeners for ingredients search.
 */
labelIngredient.addEventListener('click', () => {
    hide(spanIngredient);
    show(inputIngredient);
    show(ulIngredient);
    swapClass(iIngredient, "fa-chevron-down", "fa-chevron-up");
    setWidth(labelIngredient, "550px");
});

labelIngredient.addEventListener('focusout', () => {
    hide(inputIngredient);
    hide(ulIngredient);
    show(spanIngredient);
    swapClass(iIngredient, "fa-chevron-up", "fa-chevron-down");
    setWidth(labelIngredient, "150px");
});

/**
 * Event listeners for appliances search.
 */
labelAppliance.addEventListener('click', () => {
    hide(spanAppliance);
    show(inputAppliance);
    show(ulAppliance);
    swapClass(iAppliance, "fa-chevron-down", "fa-chevron-up")
    setWidth(labelAppliance, "550px");
});

labelAppliance.addEventListener('focusout', () => {
    hide(inputAppliance);
    hide(ulAppliance);
    show(spanAppliance);
    swapClass(iAppliance, "fa-chevron-up", "fa-chevron-down");
    setWidth(labelAppliance, "150px");
});

/**
 * Event listeners for utensils search.
 */
labelUtensil.addEventListener('click', () => {
    hide(spanUtensil);
    show(inputUtensil);
    show(ulUtensil);
    swapClass(iUtensil, "fa-chevron-down", "fa-chevron-up")
    setWidth(labelUtensil, "550px");
});

labelUtensil.addEventListener('focusout', () => {
    hide(inputUtensil);
    hide(ulUtensil);
    show(spanUtensil);
    swapClass(iUtensil, "fa-chevron-up", "fa-chevron-down");
    setWidth(labelUtensil, "150px");
});

/**
 * Helper function to hide an element.
 *
 * @param element
 */
function hide(element) {
    element.style.display = "none";
    element.classList.add("hidden");
}

/**
 * Helper function to reveal an element.
 *
 * @param element
 */
function show(element) {
    element.style.display = "";
    element.classList.remove("hidden");
}

/**
 * Helper function to set width of an element.
 *
 * @param element
 * @param width
 */
function setWidth(element, width) {
    element.style.width = width;
}

/**
 * Helper function to swap classes.
 *
 * @param element
 * @param classOut
 * @param classIn
 */
function swapClass(element, classOut, classIn) {
    element.classList.remove(classOut);
    element.classList.add(classIn);
}