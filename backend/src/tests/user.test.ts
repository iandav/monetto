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
  const BASE_URL = "/api/user";

  describe("userProfile test", () => {
    const userData = {
      nick: "test",
      email: "test@gmail.com",
    };
    const url = BASE_URL + `/profile/${userData.nick}`;

    afterAll(() => {
      jest.resetAllMocks();
    });

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
        throw new Error();
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

  describe("updateEmail test", () => {
    const user = {
      id: 1,
      nick: "test",
      email: "test@gmail.com",
    };
    const reqBody = {
      nick: "test",
      newEmail: "test1@gmail.com",
    };
    const url = BASE_URL + "/update/email";

    afterAll(() => {
      jest.resetAllMocks();
    });

    it("should check if email exists then check if user exists", async () => {
      db.user.findFirst = jest
        .fn()
        .mockReturnValueOnce(null)
        .mockReturnValueOnce(user);

      await request(app)
        .post(url)
        .set("Accept", "application/json")
        .send(reqBody);

      expect(db.user.findFirst).toHaveBeenNthCalledWith(1, {
        where: {
          email: reqBody.newEmail,
        },
      });
      expect(db.user.findFirst).toHaveBeenNthCalledWith(2, {
        where: {
          user: reqBody.nick,
        },
      });
    });

    it("should return 400 message if email exists", async () => {
      db.user.findFirst = jest.fn().mockReturnValue(user);

      const res = await request(app)
        .post(url)
        .set("Accept", "application/json")
        .send(reqBody)
        .expect(400)
        .expect("Content-Type", /json/);

      expect(res.body.message).toEqual("Email already in use");
    });

    it("should return 404 message if user doesn't exist", async () => {
      db.user.findFirst = jest.fn().mockReturnValue(null);

      const res = await request(app)
        .post(url)
        .set("Accept", "application/json")
        .send(reqBody)
        .expect(404)
        .expect("Content-Type", /json/);

      expect(res.body.message).toEqual("User not found");
    });

    it("should update user with new email", async () => {
      db.user.findFirst = jest
        .fn()
        .mockReturnValueOnce(null)
        .mockReturnValueOnce(user);
      db.user.update = jest.fn();

      await request(app)
        .post(url)
        .set("Accept", "application/json")
        .send(reqBody);

      expect(db.user.update).toBeCalledWith({
        where: {
          id: user.id,
        },
        data: {
          email: reqBody.newEmail,
        },
      });
    });

    it("should return 202 message if successful", async () => {
      db.user.findFirst = jest
        .fn()
        .mockReturnValueOnce(null)
        .mockReturnValueOnce(user);
      db.user.update = jest.fn();

      const res = await request(app)
        .post(url)
        .set("Accept", "application/json")
        .send(reqBody)
        .expect(202)
        .expect("Content-Type", /json/);

      expect(res.body.message).toEqual("User updated successfully");
    });

    it("should return 500 message on findFirst error", async () => {
      db.user.findFirst = jest.fn(() => {
        throw new Error();
      });

      const res = await request(app)
        .post(url)
        .set("Accept", "application/json")
        .send(reqBody)
        .expect(500)
        .expect("Content-Type", /json/);

      expect(res.body.message).toEqual("Error while updating the user");
    });

    it("should return 500 message on update error", async () => {
      db.user.update = jest.fn(() => {
        throw new Error();
      });

      const res = await request(app)
        .post(url)
        .set("Accept", "application/json")
        .send(reqBody)
        .expect(500)
        .expect("Content-Type", /json/);

      expect(res.body.message).toEqual("Error while updating the user");
    });
  });
});
