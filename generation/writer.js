/**
 * writer.js
 * Holds script for writing raw data to a text file
 */

function writeToFile(stream, {
    data,
    filename,
    start = 0,
    target = 1,
    header = '',
    footer = '',
    comma = false
  }, i = start) {

  if (i === start) {
    stream.write(header);
    filename ? console.time(filename) : filename;
  }

  if (typeof data !== 'function') {
    const dataPoint = data;
    data = (() => dataPoint);
  }

  let bool = true;

  for (i; i < target && bool; i++) {
    stream.write(data(i));
    bool = stream.write( i === target - 1 || !comma ? '\n' : ',\n' );
  }

  if (i < target) {
    stream.once('drain', () => writeToFile(stream, arguments[1], i));
  } else {
    stream.on('finish', () => {
      filename ? console.timeEnd(filename) : filename;
    });
    stream.end(footer);
  }

}

module.exports = writeToFile;
