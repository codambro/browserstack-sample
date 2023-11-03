fixture("Fixture").page("https://www.google.com");

test("Test", async t => {
    // See in browserstack dashboard connection failure
    await t.wait(30000);
  });
