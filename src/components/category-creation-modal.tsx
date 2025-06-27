import { Modal } from 'react-responsive-modal';
import { FC } from 'react';
import 'react-responsive-modal/styles.css';

interface Props {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export const CategoryCreationModal: FC<Props> = ({ onOpenChange, open }) => {
	return (
		<Modal
			center
			classNames={{
				modal:
					'w-[300px] !bg-white/18 backdrop-blur-[30px] rounded-[16px] !shadow-none border border-white/30',
				overlay: '!bg-black/75',
			}}
			onClose={() => onOpenChange(false)}
			open={open}
			showCloseIcon={false}
		>
			<form
				className='text-white'
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<div className='text-center text-[20px] mb-[30px]'>Add Category</div>
				<input
					id='name'
					type='text'
					className='w-full h-11 rounded-[50px] py-[14px] px-4 placeholder-inherit bg-[rgba(242,242,242,0.1)] border-white/20 border mb-5'
					placeholder='Name'
				/>
				<button
					type='submit'
					className='w-[250px] h-11 grid place-items-center bg-[rgba(240,51,40,1)] rounded-[30px]'
				>
					Save
				</button>
			</form>
		</Modal>
	);
};
