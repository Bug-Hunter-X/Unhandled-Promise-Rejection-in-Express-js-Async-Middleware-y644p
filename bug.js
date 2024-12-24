const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process data asynchronously
  processAsyncData(data).then(() => {
    res.send('Data processed successfully');
  }).catch(error => {
    console.error('Error processing data:', error);
    res.status(500).send('Error processing data');
  });
});

async function processAsyncData(data) {
  // Simulate an asynchronous operation that might fail
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.value > 10) {
        resolve();
      } else {
        reject(new Error('Value must be greater than 10'));
      }
    }, 1000);
  });
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});