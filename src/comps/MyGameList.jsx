import { gameStore } from '../store/gameStore';
import { diaryStore } from '../store/diaryStore';
import { ModalTitle, GameList, GameItem, Button } from '../styles/Modal.style';

export default function MyGameList() {
	const { close, setChoiceI, setMode, setEditIdx, setGameData, games } =
		gameStore();
	const { isNew } = diaryStore();

	const startAdd = () => {
		setGameData({ name: '', color: 3 });
		setEditIdx(null);
		setMode('add');
	};

	const startEdit = (index) => {
		const game = games[index];
		setGameData({ name: game.name, color: game.color });
		setEditIdx(index);
		setMode('edit');
	};

	return (
		<>
			<ModalTitle>내 게임</ModalTitle>

			{games.length > 0 ? (
				<GameList>
					{games.map((game, index) => {
						const num = game.color.toString().padStart(2, '0');
						return (
							<li key={index}>
								<GameItem
									$num={num}
									className='edit'
									onClick={() => startEdit(index)}
								>
									<span>{game.name}</span>
								</GameItem>
								{isNew && (
									<button
										type='button'
										className='select'
										onClick={() => {
											close();
											setChoiceI(index);
										}}
									>
										선택
									</button>
								)}
							</li>
						);
					})}
				</GameList>
			) : (
				<div className='text-xl text-left leading-8'>
					추가된 게임이 없습니다. <br /> 게임을 추가해주세요.
				</div>
			)}

			<Button onClick={startAdd}>추가하기</Button>
		</>
	);
}
