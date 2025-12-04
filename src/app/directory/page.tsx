import { getVendors } from "../../queries";

export default async function DirectoryPage() {
  const vendors = await getVendors();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Tea Vendors</h1>

      <div className="space-y-4">
        {vendors?.map((v) => (
          <div key={v.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{v.name}</h2>
            <p className="text-sm text-gray-600">
              {v.city}, {v.state}
            </p>

            {v.tea_types && (
              <p className="mt-2 text-sm">
                <strong>Tea Types:</strong> {v.tea_types.join(", ")}
              </p>
            )}

            {v.tags && (
              <p className="text-sm">
                <strong>Tags:</strong> {v.tags.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
