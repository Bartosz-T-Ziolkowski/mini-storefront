export async function GET() {
    const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'Smart Watch', price: 300, category: 'Electronics', stock: 20 },
    { id: 'p5', name: 'Jeans', price: 60, category: 'Clothing', stock: 20 },
    { id: 'p6', name: 'Table', price: 200, category: 'Furniture', stock: 10 },
    { id: 'p7', name: 'Nightstand', price: 70, category: 'Furniture', stock: 5 },
    { id: 'p8', name: 'Hoodie', price: 50, category: 'Clothing', stock: 10 },
    { id: 'p9', name: 'Hat', price: 30, category: 'Clothing', stock: 7 },
    { id: 'p10', name: 'Headphones', price: 200, category: 'Electronics', stock: 10 }
    ];
    return Response.json(products);
}