import { upload } from './upload.js';

upload('#file', {
  multi: true, //multi for multiple files upload at once
  accept: ['.png', '.jpeg', '.jpg', '.gif'],
});
