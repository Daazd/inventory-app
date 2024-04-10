const {sauces, items, users} = require('./seedData.js');
const {db} = require('./db');
const {Item, User, Cart, CartItem} = require('./models');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await db.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(item => Item.create(item)));
        await Promise.all(users.map(user => User.create(user)));
        //create cart items from the first three items for the first user
        const user = await User.findOne();
        const cart = await Cart.create({ userId: user.id });
        const cartItem1 = await CartItem.create({ quantity: 1 });
        cartItem1.setItem(1);
        cartItem1.setCart(cart);

       


        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();