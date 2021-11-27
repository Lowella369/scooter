const User = require('../src/user')

class Scooter {
    constructor(user,scooterID,station,isBroken,isFullyCharged,serialNumber){
        this.user = user
        this.scooterID = scooterID
        this.station = station
        this.isBroken = isBroken
        this.isFullyCharged = isFullyCharged
        this.isAvailable = true
        this.serialNumber = serialNumber
    }

    async charge() {
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

        this.isFullyCharged = true
        this.isBroken = false
        this.isAvailable = true
        console.log('Charge complete');   
   }

    rent(){
        if(this.isBroken || !this.isFullyCharged) {
            this.isAvailable = false
            console.log('Scooter is broken or low on battery.')
        }
        else {
            console.log('Thanks for renting! Enjoy your ride!')
        }
    }

    repair(){
        if(!this.isBroken && this.isFullyCharged && this.isAvailable){
            console.log('Repair is complete')
        }
    }
    
}

module.exports  = Scooter