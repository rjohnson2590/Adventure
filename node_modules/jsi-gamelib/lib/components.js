'use strict';

module.exports.emptyRoom = '           \n           \n           \n           \n           ';

module.exports.createRoom = function(room) {
  var result = '';
  result += '+---';
  if (room.north) { result += '   '; }
  else { result += '---'; }
  result += '---+\n';

  result += '|         |\n';

  if (room.west) { result += ' '; }
  else { result += '|'; }
  result += '    ' + room.name + '    ';
  if (room.east) { result += ' '; }
  else { result += '|'; }
  result += '\n';

  result += '|         |\n';

  result += '+---';
  if (room.south) { result += '   '; }
  else { result += '---'; }
  result += '---+';

  return result;
};

module.exports.joinRooms = function(drawings) {
  if (drawings.length === 0) { return ''; }

  var lines = drawings.map(function(drawing) {
    return drawing.split('\n');
  });

  return lines[0].map(function(line, i) {
    return line + lines.slice(1).map(function(drawingLines) {
      return drawingLines[i].slice(1);
    }).join('');
  }).join('\n');
};

module.exports.mergeLines = function(line1, line2) {
  var result = '';
  for (var i = 0; i < line1.length; i += 1) {
    var append = line1[i];
    if (!append || append === ' ') { append = line2[i]; }
    if (!append || append === ' ') { append = ' '; }
    result += append;
  }
  return result;
};

module.exports.joinRows = function(rows) {
  var splitRows = rows.map(function(row) {
    return row.split('\n');
  });
  rows = splitRows.map(function(lines, i) {
    if (i < lines.length - 2) {
      var lastLine = lines[lines.length - 1];
      var nextLine = splitRows[i+1] && splitRows[i+1][0];
      lines[lines.length - 1] = module.exports.mergeLines(lastLine, nextLine);
    }
    var firstLinePreviouslyDrawn = (i !== 0);
    if (firstLinePreviouslyDrawn) {
      lines = lines.slice(1);
    }
    return lines.join('\n');
  });
  return rows.join('\n');
};
