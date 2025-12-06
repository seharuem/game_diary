import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { Wrap } from '../styles/Comp.style';
import Heart from '/src/assets/img/heart.svg?react';

const MotionSvg = motion.create(Heart, { forwardMotionProps: true });

const Text = styled.div.attrs({
	className: 'text-6xl tracking-widest text-(--main) relative'
})``;

const fade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Over = styled.div`
	opacity: 0;
	animation: ${fade} 0.3s ease-out 1s forwards;
	&::after {
		content: '';
		position: absolute;
		background: var(--mainD);
	}
	&.top::after {
		inset: 0 20% 40% 50%;
	}
	&.bottom::after {
		inset: 0 70% 40% 0;
	}
`;

const Div = styled.div.attrs({
	className: 'absolute top-0'
})`
	&.top {
		clip-path: inset(0 80% 0 0);
	}
	&.bottom {
		clip-path: inset(0 20% 0 40%);
	}
`;

export default function Loading() {
	const MotionLogo = ({ position, initial, className }) => (
		<Text>
			<Over className={position}>{initial}</Over>
			<Div className={position}>{initial}</Div>
			<MotionSvg
				key='heart'
				className={`heart absolute -top-1 ${className}`}
				initial={{ y: -200 }}
				animate={{ y: 0 }}
				transition={{
					default: { duration: 0.7, ease: 'easeOut' }
				}}
				exit={{ opacity: 0 }}
			/>
		</Text>
	);

	return (
		<Wrap className='justify-center items-center fade z-10'>
			<MotionLogo position='top' initial='게임' className='right-7' />
			<MotionLogo
				position='bottom'
				initial='일기'
				className='left-1.5 -scale-100'
			/>
		</Wrap>
	);
}
