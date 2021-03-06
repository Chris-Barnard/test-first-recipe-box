// Prevent mocha from interpreting CSS and SVG @import files
function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.jpg'] = noop;