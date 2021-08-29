import { validURL } from '../client/js/checkURL'

describe('Testing the url checker functionality', () => {
    it('It should be true if the validURL function is defined', () => {
        expect(validURL).toBeDefined()
    })
    it('It should be true if validURL is a function', () => {
        expect(typeof validURL).toBe('function');
    });
})
