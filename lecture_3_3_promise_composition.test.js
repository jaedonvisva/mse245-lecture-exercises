const {
  transformNumber,
  recover,
  withCleanup,
} = require('./lecture_3_3_promise_composition');

test('transformNumber chains async transforms', async () => {
  const getNumber = () => Promise.resolve(5);
  await expect(transformNumber(getNumber)).resolves.toBe(30);
});

test('recover returns fallback on rejection', async () => {
  const task = () => Promise.reject(new Error('fail'));
  await expect(recover(task, 99)).resolves.toBe(99);
});

test('withCleanup calls cleanup after success', async () => {
  let called = false;
  const task = () => Promise.resolve('ok');
  const cleanup = () => { called = true; };
  await expect(withCleanup(task, cleanup)).resolves.toBe('ok');
  expect(called).toBe(true);
});
