import {expect} from 'chai'

describe('Test Example', () => {
    it('Handler test', () => {
        expect(20).to.equal(20)
    })
    
    it('Handler test fail', () => {
        expect(30).to.equal(30)
    })
})