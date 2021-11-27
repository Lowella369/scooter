class ChargingStations {
    constructor(){
        this.station = []
        this.scooterIDs = []
    }

    addScooter(location, scooterID){
        this.station = location
        this.scooterIDs.push(scooterID)
    }
}

module.exports = ChargingStations