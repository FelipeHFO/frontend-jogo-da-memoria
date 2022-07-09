const cards = [
  {
    id: 1,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/aatrox.jpg',
  },
  {
    id: 2,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/ahri.jpg',
  },
  {
    id: 3,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/azir.jpg',
  },
  {
    id: 4,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/diana.jpg',
  },
  {
    id: 5,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/fiora.jpg',
  },
  {
    id: 6,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/gragas.jpg',
  },
  {
    id: 7,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/jhin.jpg',
  },
  {
    id: 8,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/jinx.jpg',
  },
  {
    id: 9,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/leesin.jpg',
  },
  {
    id: 10,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/aatrox.jpg',
  },
  {
    id: 11,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/ahri.jpg',
  },
  {
    id: 12,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/azir.jpg',
  },
  {
    id: 13,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/diana.jpg',
  },
  {
    id: 14,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/fiora.jpg',
  },
  {
    id: 15,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/gragas.jpg',
  },
  {
    id: 16,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/jhin.jpg',
  },
  {
    id: 17,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/jinx.jpg',
  },
  {
    id: 18,
    wasDiscovered: false,
    isTurned: false,
    frontImage: '/assets/card-images/leesin.jpg',
  },
  // '/assets/card-images/mordekaiser.jpg',
  // '/assets/card-images/nasus.jpg',
  // '/assets/card-images/nocturne.jpg',
  // '/assets/card-images/pantheon.jpg',
  // '/assets/card-images/rammus.jpg',
  // '/assets/card-images/taliyah.jpg',
  // '/assets/card-images/teemo.jpg',
  // '/assets/card-images/tryndamere.jpg',
  // '/assets/card-images/twistedfate.jpg',
  // '/assets/card-images/twitch.jpg',
  // '/assets/card-images/vex.jpg',
  // '/assets/card-images/viego.jpg',
  // '/assets/card-images/vladimir.jpg',
  // '/assets/card-images/warwick.jpg',
  // '/assets/card-images/wukong.jpg',
  // '/assets/card-images/yasuo.jpg',
  // '/assets/card-images/zac.jpg',
  // '/assets/card-images/zeri.jpg',
  // '/assets/card-images/ziggs.jpg',
  // '/assets/card-images/zilean.jpg',
  // '/assets/card-images/zoe.jpg',
];

cards.sort(() => Math.random() - 0.5);

function turnAllCardsDown() {
  cards.map((card) => (!card.wasDiscovered ? (card.isTurned = false) : null));
  console.log(cards);
}

export {cards, turnAllCardsDown};
