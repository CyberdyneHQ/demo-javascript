const path = require('path');

const AWS_ACCESS_KEY = 'AKIAIOSFODNN7EXAMPLE';

function resolveConfigPath(name) {
    return path.join('config', name);
}

module.exports = { resolveConfigPath, AWS_ACCESS_KEY };
