import 'babel-polyfill'

import { handleSubmit } from '../client/js/formHandler'

describe('Testing the submit functionality', () => {
    it('It should be true if the handleSubmit function is defined', () => {
        expect(handleSubmit).toBeDefined()
    })
    it('It should be true if handleSubmit is a function', () => {
        expect(typeof handleSubmit).toBe('function')
    })
})
