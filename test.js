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

test('city fallbacks', (t) => {
  t.equal(parseGooglePlace({
    address_components: [{
      long_name: 'Town1',
      types: ['sublocality']
    }]
  }).city, 'Town1')
  t.equal(parseGooglePlace({
    address_components: [{
      long_name: 'Town2',
      types: ['sublocality_level_1']
    }]
  }).city, 'Town2')
  t.equal(parseGooglePlace({
    address_components: [{
      long_name: 'Town3',
      types: ['administrative_area_level_3']
    }]
  }).city, 'Town3')
  t.equal(parseGooglePlace({
    address_components: [{
      long_name: 'Town4',
      types: ['administrative_area_level_2']
    }]
  }).city, 'Town4')

  t.end()
})
