/**
 * writer.js
 * Holds script for writing raw data to a text file
 */

function writeToFile(stream, tgt, { data, header = '', footer = '', comma = false }, idx = 0) {

  if (idx === 0) {
    stream.write(header);
  }

  if (typeof data !== 'function') {
    const dataPoint = data;
    data = (() => dataPoint);
  }

  let bool = true;

  for (idx; idx < tgt && bool; idx++) {
    stream.write(data(idx));
    bool = stream.write( idx === tgt - 1 || !comma ? '\n' : ',\n' );
  }

  if (idx < tgt) {
    stream.once('drain', () => writeToFile(stream, tgt, { data, header, footer, comma }, idx));
  } else {
    stream.on('finish', () => console.log('Done writing to file'));
    stream.end(footer);
  }

}

module.exports = writeToFile;
