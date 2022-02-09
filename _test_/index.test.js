'use strict'

const supertest = require('supertest');
const { app } = require('../index');

const request = supertest(app);

describe("server test", () => {

    // invalid routs
    test("test not found rout", async () => {

        const response = await request.get("/not-found");

        expect(response.status).toEqual(404)

    });

    // server alive test
    test("server alive test", async () => {

        const response = await request.get("/");

        expect(response.text).toBe("hello world")

    });

    // middleware test
    test("middleware test", async () => {

        const response = await request.get("/name");

        expect(response.status).toEqual(200);
        expect(response.text).toBeDefined();

    });

    // post method body
    test("post method body", async () => {

        const response = await request.post("/name");

        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual("object");

    });
})