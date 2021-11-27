const Scooter = require('../src/scooter')
const User = require('../src/user')

describe("Scooter class", () => {
    const user = new User('Lowella', 'lowella1', 'test1', false,18,'scooter1')
    const testScooter = new Scooter(user, 'scooter01', 'Austin', false, true,'1010')

    test('user is an instance of a User class', () => {
        expect(user instanceof User).toBeTruthy()
    })

    test('Scooter has scooterId', () => {
        expect(testScooter.scooterID).toBe('scooter01')
    })

    test('Check the charging station', () => {
        expect(testScooter.station).toBe('Austin')
    })

    test('Scooter isBroken', () => {
        expect(testScooter.isBroken).toBe(false)
    })

    test('Scooter isFullyCharged', () => {
        expect(testScooter.isFullyCharged).toBe(true)
    })

    test('Scooter has serialNumber', () => {
        expect(testScooter.serialNumber).toBe('1010')
    })
    
    test('Scooter is available for rent', () => {
        const testScooter = new Scooter(user, 'scooter01', 'Austin',false,true,'1010')
        testScooter.rent()
        expect(testScooter.isAvailable).toBe(true)
    })

    test('Scooter is cannot be rented if broken', () => {
        const testScooter = new Scooter(user, 'scooter01', 'Austin',true,true,'1010')
        testScooter.rent()
        expect(testScooter.isAvailable).toBe(false)
    })

    test('Scooter is cannot be rented if not fully charged', () => {
        const testScooter = new Scooter(user, 'scooter01', 'Austin',false,false,'1010')
        testScooter.rent()
        expect(testScooter.isAvailable).toBe(false)
    })

    test('Repair is complete', async () => {
        const testScooter = new Scooter(user, 'scooter01', 'Austin',false,false,'1010')
        testScooter.repair()
        console.log('Repair is complete')
    })

    test("charge", async () => {
        const scooter = new Scooter();
        await scooter.charge(); // we need to wait for the charge!
        console.log("Test complete");
      });
})