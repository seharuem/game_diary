import { gameStore } from '../store/gameStore';
import { Head, Title, Btn } from '../styles/Comp.style';

export default function Header({ title }) {
	const { open } = gameStore();
	const btn = [{ img: 'game', onClick: open }, { img: 'cog' }];

	return (
		<Head>
			<Title>{title}</Title>
			<div className='flex gap-2 absolute right-6'>
				{btn.map((i) => (
					<Btn key={i.img} $img={i.img} onClick={i.onClick} />
				))}
			</div>
		</Head>
	);
}
