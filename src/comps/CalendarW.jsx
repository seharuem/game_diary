import { useState, useEffect } from 'react';
import { MonthBtn, WeekWrap, DateWrap, TodayWrap } from '../styles/Diary.style';

const week = ['일', '월', '화', '수', '목', '금', '토'];

function WeekDay({ week, date, isToday, isSelected, onClick }) {
	return (
		<DateWrap
			className={`${isToday ? 'today' : ''} 
      ${isSelected ? 'select' : ''}`}
			onClick={onClick}
		>
			<span>{week}</span>
			<span>{date}</span>
		</DateWrap>
	);
}

export default function CalendarW({ isNew, setDate }) {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();

	const todayDate = today.getDate();
	const todayDay = today.getDay();

	const startDateValue = todayDate - todayDay;

	const weekDates = Array.from({ length: 7 }, (_, i) => {
		const date = new Date(year, month, startDateValue + i);
		return {
			ymd: date,
			week: week[i],
			date: date.getDate(),
			month: date.getMonth(),
			year: date.getFullYear()
		};
	});

	// 오늘이 무슨 요일인지 바로 findIndex로 찾기
	const [select, setSelect] = useState(
		weekDates.findIndex(
			(d) => d.date === todayDate && d.month === month && d.year === year
		)
	);

	useEffect(() => {
		const year = weekDates[select].year;
		const month = String(weekDates[select].month + 1).padStart(2, '0');
		const date = String(weekDates[select].date).padStart(2, '0');

		const fullDate = `${year}-${month}-${date}`;
		setDate(fullDate);
	}, [select, setDate, weekDates]);

	return (
		<>
			<MonthBtn>{month + 1}월</MonthBtn>

			<WeekWrap>
				{weekDates.map((d, idx) => (
					<WeekDay
						key={idx}
						week={d.week}
						date={d.date}
						isToday={
							d.date === todayDate && d.month === month && d.year === year
						}
						isSelected={select === idx}
						onClick={() => setSelect(idx)}
					/>
				))}
			</WeekWrap>

			{!isNew && (
				<TodayWrap>
					{weekDates[select].ymd.toLocaleDateString('ko-KR', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
						weekday: 'long'
					})}{' '}
				</TodayWrap>
			)}
		</>
	);
}
