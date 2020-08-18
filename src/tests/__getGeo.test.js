import getGeo from '../server/geoAPI';
describe("Testing the geonames api fetch functionality", () => {
    test("Testing the getGeo() function", () => {
        expect(getGeo).toBeDefined();
    });
});