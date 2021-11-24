const Scooter = require('./scooter')

class ChargingStations {
    constructor(){
        this.stations = []
        this.scooterIDs = []
    }

    addScooter(location,scooterID){
        this.stations = location
        this.scooterIDs.push(scooterID)
    }

    removedScooter(location, scooter)
}

const stations = new ChargingStations()
console.log(stations)