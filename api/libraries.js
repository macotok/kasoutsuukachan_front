import faker from 'faker';

export default function numberOrNull(num, rate) {
  const randomNumber = Math.floor(Math.random() * Math.floor(num));
  const count = faker.random.number({
    min: 0,
    max: rate,
  });
  return count ? null : randomNumber;
}
