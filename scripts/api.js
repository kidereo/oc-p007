/**
 * Get data from the json file.
 *
 * @returns {Promise<{recipes: *[]}>}
 */
async function getData() {
    const dataSource = "data/recipes.json";
    const response = await fetch(dataSource);
    const data = await response.json();
    const recipeData = [...data.recipes];

    return {
        'recipes': recipeData
    }
}