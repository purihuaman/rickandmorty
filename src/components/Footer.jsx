import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer = () => {
	return (
		<footer className="mt-auto bg-slate-200 py-8 px-2 dark:text-slate-300 dark:bg-slate-800 transition-colors duration-1000">
			<div className="max-w-screen-2xl mx-auto">
				<section className="flex items-center justify-between">
					<div>
						<p>
							Desarrollado por{' '}
							<a
								href="https://purihuaman.netlify.app/"
								target="_blank"
								className="semibold text-blue-500"
							>
								PEDRO PURIHUAMAN
							</a>{' '}
							© 2022
						</p>
					</div>

					<div className="flex items-center gap-3">
						<a
							href="https://twitter.com/puriihuaman"
							target="_blank"
							rel="nofollow noopener noreferrer"
							className="animate-floats"
						>
							<TwitterIcon />
						</a>

						<a
							href="https://www.linkedin.com/in/pedropurihuaman/"
							target="_blank"
							rel="nofollow noopener noreferrer"
							className="animate-floats animate-pause"
						>
							<LinkedinIcon />
						</a>

						<a
							href="https://github.com/purihuaman"
							target="_blank"
							rel="nofollow noopener noreferrer"
							className="animate-floats"
						>
							<GithubIcon className="fill-slate-700 dark:fill-slate-300" />
						</a>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
