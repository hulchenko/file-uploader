export function upload(selector, options = {}) {
  const input = document.querySelector(selector);
  const preview = document.createElement('div');

  preview.classList.add('preview');

  const open = document.createElement('button');
  open.classList.add('btn');
  open.textContent = 'Open';

  if (options.multi) {
    //multi for multiple files upload at once
    input.setAttribute('multiple', true);
  }

  if (options.accept && Array.isArray(options.accept)) {
    //set selective files for upload rule('.png', '.jpeg', '.jpg', '.gif')
    input.setAttribute('accept', options.accept.join(','));
  }

  input.insertAdjacentElement('afterend', preview); //insert preview div on img selection
  input.insertAdjacentElement('afterend', open); //insert button after the default one

  const triggerInput = () => input.click();

  const changeHandler = (event) => {
    if (event.target.files.length === 0) {
      return;
    }

    const files = Array.from(event.target.files);

    preview.innerHTML = ''; //resets list of items on upload
    files.forEach((file) => {
      if (!file.type.match('image')) {
        //if uploading file is not an image, do not do anything, otherwise return file's name
        return;
      }

      const reader = new FileReader(); //JS built in FileReader element(async)

      reader.onload = (event) => {
        const src = event.target.result; //image code
        preview.insertAdjacentHTML(
          'afterbegin',
          `
        <div class='preview-image'>
        <div class='preview-remove'>&times</div>
        <img src='${src}' alt='${file.name}'/>
        </div>`
        );
        // input.insertAdjacentHTML(
        //   'afterend',
        //   `<img src="${event.target.result}" />`
        // ); //initial preview to work with
      };

      reader.readAsDataURL(file);
    });
  };

  open.addEventListener('click', triggerInput);
  input.addEventListener('change', changeHandler);
}
