/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */
const googleMapsClient = require('./google_api.js');

googleMapsClient.geocode({
    address: process.argv[2]
  }, function(err, response) {
    if (!err) {
      console.log(`${process.argv[2]} is located at coordinates (${response.json.results[0]['geometry']['location']['lat']},${response.json.results[0]['geometry']['location']['lng']}), at the address ${response.json.results[0]['formatted_address']}.`);
    }
  });