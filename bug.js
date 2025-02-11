```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This will cause an error because of missing res.end()
  res.status(200).json({ name: 'John Doe' });
}
```