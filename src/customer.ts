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
        
        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }

        if (this._name.length === 0) {
            throw new Error("Name is required");
        }

        if (this._address.length === 0) {
            throw new Error("Address is required");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address.length === 0) {
            throw new Error("Address is mandatory to activate a customer");
        }

        this._status = true;
    }

    desactive() {
        this._status = false;
    }
}