require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const path = require("path");
const buildPath = path.join(__dirname, "..", "frontend", "build");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve Frontend in Production
if (process.env.NODE_ENV === "production") {
	app.use(express.static(buildPath));
	app.get("/*", function (req, res) {
		res.sendFile(path.join(buildPath, "index.html"));
	});
} else {
	app.get("/", (req, res) => {
		res.status(200).json({ message: "Superman no here" });
	});
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
