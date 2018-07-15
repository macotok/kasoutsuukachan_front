import faker from 'faker';

const db = {
  thread: [],
};

for (let i = 0; i < 20; i += 1) {
  db.thread.push({
    id: i + 1,
    ticker: faker.random.word(),
    title: faker.random.word(),
    nowPrice: faker.random.number(1000),
    lastPrice: faker.random.number(1000),
    createdAt: faker.date.past(),
    updateAt: faker.date.future(),
  });
}

export default db;
