const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const cards = [
  {
    title: "Kitten 1",
    image: "images/kitten.jpg",
    link: "About Kitten 1",
    description: "Demo description about kitten 1",
  },
  {
    title: "Kitten 2",
    image: "images/kitten.jpg",
    link: "About Kitten 2",
    description: "Demo description about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/kitten.jpg",
    link: "About Kitten 3",
    description: "Demo description about kitten 3",
  },
];

app.get("/api/cards", (req, res) => {
  res.status(200).json(cards);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

