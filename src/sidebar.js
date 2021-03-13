function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  return (
    <div class='app-sidebar'>
      <div class='app-sidebar-header'>
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div class='app-sidebar-notes'>
        {sortedNotes.map((notes) => (
          <div
            class={`app-sidebar-note ${notes.id === activeNote && 'active'}`}
            onClick={() => setActiveNote(notes.id)}
          >
            <div class='sidebar-note-title'>
              <strong>{notes.title}</strong>
              <button onClick={() => onDeleteNote(notes.id)}>Delete</button>
            </div>
            <p>{notes.body && notes.body.substr(0, 100) + '...'}</p>
            <small class='note-meta'>
              Last Modified{' '}
              {new Date(notes.lastModified).toLocaleDateString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
