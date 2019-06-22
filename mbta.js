const Subway = {
    Red: [
        'South Station',
        'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'
    ],
    Green: [
        'Government Center',
        'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'
    ],
    Orange: [
        'North Station',
        'Haymarket', 'Patk Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'
    ],
}

const stopsBetweenStations = function(startLine,startStation, endLine, endStation) {

 let startIndex = subway[startLine].indexOf(startStation)
 let endIndex = subway[endLine].indexOf(endStation)

if (startLine === endLine) {
   return Math.abs(startIndex - endIndex)+ ' ' + 'Stops';
 
}else{
const startParkStreetIndex = subway[startLine].indexOf('Park Street')
const toParkStreet = Math.abs(startIndex - startParkStreetIndex)

const endParkStreetIndex = subway[endLine].indexOf('Park Street')
const fromParkStreet = Math.abs(endIndex - endParkStreetIndex)

const total= toParkStreet + fromParkStreet

   return total + ' ' + 'Stops'
   }
}


