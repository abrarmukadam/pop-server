var express = require("express");
var router = express.Router();

let popArray = [
  {
    id: 1,
    popMessage: "Awesome Awesome Awesome ! ! !",
    backColor: "salmon"
  },
  {
    id: 2,
    popMessage: "Conscious of your choice and Responsible for your actions.. ",
    backColor: "steelblue"
  },
  {
    id: 3,
    popMessage: "Upset the Establised Order... ",
    backColor: "teal"
  },
  {
    id: 4,
    popMessage: "First Realization of a Warrior is not knowing... ",
    backColor: "skyblue"
  },
  {
    id: 5,
    popMessage: "Meditate your actions... ",
    backColor: "lightgreen"
  },
  {
    id: 6,
    popMessage:
      "Actions must be Conscious, Spontaneous, Intentional and Complete.. ",
    backColor: "lightslategrey"
  },
  {
    id: 7,
    popMessage: "Let it flow and let it glow ! ",
    backColor: "mediumpurple"
  }
];

let colorArray = [
  "#ffebcd",
  "lightblue",
  "silver",
  "skyblue",
  "lightgreen",
  "yellow",
  "pink",
  "rgb(195, 125, 198)",
  "mediumturquoise"
];

let visionBoardArray = [
  {
    id: 1,
    visionBoard: "ME Dreams!",
    uri:
      "https://www.ocregister.com/wp-content/uploads/2017/08/0810_fea_fnt-l-ducktales-01.jpg?w=535"
  },
  {
    id: 2,
    visionBoard: "Career",
    uri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfKPLFlnsjsMqNastpZ_2ZNnFNq0MjKP4sx7-jdjYPKhL6Bik"
  }
];

let visionArray = [
  {
    id: 1,
    visionBoard: "ME Dreams!",
    visionMessage: "50,000$",
    backColor: "#ffebcd",
    uri:
      "https://www.ocregister.com/wp-content/uploads/2017/08/0810_fea_fnt-l-ducktales-01.jpg?w=535"
  },
  {
    id: 2,
    visionBoard: "ME Dreams!",
    visionMessage: "Go on a World Tour with family",
    backColor: "lightgreen",
    uri:
      "https://www.olympicholidays.com/media/24494/gold_collection_cyclades_islands.jpg?anchor=center&mode=crop&quality=65&width=330&height=230&rnd=131491883470000000"
  },
  {
    id: 3,
    visionBoard: "ME Dreams!",
    visionMessage: "Go off the grid for a month",
    backColor: "lightblue",
    uri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FSaJw61-l3kcNSaE8rnzd4U8kvuvFf0sN9Y5jugn22Nq5kyU&s"
  },
  {
    id: 4,
    visionBoard: "ME Dreams!",
    visionMessage: "bungie jumping toh karna hi hai",
    backColor: "#ffebcd",
    uri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfOT8Mwi4Fjdgves74vrI058DSNODE-JpvzL6NQQIrXzOOGAHtA&s"
  },
  {
    id: 5,
    visionBoard: "ME Dreams!",
    visionMessage: "Have a charity NGO under my care",
    backColor: "yellow",
    uri:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  },
  {
    id: 6,
    visionBoard: "ME Dreams!",
    visionMessage: "bungie jumping toh karna hi hai",
    backColor: "#ffebcd",
    uri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnL9YQM-viMIRdeaKNkcEj4HPFO3TjTg8O07OdyGnD36rrdU-3"
  },
  {
    id: 7,
    visionBoard: "Career",
    visionMessage: "Go off the grid for a month",
    backColor: "lightblue",
    uri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulyyemSoPHNoWWBx3VHB4dhPRha3gxHVYVErA8kgfRZrDJ2hJHw"
  },
  {
    id: 8,
    visionBoard: "Career",
    visionMessage: "Go on a Worl Tour with family",
    backColor: "lightgreen",
    uri:
      "https://www.scified.com/articles/what-are-random-number-generators-used-for-61.jpg"
  }
];

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json({
    success: true,
    data: {
      popArray: [...popArray],
      colorArray: [...colorArray],
      visionBoardArray: [...visionBoardArray],
      visionArray: [...visionArray]
    }
  });
});

router.post("/", function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  if (username === "apalekar" && password === "test123") {
    res.json({
      success: true
    });
  } else {
    res.json({
      success: false
    });
  }
});

router.put("/", function(req, res, next) {
  //popArray = [];
  if (req.body[0].visionMessage) visionArray = req.body;
  else if (req.body[0].visionBoard) visionBoardArray = req.body;
  else if (req.body[0].popMessage) popArray = req.body;

  console.log("body:", body);
  /*  if (!req.body.edit)
    if (req.body.visionMessage)
      visionArray.push({
        visionMessage: req.body.visionMessage || " ",
        visionBoard: req.body.visionBoard || "Unnamed",
        uri:
          req.body.uri ||
          "https://www.scified.com/articles/what-are-random-number-generators-used-for-61.jpg",
        id: req.body.id || "no id"
      });
    else if (req.body.visionBoard)
      visionBoardArray.push({
        visionBoard: req.body.visionBoard || " ",
        uri:
          req.body.uri ||
          "https://www.scified.com/articles/what-are-random-number-generators-used-for-61.jpg",
        id: req.body.id || "no id"
      });
    else if (req.body.popMessage)
      popArray.push({
        popMessage: req.body.popMessage || " ",
        backColor: req.body.backColor || "lightgreen",
        id: req.body.id || "no id"
      });
*/
  res.json({
    success: true,
    data: {
      popArray: [...popArray],
      visionArray: [...visionArray],
      visionBoardArray: [...visionBoardArray]
    }
  });
});

module.exports = router;
