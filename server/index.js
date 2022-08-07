const path = require("path");
const express = require("express");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Serve Frontend in Production
if (process.env.NODE_ENV === "production") {
	// set build folder as static
	app.use(express.static(path.join(__dirname, "../frontend/build")));

	app.get("*", (req, res) =>
		res.sendFile(__dirname, "../", "frontend", "build", "index.html")
	);
} else {
	app.get("/", (req, res) => {
		res.status(200).json({ message: "Superman no here" });
	});
}
