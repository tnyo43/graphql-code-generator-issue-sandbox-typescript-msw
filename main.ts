import { mockUserQuery } from "./mocks";

// 👍
mockUserQuery((req, res, ctx) =>
  res(
    ctx.data({
      user: {
        id: "0001",
        username: "alice",
        email: "alice@mail.com",
      },
    })
  )
);

// 👎 a valid response is expected
mockUserQuery(() => {});
