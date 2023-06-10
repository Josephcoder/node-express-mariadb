import { createApp } from "./app";

(async () => {
  const app = createApp();
  app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
  });
})();
