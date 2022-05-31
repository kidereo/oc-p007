/**
 * Build and put recipe cards on index.html.
 *
 * @param recipes
 * @returns {Promise<void>}
 */
async function displayData(recipes) {

    const recipeSection = document.getElementById("recipe-cards");

    /**
     * Loop through every recipe.
     */
    for (const recipe of recipes) {

        /**
         * Create and style DOM elements.
         *
         * @type {HTMLElement}
         */
        const article = document.createElement("article");
        article.classList.add("recipe-card");
        const image = document.createElement("img");
        const cardHeaderDiv = document.createElement("div");
        cardHeaderDiv.classList.add("recipe-card-header");
        const h2 = document.createElement("h2");
        const cardHeaderTimingDiv = document.createElement("div");
        cardHeaderTimingDiv.classList.add("recipe-card-header-timing");
        const icon = document.createElement("i");
        const timeSpan = document.createElement("span");
        const cardMainDiv = document.createElement("div");
        cardMainDiv.classList.add("recipe-card-main");
        const pDescription = document.createElement("p");
        const cardMainIngredientsDiv = document.createElement("div");
        cardMainIngredientsDiv.classList.add("recipe-card-main-ingredients");
        const pIngredient = document.createElement("p");
        const pId = document.createElement("h3");

        /**
         * Hydrate DOM elements.
         */
        Object.assign(image, {
            src: "assets/images/recipe-book.jpg",
            alt: "Recipe image placeholder",
        });

        h2.textContent = recipe.name;

        icon.classList.add("far", "fa-clock");

        timeSpan.textContent = recipe.time + " min";

        pDescription.textContent = recipe.description;
        //pDescription.textContent = recipe.description.slice(0,350).concat(" ... ");

        pId.innerHTML = "<span>" + recipe.id + "</span>";

        /**
         * Loop through the ingredients for each recipe.
         */
        for (let detail of recipe.ingredients) {
            const pIngredient = document.createElement("p");

            if (detail.ingredient) {
                pIngredient.innerHTML = "<span>" + detail.ingredient + "</span>";
            }

            if (detail.ingredient && detail.quantity) {
                pIngredient.innerHTML = "<span>" + detail.ingredient + "</span>" + ": " + detail.quantity;
            }

            if (detail.ingredient && detail.quantity && detail.unit) {
                pIngredient.innerHTML = "<span>" + detail.ingredient + "</span>" + ": " + detail.quantity + " " + detail.unit;
            }

            cardMainIngredientsDiv.appendChild(pIngredient);
        }

        /**
         * Append elements to each other and to their article.
         */
        cardHeaderDiv.appendChild(h2);
        cardHeaderTimingDiv.appendChild(icon);
        cardHeaderTimingDiv.appendChild(timeSpan);
        cardMainDiv.appendChild(cardMainIngredientsDiv);
        cardMainDiv.appendChild(pDescription);
        cardHeaderDiv.appendChild(cardHeaderTimingDiv);

        article.appendChild(pId);
        article.appendChild(image);
        article.appendChild(cardHeaderDiv);
        article.appendChild(cardMainDiv);

        /**
         * Append article to the DOM.
         */
        recipeSection.appendChild(article);
    }
}

/**
 * Prepare for the take off.
 *
 * @returns {Promise<void>}
 */
async function init() {
    const {recipes} = await getData();
    displayData(recipes);
}

/**
 * Take off!
 */
init();
