# 🧁 Salted Egg Sponge Cupcake Selector

A fun, interactive incremental clicker game built with React! Inspired by the classic *Cookie Clicker*, but with a savory, buttery twist. Click the delicious salted egg sponge cupcake to earn cakes, buy upgrades, and watch your bakery empire grow!

## ✨ Features

* **The Big Cupcake:** Click the central salted egg cupcake to earn your currency. Features a satisfying shrink-and-glow animation on every click!
* **Dynamic Upgrades:** Spend your hard-earned cakes on powerful upgrades:
    * 🧀 **Lava Flow:** Doubles your clicks.
    * 🥚 **Extra Umami:** Multiplies your clicks by 5.
    * 🍰 **Bakery Takeover:** Multiplies your clicks by 10.
* **🔌 Electric Mixer (Auto-Clicker):** Buy this upgrade to generate passive income every second while you rest your clicking finger. Includes a toggle to stop the mixer whenever you want!
* **Dynamic Backgrounds:** The bakery evolves as you progress! The background image automatically changes to new, vibrant scenes (kitchen, bakery, factory, space!) as your total cupcake count reaches specific milestones.
* **Floating Text Animations:** Get immediate visual feedback with animated, floating numbers `(+1, +5, etc.)` that appear exactly where you click.
* **Audio Feedback:** Enjoy a satisfying "pop" sound effect with every click.
* **Smart UI:** Upgrade buttons dynamically disable and turn gray when you don't have enough cakes to afford them.
* **Custom Styling:** Features custom Google Fonts ("Fredoka One" for playful titles, "Nunito" for clean UI) and a modern, glassmorphism-inspired card design.

## 🚀 Technologies Used

* **React:** For state management (`useState`, `useEffect`, `useRef`) and component rendering.
* **CSS3:** For styling, flexbox layouts, animations (`@keyframes`), and dynamic backgrounds with gradient overlays.
* **Vite / Create React App:** (Specify which one you used here) as the build tool.

## 🛠️ How to Run Locally

If you'd like to run this project on your own machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ccao-angelo/salted-egg-sponge-cupcake-selector.git](https://github.com/ccao-angelo/salted-egg-sponge-cupcake-selector.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd salted-egg-sponge-cupcake-selector
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev  # Or 'npm start' if using Create React App
    ```
5.  Open your browser and visit `http://localhost:5173` (or the port specified in your terminal).

## 🎮 How to Play

1.  Click the giant cupcake to earn cakes.
2.  Watch the floating numbers and listen for the "pop"!
3.  When you have enough cakes, click the upgrade cards at the bottom to increase your clicking power or buy the Auto-Clicker.
4.  Watch the background change as your bakery empire expands!