import { Undo, Delete, GameInput, Button } from '../styles/Modal.style';
import ColorPalette from './ColorPalette';

export default function MyGameEdit({
	mode,
	gameData,
	setGameData,
	saveGame,
	cancel,
	DeleteGame
}) {
	const nameInput = (e) => {
		const { name, value } = e.target;
		setGameData((prev) => ({ ...prev, [name]: value }));
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
				setCheck={(color) => setGameData((prev) => ({ ...prev, color }))}
			/>

			<Button onClick={saveGame}>완료</Button>
		</>
	);
}
