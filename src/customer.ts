class Customer {

    _id: string;
    _name: string;
    _address: string;
    _status: boolean = false;

    constructor(id: string, name: string, address: string, status: boolean) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._status = status;
    }

    changeName(name: string) {
        this._name = name;
    }

    activate() {
        this._status = true;
    }

    desactive() {
        this._status = false;
    }
}