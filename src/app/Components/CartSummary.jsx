'use client';

export default function CartSummary({ products, cart, itemCount, total, onDecrease, onReset, }) {
    const items = Object.entries(cart);

    return (
        <div className="border p-3 rounded flex-2 min-w-[240px]">
            <div className="font-medium mb-1">Cart</div>
            <div className="text-sm">Items: {itemCount}</div>
            <div className="text-sm mb-2">Total: ${total}</div>

            {items.length === 0 ? (
                <div className="text-sm text-gray-500">Cart is empty.</div>
            ) : (
                <ul className="text-sm space-y-1 mb-2">
                {items.map(([id, qty]) => {
                    const p = products.find(pr => pr.id === id);
                    return (
                        <li key={id} className="flex items-center justify-between">
                        <span>{p ? p.name : id} x {qty}</span>
                        <button 
                            className="border rounded px-2 py-2"
                            onClick={() => onDecrease(id)}
                            >-</button>
                        </li>
                    );
                })}
                </ul>
            )}

            <button 
                className="px-2 py-2 border rounded"
                onClick={onReset}
                disabled={items.length === 0}
            >Reset</button>
        </div>
    );
}