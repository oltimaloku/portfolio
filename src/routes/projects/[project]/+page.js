import Idea from "/Users/oltimaloku/Documents/Projects/olti_portfolio/src/components/projects/Idea.svelte";
/*
export async function load({ params }) {
	try {
		
		const post = await import(`../${params.project}.md`);
		
		const { title, date } = post.metadata;
		const content = post.default;
		console.log(content);
		return {
			content,
			title,
			date
		};
	} catch (e) {		
		console.error(e);
	}
	
}
*/
export async function load({ params }) {
	return {
		project: params.project,
	}
	
}