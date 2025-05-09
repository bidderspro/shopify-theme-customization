export function AddToCartButton({
  variantId,
  productTitle,
}: {
  variantId: number;
  productTitle: string;
}) {
  console.log({ variantId });
  async function addToCart() {
    const cartDrawer: any = document.querySelector("cart-drawer");
    const addToCartRequest = await fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            quantity: 1,
            id: variantId,
          },
        ],
        sections: cartDrawer
          .getSectionsToRender()
          .map((section: any) => section.id),
      }),
    });
    const response = await addToCartRequest.json();
    console.log("response===>", response);
    cartDrawer.renderContents(response);
    const root = document.querySelector("#add-to-cart-button");
    if (root) {
      root.dispatchEvent(
        new CustomEvent("product-added", {
          detail: {
            id: variantId,
          },
        })
      );
    }
  }

  return <button onClick={addToCart}>Add {productTitle} to cart</button>;
}
