'use client';

export default function PriceFilter({ value, onChange, placeholder }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="maxPrice" className="text-sm">Max Price</label>
            <input
                id="maxPrice"
                type="number"
                min="0"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder || 'Max'}
                className="border p-2 rounded w-32"
            />
        </div>
    );
}