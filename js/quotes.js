var quote = [
  "Find what you love and let it kill you",
  "Real loneliness is not necessarily limited to when you are alone",
  "You have to die a few times before you can really live",
  "Some people never go crazy. What truly horrible lives they must lead",
  "You begin saving the world by saving one man at a time; all else is grandiose romanticism or politics",
  "Genius might be the ability to say a profound thing in a simple way",
  "An intellectual says a simple thing in a hard way. An artist says a hard thing in a simple way",
  "Of course it's possible to love a human being if you don't know them too well",
  "Bad taste creates many more millionaires than good taste",
  "To do a dull thing with style-now that's what I call art"
];

function newQuote() {
  document.getElementById("quote").innerHTML = quote[Math.floor(Math.random() * quote.length)];
};