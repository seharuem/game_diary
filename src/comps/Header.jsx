import { gameStore } from '../store/gameStore';
import { Head, Title, Btn } from '../styles/Comp.style';

export default function Header({ title }) {
	const btn = ['game', 'cog'];
	const { open } = gameStore();

	return (
		<Head>
			<Title>{title}</Title>
			<div className='flex gap-2 absolute right-6'>
				{btn.map((i) => (
					<Btn key={i} $img={i} onClick={open} />
				))}
			</div>
		</Head>
	);
}
