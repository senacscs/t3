//codigo original de marcos e tito

// npm install express sqlite3
// npm i -----> (package.json)
// node server.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para arquivos estáticos (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database('./academia.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados SQLite');
  }
});

// Criar tabela de membros se ainda não existir (SQL)
db.run(`CREATE TABLE IF NOT EXISTS membros (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  idade INTEGER,
  endereco TEXT,
  telefone TEXT
)`);

// Middleware para processar corpo das requisições como JSON
app.use(express.json());

// Endpoint para retornar a página Index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Endpoint para listar todos os membros
app.get('/membros', (req, res) => {
  db.all('SELECT * FROM membros', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Endpoint para adicionar um novo membro
app.post('/membros', (req, res) => {
  const { nome, idade, endereco, telefone } = req.body;

  if (!nome) {
    res.status(400).json({ error: 'O nome do membro é obrigatório' });
    return;
  }

  db.run('INSERT INTO membros (nome, idade, endereco, telefone) VALUES (?, ?, ?, ?)', [nome, idade, endereco, telefone], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, nome, idade, endereco, telefone });
  });
});

// Endpoint para deletar um membro pelo ID
app.delete('/membros/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM membros WHERE id = ?', [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Membro excluído com sucesso', changes: this.changes });
  });
});

// Endpoint para atualizar dados de um membro
app.put('/membros/:id', (req, res) => {
  const { id } = req.params;
  const { nome, idade, endereco, telefone } = req.body;

  if (!nome) {
    res.status(400).json({ error: 'O nome do membro é obrigatório' });
    return;
  }

  db.run('UPDATE membros SET nome = ?, idade = ?, endereco = ?, telefone = ? WHERE id = ?', [nome, idade, endereco, telefone, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Dados do membro atualizados com sucesso', changes: this.changes });
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});