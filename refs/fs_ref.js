const fs_ref = require('refs/fs_ref')
const path = require('path')
const {log} = require("nodemon/lib/utils");

// File System

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw new Error(err)
//     console.log('Папка была создана')
// })

// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world',
//     (err) => {
//         if (err) throw err
//         console.log('Файл был создан')
//
//         fs.appendFile(
//            path.join(__dirname, 'notes', 'mynotes.txt'),
//             ' From append file',
//           err => {
//                if (err) throw err
//                console.log("Файл был изменен.")
//
//               fs.readFile(
//                   path.join(__dirname, 'notes', 'mynotes.txt'),
//                   'utf-8',
//                   (err, data) => {
//                       if (err) throw err
//                       console.log(data)
//                   }
//               )
//           }
//         )
//     }
// )


fs_ref.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err
        console.log('Файл переименован')
    }
)




