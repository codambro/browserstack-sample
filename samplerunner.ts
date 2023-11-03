import createTestCafe from "testcafe";

const hostname = "localhost";
const browser = "browserstack:safari"; // "browserstack:chrome" works.

main();
async function main() {

  let failedCount = 0;

  const testcafe = await createTestCafe(
    hostname,
    undefined,
    undefined,
    undefined,
    undefined,
    true
  );

  try {
    const runner = testcafe.createRunner();

    runner
      .src("./test.ts")
      .compilerOptions({
        "typescript": {
          "configPath": "tsconfig.json"
        }
      })
      .browsers([browser]);

    failedCount = await runner.run({ disableNativeAutomation: true });

  } finally {
    await testcafe.close();
  }

  process.exit(failedCount);
}
