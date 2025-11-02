'use client';
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
    return (
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {products.map(p => (
                <ProductCard key={p.id} product={p} onAdd={() => onAdd(p)} />
            ))}
        </div>
    );
}