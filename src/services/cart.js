// Ações que o carrinho pode realizar(Casos de Uso)

// Adicionar um ou mais itens no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// Remover um item do carrinho
async function removeItem(userCart, item) {
    // Transforma indice visual do usuário, para indice do backend
    const indexFound = userCart.findIndex((cartItem) => cartItem.name === item.name);

    // Caso não encontre o item
    if(indexFound === -1){
        console.log("Item not found!");
        return;
    }

    // Item maior que 1 subtrair um item
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        userCart[indexFound].subtotal = () => userCart[indexFound].quantity * userCart[indexFound].price;
        return;
    }

    // Item igual a 1 deletar o item do carrinho
    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);

        return;
    }
}

// Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
        console.log(`${name} - Item Deleted From Cart`)
    }
}

// Calcular valor total do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee Cart Total Is:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: R$ ${result}`);
}

// Mostrar itens do carrinho
async function dysplayCart(userCart) {
    console.log("\nShopee Cart List:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    removeItem,
    deleteItem,
    dysplayCart
}