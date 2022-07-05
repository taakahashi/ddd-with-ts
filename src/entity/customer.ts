import Address from "./address";

export default class Customer {

    _id: string;
    _name: string;
    _address!: Address;
    _status: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        
        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }

        if (this._name.length === 0) {
            throw new Error("Name is required");
        }

        if (this._address === undefined) {
            throw new Error("Address is required");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }

        this._status = true;
    }

    desactive() {
        this._status = false;
    }

    set Address(address: Address) {
        this._address = address;
    }
}