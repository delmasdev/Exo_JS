bot = prompt("Salut ! Comment je peux t'aider ?");

function chatBot(bot) {
  if(bot[bot.length - 1] === "?") {
    return "Ouais Ouais...";
  } else if (bot === bot.toUpperCase() && bot != "") {
    return "Pwa, calme-toi...";
  } else if (bot.indexOf("Fortnite") != -1 || bot.indexOf("fortnite") != -1 ) {
    return "On s' fait une partie soum-soum ?";
  } else if (bot === "") {
    return "T'es en PLS ?";
  } else {
    return "Balek.";
  }
};


console.log(chatBot(bot));