/**
 * Reinitialise card index based on search parameters.
 */
async function reinit() {
    const {recipes} = await getData();
    const input = document.getElementById("search-form-input");
    const query = input.value.toUpperCase();
    const recipeCardsSection = document.getElementById("recipe-cards");

    /**
     * Clear the cards section from all previous cards.
     *
     * @type {string}
     */
    recipeCardsSection.innerHTML = "";

    /**
     * Send filtered data to index cards if input is 3 chars or more.
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


