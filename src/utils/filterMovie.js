import data from "../api/movies";

export const filterByTitle = (item) =>
    data.filter(movies =>
        movies.title.toLocaleLowerCase().includes(item.toLowerCase()));
