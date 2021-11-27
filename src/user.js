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
        for(let i=0; i < User.registeredUsers.length; i++){
            if(User.registeredUsers[i].userID == userID  && User.registeredUsers[i].password == password){
                found = true
                break
            }
            else {
                found = false
            }
        }

         if(found === true){
             console.log(`${userID} has successfully logged in`)
         }
         else {
             console.log('UserID or password is incorrect!')
         }
    }
      
}

module.exports = User