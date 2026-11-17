// classes 
class Item {
    constructor ( id, name , price , stock ,  image ) {
        this.id = id ; 
        this.name = name ; 
        this.price = price ; 
        this.stock = stock ; 
        this.image = image ; 
        
    }
}
 

 

class User {
    constructor(user_id, username, email, password, is_manager = false, public_service = false , cart = [] ) {
        this.user_id = user_id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.is_manager = is_manager;
        this.public_service = public_service;
        this.cart = cart; 
    }
}
 

class Collectible extends Item {
    constructor ( id , name , price , stock , category , image     ) {
        super(id , name , price , stock , image   ) ; 
        this.category = category ; 
 
    }
}


class retroGame extends Item {
    constructor( id , name , price , stock , platform , image  ){
        super(id , name , price , stock , image  ) ;
        this.platform = platform ; 
        
    }
}
 

// the database (not connecting to sql or something) 
const collectibles = [
    new Collectible(1, 'Eva Unit 01 Awakening TV Version Blokees Action Figure', 59.99, 3 , `figure` , 'images/eva_figure.png' ),
    new Collectible(2, 'Posters', 15, 45, `poster` , `images/posters.png`),
    new Collectible(3, 'Plushies', 14, 30 ,`plush`, `images/plushies.png`),
    new Collectible(4, 'Yu-gi-oh pack', 4.50, 20, `tcg cards`, `images/yugioh_tcg.png` ),
    new Collectible(5, 'Pokemon TCG pack', 8, 10 , `tcg cards` , `images/pokemon_tcg.jpg`),
    new Collectible(6, 'Sephiroth amiibo', 20, 1 ,`amiibo` , `images/sephirot_amiibo.png`),
    new Collectible(7, `Cloud Strife amiibo`, 20, 2 , `amiibo` , `images/cloud_amiibo.jpg`)
];

const retroGames = [
    new retroGame(1, 'Persona 3 FES', 50, 1, 'PlayStation 2' , `images/persona3fes.png`),
    new retroGame(2, 'Silent Hill 2', 35, 1, 'PlayStation 2', `images/silent_hill2.jpg`),
    new retroGame(3, 'Silent Hill 3', 30, 1, 'PlayStation 2' , `images/silent_hill3.png`),
    new retroGame(4, 'Super Smash Bros. Melee', 40, 3, 'Nintendo Gamecube' , `images/ssbm.jpg`),
    new retroGame(5, 'Halo 3', 20, 3, 'Xbox 360' , `images/halo3.png`)
];
 
const users = [
    new User( 1 , `jchi` , `jchi@email.com` , `really_complex_password` , true , false  , [  ]),
    new User( 2 , `John Doe` , `user@gmail.com` , `birthday_date_password` , false  , true , [] )
]; 


 
function getAllCollectibles() {
    return collectibles;
}

function getAllRetroGames() {
    return retroGames;
}

 
function getUserInfo(id) {
    return users.find(user => user.user_id === id);
}
 

function addUser(username, email, password, public_service) {
    if (users.some(u => u.username === username)) {
        throw new Error('Username already taken');   //error handling 
    }
    const newUser = new User(users.length + 1, username, email, password, false, public_service);
    users.push(newUser);
    console.log(newUser); // just for me to check that the user was created 
    return newUser;
}

function addToCart(userId, itemId, type) {
    const user = getUserInfo(userId);
    const list = type === 'retro-game' ? retroGames : collectibles;
    const item = list.find(i => i.id === Number(itemId));

    if (!user || !item) {
        throw new Error('User or item not found');
    }

    user.cart.push(item.name);
}


module.exports = { getAllCollectibles, getAllRetroGames , getUserInfo , addUser , addToCart };