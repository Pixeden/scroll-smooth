import { expect } from 'chai'
// import cheerio from 'cheerio'
import smoothScroll from '../src/index'

describe('Given an instance of my library',  () => {
  
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(smoothScroll()).to.be.equal('hola')
    })
  })
  
  
})
