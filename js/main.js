class MovieExploarer {

    constructor() {

        this.movies = [];

        this.API_KEY = "8e6f8926";
        this.BASE_URL = "https://www.omdbapi.com/";
        this.FALLBACK_IMAGE = "./images/no-poster.jpg";

        this.trendingGrid = document.querySelector("#trendingGrid");
        this.tredPrev = document.querySelector("#tredPrev");
        this.tredNext = document.querySelector("#tredNext");
        this.movieDetail = document.querySelector("#movieDetail");
        this.overlay = document.querySelector("#overlay");
        this.discoverMovies = document.querySelector("#discoverMovies");
        this.inputText = document.querySelector("#inputText");
        this.yearSort = document.querySelector("#yearSort");
        this.trendingSection = document.querySelector("#trendingSection");

        this.trendIndex = 0;
        this.visibleCards = 4;
        this.cardWidth = 0;
        this.maxIndex = 0;

        this.tredNext.addEventListener("click", () => {
            if (this.trendIndex < this.maxIndex) {
                this.trendIndex++;
                this.updateTrend();
            }
        });

        this.tredPrev.addEventListener("click", () => {
            if (this.trendIndex > 0) {
                this.trendIndex--;
                this.updateTrend();
            }
        });

        this.discoverQueries = [
            "Batman",
            "Spider-Man",
            "Harry Potter",
            "Star Wars",
            "Superman",
            "Mission Impossible"
        ];

        this.randomQuery =
            this.discoverQueries[
            Math.floor(Math.random() * this.discoverQueries.length)
            ];
    }

    async loadTrendingMovies() {
        try {

            const response = await fetch(
                `${this.BASE_URL}?apikey=${this.API_KEY}&s=Avengers`
            );

            const data = await response.json();

            if (data.Response === "True") {
                this.renderTrendingMovies(data.Search);
            }

        } catch (error) {
            console.log(error);
        }
    }

    async loadDiscoverMovies() {
        try {
            const response = await fetch(
                `${this.BASE_URL}?apikey=${this.API_KEY}&s=${this.randomQuery}`
            );

            const data = await response.json();

            if (data.Response === "True") {
                this.movies = data.Search;
                this.renderDiscoverMovies(this.movies);
            }

            console.log(data);

        } catch (error) {
            console.log(error);

        }
    }

    renderTrendingMovies(movies) {

        this.trendingGrid.innerHTML = "";

        movies.forEach(movie => {

            const card = document.createElement("div");

            card.classList.add("movie-card");

            const poster = movie.Poster !== "N/A"
                ? movie.Poster
                : this.FALLBACK_IMAGE;

            card.innerHTML = `
                <img 
                    src="${poster}" 
                    alt="${movie.Title}"
                >

                <h3>${movie.Title}</h3>

                <p>${movie.Year}</p>

                <p>${movie.Type}</p>
            `;

            this.trendingGrid.appendChild(card);

            card.addEventListener("click", () => {
                this.movieDetail.style.display = "flex";
                this.overlay.style.display = "block";
                document.body.style.overflow = "hidden";
                this.showMovieDetails(movie.imdbID);
            })

        });


        const card = this.trendingGrid.querySelector(".movie-card");

        this.cardWidth = card.offsetWidth + 25;

        this.maxIndex = movies.length - this.visibleCards;

        if (this.maxIndex < 0) {
            this.maxIndex = 0;
        }
    }

    renderDiscoverMovies(movies) {
        this.discoverMovies.innerHTML = "";

        movies.forEach(movie => {

            const card = document.createElement("div");

            card.classList.add("movie-card");

            const poster = movie.Poster !== "N/A"
                ? movie.Poster
                : this.FALLBACK_IMAGE;

            card.innerHTML = `
                <img 
                    src="${poster}" 
                    alt="${movie.Title}"
                >

                <h3>${movie.Title}</h3>

                <p>${movie.Year}</p>

                <p>${movie.Type}</p>
            `;

            this.discoverMovies.appendChild(card);
        })
    }

    async searchMovie(query) {
        if (query.trim() === "") {
            this.trendingSection.style.display = "block";
            return;
        }

        const response = await fetch(
            `${this.BASE_URL}?apikey=${this.API_KEY}&s=${query}`
        );

        const data = await response.json();

        if (data.Response === "True") {
            this.trendingSection.style.display = "none";
            this.movies = data.Search;
            this.renderDiscoverMovies(data.Search);
        }

        console.log(data);

    }

    yearFilter(filter) {

        if (filter === "") {
            this.trendingSection.style.display = "block";
            return;
        }

        this.trendingSection.style.display = "none";

        if (filter === "newest") {
            this.movies.sort((a, b) => {
                return Number(b.Year) - Number(a.Year);
            });
        }

        if (filter === "oldest") {
            this.movies.sort((a, b) => {
                return Number(a.Year) - Number(b.Year);
            });
        }

        this.renderDiscoverMovies(this.movies);
    }

    updateTrend() {
        this.trendingGrid.style.transform =
            `translateX(-${this.trendIndex * this.cardWidth}px)`;
    }

    async showMovieDetails(imdbID) {
        const response = await fetch(
            `${this.BASE_URL}?apikey=${this.API_KEY}&i=${imdbID}&plot=full`
        );

        const movie = await response.json();

        console.log(movie);

        this.movieDetail.innerHTML = `
        <button id="closeBtn">X</button>
    <div class="movie-image">
        <img class="imgg" src="${movie.Poster}" alt="${movie.Title}">
    </div>

    <div class="movieDetail-content">
        <h1>${movie.Title}</h1>

        <p>Released : ${movie.Released}</p>

        <span>IMDb Rating : ${movie.imdbRating}</span>

        <p>Genre : ${movie.Genre}</p>

        <p>Runtime : ${movie.Runtime}</p>

        <p>Director : ${movie.Director}</p>

        <p>Actors : ${movie.Actors}</p>

        <p>Plot : ${movie.Plot}</p>
    </div>
`;
        this.closeBtn = this.movieDetail.querySelector("#closeBtn");
        this.closeBtn.addEventListener("click", () => {
            this.movieDetail.style.display = "none";
            this.overlay.style.display = "none";
            document.body.style.overflow = "";
        })
    }
}


document.addEventListener("DOMContentLoaded", () => {

    const app = new MovieExploarer();

    app.loadTrendingMovies();
    app.loadDiscoverMovies();

    app.inputText.addEventListener("input", () => {
        app.searchMovie(app.inputText.value);
    })

    app.yearSort.addEventListener("change", () => {
        app.yearFilter(app.yearSort.value);
    })

});