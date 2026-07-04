const {
  doubleAfterDelay,
  safeSqrt,
  buildSchoolEmail,
  runAll,
} = require('./lecture_3_1_promises');

test('doubleAfterDelay resolves doubled value', async () => {
  await expect(doubleAfterDelay(4, 1)).resolves.toBe(8);
});

test('safeSqrt rejects for negative values', async () => {
  await expect(safeSqrt(-1)).rejects.toThrow('Negative value');
});

test('buildSchoolEmail formats email correctly', async () => {
  await expect(buildSchoolEmail('  Alice ')).resolves.toBe('alice@mcmaster.ca');
});

test('runAll resolves all task results', async () => {
  const tasks = [
    () => Promise.resolve(1),
    () => Promise.resolve(2),
    () => Promise.resolve(3),
  ];
  await expect(runAll(tasks)).resolves.toEqual([1, 2, 3]);
});
