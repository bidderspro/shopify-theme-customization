export function AddToCartButton({
  variantId,
  productTitle,
}: {
  variantId: number;
  productTitle: string;
}) {
  console.log({ variantId });
  return <button>Add {productTitle} to cart</button>;
}
