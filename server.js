const express = require('express');
const app = express();
const cors = require('cors');
const MARVEL_KEY_PUBLIC = '540f9d60e73b2d4db9fc08aaae0c89b4';
//Middleware
app.use(express.json({ extended: false }));
app.use(cors());
//Routes

app.use('/api', require('./routes/api/character'));

// if (process.env.NODE_ENV === 'production') {
//   //set static folder

//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, 'react-client', 'build', 'index.html')
//     );
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
