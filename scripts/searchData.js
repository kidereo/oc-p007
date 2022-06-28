/**
 * Display recipe cards on index.html.
 */
init();

/**
 * Reinitialise card index based on search parameters.
 */
async function init() {

    /**
     * Get the data.
     */
    const {recipes} = await getData();

    /**
     * DOM elements.
     *
     * @type {HTMLElement}
     */
    const recipeCardsSection = document.getElementById("recipe-cards");
    const ulIngredients = document.getElementById("ingredient-list");
    const ulAppliances = document.getElementById("appliance-list");
    const ulUtensils = document.getElementById("utensil-list");
    const searchResultMessage = document.getElementById("search-result-message");

    /**
     * Search inputs converted to upper case to make results case insensitive.
     *
     * @type {string}
     */
    const inputMainSearch = document.getElementById("search-form-input").value.toUpperCase();
    const inputIngredient = document.getElementById("ingredient").value.toUpperCase();
    const inputAppliance = document.getElementById("appliance").value.toUpperCase();
    const inputUtensil = document.getElementById("utensil").value.toUpperCase();

    /**
     * Clear cards section and search selectors from all previous entries.
     *
     * @type {string}
     */
    recipeCardsSection.innerHTML = "";
    ulIngredients.innerHTML = "";
    ulAppliances.innerHTML = "";
    ulUtensils.innerHTML = "";


    /**
     * [1] Send filtered recipe data to index cards if the main search input is 3 chars or more.
     * [2] Generate and display appropriate search messages.
     * [3] Show all recipes if query is less than 3 characters.
     * [4] Subfilter recipes by ingredient, appliance or utensil search selector in all cases.
     */
    if (inputMainSearch.length >= 3) {
        let recipesByMainSearch = recipes.filter(recipe =>
            recipe.name.toUpperCase().includes(inputMainSearch) ||
            recipe.description.toUpperCase().includes(inputMainSearch) ||
            recipe.ingredients.some(detail => detail.ingredient.toUpperCase().includes(inputMainSearch)));
        if (recipesByMainSearch.length === 0) {
            messageNoRecipeFound(searchResultMessage);
        } else {
            let recipesByIngredient = filterByIngredient(recipesByMainSearch, searchIngredientTags());
            let recipesByAppliance = filterByAppliance(recipesByIngredient, searchApplianceTags());
            let filteredRecipes = filterByUtensil(recipesByAppliance, searchUtensilTags());
            displayData(filteredRecipes);
            messageRecipeFound(searchResultMessage, filteredRecipes);
            console.clear();
            console.log(filteredRecipes);
        }
    } else {
        searchResultMessage.style.display = "";
        let recipesByIngredient = filterByIngredient(recipes, searchIngredientTags());
        let recipesByAppliance = filterByAppliance(recipesByIngredient, searchApplianceTags());
        let filteredRecipes = filterByUtensil(recipesByAppliance, searchUtensilTags());
        if (filteredRecipes.length < recipes.length) {
            messageRecipeFound(searchResultMessage, filteredRecipes);
        }
        displayData(filteredRecipes);
        console.clear();
        console.log(filteredRecipes);
    }
}

/**
 * Message if no recipe is found.
 *
 * @param element
 */
function messageNoRecipeFound(element) {
    element.innerHTML = "<span>Aucune recette ne correspond à votre critère… vous pouvez chercher «tarte aux pommes», «poisson», etc.</span><i class='fas fa-sad-tear'></i></i>";
    element.style.backgroundColor = "DarkOrange";
    element.style.display = "flex";
}

/**
 * Message if there are recipes available.
 *
 * @param element
 * @param array
 */
function messageRecipeFound(element, array) {
    if (array.length === 1) {
        element.innerHTML = "<span>Vous avez trouvé " + array.length + " recette à déguster!</span><i class='fas fa-grin-squint'></i></i>";
    } else {
        element.innerHTML = "<span>Vous avez trouvé " + array.length + " recettes à déguster!</span><i class='fas fa-grin-squint'></i></i>";
    }
    element.style.backgroundColor = "DeepSkyBlue";
    element.style.display = "flex";
}

/**
 * Extract array of selected ingredient tags.
 *
 * @returns {string[]}
 */
function searchIngredientTags() {
    return Array.from(
        document.getElementsByClassName('search-tag colour-ingredients'),
        tag => tag.getAttribute('value').toUpperCase());
}

/**
 * Extract array of selected appliance tags.
 *
 * @returns {string[]}
 */
function searchApplianceTags() {
    return Array.from(
        document.getElementsByClassName('search-tag colour-appliances'),
        tag => tag.getAttribute('value').toUpperCase());
}

/**
 * Extract array of selected utensil tags.
 *
 * @returns {string[]}
 */
function searchUtensilTags() {
    return Array.from(
        document.getElementsByClassName('search-tag colour-utensils'),
        tag => tag.getAttribute('value').toUpperCase());
}

/**
 * Filter an incoming recipe array by an appropriate filter array.
 * Note that in the code above incoming arrays are themselves filtered.
 *
 * @param data
 * @param filters
 * @returns {*}
 */
function filterByIngredient(data, filters) {
    return data.filter(recipe => filters.every(filter => recipe.ingredients.some(detail => detail.ingredient.toUpperCase().includes(filter))));
}

function filterByAppliance(data, filters) {
    return data.filter(recipe => filters.every(filter => recipe.appliance.toUpperCase().includes(filter)));
}

function filterByUtensil(data, filters) {
    return data.filter(recipe => filters.every(filter => recipe.ustensils.some(detail => detail.toUpperCase().includes(filter))));
}
