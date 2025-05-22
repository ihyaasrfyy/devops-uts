// test.js
console.log("Running a very simple unit test...");
const assert = require('assert');
try {
    assert.strictEqual(1 + 1, 2, "1 + 1 should be 2");
    console.log("Test passed: Basic math works!");
} catch (error) {
    console.error("Test failed:", error.message);
    process.exit(1); // Exit with a non-zero code to indicate failure
}