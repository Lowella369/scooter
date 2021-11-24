class Scooter {
    constructor(user,scooterID, station,isBroken,isCharged,serialNumber){
        this.user = user
        this.scooterID = scooterID
        this.station = station
        this.isBroken = isBroken
        this.isCharged = isCharged
        this.serialNumber = serialNumber
    }
}

module.exports  = Scooter