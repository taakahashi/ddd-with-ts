import Customer from './entity/customer';
import Address from './entity/address';
import OrderItem from './entity/order_item';
import Order from './entity/order';

let customer = new Customer("123", "Gabriel");
const address = new Address("Rua X", 2, "P", "TO");

customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item A", 10);
const item2 = new OrderItem("2", "Item B", 15);

const order = new Order("1", "123", [item1, item2]);