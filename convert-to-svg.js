const potrace = require('potrace');
const fs = require('fs');

potrace.trace('input.png', (err, svg) => {
  if (err) throw err;
  fs.writeFileSync('output.svg', svg);
  console.log('SVG file saved as output.svg');
});
