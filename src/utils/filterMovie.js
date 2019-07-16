import movies from "../api/movies";

export const filterByTitle = (item) =>
    movies.filter(movies =>
        movies.title.toLocaleLowerCase().includes(item.toLowerCase()));
