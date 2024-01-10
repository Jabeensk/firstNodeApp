console.log('Hello World');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  try{ 
    // Your existing route logic
    if (req.url === '/error') {
      // Intentional Error (for demonstration purposes)
      throw new Error('This is an intentional error!');
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
  } catch (error) {
    console.error('Error in the route:', error.message);
    res.statusCode = 500; // Internal Server Error
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error');
  }
  });
  // Global Error Handler
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error.message);
  // Perform cleanup if needed
  process.exit(1);
});
    server.listen(port, hostname, () => {
          console.log(`Server running at http://${hostname}:${port}/`);
        });