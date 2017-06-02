/**
 * This module is designed to take a markdown file and output a full
 * HTML file with a doctype, a title, and a link to a CSS file.
 *
 * I made this because I want to write in Markdown, then be able to share the
 * output easily in a browser.
 *
 * This is just scripting for fun really.
 *
 * @option input - required - path to the markdown file
 * @option title - will be put in the `title` tag in the output
 * @option output - path to write to *note: requires all dirs in path to exist*
 */
const fs = require('fs');
const Handlebars = require('handlebars');
const minimist = require('minimist');
const path = require('path');
const showdown = require('showdown');

const args = minimist(process.argv.splice(2));

if (!args.input) {
	console.error('ERROR: Missing required `input` option. How can I process no input?');
	process.exit(2);
}

const converter = new showdown.Converter();
const input = fs.readFileSync(args.input, 'utf-8');
const content = converter.makeHtml(input);

/**
 * Get all the data sent to stdin and append it to our global input
 */
// process.stdin.on('data', chunk => {
// 	input += chunk;
// });

/**
 * Once all data is read, we get the template file, process it with handlebars, inject the input,
 * then write the output to either the passed in `output` path, or 'output.html'.
 */
// process.stdin.on('end', () => {
fs.readFile(path.resolve(__dirname, 'helpers/template.html'), 'utf-8', (err, src) => {
	if (err) {
		console.error(err);
		process.exit(2);
	}
	const template = Handlebars.compile(src, { noEscape: true });
	const title = args.title || 'output.html';
	const outputPath = args.output || path.resolve(__dirname, 'output.html');
	const html = template({ title, content });
	fs.writeFile(path.resolve(__dirname, outputPath), html, (err, data) => {
		if (err) {
			console.error(err);
			process.exit(2);
		}
		console.log('SUCCESS! See output.html for results.');
		process.exit(0);
	});
});
// });


