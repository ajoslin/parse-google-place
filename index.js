'use strict'

module.exports = parsePlace

function parsePlace (place) {
  place = place || {}

  var byType = (place.address_components || []).reduce(function (acc, data) {
    data.types.forEach(function (type) {
      acc[type] = data
    })
    return acc
  }, {})

  // setTimeout(() => console.log(byType))

  var result = {
    streetNumber: placeGet('street_number'),
    streetName: placeGet('route'),
    city: placeGet('locality') ||
      placeGet('sublocality') ||
      placeGet('administrative_area_level_3') ||
      placeGet('administrative_area_level_2'),
    county: placeGet('administrative_area_level_2'),
    stateShort: placeGet('administrative_area_level_1', true),
    stateLong: placeGet('administrative_area_level_1'),
    countryShort: placeGet('country', true),
    countryLong: placeGet('country'),
    zipCode: placeGet('postal_code')
  }

  result.address = result.streetNumber + ' ' + result.streetName

  return result

  function placeGet (key, short) {
    if (!(key in byType)) return ''

    return short ? byType[key].short_name : byType[key].long_name
  }
}
