import { setupApp } from "./app";

function main() {
  const PORT = 3000;
  const app = setupApp();

  app.listen(PORT, () => {
    console.log(`Started listening to ${PORT}`);
  });
}

main();
