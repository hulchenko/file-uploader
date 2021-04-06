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
18. add upload button functionality (uploadHandler)
