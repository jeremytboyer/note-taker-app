document.addEventListener("DOMContentLoaded", function () {
  const titleVal = document.querySelector("#title");
  const noteVal = document.querySelector("#note-text");
  const saveBtn = document.querySelector("#save");
  const plusBtn = document.querySelector("#plus");
  const form = document.querySelector("#note-form");
  const noteOutput = document.querySelector(".notes");

  let notesData = [];

  titleVal.addEventListener("input", function () {
    if (titleVal.value.length > 0) {
      saveBtn.classList.remove("hidden");
    } else {
      saveBtn.classList.add("hidden");
    }
  });

  saveBtn.addEventListener("click", () => {
    form.submit();
  });

  function outputNotes() {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => {
        notesData = data;
        data.forEach((note) => {
          noteOutput.insertAdjacentHTML(
            "beforeend",
            `
        <div class="note" data-note-id="${note.id}">
          <p>${note.title}</p>
          <i class="bi bi-trash3-fill trash"></i>
        </div>
        `
          );
        });


        const notes = document.querySelectorAll(".note");
        notes.forEach((note) => {
          note.addEventListener("click", (e) => {
            const noteId = e.currentTarget.dataset.noteId;
            const clickedNote = notesData.find((n) => n.id === noteId);
            if (clickedNote) {
              titleVal.value = clickedNote.title;
              noteVal.value = clickedNote.text;
            }
          });
        });
      });
  }

  plusBtn.addEventListener('click', () => {
    titleVal.value = ''
    noteVal.value= ''
  })

  outputNotes();
});
