# NASA Explorer

A React web application that displays live data from NASA's public APIs, including the **Astronomy Picture of the Day (APOD)** and **Near-Earth Objects (NEO)**. The project uses real-time API fetching and responsive card-based design to explore space phenomena interactively.

---

## Project Idea

This project was built to explore space-related data from NASA’s public APIs and present it in a user-friendly, interactive format. It features:

- Display NASA's **Astronomy Picture of the Day (APOD)**
- A list of **Near-Earth Objects (NEOs)** with optional filtering for hazardous asteroids
- Responsive design

---

## How to Run Locally

1. **Clone the repository**
2. **Install dependencies**
   - npm install
3. **Run the npm.dev server**

---

## Technologies Used
* React (TypeScript)
* Custom Hooks (useFetch, useToggle)
* NASA APIs:
  * APOD API
  * NEO Feed API
* Responsive CSS with Flexbox and Grid
* Mock data backups for development without network/API
* template designs from uiverse.io

---

## Challenges & Ideas
### Challenges:
* Parsing the nested NEO API response
* Making the card layout fully responsive and scrollable
* Ensuring that the mock data loads properly when API fails

### Future Enhancements:
* Add a date picker for APOD and NEO ranges
* Expand NEO filtering