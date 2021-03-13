import ReactMarkdown from 'react-markdown';
function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  if (!activeNote) return <div class='no-active-note'>No Note Selected</div>;
  return (
    <div class='app-main'>
      <div class='app-main-note-edit'>
        <input
          type='text'
          id='title'
          value={activeNote.title}
          onChange={(e) => onEditField('title', e.target.value)}
          autoFocus
        ></input>
        <textarea
          id='body'
          placeholder='Write Your Note Here'
          value={activeNote.body}
          onChange={(e) => onEditField('body', e.target.value)}
        ></textarea>
      </div>
      <div class='app-main-note-preview'>
        <h1 class='preview-title'>{activeNote.title}</h1>
        <ReactMarkdown class='markdown-preview'>
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
export default Main;
