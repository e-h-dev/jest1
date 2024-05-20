/**
 * @jest-environment jsdom
 */
const buttonClicked = require("../button");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClicked();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist",  () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});