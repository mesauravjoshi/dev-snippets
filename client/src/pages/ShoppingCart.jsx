import { useState, useMemo } from "react";

const PRODUCTS = [
  { id: 1, name: "Headphones", price: 1500 },
  { id: 2, name: "Keyboard", price: 2500 },
  { id: 3, name: "Mouse", price: 800 },
  { id: 4, name: "EarPhone", price: 500 },
  { id: 5, name: "PowerBank", price: 2000 },
];

const MiniPostman = () => {
  const [products] = useState(PRODUCTS);
  const [carts, setCarts] = useState([]);

  const cartSubtotal = useMemo(() => {
    return carts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [carts]);

  const handleAddToCart = (product) => {
    setCarts(prev => [
      ...prev,
      { ...product, quantity: 1 }
    ]);
  };

  const handleIncreaseQuantity = (id) => {
    setCarts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCarts((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCarts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-[#F5E8D8] px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-10">

        <h1 className="text-3xl font-semibold text-center tracking-wide">
          Shopping Cart
        </h1>

        <section>
          <h2 className="text-xl mb-4 text-[#DAA520]">Products</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(product => {
              const isInCart = carts.some(
                (item) => item.id === product.id
              );
              return (
                <div
                  key={product.id}
                  className="bg-[#232323] border border-[#2E2E2E] rounded-xl p-5 space-y-3"
                >
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm opacity-80">₹ {product.price}</p>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart}
                    className="w-full mt-3 py-2 rounded-lg text-sm font-medium
                    bg-[#FF6F61] text-black
                    hover:bg-[#FF4500] transition
                    disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {isInCart ? "Added" : "Add to Cart"}
                  </button>
                </div>
              )
            })}
          </div>
        </section>
        
        <section>
          <h2 className="text-xl mb-4 text-[#DAA520]">Cart</h2>

          {carts.length === 0 ? (
            <p className="text-sm opacity-70">Your cart is empty.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {carts.map(product => (
                <div
                  key={product.id}
                  className="bg-[#232323] border border-[#FF6F61] rounded-xl p-5 space-y-3"
                >
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm">
                    ₹ {product.price * product.quantity}
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecreaseQuantity(product)}
                      className="px-3 py-1 border border-[#FF6F61] rounded hover:bg-[#FF4500]"
                    >−</button>

                    <span className="px-4">{product.quantity}</span>

                    <button
                      onClick={() => handleIncreaseQuantity(product.id)}
                      className="px-3 py-1 border border-[#FF6F61] rounded hover:bg-[#FF4500]"
                    >+</button>

                    <button
                      onClick={() => handleRemoveItem(product.id)}
                      className="ml-auto text-sm text-[#FF6F61] hover:text-[#FF4500]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Bill */}
        <section className="bg-[#232323] rounded-xl p-6 border border-[#2E2E2E]">
          <h2 className="text-xl mb-4 text-[#DAA520]">Bill Summary</h2>

          <div className="space-y-2 text-sm">
            {carts.map(item => (
              <p key={item.id}>
                {item.name} × {item.quantity} = ₹ {item.price * item.quantity}
              </p>
            ))}

            <hr className="border-[#2E2E2E] my-3" />

            <p>Subtotal: ₹ {cartSubtotal}</p>

            {cartSubtotal >= 5000 && (
              <p className="text-[#DAA520]">
                Discount (10%): − ₹ {cartSubtotal / 10}
              </p>
            )}

            <p className="font-semibold text-lg mt-2">
              Final Amount: ₹{" "}
              {cartSubtotal >= 5000
                ? cartSubtotal - cartSubtotal / 10
                : cartSubtotal}
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MiniPostman;
