/**
 * Global DOM elements.
 *
 * @type {HTMLElement}
 */
const searchTags = document.getElementById("search-selectors-tags");
const recipeCards = document.getElementById("recipe-cards");

/**
 * DOM elements for ingredient search.
 *
 * @type {Element}
 */
const labelIngredient = document.querySelector("#ingredient-selector-label");
const spanIngredient = document.querySelector("#ingredient-selector-label span");
const inputIngredient = document.querySelector("#ingredient-selector-label input");
const filterIngredient = document.getElementById("ingredient");
const iIngredient = document.querySelector("#ingredient-selector-label i");
const ulIngredient = document.getElementById("ingredient-list");
const liIngredients = ulIngredient.getElementsByTagName("li");

/**
 * Event listeners for ingredient search.
 */

/**
 * Unfurl the dropdown by clicking on its title.
 */
spanIngredient.addEventListener('click', () => {
    closeAppliances();
    closeUtensils();
    hide(spanIngredient);
    show(inputIngredient);
    show(ulIngredient);
    swapClass(iIngredient, "fa-chevron-down", "fa-chevron-up");
    setWidth(labelIngredient, "550px");
    iIngredient.classList.add("active");
});

/**
 * Furl/Unfurl the dropdown by clicking on its icon.
 */
iIngredient.addEventListener("click", () => {
    if (iIngredient.classList.contains("active")) {
        iIngredient.classList.remove("active");
        closeIngredients();
    } else {
        closeAppliances();
        closeUtensils();
        hide(spanIngredient);
        show(inputIngredient);
        show(ulIngredient);
        swapClass(iIngredient, "fa-chevron-down", "fa-chevron-up");
        setWidth(labelIngredient, "550px");
        iIngredient.classList.add("active");
    }
});

/**
 * [1] Hide the ingredient from the ingredient dropdown list.
 * [2] Add a new ingredient tag as a button.
 * [3] Relaunch recipe search.
 */
ulIngredient.addEventListener("click", function (e) {
    if (e.target && e.target.matches("li.ingredient")) {
        //Hide the item from the ul list
        e.target.classList.add("hidden");
        //Add the item as a new tag
        searchTags.innerHTML += "<input type='button' class='search-tag colour-ingredients' value='" + e.target.innerText + "' onclick='restoreIngredient(value)'>";
    }
    init();
});

/**
 * Ingredient search functions.
 */

/**
 * Restore the tagged ingredient to the ingredient dropdown list.
 *
 * @param value
 */
function restoreIngredient(value) {
    for (let liIngredient of liIngredients) {
        if (liIngredient.innerText === value)
            liIngredient.classList.remove("hidden");
    }
}

/**
 * Search ingredient dropdown input.
 */
function searchIngredients() {
    for (let liIngredient of liIngredients) {
        if (liIngredient.innerText.toUpperCase().includes(filterIngredient.value.toUpperCase())) {
            liIngredient.style.display = "";
        } else {
            liIngredient.style.display = "none";
        }
    }
}

/**
 * Furl the ingredient dropdown.
 */
function closeIngredients() {
    hide(inputIngredient);
    hide(ulIngredient);
    show(spanIngredient);
    swapClass(iIngredient, "fa-chevron-up", "fa-chevron-down");
    setWidth(labelIngredient, "150px");
}

/**
 * DOM elements for appliance search.
 *
 * @type {Element}
 */
const labelAppliance = document.querySelector("#appliance-selector-label");
const spanAppliance = document.querySelector("#appliance-selector-label span");
const inputAppliance = document.querySelector("#appliance-selector-label input");
const filterAppliance = document.getElementById("appliance");
const iAppliance = document.querySelector("#appliance-selector-label i");
const ulAppliance = document.getElementById("appliance-list");
const liAppliances = ulAppliance.getElementsByTagName("li");

/**
 * Event listeners for appliance search.
 */
/**
 * Unfurl the dropdown by clicking on its title.
 */
spanAppliance.addEventListener('click', () => {
    closeIngredients();
    closeUtensils();
    hide(spanAppliance);
    show(inputAppliance);
    show(ulAppliance);
    swapClass(iAppliance, "fa-chevron-down", "fa-chevron-up")
    setWidth(labelAppliance, "550px");
    iAppliance.classList.add("active");
});

/**
 * Furl/Unfurl the dropdown by clicking on its icon.
 */
iAppliance.addEventListener("click", () => {
    if (iAppliance.classList.contains("active")) {
        iAppliance.classList.remove("active");
        closeAppliances();
    } else {
        closeIngredients();
        closeUtensils();
        hide(spanAppliance);
        show(inputAppliance);
        show(ulAppliance);
        swapClass(iAppliance, "fa-chevron-down", "fa-chevron-up");
        setWidth(labelAppliance, "550px");
        iAppliance.classList.add("active");
    }
});

/**
 * [1] Hide clicked appliance from the appliance dropdown list.
 * [2] Add a new appliance tag as a button.
 * [3] Relaunch recipe search.
 */
ulAppliance.addEventListener("click", function (e) {
    if (e.target && e.target.matches("li.appliance")) {
        //Hide the item from the ul list
        e.target.classList.add("hidden");
        //Add the item as a new tag
        searchTags.innerHTML += "<input type='button' class='search-tag colour-appliances' value='" + e.target.innerText + "' onclick='restoreAppliance(value)'>";
    }
    init();
});

/**
 * Appliance search functions.
 */

/**
 * Restore the tagged appliance to the appliance dropdown list.
 *
 * @param value
 */
function restoreAppliance(value) {
    for (let liAppliance of liAppliances) {
        if (liAppliance.innerText === value)
            liAppliance.classList.remove("hidden");
    }
}

/**
 * Search appliance dropdown input.
 */
function searchAppliances() {
    for (let liAppliance of liAppliances) {
        if (liAppliance.innerText.toUpperCase().includes(filterAppliance.value.toUpperCase())) {
            liAppliance.style.display = "";
        } else {
            liAppliance.style.display = "none";
        }
    }
}

/**
 * Furl the appliance dropdown.
 */
function closeAppliances() {
    hide(inputAppliance);
    hide(ulAppliance);
    show(spanAppliance);
    swapClass(iAppliance, "fa-chevron-up", "fa-chevron-down");
    setWidth(labelAppliance, "150px");
}

/**
 * DOM elements for utensil search.
 *
 * @type {Element}
 */
const labelUtensil = document.querySelector("#utensil-selector-label");
const spanUtensil = document.querySelector("#utensil-selector-label span");
const filterUtensil = document.getElementById("utensil");
const inputUtensil = document.querySelector("#utensil-selector-label input");
const iUtensil = document.querySelector("#utensil-selector-label i");
const ulUtensil = document.getElementById("utensil-list");
const liUtensils = ulUtensil.getElementsByTagName("li");

/**
 * Event listeners for utensils search.
 */
spanUtensil.addEventListener('click', () => {
    closeIngredients();
    closeAppliances();
    hide(spanUtensil);
    show(inputUtensil);
    show(ulUtensil);
    swapClass(iUtensil, "fa-chevron-down", "fa-chevron-up")
    setWidth(labelUtensil, "550px");
    iUtensil.classList.add("active");
});

/**
 * Furl/Unfurl the dropdown by clicking on its icon.
 */
iUtensil.addEventListener("click", () => {
    if (iUtensil.classList.contains("active")) {
        iUtensil.classList.remove("active");
        closeUtensils();
    } else {
        closeIngredients();
        closeAppliances();
        hide(spanUtensil);
        show(inputUtensil);
        show(ulUtensil);
        swapClass(iUtensil, "fa-chevron-down", "fa-chevron-up");
        setWidth(labelUtensil, "550px");
        iUtensil.classList.add("active");
    }
});

/**
 * [1] Hide clicked utensil from the utensil dropdown list.
 * [2] Add a new utensil tag as a button.
 * [3] Relaunch recipe search.
 */
ulUtensil.addEventListener("click", function (e) {
    if (e.target && e.target.matches("li.utensil")) {
        //Hide the item from the ul list
        e.target.classList.add("hidden");
        //Add the item as a new tag
        searchTags.innerHTML += "<input type='button' class='search-tag colour-utensils' value='" + e.target.innerText + "' onclick='restoreUtensil(value)'>";
    }
    init();
});

/**
 * Utensil search functions.
 */

/**
 * Restore the tagged appliance to the appliance dropdown list.
 *
 * @param value
 */
function restoreUtensil(value) {
    for (let liUtensil of liUtensils) {
        if (liUtensil.innerText === value)
            liUtensil.classList.remove("hidden");
    }
}

/**
 * Search utensils dropdown input.
 */
function searchUtensils() {
    for (let liUtensil of liUtensils) {
        if (liUtensil.innerText.toUpperCase().includes(filterUtensil.value.toUpperCase())) {
            liUtensil.style.display = "";
        } else {
            liUtensil.style.display = "none";
        }
    }
}

/**
 * Furl the utensil dropdown.
 */
function closeUtensils() {
    hide(inputUtensil);
    hide(ulUtensil);
    show(spanUtensil);
    swapClass(iUtensil, "fa-chevron-up", "fa-chevron-down");
    setWidth(labelUtensil, "150px");
}

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

/**
 * Close all dropdowns when any card is clicked.
 */
recipeCards.addEventListener("click", function () {
    closeIngredients();
    closeAppliances();
    closeUtensils();
});

/**
 * [1] Remove tags from the search tags area.
 * [2] Relaunch recipe search.
 */
searchTags.addEventListener("click", function (e) {
    if (e.target && e.target.matches("input")) {
        e.target.remove();
    }
    init();
});
