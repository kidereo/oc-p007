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
     */
    if (query.length >= 3) {
        displayData(recipes.filter(recipe =>
            recipe.name.toUpperCase().includes(query) ||
            recipe.description.toUpperCase().includes(query) ||
            recipe.ingredients.some(detail =>
                detail.ingredient.toUpperCase().includes(query)
            ))
        );
    } else init();
}


