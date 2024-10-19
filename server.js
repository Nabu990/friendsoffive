const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
// const  dotenv = require('dotenv')
// const { Client } = require('pg')

// dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));

// const db = new Client({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT
// })

// async function connectToDatabse() {
//   try {
//     await db.connect();
//     console.log('connted well')
//   } catch (error) {
//     console.error('fail to connect',err.stack)
//   }
// }

// connectToDatabse();

// db.query(`
//   CREATE TABLE IF NOT EXISTS page (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100),
//     email VARCHAR(100) UNIQUE,
//     message VARCHAR(255)
//   );
// `)

app.get('/', (req, res) => {
  const friends = [
    {
      name: 'Sir Kelvin O.J Willie',
      description: 'A lover of coding and football',
      shortDescription: 'Developer & goalkeeper',
      image: '/image/Sirkelvin.jpg'
    },
    {
      name: 'Amos Gibson',
      description: 'amazing goalkeeper and also like making people laugh.',
      shortDescription: 'Goalkeeper',
      image: '/image/Amos.jpg'
    },
    {
      name: 'Newlove Kofi Etsibah',
      description: 'A Tiktoker and a greate content creator',
      shortDescription: 'Content creator',
      image: '/image/Newlove.jpg'
    },
    {
      name: 'Prince Bonarwolo',
      description:'Football Lover and music',
      shortDescription:'Football lover',
      image:'/image/isiah.jpg'
    },
    {
      name: 'Tornorlah Kollie',
      description:'A pro gamer and a Tiktoker',
      shortDescription:'Gamer',
      image:'/image/Tornorlaor.jpg'
    },
    {
      name: 'Anita Sampson',
      description:'Football Lover and music',
      shortDescription:'Queen of Basketball;',
      image:'/image/Anita.jpg'
    },
  ];

  res.render('index', { title: 'Friends of Five', friends });
});

app.post('/send-message', async (req,res)=>{
  const { name, email, message } = req.body;
  console.log({ name, email, message});
   
  res.redirect('/')

  // try {
  //   await db.query(
  //     `INSERT INTO page (name, email, pessage) VALUES ($1, $2, $3)`,
  //     [name, email, message]
  //   );
  // } catch (err) {
  //   console.error('Error registering user:', err);
  //   res.status(500).send('Error registering user');
  // }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
