export default function MealsSlugPage({ params }) {
  return (
    <h1 style={{ color: 'white', textAlign: 'center' }}>
      Meals - {params.slug}
    </h1>
  );
}

