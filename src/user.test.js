const User = require('./user')

describe('User Class', () => {
    const testUser = new User('Lowella', 'lowella1', 'test1', false,18,'scooter1')

    test('User has name', () => {
        expect(testUser.name).toBe('Lowella')
    })

    test('User has userID', () => {
        expect(testUser.userID).toBe('lowella1')
    })

    test('User has password', () => {
        expect(testUser.password).toBe('test1')
    })

    test('User has haScooter', () => {
        expect(testUser.hasScooter).toBe(false)
    })

    test('User has age', () => {
        expect(testUser.age).toBe(18)
    })

    test('User has scooterID', () => {
        expect(testUser.scooterID).toBe('scooter1')
    })

    test('User has registeredUsers', () => {
        const testUser = new User('Lowella', 'lowella1', 'test1', false,18,'scooter1')
        testUser.createsAccount()
        const testUser1 = new User('Melissa', 'Melissa1', 'pwd1', false,18,'scooter2')
        testUser1.createsAccount()
        //expect(User.registeredUsers).toMatchObject({name: 'Lowella',userID: 'lowella1',password: 'test1',hasScooter: '0',age: 18,scooterID: '',payment: 0})
        expect(User.registeredUsers).toMatchObject([{name: 'Lowella',userID: 'lowella1',password: 'test1',hasScooter: false,age: 18,scooterID: 'scooter1',payment: 0},{name: 'Melissa',userID: 'Melissa1',password: 'pwd1',hasScooter: false,age: 18,scooterID: 'scooter2',payment: 0}])
    })

    test('User has payment', () => {
        const testUser = new User('Lowella', 'lowella1', 'test1', false,18,'scooter1')
        testUser.createsAccount()
        testUser.pay(30)
        expect(testUser.payment).toBe(30)
    })
})