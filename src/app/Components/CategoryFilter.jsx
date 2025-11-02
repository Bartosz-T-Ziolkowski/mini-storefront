'use client';

export default function CategoryFilter({ category, categories, onChange }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="category" className="text-sm">Category</label>
            <select 
            id="category"
            value={category}
            onChange={e => onChange(e.target.value)}
            className="border p-2 rounded min-w-[140px]">
            
            {categories.map(c => (
                <option key={c} value={c}>{c}</option>
            ))}
            </select>
        </div>
    );
}