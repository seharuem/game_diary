import { Bg, ChoiceGame, Time, Title, Img, Text } from '../styles/Diary.style';

export default function DiaryC({ index, time, diary, games }) {
	const color = games[diary.game].color;
	const num = color.toString().padStart(2, '0');

	return (
		<Bg>
			<Time>{time}</Time>
			<ChoiceGame $num={num}>{games[diary.game].name}</ChoiceGame>
			<Title>#{index + 1} {diary.title}</Title>

			{diary.img && (
				<Img>
					{diary.img.map((url, index) => (
						<img key={index} src={url} />
					))}
				</Img>
			)}

			<Text>{diary.text}</Text>
		</Bg>
	);
}
