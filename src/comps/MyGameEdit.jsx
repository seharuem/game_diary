import { gameStore } from '../store/gameStore';
import { Undo, Delete, GameInput, Button } from '../styles/Modal.style';
import ColorPalette from './ColorPalette';

export default function MyGameEdit() {
	const {
		mode,
		gameData,
		updateData,
		editIdx,
		cancel,
		addGame,
		editGame,
		deleteGame
	} = gameStore();

	const nameInput = (e) => {
		const { name, value } = e.target;
		updateData(name, value);
	};

	const saveGame = () => {
		if (gameData.name.trim() === '') return;

		if (mode === 'add') {
			addGame(gameData);
		} else if (mode === 'edit' && editIdx !== null) {
			editGame(gameData);
		}
		cancel();
	};

	const DeleteGame = () => {
		if (editIdx === null) return;
		deleteGame();
		cancel();
	};

	return (
		<>
			<div className='flex justify-between'>
				<Undo onClick={cancel}>뒤로</Undo>
				{mode === 'edit' && <Delete onClick={DeleteGame}>삭제</Delete>}
			</div>
			<GameInput>
				<input
					type='text'
					name='name'
					placeholder='MyGame'
					value={gameData.name}
					onChange={nameInput}
				/>
			</GameInput>
			<ColorPalette
				check={gameData.color}
				setCheck={(color) => updateData('color', color)}
			/>

			<Button onClick={saveGame}>완료</Button>
		</>
	);
}
