const {
  incrementLater,
  addSequentially,
  withFallback,
  getUppercaseUserName,
} = require('./lecture_3_2_async_await');

test('incrementLater returns incremented value', async () => {
  await expect(incrementLater(5, 1)).resolves.toBe(6);
});

test('addSequentially adds resolved values in order', async () => {
  const getA = () => Promise.resolve(2);
  const getB = () => Promise.resolve(7);
  await expect(addSequentially(getA, getB)).resolves.toBe(9);
});

test('withFallback returns FAILED on rejection', async () => {
  const task = () => Promise.reject(new Error('boom'));
  await expect(withFallback(task)).resolves.toBe('FAILED');
});

test('getUppercaseUserName uppercases fetched name', async () => {
  const getUser = () => Promise.resolve({ id: 1, name: 'jaedon' });
  await expect(getUppercaseUserName(getUser)).resolves.toBe('JAEDON');
});
