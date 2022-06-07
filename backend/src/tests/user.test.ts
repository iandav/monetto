import request from "supertest";
import { app } from "../index";
import { db } from "../utils/database";
import type { Request, Response, NextFunction } from "express";

// skip authJwt middleware for testing
jest.mock("../middlewares/authJwt", () => ({
  authJwt: {
    verifyToken: jest.fn((req: Request, res: Response, next: NextFunction) =>
      next()
    ),
  },
}));

describe("user controller test suite", () => {
  afterAll(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  describe("userProfile test", () => {
    const userData = {
      nick: "test",
      email: "test@gmail.com",
    };
    const url = `/api/user/profile/${userData.nick}`;

    it("should query the database for user data", async () => {
      db.user.findFirst = jest.fn().mockReturnValue(userData);

      await request(app)
        .get(url)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      // check if database was queried for user data
      expect(db.user.findFirst).toBeCalled();
    });

    it("should return queried data", async () => {
      db.user.findFirst = jest.fn().mockReturnValue(userData);

      const res = await request(app)
        .get(url)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);

      // check if queried data is returned in response
      expect(res.body).toEqual(userData);
    });

    it("should return message on 404 error", async () => {
      db.user.findFirst = jest.fn().mockReturnValue(null);

      const res = await request(app)
        .get(url)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404);

      // check if 404 message is returned
      expect(res.body.message).toEqual("User not found");
    });

    it("should return message on 500 error", async () => {
      // simulate database error
      db.user.findFirst = jest.fn(() => {
        throw Error;
      });

      const res = await request(app)
        .get(url)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(500);

      // check if 500 message is returned
      expect(res.body.message).toEqual(
        "Error while trying to get user profile"
      );
    });
  });
});
