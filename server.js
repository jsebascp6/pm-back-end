const express = require('express');
const app = express();

app.get('/api/v1/hello', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
