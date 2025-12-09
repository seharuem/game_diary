import { gameStore } from '../store/gameStore';
import { Bg, ChoiceGame, Title, Img, Text } from '../styles/Diary.style';

export default function DiaryC({ diary }) {
	const { games } = gameStore();

	const color = games[diary.game].color;
	const num = color.toString().padStart(2, '0');

	return (
		<Bg>
			<ChoiceGame $num={num}>{games[diary.game].name}</ChoiceGame>
			<Title>
				{diary.title}
			</Title>

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
