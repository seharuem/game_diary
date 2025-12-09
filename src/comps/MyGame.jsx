import { MyGameList, MyGameEdit } from '../comps';
import { ModalBg, ModalBox, ModalClose } from '../styles/Modal.style';
import { gameStore } from '../store/gameStore';

export default function MyGame() {
	const { isChoice, close, mode } = gameStore();

	if (!isChoice) return;

	return (
		<ModalBg>
			<ModalBox>
				{mode === 'view' && <MyGameList />}

				{(mode === 'add' || mode === 'edit') && <MyGameEdit />}
			</ModalBox>
			<ModalClose onClick={close}>취소</ModalClose>
		</ModalBg>
	);
}
