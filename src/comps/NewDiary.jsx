import { useState } from 'react';
import ImgUpload from '../comps/ImgUpload';
import {
	DiaryList,
	GameSelectBtn,
	Cancel,
	BorderBtn,
	ChoiceGame
} from '../styles/Diary.style';

export default function NewDiary({
	date,
	setDate,
	setIsChoice,
	setIsNew,
	games,
	choiceIndex,
	setDiaries
}) {
	const [formData, setFormData] = useState();
	const [imgUrls, setImgUrls] = useState([]);

	const color = games[choiceIndex] ? games[choiceIndex].color : null;
	const num = color ? color.toString().padStart(2, '0') : null;

	const formInput = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const saveDiary = () => {
		if (choiceIndex === null) return;
		if (formData.text.trim() === '') return;

		const now = new Date(date);
		const time = now.toLocaleTimeString('ko-KR', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		});

		const newDiary = {
			...formData,
			id: now.toDateString(),
			time: time,
			game: choiceIndex,
			img: imgUrls.length > 0 ? imgUrls : null
		};
		setDiaries((prev) => [...prev, newDiary]);
		setIsNew(false);
		setFormData(null);
	};

	return (
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
				게임
				<div className='flex items-center gap-4'>
					{games[choiceIndex] && (
						<ChoiceGame $num={num}>{games[choiceIndex].name}</ChoiceGame>
					)}
					<GameSelectBtn
						onClick={() => {
							setIsChoice(true);
						}}
					>
						선택
					</GameSelectBtn>
				</div>
			</div>
			<label className='list'>
				제목
				<input
					name='title'
					className='field'
					type='text'
					placeholder='입력해주세요.'
					onChange={formInput}
				/>
			</label>
			<div className='field flex flex-col gap-4 p-4'>
				<textarea
					name='text'
					placeholder='내용을 입력해주세요.'
					onChange={formInput}
				></textarea>
				<ImgUpload imgUrls={imgUrls} setImgUrls={setImgUrls} />
			</div>

			<div className='flex justify-between'>
				<Cancel onClick={() => setIsNew(false)}>취소</Cancel>
				<BorderBtn onClick={saveDiary}>작성 완료</BorderBtn>
			</div>
		</DiaryList>
	);
}
