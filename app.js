// Recipe data array with 8 recipes
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "medium",
        description: "A creamy Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
        category: "pasta"
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "hard",
        description: "Tender chicken in a rich, creamy tomato-based curry sauce.",
        category: "curry"
    },
    {
        id: 3,
        title: "Caesar Salad",
        time: 15,
        difficulty: "easy",
        description: "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
        category: "salad"
    },
    {
        id: 4,
        title: "Beef Stir-Fry",
        time: 30,
        difficulty: "medium",
        description: "Quick and flavorful beef with vegetables in a savory sauce.",
        category: "stir-fry"
    },
    {
        id: 5,
        title: "Vegetable Fried Rice",
        time: 20,
        difficulty: "easy",
        description: "A simple and delicious rice dish loaded with mixed vegetables.",
        category: "rice"
    },
    {
        id: 6,
        title: "Lamb Rogan Josh",
        time: 90,
        difficulty: "hard",
        description: "Aromatic Kashmiri curry with tender lamb in a spicy sauce.",
        category: "curry"
    },
    {
        id: 7,
        title: "Greek Salad",
        time: 10,
        difficulty: "easy",
        description: "Fresh tomatoes, cucumbers, olives, and feta cheese with olive oil dressing.",
        category: "salad"
    },
    {
        id: 8,
        title: "Penne Arrabbiata",
        time: 35,
        difficulty: "medium",
        description: "Spicy tomato sauce with penne pasta, garlic, and red chili flakes.",
        category: "pasta"
    }
];

// DOM selection
const recipeContainer = document.querySelector('#recipe-container');

// Function to create a recipe card HTML string
const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
        </div>
    `;
};

// Function to render recipes to the DOM
const renderRecipes = (recipesToRender) => {
    const html = recipesToRender.map(createRecipeCard).join('');
    recipeContainer.innerHTML = html;
};

// Initialize the app by rendering all recipes
renderRecipes(recipes);
