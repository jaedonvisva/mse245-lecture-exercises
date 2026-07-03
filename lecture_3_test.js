const assert = require('assert');
const path = require('path');
const fs = require('fs');
const os = require('os');
const {
  readTextFile,
  parseJsonString,
  doubleAsync,
  processUser,
} = require('./lecture_3_asynchronous_programming');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  PASS  ${name}`);
    passed++;
  } catch (e) {
    console.log(`  FAIL  ${name}`);
    console.log(`        ${e.message}`);
    failed++;
  }
}

function testAsync(name, fn) {
  return fn()
    .then(() => { console.log(`  PASS  ${name}`); passed++; })
    .catch((e) => { console.log(`  FAIL  ${name}`); console.log(`        ${e.message}`); failed++; });
}

async function main() {
  // --- 1) readTextFile ---
  console.log('\n1) readTextFile');
  const tmpFile = path.join(os.tmpdir(), `lec3_test_${Date.now()}.txt`);
  const tmpContent = 'hello world';
  fs.writeFileSync(tmpFile, tmpContent, 'utf8');

  await testAsync('reads file and passes content to callback', () =>
    new Promise((resolve, reject) => {
      readTextFile(tmpFile, (err, data) => {
        if (err) return reject(err);
        try {
          assert.ok(data.toString().includes(tmpContent));
          resolve();
        } catch (e) { reject(e); }
      });
    })
  );

  await testAsync('passes an error for missing file', () =>
    new Promise((resolve, reject) => {
      readTextFile('/nonexistent/file.txt', (err) => {
        try {
          assert.ok(err instanceof Error, 'expected an Error for missing file');
          resolve();
        } catch (e) { reject(e); }
      });
    })
  );

  fs.unlinkSync(tmpFile);

  // --- 2) parseJsonString ---
  console.log('\n2) parseJsonString');
  await testAsync('parses valid JSON and passes result to callback', () =>
    new Promise((resolve, reject) => {
      parseJsonString('{"a":1}', (err, data) => {
        if (err) return reject(err);
        try {
          assert.deepStrictEqual(data, { a: 1 });
          resolve();
        } catch (e) { reject(e); }
      });
    })
  );

  await testAsync('passes an error for invalid JSON', () =>
    new Promise((resolve, reject) => {
      parseJsonString('not-json', (err) => {
        try {
          assert.ok(err instanceof Error, 'expected an Error for invalid JSON');
          resolve();
        } catch (e) { reject(e); }
      });
    })
  );

  // --- 3) doubleAsync ---
  console.log('\n3) doubleAsync');
  await testAsync('doubles a number', () =>
    new Promise((resolve, reject) => {
      doubleAsync(5, (err, result) => {
        if (err) return reject(err);
        try {
          assert.strictEqual(result, 10);
          resolve();
        } catch (e) { reject(e); }
      });
    })
  );

  await testAsync('doubles zero', () =>
    new Promise((resolve, reject) => {
      doubleAsync(0, (err, result) => {
        if (err) return reject(err);
        try {
          assert.strictEqual(result, 0);
          resolve();
        } catch (e) { reject(e); }
      });
    })
  );

  await testAsync('passes error when value is not a number', () =>
    new Promise((resolve, reject) => {
      doubleAsync('abc', (err) => {
        try {
          assert.ok(err instanceof Error, 'expected an Error for non-number');
          resolve();
        } catch (e) { reject(e); }
      });
    })
  );

  // --- 4) processUser ---
  console.log('\n4) processUser');
  await testAsync('errors when user is missing', () =>
    new Promise((resolve, reject) => {
      processUser(null, (err) => {
        try {
          assert.ok(err instanceof Error);
          assert.ok(err.message.toLowerCase().includes('user'), err.message);
          resolve();
        } catch (e) { reject(e); }
      });
    })
  );

  await testAsync('errors when user.name is missing', () =>
    new Promise((resolve, reject) => {
      processUser({}, (err) => {
        try {
          assert.ok(err instanceof Error);
          assert.ok(err.message.toLowerCase().includes('name'), err.message);
          resolve();
        } catch (e) { reject(e); }
      });
    })
  );

  await testAsync('returns uppercased name on success', () =>
    new Promise((resolve, reject) => {
      processUser({ name: 'alice' }, (err, result) => {
        if (err) return reject(err);
        try {
          assert.strictEqual(result, 'ALICE');
          resolve();
        } catch (e) { reject(e); }
      });
    })
  );

  // --- Summary ---
  console.log(`\n${'─'.repeat(40)}`);
  console.log(`  ${passed} passed, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main();
