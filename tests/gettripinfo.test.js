import getTripInfo from '../src/client/js/app';
describe("Testing if getTripInfo is a function", () => {
    test("getTripInfo should be a function", () => {
        expect(typeof getTripInfo).toBe('function');
    });
});