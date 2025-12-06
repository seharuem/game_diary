import { useState } from 'react';
import { MyGameList, MyGameEdit } from '../comps';
import { ModalBg, ModalBox, ModalClose } from '../styles/Modal.style';
import { gameStore } from '../store/gameStore';

export default function MyGame({ games, setGames }) {
	const [mode, setMode] = useState('view'); // 'view', 'add', 'edit'
	const [editIndex, setEditIndex] = useState(null);
	const [gameData, setGameData] = useState({ name: '', color: 3 });
	const { isChoice, close } = gameStore();

	const cancel = () => {
		setMode('view');
		setEditIndex(null);
		setGameData({ name: '', color: 3 });
	};

	const saveGame = () => {
		if (gameData.name.trim() === '') return;

		if (mode === 'add') {
			setGames((prev) => [...prev, gameData]);
		} else if (mode === 'edit' && editIndex !== null) {
			const updatedGames = [...games];
			updatedGames[editIndex] = gameData;
			setGames(updatedGames);
		}
		cancel();
	};

	const DeleteGame = () => {
		if (editIndex === null) return;
		setGames((prev) => prev.filter((_, i) => i !== editIndex));
		cancel();
	};

	const viewProps = {
		games,
		setGameData,
		setEditIndex,
		setMode
	};

	const editProps = {
		mode,
		gameData,
		setGameData,
		saveGame,
		cancel,
		DeleteGame
	};

	if (!isChoice) return;

	return (
		<ModalBg>
			<ModalBox>
				{mode === 'view' && <MyGameList {...viewProps} />}

				{(mode === 'add' || mode === 'edit') && <MyGameEdit {...editProps} />}
			</ModalBox>
			<ModalClose onClick={close}>취소</ModalClose>
		</ModalBg>
	);
}
