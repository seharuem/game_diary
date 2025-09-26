import { useState } from 'react';
import { Palette, Color } from '../styles/Modal.style';

const number = Array.from({ length: 15 }, (_, i) => i + 1);

export default function ColorPalette({ check, setCheck }) {
	return (
		<Palette>
			{number.map((num) => {
				const padNum = num.toString().padStart(2, '0');
				const checked = num === check ? 'check' : '';

				return (
					<Color
						key={num}
						$num={padNum}
						className={checked}
						onClick={() => setCheck(num)}
					/>
				);
			})}
		</Palette>
	);
}
