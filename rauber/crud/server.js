//codigo original de marcos e tito

// npm install express sqlite3
// npm i -----> (package.json)
// node server.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

//Middleware de arquivos estáticos (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database('./compras.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados SQLite');
  }
}); 

// Criar tabela de compras se ainda não existir (SQL)
db.run(`CREATE TABLE IF NOT EXISTS compras (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description TEXT,
  preco FLOAT
)`);

// Middleware para processar corpo das requisições como JSON
app.use(express.json());

// Endpoint para retornar a página Index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// Endpoint para listar todas as compras
app.get('/compras', (req, res) => {
  db.all('SELECT * FROM compras', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});


// Endpoint para adicionar uma nova compra
app.post('/compras', (req, res) => {
  const { description, preco } = req.body;
  // if (!description || !preco) {
  //   res.status(400).json({ error: 'O nome e o preco do item é obrigatório' });
  //   return;
  // }
  db.run('INSERT INTO compras (description, preco) VALUES (?, ?)', [description, preco], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, description, preco });
  });
});

// Endpoint para deletar uma compra pelo ID
app.delete('/compras/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM compras WHERE id = ?', [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Item excluído com sucesso', changes: this.changes });
  });
});

// Endpoint de UPDATE 
app.put('/compras/:id', (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  if (!description) {
    res.status(400).json({ error: 'A descrição do item é obrigatória' });
    return;
  }
  db.run('UPDATE compras SET description = ? WHERE id = ?', [description, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Descrição da compra atualizada com sucesso', changes: this.changes });
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
