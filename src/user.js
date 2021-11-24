const Scooter = require('./scooter')

class User {

    static registeredUsers = []

    constructor(name, userID, password, hasScooter,age, scooterID){
        this.name = name
        this.userID = userID
        this.password = password
        this.hasScooter = hasScooter
        this.age = age
        this.scooterID = scooterID
        this.payment = 0
    }
    
    createsAccount(){
        if(this.age  > 17){
            User.registeredUsers.push(this)
        }
        else {
            console.log("User must be 18 years old!")
        }
        
    }

    pay(paymentAmount){
        if(User.registeredUsers.includes(this)){
            this.payment += paymentAmount
        }
    }

    login(userID, password){
        console.log(User.registeredUsers)
        let found = false

        console.log(User.registeredUsers.length)
        for(let i=0; i < User.registeredUsers.length; i ++){
            if(User.registeredUsers[i].userID == userID  && User.registeredUsers[i].password == password){
                console.log(`${userID} has successfully logged in`)
                return  true
            }
            else {
                console.log('UserID or password is incorrect!')
                return false
            }
        }

        // if(found == true){
        //     console.log(`${userID} has successfully logged in`)
        // }
        // else {
        //     console.log('UserID or password is incorrect!')
        // }
    }
      
}

const user =  new User('Lowella', 'lowella1', 'test1', '0',18,'')
user.createsAccount()
//console.log(User.registeredUsers)
const user1 =  new User('Melissa', 'Melissa1', 'test1', '0',18,'')
user1.createsAccount()
user1.login(user1.userID, user1.password)
//console.log(user)
//const user1 =  new User('Melissa', 'Melissa1', 'test1', '0',18,'')
//user.createsAccount(user1)
//const scooter = new Scooter('lowella1', 'scooter1', 'DFW', 0, 'false', '123')
//user.pay(10)
//console.log(user)
//console.log(User.registeredUsers)

module.exports = User