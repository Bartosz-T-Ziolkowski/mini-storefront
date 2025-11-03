'use client';
import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [category, setCategory] = useState('All');
    const [maxPrice, setMaxPrice] = useState('');
    const [cart, setCart] = useState({});

    useEffect(() => {
        let gone = false;
        (async () => {
            try {
                const r = await fetch('/api/products', { cache: 'no-store' });
                if (!r.ok) throw new Error();
                const data = await r.json();
                if (!gone) { setProducts(data); setLoading(false); }
            } catch {
                if (!gone) { setError('Unable to load.'); setLoading(false); }
            }
        })();
        return () => { gone = true; };
    }, []);

    useEffect(() => {
    if (!products.length) return;
    const t = setInterval(() => {
      setProducts(ps => ps.map(p => (Math.random() < 0.15 && p.stock > 0) ? { ...p, stock: p.stock - 1 } : p));
    }, 5000);
    return () => clearInterval(t);
  }, [products.length]);

    const categories = ['All', ...new Set(products.map(p => p.category))];
    const filtered = products.filter (p => 
        (category === 'All' || p.category === category) && 
        (maxPrice === '' || p.price <= Number(maxPrice))
    );

    function addToCart(prod) {
        if (prod.stock <= 0) return;
        setProducts(ps => ps.map(p => p.id === prod.id ? {...p, stock: p.stock - 1 } : p));
        setCart(c => ({ ...c, [prod.id]: (c[prod.id] || 0) + 1 }));
    }
    function decreaseFromCart(id) {
        setCart(c => {
            const q = c[id] || 0; if (q <= 0) return c;
            const n = { ...c, [id]: q - 1}; if (n[id] === 0) delete n[id]; return n;
        });
        setProducts(ps => ps.map(p => p.id === id ? { ...p, stock: p.stock + 1 } : p));
    }
    function resetCart() {
        setProducts(ps => ps.map(p => ({ ...p, stock: p.stock + (cart[p.id] || 0) })));
        setCart({});
    }

    const totals = Object.entries(cart).reduce(
        (acc, [id,qty]) => {
            const p = products.find(x => x.id === id);
            return p ? { items: acc.items + qty, total: acc.total + qty * p.price } : acc;
        }, { items: 0, total: 0 }
    );

    return (
    <div className="space-y-4">
      <div className="flex gap-4 items-end flex-wrap">
        <CategoryFilter category={category} categories={categories} onChange={setCategory} />
        <PriceFilter value={maxPrice} onChange={setMaxPrice} />
        <CartSummary
          itemCount={totals.items}
          total={totals.total}
          onDecrease={decreaseFromCart}
          onReset={resetCart}
          cart={cart}
          products={products}
        />
      </div>

      <StatusMessage loading={loading} error={error} isEmpty={!loading && !error && filtered.length === 0} />

      {!loading && !error && filtered.length > 0 && (
        <ProductList products={filtered} onAdd={addToCart} />
      )}
    </div>
  );
}