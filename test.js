'use strict'
var test = require('tape')
var spok = require('spok')
var place = require('./fixture')
var parseGooglePlace = require('./')

test('basic', (t) => {
  spok(t, parseGooglePlace(place), {
    streetNumber: '100',
    streetName: 'Pine Street',
    address: '100 Pine Street',
    city: 'Denver',
    county: 'Mountain County',
    stateShort: 'CO',
    stateLong: 'Colorado',
    countryShort: 'US',
    countryLong: 'United States',
    zipCode: '802005'
  })

  t.end()
})

test('default to empty string', (t) => {
  let result = parseGooglePlace({})
  t.equal(result.countryShort, '')
  t.equal(result.countryLong, '')
  t.end()
})
