export async function load({ params }) {
	try {
		
		const post = await import(`../${params.project}.md`);
		const { title, date } = post.metadata;
		const content = post.default;
		console.log(content, title, date);
		return {
			content,
			title,
			date
		};
	} catch (e) {		
		console.error(e);
	}
	
}
