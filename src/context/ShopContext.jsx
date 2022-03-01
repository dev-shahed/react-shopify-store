import React, { Component, createContext } from "react";
import Client from "shopify-buy";
const ShopContext = createContext();
const client = Client.buildClient({
  domain: import.meta.env.VITE_SHOPIFY_DOMAIN,
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_API,
});

class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  componentDidMount() {
    let hasId = localStorage.checkout_id;
    if (hasId) {
      this.fetchCheckout(hasId);
    } else {
      this.createCheckout();
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    this.setState({ checkout: checkout });
  };
  fetchCheckout = (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  };
  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });
    this.openCart();
  };
  removeLineItem = async (lineItemIdsToRemove) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIdsToRemove
    );
    this.setState({checkout: checkout});
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };
  handleProduct = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
  };
  closeCart = async () => {
    this.setState({ isCartOpen: false });
  };
  openCart = async () => {
    this.setState({ isCartOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          createCheckout: this.createCheckout,
          fetchCheckout: this.fetchCheckout,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          fetchAllProducts: this.fetchAllProducts,
          handleProduct: this.handleProduct,
          closeCart: this.closeCart,
          openCart: this.openCart,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;
export { ShopContext, ShopConsumer };

export default ShopProvider;
