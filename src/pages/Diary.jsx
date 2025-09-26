import { useState } from 'react';
import Header from '../comps/Header';
import TabBar from '../comps/TabBar';
import CalendarW from '../comps/CalendarW';
import ImgUpload from '../comps/ImgUpload';
import GameSelect from '../comps/GameSelect';
import { Wrap } from '../styles/Comp.style';
import {
	NewBtn,
	DiaryList,
	GameSelectBtn,
	Cancel,
	BorderBtn
} from '../styles/Diary.style';

export default function Diary() {
	const [newDiary, setNewDiary] = useState(false);
	const [date, setDate] = useState();
	const [selectGame, setSelectGame] = useState(false);

	return (
		<Wrap>
			<Header title='일기장' />

			{!newDiary ? (
				<>
					<CalendarW isDiary={newDiary} setDate={setDate} />
					<NewBtn
						onClick={() => {
							setNewDiary(true);
						}}
					>
						새 일기 작성
					</NewBtn>
				</>
			) : (
				<DiaryList>
					<label className='list'>
						날짜
						<input
							type='date'
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</label>
					<div className='list'>
						게임{' '}
						<GameSelectBtn
							onClick={() => {
								setSelectGame(true);
							}}
						>
							선택
						</GameSelectBtn>
					</div>
					<label className='list'>
						제목
						<input className='field' type='text' placeholder='입력해주세요.' />
					</label>
					<div className='field flex flex-col gap-4 p-4'>
						<textarea placeholder='내용을 입력해주세요.'></textarea>
						<ImgUpload />
					</div>

					<div className='flex justify-between'>
						<Cancel onClick={() => setNewDiary(false)}>취소</Cancel>
						<BorderBtn>작성 완료</BorderBtn>
					</div>
				</DiaryList>
			)}

			<TabBar page='diary' />

			{selectGame && <GameSelect setSelectGame={setSelectGame} />}
		</Wrap>
	);
}
