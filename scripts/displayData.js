/**
 * Build up the recipe card section with the cards.
 *
 * @param recipes
 * @returns {Promise<void>}
 */
async function displayData(recipes) {
    const recipeSection = document.getElementById("recipe-cards");
    const ulIngredients = document.getElementById("ingredient-list");
    const ulAppliances = document.getElementById("appliance-list");
    const ulUtensils = document.getElementById("utensil-list");

    let ingredientsList = [];
    let appliancesList = [];
    let utensilsList = [];

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
         * Create a master list of all ingredients.
         */
        recipe.ingredients.forEach(function (detail) {
            ingredientsList.push(detail.ingredient);
        });

        /**
         * Create a master list of all appliances.
         */
        appliancesList.push(recipe.appliance);

        /**
         * Create a master list of all utensils.
         */
        utensilsList.push(recipe.ustensils);
    }

    /**
     * Remove duplicates from ingredient, appliance and utensil Lists.
     * Specifically for the utensil list, it is necessary to flatten it and convert to lowercase for duplicate removal
     * as Set() is case sensitive.
     *
     * @type {*[]}
     */
    let uniqueIngredientList = [...new Set(ingredientsList)].sort();
    let uniqueApplianceList = [...new Set(appliancesList)].sort();
    let equalisedUtensilList = utensilsList.flat().map(detail => typeof detail === 'string' ? detail.toLowerCase() : detail);
    let uniqueUtensilList = [...new Set(equalisedUtensilList)].sort();


    /**
     * Filter out any active tags from unique lists prior to building <li> elements.
     */

    //Convert unique lists to upper case. This is needed to reuse search...Tags() function from searchData.js
    let uilUpper = uniqueIngredientList.map(detail => {
            return detail.toUpperCase();
        });
    let ailUpper = uniqueApplianceList.map(detail => {
        return detail.toUpperCase();
    });
    let usilUpper = uniqueUtensilList.map(detail => {
        return detail.toUpperCase();
    });

    //Bring in results of the search...Tags() function from searchData.js
    let ingredientTagsToRemove = new Set(searchIngredientTags());
    let applianceTagsToRemove = new Set(searchApplianceTags());
    let utensilTagsToRemove = new Set(searchUtensilTags());

    //Filter out active tags
    let uilUpperFiltered = uilUpper.filter(detail => !ingredientTagsToRemove.has(detail));
    let ailUpperFiltered = ailUpper.filter(detail => !applianceTagsToRemove.has(detail));
    let usilUpperFiltered = usilUpper.filter(detail => !utensilTagsToRemove.has(detail));

    //Reconvert unique lists to lower case.
    uniqueIngredientList = uilUpperFiltered.map(detail => {
        return detail.toLowerCase();
    });
    uniqueApplianceList = ailUpperFiltered.map(detail => {
        return detail.toLowerCase();
    });
    uniqueUtensilList = usilUpperFiltered.map(detail => {
        return detail.toLowerCase();
    });

    /**
     * Append ingredients, appliances and utensils to relevant search selector.
     */
    for (let uniqueIngredient in uniqueIngredientList) {
        ulIngredients.innerHTML += "<li class='ingredient'>" + capitalizeFirstLetter(uniqueIngredientList[uniqueIngredient]) + "</li>";
    }

    for (let uniqueAppliance in uniqueApplianceList) {
        ulAppliances.innerHTML += "<li class='appliance'>" + capitalizeFirstLetter(uniqueApplianceList[uniqueAppliance]) + "</li>";
    }

    for (let uniqueUtensil in uniqueUtensilList) {
        ulUtensils.innerHTML += "<li class='utensil'>" + capitalizeFirstLetter(uniqueUtensilList[uniqueUtensil]) + "</li>";
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