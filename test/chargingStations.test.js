const ChargingStations = require('../src/chargingStations')

describe('ChargingStations class', () => {
    test('Add scooter', () => {
        const testChargingStations = new ChargingStations()
        testChargingStations.addScooter('Austin', 'scoter01')
        expect(testChargingStations.station).toBe('Austin')
        expect(testChargingStations.scooterIDs).toStrictEqual(['scoter01'])
    })
})