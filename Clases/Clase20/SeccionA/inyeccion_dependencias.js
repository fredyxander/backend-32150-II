// Sin inyeccion de dependencias
class msgEmailClass{
    constructor(){
        this.communicator = new EmailService()
    }
    sendMail(msg, from){
        this.communicator.sendMsg(msg,from)
    }
}

class msgSMSClass {
    constructor(){
        this.communicator = new SMSService()
    }
    sendMail(msg, from){
        this.communicator.sendMsg(msg,from)
    }
}

// con inyeccion de dependencias
class comunicatorClass {
    constructor(communicatorType){
        this.communicator = communicatorType;
    }
}

const emailApi = new comunicatorClass(new EmailService())
const smsApi = new comunicatorClass(new SMSService())