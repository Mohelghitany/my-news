export default function ArchiveLayout({ archive, latest }) {
  return (
    <main>
      <section>
        <h2>Archive</h2>
        {archive}
      </section>
      <section>
        <h2>Latest</h2>
        {latest}
      </section>
    </main>
  );
}
