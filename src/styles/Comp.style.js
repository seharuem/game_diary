import styled, { css, keyframes } from 'styled-components';

const baseUrl = import.meta.env.BASE_URL;

export const Wrap = styled.div.attrs({
	className: 'flex flex-col h-screen relative'
})``;

export const Head = styled.header.attrs({
	className: 'flex items-center justify-center py-6 relative'
})``;

export const Title = styled.h1.attrs({
	className: 'text-2xl pointer-events-none'
})``;

const rotate = keyframes`
	0% { rotate: 30deg }
	100% { rotate: -30deg }
`;

export const Btn = styled.button.attrs({
	className: 'w-8 h-6'
})`
	background: center / contain no-repeat;
	background-image: url(/${(props) => props.$img}.svg);
	transition: rotate 0.4s ease-out;

	&:hover {
		animation: ${rotate} 0.4s linear alternate infinite;
	}
`;

export const Bar = styled.nav.attrs({
	className: 'mt-auto z-1'
})`
	border-top: 1px solid white;
`;

const menuImg = (icon) => css`
	&.on::before {
		background-image: url(${baseUrl}${icon}.svg);
	}
	&::before {
		background-image: url(${baseUrl}${icon}_off.svg);
	}
`;

export const Menu = styled.button.attrs({
	type: 'button',
	className:
		'w-full h-22 text-white text-lg flex flex-col items-center justify-center gap-1 opacity-50'
})`
	&.on {
		opacity: 1;
	}
	&:hover:not(.on) {
		opacity: 0.8;
	}
	&::before {
		content: '';
		aspect-ratio: 1;
		width: 1.8rem;
		background: center / contain no-repeat;
	}
	&.diary {
		${menuImg('diary')};
	}
	&.quest {
		${menuImg('quest')};
	}
	&.schedule {
		${menuImg('schedule')};
	}
`;
