const fs = require('fs');
const path = require('path');

const gitDir = path.join(__dirname, '.git');
const gitAttr = path.join(__dirname, '.gitattributes');
const gitIgnore = path.join(__dirname, '.gitignore');

if (fs.existsSync(gitDir)) {
    try {
        fs.rmSync(gitDir, { recursive: true, force: true });
        console.log('Removed .git directory');
    } catch (e) {
        console.error('Failed to remove .git:', e);
    }
} else {
    console.log('.git directory not found');
}

if (fs.existsSync(gitAttr)) {
    try {
        fs.unlinkSync(gitAttr);
        console.log('Removed .gitattributes');
    } catch (e) {
        console.error('Failed to remove .gitattributes:', e);
    }
} else {
    console.log('.gitattributes not found');
}

if (fs.existsSync(gitIgnore)) {
    try {
        fs.unlinkSync(gitIgnore);
        console.log('Removed .gitignore');
    } catch (e) {
        console.error('Failed to remove .gitignore:', e);
    }
} else {
    console.log('.gitignore not found');
}
