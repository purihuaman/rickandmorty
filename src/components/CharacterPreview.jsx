import { API_POSTER } from '../constants/api';

const CharacterPreview = ({
	name,
	avatar,
	status,
	gender,
	location,
	origin,
	species,
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
			className={`${bgCard} p-2 text-slate-300 pointer-events-none rounded`}
		>
			<div className="flex flex-col gap-3">
				<div className="p-3">
					<img
						src={avatar || API_POSTER}
						alt={name ?? 'Unknown'}
						className="rounded"
					/>
				</div>

				<div className="">
					<h3 className="text-2xl text-center mb-3">{name}</h3>

					<div className="mb-2">
						<div className={`text-center rounded p-2 mb-2 ${statusClass}`}>
							<h4>{status}</h4>
						</div>

						<p>
							<span className="font-bold">Gender :</span> {gender}
						</p>
						<p>
							<span className="font-bold">Location :</span> {location}
						</p>
						<p>
							<span className="font-bold">Origin :</span> {origin}
						</p>
						<p>
							<span className="font-bold">Species :</span> {species}
						</p>
					</div>
				</div>
			</div>
		</article>
	);
};

export default CharacterPreview;
