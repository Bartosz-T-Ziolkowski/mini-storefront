import Catalog from './Components/Catalog';
export default function Page() {
  return (
    <main className="p-3">
      <h1 className="text-xl font-semibold mb=4">Mini Storefront</h1>
      <Catalog />
    </main>
  );
}