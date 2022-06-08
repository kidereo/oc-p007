/**
 * Display recipe cards on index.html.
 */
init();

/**
 * Prepare for displaying recipe cards.
 *
 * @returns {Promise<void>}
 */
async function init() {
    const {recipes} = await getData();
    displayData(recipes);
}

/**
 * Build up the recipe card section with the cards.
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
        pDescription.classList.add("recipe-card-main-description");
        const cardMainIngredientsDiv = document.createElement("div");
        cardMainIngredientsDiv.classList.add("recipe-card-main-ingredients");
        const headingId = document.createElement("h3");

        /**
         * Hydrate DOM elements.
         */
        headingId.innerHTML = "<span>" + recipe.id + "</span>";

        /**
         * Add random images to cards.
         */
        let randomImage = [
            "https://foodish-api.herokuapp.com/images/burger/burger38.jpg",
            "https://foodish-api.herokuapp.com/images/dessert/dessert12.jpg",
            "https://foodish-api.herokuapp.com/images/pizza/pizza11.jpg",
            "https://foodish-api.herokuapp.com/images/rice/rice9.jpg",
            "https://foodish-api.herokuapp.com/images/pasta/pasta19.jpg",
            "https://foodish-api.herokuapp.com/images/burger/burger36.jpg",
            "https://foodish-api.herokuapp.com/images/dessert/dessert30.jpg",
            "https://foodish-api.herokuapp.com/images/pizza/pizza60.jpg",
            "https://foodish-api.herokuapp.com/images/rice/rice22.jpg",
            "https://foodish-api.herokuapp.com/images/pasta/pasta9.jpg",
        ];

        let randomImageIndex = Math.floor(Math.random() * randomImage.length);

        if (randomImage.length > 0) {
            Object.assign(image, {
                src: randomImage[randomImageIndex],
                alt: "Recipe image",
            });
        } else {
            Object.assign(image, {
                src: "assets/images/recipe-book.jpg",
                alt: "Recipe image placeholder",
            })
        }

        h2.textContent = recipe.name;

        icon.classList.add("far", "fa-clock");

        timeSpan.textContent = recipe.time + " min";

        /**
         * Truncate descriptions if they are too long.
         */
        if (recipe.description.length < 350) {
            pDescription.textContent = recipe.description;
        } else {
            pDescription.textContent = recipe.description.slice(0, 350).concat(" ... ");
        }

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

        article.appendChild(headingId);
        article.appendChild(image);
        article.appendChild(cardHeaderDiv);
        article.appendChild(cardMainDiv);

        /**
         * Append article to the DOM.
         */
        recipeSection.appendChild(article);

        /**
         * Append ingredients to their selector
         */
        const ulIngredients = document.getElementById("ingredient-list");
        const liIngredient = document.createElement("li");

        let ingredientsList = [];
        recipe.ingredients.forEach(function (detail) {
            ingredientsList.push(detail.ingredient);
        });
        ingredientsList.forEach(function (ingredient) {
            console.log(ingredient);
            liIngredient.textContent = capitalizeFirstLetter(ingredient);
            ulIngredients.appendChild(liIngredient);
        });

        /*for (let ingredient in ingredientsList) {
           // console.log(ingredientsList[ingredient]);
            liIngredient.textContent = capitalizeFirstLetter(ingredientsList[ingredient]);
            ulIngredients.appendChild(liIngredient);
        }*/
        //console.log(ingredientsList);

    }

    /**
     * Helper function to capitalise first letter.
     *
     * @param string
     * @returns {string}
     */
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
