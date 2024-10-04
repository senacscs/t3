module.exports = (app, db) => {
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    });
  
    app.get('/create', (req, res) => {
      res.sendFile(__dirname + '/views/create.html');
    });
  
    app.post('/create', (req, res) => {
      const { username, password } = req.body;
      db.run('INSERT INTO usuarios (username, password) VALUES (?, ?)', [username, password], (err) => {
        if (err) {
          return console.error(err.message);
        }
        res.redirect('/');
      });
    });
  
    app.get('/update', (req, res) => {
      res.sendFile(__dirname + '/views/update.html');
    });
  
    app.post('/update', (req, res) => {
      const { id, username, password } = req.body;
      db.run('UPDATE users SET username = ?, password = ? WHERE id = ?', [username, password, id], (err) => {
        if (err) {
          return console.error(err.message);
        }
        res.redirect('/');
      });
    });
  
    app.get('/delete', (req, res) => {
      res.sendFile(__dirname + '/views/delete.html');
    });
  
    app.post('/delete', (req, res) => {
      const { id } = req.body;
      db.run('DELETE FROM users WHERE id = ?', [id], (err) => {
        if (err) {
          return console.error(err.message);
        }
        res.redirect('/');
      });
    });
  };
  