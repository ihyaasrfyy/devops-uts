// test.js
console.log("Running a very simple unit test...");
const assert = require('assert'); // Modul bawaan Node.js untuk assertion

try {
    assert.strictEqual(1 + 1, 2, "Test Passed: 1 + 1 should be 2"); // Contoh test sederhana
    console.log("All tests passed successfully!");
    process.exit(0); // Keluar dengan kode 0 untuk menandakan sukses
} catch (error) {
    console.error("Test Failed:", error.message);
    process.exit(1); // Keluar dengan kode 1 untuk menandakan kegagalan
}