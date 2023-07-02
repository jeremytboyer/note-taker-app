const titleVal = document.querySelector("#title");
const noteVal = document.querySelector("#note-text");
const saveBtn = document.querySelector("#save");

titleVal.addEventListener('input', function() {
  if (titleVal.value.length > 0) {
    saveBtn.classList.remove('hidden');
  } else {
    saveBtn.classList.add('hidden');
  }
});
