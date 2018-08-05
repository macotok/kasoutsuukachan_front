import faker from 'faker';
import numberOrNull from './libraries';

const postNumber = 1000;

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

for (let i = 0; i < postNumber; i += 1) {
  db.post.push({
    id: i,
    name: faker.name.firstName(),
    text: faker.lorem.paragraphs(),
    replyNumber: numberOrNull(postNumber - 1, 2),
    autoIncrement: i,
    threadId: db.thread[faker.random.number(db.thread.length - 1)].id,
    ticker: ticker[faker.random.number(ticker.length - 1)],
    good: faker.random.number(postNumber),
    createdAt: faker.date.past(),
    updateAt: faker.date.future(),
  });
}

export default db;
