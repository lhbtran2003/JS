let information = {
    id: '123',
    name: 'John Doe',
    phone: '123456789',
    address: '123 Street, City'
};

delete information.address;

information.email = 'btran@example.com';

console.log(information);
