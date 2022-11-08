import { memo } from 'react';
import { API_POSTER } from '../constants/api';

const CharacterCard = ({
	id,
	name,
	avatar,
	status,
	gender,
	location,
	origin,
	species,
	onClick,
}) => {
	const statusClass =
		status.toLowerCase() === 'alive'
			? 'bg-green-800'
			: status.toLowerCase() === 'dead'
			? 'bg-red-600'
			: 'bg-slate-600';

	const bgCard =
		status.toLowerCase() === 'alive'
			? 'clAlive'
			: status.toLowerCase() === 'dead'
			? 'clDead'
			: 'clUnknown';

	return (
		<article
			id={id}
			className={`shadow rounded-md p-4 max-w-sm w-full mx-auto flex ${bgCard} cursor-pointer`}
			onClick={onClick}
		>
			<div className="flex gap-3 items-center w-full">
				<div className="rounded-full bg-slate-700 h-20 w-20 overflow-hidden">
					<img src={avatar || API_POSTER} alt={name} className="object-cover" />
				</div>

				<div className="flex-1">
					<h3 className="mb-2">{name}</h3>
					<div>
						<p className="mb-2">Last Location</p>
						<span className={`${statusClass} py-1 px-2 rounded text-slate-300`}>
							{status}
						</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default memo(CharacterCard);
