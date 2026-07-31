class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}asif`
    }

    set password(value){
        this._password = value
    }
}

const asif = new User("h@asif.ai", "abc")
console.log(asif.email);