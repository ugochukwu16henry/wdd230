const myFruits = {};
const output = (myFruits) => {
    myFruits.forEach((fruit) => {
        let article = document.createElement("article");
        let fruitName = document.createElement("h3");
        fruitName.textContent = fruit.name;
        let carbohydrates = document.createElement("ul");
        carbohydrates.textContent = `Carbohydrates: ${fruit.carbohydrates}`;

        let protein = document.createElement("ul");
        protein.textContent = `Protein: ${fruit.protein}`;

        let fat = document.createElement("ul");
        fat.textContent = `Fat: ${fruit.fat}`;

        let calories = document.createElement("ul");
        calories.textContent = `Calories: ${fruit.calories}`;

        let sugar = document.createElement("ul");
        sugar.textContent = `Sugar: ${fruit.sugar}`;

        article.appendChild(fruitName);
        article.appendChild(carbohydrates);
        article.appendChild(protein);
        article.appendChild(fat);
        article.appendChild(calories);
        article.appendChild(sugar);

        document.querySelector("#myFruits").appendChild(article);
    });
};

const getfruits = async() => {
    const response = await fetch(
        "https://iriskarina120.github.io/bountiful-json/bountiful-json/bountiful.json"
    );
    fruitList = await response.json();
    output(fruitList);
};
getfruits();

const reset = () => {
    document.querySelector("#myFruits").innerHTML = "";
};

document.querySelector("#sortBy").addEventListener("change", sortBy);