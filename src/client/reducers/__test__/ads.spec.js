import { expect } from 'chai'
import { Map, List, fromJS } from 'immutable';
import ads from '../ads'

describe('ads reducer', () => {
  it('should be a function', () => {
    expect(ads).to.be.a('function');
  })

  it('should return immutable data structure', () => {
    const initialState = Map({
      ads: List()
    })
    let actionType = {type: 'GET_ADS', payload: {name: 'HYFN'}}
    expect(ads(initialState, actionType)).to.eql(initialState.set('ads', fromJS({name: 'HYFN'})));
  })
})