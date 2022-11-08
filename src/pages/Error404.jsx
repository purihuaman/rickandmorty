const Error404 = () => {
	return (
		<main className="py-4 px-2 h-screen">
			<div className="max-w-screen mx-auto h-full">
				<section className="flex items-center justify-center h-full">
					<figure>
						<figcaption>
							<h2 className="text-3xl text-red-500 text-center">
								Page not found
							</h2>
						</figcaption>

						<img src="/assets/images/page_not_found.svg" alt="Page not found" />
					</figure>
				</section>
			</div>
		</main>
	);
};

export default Error404;
