/**
 * Display recipe cards on index.html.
 */
reinit();

/**
 * Reinitialise card index based on search parameters.
 */
async function reinit() {
    const {recipes} = await getData();
    const input = document.getElementById("search-form-input");
    const query = input.value.toUpperCase();
    const recipeCardsSection = document.getElementById("recipe-cards");
    const ulIngredients = document.getElementById("ingredient-list");
    const ulAppliances = document.getElementById("appliance-list");
    const ulUtensils = document.getElementById("utensil-list");
    const searchResultMessage = document.getElementById("search-result-message");

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
     * Send filtered data to index cards if the input is 3 chars or more.
     * Generate and display appropriate search messages.
     * Show all recipes if query is less than 3 characters.
     */
    if (query.length >= 3) {
        let filteredRecipes = recipes.filter(recipe =>
            recipe.name.toUpperCase().includes(query) ||
            recipe.description.toUpperCase().includes(query) ||
            recipe.ingredients.some(detail => detail.ingredient.toUpperCase().includes(query)));
        if (filteredRecipes.length === 0) {
            searchResultMessage.innerHTML = "<span>Aucune recette ne correspond à votre critère… vous pouvez chercher «tarte aux pommes», «poisson», etc.</span><i class='fas fa-sad-tear'></i></i>";
            searchResultMessage.style.backgroundColor = "DarkOrange";
            searchResultMessage.style.display = "flex";
        } else {
            searchResultMessage.innerHTML = "<span>Vous avez trouvé " + filteredRecipes.length + " recettes à déguster!</span><i class='fas fa-grin-squint'></i></i>";
            searchResultMessage.style.backgroundColor = "DeepSkyBlue";
            searchResultMessage.style.display = "flex";
            displayData(filteredRecipes);
        }
    } else {
        searchResultMessage.style.display = "";
        displayData(recipes);
    }
}



