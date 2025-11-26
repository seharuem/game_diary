import { useState } from 'react';
import { CalendarW, Header, NewDiary, DiaryC, TabBar, MyGame } from '../comps';
import { Wrap } from '../styles/Comp.style';
import { DiaryWrap, NewBtn } from '../styles/Diary.style';

export default function Diary() {
	const [isNew, setIsNew] = useState(false);
	const [date, setDate] = useState();
	const [isChoice, setIsChoice] = useState(false);
	const [games, setGames] = useState([]);
	const [choiceIndex, setChoiceIndex] = useState(null);
	const [diaries, setDiaries] = useState([]);

	const diaryProps = {
		date,
		setDate,
		setIsChoice,
		setIsNew,
		games,
		choiceIndex,
		setDiaries
	};

	const gameProps = {
		setIsChoice,
		games,
		setGames,
		setChoiceIndex
	};

	return (
		<Wrap>
			<Header title='일기장' />

			{!isNew ? (
				<>
					<CalendarW isNew={isNew} setDate={setDate} />

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
							setIsNew(true);
							setChoiceIndex(null);
						}}
					>
						새 일기 작성
					</NewBtn>
				</>
			) : (
				<NewDiary {...diaryProps} />
			)}

			<TabBar page='diary' />

			{isChoice && <MyGame {...gameProps} />}
		</Wrap>
	);
}
