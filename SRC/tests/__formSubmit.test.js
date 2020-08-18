import getTripInfo from '../Client/js/app';
describe("Testing the submit functionality", () => {
    test("Testing the getTripInfo() function", () => {
        expect(getTripInfo).toBeDefined();
    });
});