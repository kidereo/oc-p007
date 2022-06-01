/**
 * Search recipes in the main search form on titles, ingredients and descriptions.
 */
function searchForm() {
    const input = document.getElementById("search-form-input");
    const filter = input.value.toUpperCase();
    const recipeCardsSection = document.getElementById("recipe-cards");
    const recipeArticles = recipeCardsSection.getElementsByTagName("article");

    for (const recipeArticle of recipeArticles) {
        let articleId = recipeArticle.getElementsByTagName("h3")[0];
        let articleTitle = recipeArticle.getElementsByTagName("h2")[0];
        let articleDescription = recipeArticle.querySelector(".recipe-card-main-description");
        let articleIngredients = recipeArticle.querySelector(".recipe-card-main-ingredients p");
        let searchValueId = articleId.textContent || articleId.innerText;
        let searchValueTitle = articleTitle.textContent || articleTitle.innerText;
        let searchValueDescription = articleDescription.textContent || articleDescription.innerText;
        let searchValueIngredients = articleIngredients.textContent || articleDescription.innerText;
        if (searchValueId.toUpperCase().indexOf(filter) > -1 ||
            searchValueTitle.toUpperCase().indexOf(filter) > -1 ||
            searchValueIngredients.toUpperCase().indexOf(filter) > -1 ||
            searchValueDescription.toUpperCase().indexOf(filter) > -1) {
            recipeArticle.style.display = "";
        } else {
            recipeArticle.style.display = "none";
        }
    }
}