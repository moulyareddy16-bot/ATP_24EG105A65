/* ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system. */


const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//filter() only "Sci-Fi" movies
const sciFic=movies.filter(movie=>movie.genre==="Sci-Fi");
console.log("Sci-Fic movies are: ",sciFic);

//map() to return: "Inception (8.8)"
const incepRating = movies.map(movie=> {
  if(movie.title === "Inception") {
    return `${movie.title} (${movie.rating})`;
  }
});

//reduce() to find average movie rating
const sum=movies.reduce((result,movie)=>result+movie.rating,0);
console.log("average rating is: ",sum/movies.length);

//find() movie "Joker"
const findJoker=movies.find(movie=>movie.title==="Joker");
console.log("joker: ",findJoker);

//findIndex() of "Avengers"
const indexAvengers=movies.findIndex(movie=>movie.title==="Avengers");
console.log("index of Avengers is: ",indexAvengers);
