'use client'

export default function ProductCard({ product, onAdd }) {
    const disabled = product.stock === 0;
    return (
        <div className="border p-3 rounded">
            <div className="font-medium">{product.name}</div>
            <div className="text-sm">Category: {product.category}</div>
            <div className="text-sm">Price: ${product.price}</div>
            <div className="text-sm mb-2">{disabled ? 'Out of stock' : 'In stock: ' + product.stock}</div>
            <button
                className="px-2 py-1 border rounded disabled:opacity-50"
                onClick={onAdd}
                disabled={disabled}
            >{'Add to Cart'}</button>
        </div>
    );
}