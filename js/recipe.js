// Here is the URL fof the API I'm using
const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=side%20salad&diet=vegetarian&intolerances=gluten&includeIngredients=cheese%2Cnuts&excludeIngredients=eggs&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&addRecipeInstructions=false&addRecipeNutrition=false&maxReadyTime=45&ignorePantry=true&sort=max-used-ingredients&offset=0&number=10';

// My API key
const apiKey = b209950e56msh44e6c010fffefe1p10300ajsne45cf0a3b310;


// Targeting DOM elements
const searchInput = document.querySelector(".search");
const submitButton = document.querySelector(".submit");
const article = document.querySelector("article");