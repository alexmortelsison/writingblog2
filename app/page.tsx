import Link from "next/link";
import CreateNote from "./notes/CreateNote";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes?.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h1 className="font-bold">{title}</h1>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
