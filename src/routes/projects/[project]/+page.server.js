import {promises as fs} from 'fs';
import path from 'path';
import {marked} from 'marked';

export async function load({ params }) {
	try {
		
		const project = params.project
		const filePath = path.resolve(`src/content/projects/${project}/index.md`);
		const markdown = await fs.readFile(filePath, 'utf-8');
		const htmlContent = marked(markdown);
		
		return {
			htmlContent: htmlContent
		}
	} catch (error) {
		console.error(error);
		return {
			htmlContent: ''
		}
	}
}

/*
export async function load({ params }) {
	const post = await import(`../${params.project}.md`);
	const content = post.default;

	return {
		content,
	};
}
*/