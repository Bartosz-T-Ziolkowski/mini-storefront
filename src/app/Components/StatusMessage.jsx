'use client';

export default function ({ loading, error, empty }) {
    if (loading) return <div className="text-sm">Loading</div>
    if (error) return <div className="text-sm text-red">Error: {error}</div>
    if (empty) return <div className="text-sm">No products found.</div>
    return null;
}