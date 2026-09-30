# 🎬 CineX — Movie Search & Discovery App

CineX is a movie search and discovery web application built using **HTML, CSS, and Vanilla JavaScript**. It uses the **OMDb API** to fetch movie information dynamically and provides an interactive interface for searching movies, browsing trending movies, and viewing detailed movie information.

---

## 🚀 Live Features

* 🔍 Search movies using the OMDb API
* 🔥 Trending movie section
* 🎞️ Horizontal movie slider
* ⬅️➡️ Previous/Next navigation for trending movies
* 🖼️ Movie posters with fallback image support
* ⭐ IMDb rating display
* 📅 Release date information
* 🎭 Genre and movie type information
* 🎬 Director and actors information
* 📝 Full movie plot/details
* 🪟 Movie details popup/modal
* 🌑 Dark Netflix-inspired UI
* ✨ Hover animations and visual effects
* 📱 Responsive movie card layout
* ⚡ Dynamic API-based content rendering

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **OMDb API**
* **Font Awesome**
* **Google Fonts**

---

## 🔌 API Used

CineX uses the **OMDb API** to retrieve movie information.

The application uses API endpoints for:

### Movie Search

```text
https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=QUERY
```

### Movie Details

```text
https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=IMDB_ID&plot=full
```

---

## ✨ Main Features

### 🔍 Movie Search

Users can search for movies using the search bar.

The application sends the search query to the OMDb API and dynamically displays the returned movies.

---

### 🔥 Trending Section

The application contains a horizontal movie section with:

* Movie posters
* Movie title
* Release year
* Movie type
* Previous button
* Next button

The slider uses JavaScript to dynamically calculate the card width and move the movie list.

---

### 🎬 Movie Details

Clicking on a movie card opens a detailed movie popup.

The popup displays:

* Movie poster
* Movie title
* Release date
* IMDb rating
* Genre
* Runtime
* Director
* Actors
* Plot

The background is blurred using an overlay while the movie details are open.

---

### 🖼️ Fallback Poster

If the OMDb API doesn't provide a movie poster, CineX uses a custom fallback image:

```text
./images/no-poster.jpg
```

This prevents broken images from appearing in the UI.

---

## 📂 Project Structure

```text
CineX-API-Project/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── images/
│   └── no-poster.jpg
│
└── README.md
```

---

## 🧠 JavaScript Concepts Used

This project was built to practice modern JavaScript concepts, including:

* Classes
* Constructor
* Objects
* Arrays
* Array methods
* DOM Manipulation
* Event Listeners
* Template Literals
* Async/Await
* Fetch API
* JSON Data Handling
* Conditional Rendering
* Dynamic Element Creation
* API Integration
* Error Handling
* CSS Transformations through JavaScript

---

## 🔄 Application Flow

```text
User
  ↓
Search Movie
  ↓
JavaScript
  ↓
OMDb API
  ↓
JSON Response
  ↓
Movie Data
  ↓
Dynamic Movie Cards
  ↓
Click Movie
  ↓
Fetch IMDb ID
  ↓
Movie Details API
  ↓
Movie Details Popup
```

---

## 🎨 UI Highlights

CineX uses a dark movie-streaming inspired interface with:

* Dark background
* Red accent colors
* Glowing logo
* Movie card hover effects
* Smooth slider transitions
* Movie details overlay
* Rounded movie cards

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/harishdubeyCS/CineX-API-Project.git
```

### 2. Open the project

```bash
cd CineX-API-Project
```

### 3. Add your OMDb API key

Open:

```text
js/main.js
```

and update:

```javascript
this.API_KEY = "YOUR_API_KEY";
```

### 4. Run the project

Open `index.html` using **Live Server** or any local development server.

---

## 🔑 API Key

This project requires an OMDb API key.

You can get your own API key from the OMDb API website.

For security, avoid exposing a private API key in a public repository when possible.

---

## 📸 Project Preview

### Home Page

The homepage contains the CineX logo, search bar, trending movie slider, and dynamically generated movie cards.

### Movie Details

Clicking a movie card opens a detailed movie information popup containing rating, genre, runtime, cast, director, and plot.

---

## 📚 What I Learned

While building CineX, I practiced:

* Working with third-party APIs
* Fetching and handling asynchronous data
* Building dynamic UI components
* DOM manipulation
* JavaScript classes and objects
* Event-driven programming
* Creating movie sliders
* Handling API errors and missing data
* Creating interactive modal interfaces
* Connecting frontend UI with real-world API data

---

## 🔮 Future Improvements

Planned improvements for future versions:

* [ ] Advanced movie sorting
* [ ] Genre-based filtering
* [ ] Movie pagination
* [ ] Better responsive design
* [ ] Favorites / Watchlist
* [ ] LocalStorage integration
* [ ] Loading animations
* [ ] Better API error messages
* [ ] More advanced movie discovery
* [ ] Modular JavaScript architecture

---

## 👨‍💻 Author

**Harish Dubey**


## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was created for **learning and educational purposes**.
