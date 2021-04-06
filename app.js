import firebase from 'firebase/app';
import 'firebase/storage';
import { upload } from './upload.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBsRdoWPiIN4sWIfTdGaDX3umRE3YOs9LY',
  authDomain: 'file-uploader-bc149.firebaseapp.com',
  projectId: 'file-uploader-bc149',
  storageBucket: 'file-uploader-bc149.appspot.com',
  messagingSenderId: '824022784337',
  appId: '1:824022784337:web:8e2b6b2f2e3fb5ded11b70',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
console.log(storage.ref);

upload('#file', {
  multi: true,
  accept: ['.png', '.jpeg', '.jpg', '.gif'],
  onUpload(files, blocks) {
    files.forEach((file, index) => {
      const ref = storage.ref(`images/${file.name}`);
      const task = ref.put(file);

      task.on(
        'state_changed',
        (snapshot) => {
          const percentage =
            ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(
              0
            ) + '%';
          const block = blocks[index].querySelector('.preview-info-progress');
          block.textContent = percentage;
          block.style.width = percentage;
        },
        (error) => {
          console.log('Error');
        },
        (complete) => {
          task.snapshot.ref.getDownloadURL().then((url) => {
            console.log('Download: ', url);
          });
        }
      );
    });
  },
});
