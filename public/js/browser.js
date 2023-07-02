const titleVal = document.querySelector("#title");
const noteVal = document.querySelector("#note-text");
const saveBtn = document.querySelector("#save");
const plusBtn = document.querySelector('#plus')
const form = document.querySelector('#note-form')

titleVal.addEventListener('input', function() {
  if (titleVal.value.length > 0) {
    saveBtn.classList.remove('hidden');
  } else {
    saveBtn.classList.add('hidden');
  }
});

saveBtn.addEventListener('click', () => {
  form.submit()
})



