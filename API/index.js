const express = require('express');
const cors = require('cors');
const fs = require('fs');
 
const port = 8000;
 
const app = express()
 
app.use(cors())

app.get('/api/:search', function(req, res) {
  const search = req.params.search.toLowerCase();

  if (search === "") {
    res.json([]);
  }
  else {
    fs.readFile('data.txt', 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading file:', err);
          return res.status(500).json({ error: 'Error reading file' });
      }

      const lines = data.trim().split('\n');
      const result = lines
        .map(line => {
          const [key, link] = line.split(' - ').map(item => item.trim().replace(/"/g, ''));
          return { search: key, link };
        })
        .filter(item => item.search.toLowerCase().includes(search));

      res.json(result);
    });
  }
});
 
app.listen(port, () => console.log(`Server is starting at PORT ${port}`));
