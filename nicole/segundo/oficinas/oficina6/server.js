// npm install express sqlite3
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

// Criar tabela de tarefas se ainda não existir (SQL)
db.run(`CREATE TABLE IF NOT EXISTS compras (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description TEXT
)`);

// Middleware para processar corpo das requisições como JSON
app.use(express.json());

// Endpoint para retornar a página Index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// Endpoint para listar todas as tarefas
app.get('/compras', (req, res) => {
  db.all('SELECT * FROM compras', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});


// Endpoint para adicionar uma nova tarefa
app.post('/compras', (req, res) => {
  const { description } = req.body;
  if (!description) {
    res.status(400).json({ error: 'O nome do item é obrigatório' });
    return;
  }
  db.run('INSERT INTO compras (description) VALUES (?)', [description], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, description });
  });
});

// Endpoint para deletar uma tarefa pelo ID
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

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
