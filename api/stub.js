import faker from 'faker';

const db = {
  thread: [],
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

export default db;
