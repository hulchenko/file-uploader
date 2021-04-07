1. npm init -y (for yes, to skip interactive setup)
2. npm install -D parcel-bundler (-D for development mode) (webpack analog, enables moduling(imports/exports), page auto-refresh, availability to use pre-processors)
3. add js files, import upload js inside app js
4. update script in package.json
5. npm run serve (to run test)
6. add initial setup for .html and .css
7. add styling for input button and its functionality
8. work on functionality event, pull file's data with (event.target.files)
9. add multi file feature
10. set only specific file extensions for uploading
11. setup FileReader to preview selected pictures
12. disable repetitive adding, reset list on every new attempt
13. add remove file icon, add file description field
14. change bytes to kilobytes preview line
15. add remove functionality:
    1. add data attribute to HTML
    2. use file.name as unique ID for each file
    3. target whole block 'div.preview' and see which item was clicked with addEventListener
    4. target and return a name of only those with dataset attribute
    5. on-click return a list of created array upon selection
    6. target whole block on .preview-remove click
    7. add remove function / animation
16. add upload button, rewrite code after const element, for cleaner look
17. remove upload button visibility, enable it only upon img loading to the screen
18. remove upload button visibility if user manually deletes uploaded images
19. add upload button functionality
    1. set noop for (uploadHandler) to avoid errors if blank submitted
    2. remove delete functionality on uploaded img
    3. style loading bar
20. Setup Firebase:
    1. create project
    2. npm i firebase (installing firebase on to the project)
    3. register App
    4. add Firebase SDK (copy script config portion into app.js)
    5. import firebase app and firebase storage
    6. on website -> storage -> get started -> server
    7. storage -> rules -> change line to (allow read, write: if true;)
21. in app.js create storage const containing firebase.storage data
22. To upload picture:
    1. create const 'ref' leading to the list of uploaded images in storage
    2. create const 'task' that contains action of placing item inside the store (ref.put(file))
23. attach css animation on 'task' uploading status
    1. create percentage const inside task.on()
    2. create block const inside task.on
    3. assign percentage to HTML and CSS to reflect on screen
24. Netlify deployment:
    1. change script 'serve' to 'start'
    2. add 'build' script
    3. on Netlify - build command: npm run build
    4. on Netlify - publish directory: dist/

Link to the storage folder images/:

https://console.firebase.google.com/u/0/project/file-uploader-bc149/storage/file-uploader-bc149.appspot.com/files~2F
