import { expect } from 'chai'
import getAds from '../getAds'

describe('getAds action', () => {
  it('should be a thunk function', () => {
    expect(getAds).to.be.a('function');
  })
})