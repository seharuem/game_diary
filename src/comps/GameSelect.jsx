import { useState } from 'react';
import {
	ModalBg,
	ModalBox,
	ModalTitle,
	ModalClose,
	Button,
	Undo,
	GameInput,
	GameList,
	GameItem
} from '../styles/Modal.style';
import ColorPalette from './ColorPalette';

export default function GameSelect({ setSelectGame }) {
	const [isGame, setIsGame] = useState(false);
	const [isAdd, setIsAdd] = useState(false);

	const [games, setGames] = useState([]);
	const [name, setName] = useState('');
	const [color, setColor] = useState(3);

	const nameInput = (e) => {
		setName(e.target.value);
	};

	const addClick = () => {
		initAdd();

		if (isAdd) {
			if (name.trim() === '') return;
			setGames((prev) => [...prev, { name, color }]);
			setIsGame(true);
		}
	};

	function initAdd() {
		setIsAdd(!isAdd);
		setName('');
		setColor(3);
	}

	return (
		<ModalBg>
			<ModalBox>
				{!isAdd ? (
					<>
						<ModalTitle>내 게임</ModalTitle>

						{isGame ? (
							<GameList>
								{games.map((game, index) => {
									const num = game.color.toString().padStart(2, '0');

									return (
										<li key={index}>
											<GameItem $num={num} className='edit'>
												{game.name}
											</GameItem>
											<button type='button' className='select'>
												선택
											</button>
										</li>
									);
								})}
							</GameList>
						) : (
							<div className='text-xl text-left leading-8'>
								추가된 게임이 없습니다. <br /> 게임을 추가해주세요.
							</div>
						)}
					</>
				) : (
					<>
						<Undo onClick={initAdd}>뒤로</Undo>
						<GameInput>
							<input
								type='text'
								name='name'
								placeholder='Game1'
								value={name}
								onChange={nameInput}
							/>
						</GameInput>
						<ColorPalette check={color} setCheck={setColor} />
					</>
				)}

				<Button onClick={addClick}>{isAdd ? '완료' : '추가하기'}</Button>
			</ModalBox>
			<ModalClose onClick={() => setSelectGame(false)}>취소</ModalClose>
		</ModalBg>
	);
}
