/* bytes to kilobytes functionality */
function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export function upload(selector, options = {}) {
  let files = [];
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

    files = Array.from(event.target.files);

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
        <div class='preview-remove' data-name='${file.name}'>&times</div>
        <img src='${src}' alt='${file.name}'/>
        <div class='preview-info'>
        <span>${file.name}</span>
        ${bytesToSize(file.size)}
        </div>
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

  const removeHandler = (event) => {
    if (!event.target.dataset.name) {
      return;
    }

    const name = event.target.dataset.name;
    files = files.filter((file) => file.name !== name);

    const block = preview
      .querySelector(`[data-name="${name}"]`)
      .closest('.preview-image'); //select block of img on .preview-remove click
    block.classList.add('removing');

    setTimeout(function () {
      block.remove();
    }, 300); //300 to match our css scale animation of 0.3s
    //block.remove(); //to simply remove without animation
  };

  open.addEventListener('click', triggerInput);
  input.addEventListener('change', changeHandler);
  preview.addEventListener('click', removeHandler);
}
