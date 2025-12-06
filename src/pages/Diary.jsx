import { useState } from 'react';
import { CalendarW, Header, NewDiary, DiaryC, TabBar, MyGame } from '../comps';
import { Wrap } from '../styles/Comp.style';
import { DiaryWrap, NewBtn } from '../styles/Diary.style';
import { diaryStore } from '../store/newStore';
import { gameStore } from '../store/gameStore';

export default function Diary() {
	const [date, setDate] = useState();
	const [games, setGames] = useState([]);
	const [diaries, setDiaries] = useState([]);

	const { isNew, write } = diaryStore();
	const { setChoiceI } = gameStore();

	const diaryProps = {
		date,
		setDate,
		games,
		setDiaries
	};

	const gameProps = { games, setGames };

	return (
		<Wrap>
			<Header title='일기장' />

			{!isNew ? (
				<>
					<CalendarW setDate={setDate} />

					{diaries.length !== 0 && (
						<DiaryWrap>
							{diaries.map((diary, index) => {
								const dateObj = new Date(date).toDateString();

								return diary.id === dateObj ? (
									<DiaryC
										key={diary.id}
										time={diary.time}
										index={index}
										diary={diary}
										games={games}
									/>
								) : null;
							})}
						</DiaryWrap>
					)}
					<NewBtn
						onClick={() => {
							write();
							setChoiceI(null);
						}}
					>
						새 일기 작성
					</NewBtn>
				</>
			) : (
				<NewDiary {...diaryProps} />
			)}
			<MyGame {...gameProps} />

			<TabBar page='diary' />
		</Wrap>
	);
}
