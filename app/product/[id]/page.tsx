export default async function Page({ params }: { params: { id: number } }) {
  return <main>product detail {params.id}</main>;
}
