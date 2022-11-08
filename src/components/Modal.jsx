import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ closeModal, children }) => {
	useEffect(() => {
		document.body.classList.add('overflow-y-hidden');

		return () => document.body.classList.remove('overflow-y-hidden');
	}, []);

	return createPortal(
		<div
			className="fixed inset-0 flex justify-center items-center bg-slate-1000 transition-transform duration-1000"
			onClick={closeModal}
		>
			<div className="relative max-w-2xl bg-slate-700 rounded pointer-events-none">
				<button
					onClick={closeModal}
					className={`absolute top-0 right-0 w-8 h-8 bg-blue-500 rounded-full active:scale-50 inline-flex items-center justify-center fill-slate-300 cursor-pointer pointer-events-auto`}
					style={{
						transform: 'translateY(-32px)',
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
					</svg>
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('modal-preview')
	);
};

export default Modal;
