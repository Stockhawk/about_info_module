/**
 * writer.js
 * Holds script for writing raw data to a text file
 */

function writeToFile(stream, data, tgt, idx = 0) {

  if (idx === 0) {
    stream.write('[\n');
  }

  if (typeof data !== 'function') {
    const dataPoint = data;
    data = (() => dataPoint);
  }

  let bool = true;

  for (idx; idx < tgt && bool; idx++) {
    stream.write(data(idx));
    bool = stream.write( idx === tgt - 1 ? '\n' : ',\n' );
  }

  if (idx < tgt) {
    stream.once('drain', () => writeToFile(stream, data, tgt, idx));
  } else {
    stream.on('finish', () => console.log('Done writing to file'));
    stream.end(']\n');
  }

}

module.exports = writeToFile;