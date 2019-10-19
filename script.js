$(function() {
  const $gallery = $('.gallery a').simpleLightbox();
});

const quotes = [
  {
    quote:
      'For GM to offer the new Corvette for under $60,000 is incredibly impressive given the advanced nature of the new car.',
    source:
      'Karl Brauer, executive publisher of Autotrader and Kelley Blue Book'
  },
  {
    quote:
      'Though now placed behind the driver, the LT2 gives the same visceral experience we all expect from Corvette.',
    source: "Jordan Lee, GM's global chief engineer of Small Block engines"
  },

  {
    quote:
      'No Corvette has never felt so comfortable, nimble and yet completely stable.',
    source: 'Tadge Juechter, the C8s executive chief designer.'
  }
];

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}

randomQuote();
