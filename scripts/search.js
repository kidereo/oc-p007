/**
 * DOM elements for ingredients search.
 *
 * @type {Element}
 */
const labelIngredient = document.querySelector("#ingredient-selector-label");
const spanIngredient = document.querySelector("#ingredient-selector-label span");
const inputIngredient = document.querySelector("#ingredient-selector-label input");
const iIngredient = document.querySelector("#ingredient-selector-label i");

/**
 * DOM elements for appliance search.
 *
 * @type {Element}
 */
const labelAppliance = document.querySelector("#appliance-selector-label");
const spanAppliance = document.querySelector("#appliance-selector-label span");
const inputAppliance = document.querySelector("#appliance-selector-label input");
const iAppliance = document.querySelector("#appliance-selector-label i");

/**
 * DOM elements for utensil search.
 *
 * @type {Element}
 */
const labelUtensil = document.querySelector("#utensil-selector-label");
const spanUtensil = document.querySelector("#utensil-selector-label span");
const inputUtensil = document.querySelector("#utensil-selector-label input");
const iUtensil = document.querySelector("#utensil-selector-label i");


/**
 * Event listeners for ingredients search.
 */
labelIngredient.addEventListener('click', () => {
    hide(spanIngredient);
    show(inputIngredient);
    swapClass(iIngredient, "fa-chevron-down", "fa-search")
    setWidth(labelIngredient, "350px");
});

labelIngredient.addEventListener('focusout', () => {
    hide(inputIngredient);
    show(spanIngredient);
    swapClass(iIngredient, "fa-search", "fa-chevron-down");
    setWidth(labelIngredient, "150px");
});

/**
 * Event listeners for appliances search.
 */
labelAppliance.addEventListener('click', () => {
    hide(spanAppliance);
    show(inputAppliance);
    swapClass(iAppliance, "fa-chevron-down", "fa-search")
    setWidth(labelAppliance, "350px");
});

labelAppliance.addEventListener('focusout', () => {
    hide(inputAppliance);
    show(spanAppliance);
    swapClass(iAppliance, "fa-search", "fa-chevron-down");
    setWidth(labelAppliance, "150px");
});

/**
 * Event listeners for utensils search.
 */
labelUtensil.addEventListener('click', () => {
    hide(spanUtensil);
    show(inputUtensil);
    swapClass(iUtensil, "fa-chevron-down", "fa-search")
    setWidth(labelUtensil, "350px");
});

labelUtensil.addEventListener('focusout', () => {
    hide(inputUtensil);
    show(spanUtensil);
    swapClass(iUtensil, "fa-search", "fa-chevron-down");
    setWidth(labelUtensil, "150px");
});

/**
 * Helper function to hide an element.
 *
 * @param element
 */
function hide(element) {
    element.style.display = "none";
}

/**
 * Helper function to reveal an element.
 *
 * @param element
 */
function show(element) {
    element.style.display = "";
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