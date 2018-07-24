import faker from 'faker';

const db = {
  thread: [],
  post: [],
};

const ticker = [
  'BTC', 'ETH', 'ETC', 'LSK', 'FCT', 'XMR', 'REP', 'XRP', 'ZEC', 'XEM', 'LTC', 'DASH', 'BCH', 'BNB', 'MONA',
  'NEO', 'TRX', 'WAVES', 'ZAIF', 'NANJ', 'XP', 'BITMEX', 'EOS',
];

for (let i = 0; i < ticker.length; i += 1) {
  db.thread.push({
    id: i,
    ticker: ticker[i],
    title: ticker[i],
    nowPrice: faker.random.number(10000),
    lastPrice: faker.random.number(10000),
    createdAt: faker.date.past(),
    updateAt: faker.date.future(),
  });
}

for (let i = 0; i < 1000; i += 1) {
  db.post.push({
    id: i,
    name: faker.name.firstName(),
    text: faker.random.words(),
    replyNumber: null,
    replyBoolean: null,
    autoIncrement: i,
    threadId: db.thread[faker.random.number(db.thread.length - 1)].id,
    ticker: ticker[faker.random.number(ticker.length - 1)],
    good: faker.random.number(100),
    createdAt: faker.date.past(),
    updateAt: faker.date.future(),
  });
}

export default db;
