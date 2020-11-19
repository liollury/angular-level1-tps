const fs = require("fs-extra");

let data = require("./comics.json");

let categories = data.categories;

const catById = (volumeId) => {
    return categories.find((category) => category.id === volumeId);
};

let filteredComics = [];

data.comics = data.comics.map((comic) => {
    delete comic.description;
    let category = catById(comic.volumeId);
    if (category) {
        if (!category.count) category.count = 0;
        if (category.count < 6) {
            category.count += 1;
            filteredComics.push(comic);
        }
    }
    return comic;
});

console.log(categories);

data.comics = filteredComics;

fs.writeJson("./comics.json", data)
    .then(() => {
        console.log("success!");
    })
    .catch((err) => {
        console.error(err);
    });
