class Mobile {
    name;
    battery;
    inbox;
    outbox;
    message;
    status;

    constructor(name) {
        this.name = name;
        this.battery = 50;
        this.inbox = [];
        this.outbox = [];
        this.message = "";
        this.status = false;
    }

    checkStatus() {
        return this.status ? `${this.name} is on` : `${this.name} is off`;
    }

    chargeBattery() {
        let x = setInterval(() => {
            if (this.battery === 100) {
                document.write("Battery is charged fully")
                clearInterval(x);
                return;
            }
            this.battery++;

        }, 1000)
    }

    writeMessage(text){
        if (this.status) {
            this.message = text;
            this.decreaseBattery();
        } else {
            document.write("Turn on the mobile first")
        }
    }

    readInbox(){}

    readOutbox(){}

    sendSMS(phone){
        if (this.status) {
            // this la con tro dai dien cho doi tuong hien tai dang tac dong
            this.outbox.push(this.message);
            phone.inbox.push(this.message);
            this.decreaseBattery();
        } else {
            document.write("Turn on the mobile first")
        }
    }

    decreaseBattery(){
        this.battery--;
    }

    turnOff(){
        this.status = false;
    }

    turnOn(){
        this.status = true;
    }
}