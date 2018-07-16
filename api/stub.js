import faker from 'faker';

const db = {
  thread: [],
  post: [],
  reaction: [],
};

const ticker = [
  'BTC', 'ETH', 'ETC', 'LSK', 'FCT', 'XMR', 'REP', 'XRP', 'ZEC', 'XEM', 'LTC', 'DASH', 'BCH', 'BNB', 'MONA',
  'NEO', 'TRX', 'WAVES', 'ZAIF', 'NANJ', 'XP', 'BITMEX', 'EOS',
];

for (let i = 0; i < ticker.length; i += 1) {
  db.thread.push({
    id: i + 1,
    ticker: ticker[i],
    title: ticker[i],
    nowPrice: faker.random.number(10000),
    lastPrice: faker.random.number(10000),
    createdAt: faker.date.past(),
    updateAt: faker.date.future(),
  });
}

for (let i = 0; i < 20; i += 1) {
  db.post.push({
    id: i,
    name: faker.name.firstName(),
    text: faker.random.words(),
    replyNumber: null,
    replyBoolean: null,
    createdAt: faker.date.past(),
    updateAt: faker.date.future(),
    autoIncrement: i,
    threadId: i,
    ticker: ticker[faker.random.number(ticker.length)],
  });
}

for (let i = 0; i < 20; i += 1) {
  db.reaction.push({
    _id: i,
    postId: i,
    iineCount: faker.random.number(100),
    threadId: i,
    createdAt: faker.date.past(),
    updateAt: faker.date.future(),
  });
}

export default db;
