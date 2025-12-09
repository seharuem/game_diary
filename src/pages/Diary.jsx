import { useState } from 'react';
import { CalendarW, Header, NewDiary, DiaryC, TabBar, MyGame } from '../comps';
import { Wrap } from '../styles/Comp.style';
import { DiaryWrap, NewBtn } from '../styles/Diary.style';
import { diaryStore } from '../store/diaryStore';
import { gameStore } from '../store/gameStore';

export default function Diary() {
	const { isNew, write, diaries, clearUrl } = diaryStore();
	const { setChoiceI } = gameStore();

	const [date, setDate] = useState();

	const diaryProps = { date, setDate };

	return (
		<Wrap>
			<Header title='일기장' />

			{!isNew ? (
				<>
					<CalendarW setDate={setDate} />

					{diaries.length !== 0 && (
						<DiaryWrap>
							{diaries.map((diary) => {
								const dateObj = new Date(date).toDateString();

								return diary.date === dateObj ? (
									<DiaryC
										key={diary.id}
										time={diary.time}
										diary={diary}
									/>
								) : null;
							})}
						</DiaryWrap>
					)}
					<NewBtn
						onClick={() => {
							write();
							setChoiceI(null);
							clearUrl();
						}}
					>
						새 일기 작성
					</NewBtn>
				</>
			) : (
				<NewDiary {...diaryProps} />
			)}
			<MyGame />

			<TabBar page='diary' />
		</Wrap>
	);
}
