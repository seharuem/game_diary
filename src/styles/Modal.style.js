import styled, { css } from 'styled-components';

const baseUrl = import.meta.env.BASE_URL;

export const ModalBg = styled.div.attrs({
	className: 'fixed inset-0 flex items-center justify-center'
})`
	background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalClose = styled.button.attrs({
	type: 'button',
	className: 'absolute bottom-40'
})`
	&:hover {
		opacity: 0.8;
	}
`;

export const ModalBox = styled.div.attrs({
	className: 'bg-(--mainD) w-100 h-140 rounded-xl p-8 flex flex-col gap-5'
})`
	border: 2px solid var(--main);
`;

export const ModalTitle = styled.h3.attrs({
	className: 'text-xl rounded-xl py-1'
})`
	border: inherit;
`;

export const Button = styled.button.attrs({
	type: 'button',
	className: 'bg-(--main) text-black text-xl rounded-xl py-2 mt-auto'
})`
	&:hover {
		opacity: 0.8;
	}
`;

const Btn = styled.button.attrs({
	type: 'button',
	className: 'w-max flex gap-1 text-(--main) text-xl'
})`
	&:hover {
		opacity: 0.8;
	}
	&::before, &::after {
		content: '';
		aspect-ratio: 1;
		background: center / contain no-repeat;
`;

export const Undo = styled(Btn)`
	&::before {
		width: 1.5rem;
		background-image: url(${baseUrl}undo.svg);
	}
`;

export const Delete = styled(Btn)`
	&::after {
		width: 1.2rem;
		background-image: url(${baseUrl}Trash.svg);
	}
`;

export const GameInput = styled.label.attrs({
	className: 'flex gap-2 border-solid border-1 rounded-2xl px-4 py-2 mt-10'
})`
	input {
		width: 100%;
		font-size: 1.4rem;
	}
	&::after {
		content: '';
		width: 1.5rem;
		aspect-ratio: 1;
		background: url(${baseUrl}Pen.svg) center / contain no-repeat;
	}
`;

export const Palette = styled.div.attrs({
	className: 'grid grid-cols-5 gap-6 pt-4'
})``;

export const Color = styled.button.attrs({
	type: 'button',
	className: 'w-full aspect-square rounded-full border-3'
})`
	background: center / 60% no-repeat;
	&.check {
		background-image: url(${baseUrl}checkW.svg);
	}
	&:hover {
		opacity: 0.8;
	}

	${(props) => bgColor(props.$num)}
`;

export const bgColor = (num) => {
	const bg = `--pc${num}B`;
	const border = `--pc${num}`;

	return css`
		background-color: var(${bg});
		border-color: var(${border});
	`;
};

export const GameList = styled.ul.attrs({
	className: 'pt-5 flex flex-col gap-5 overflow-y-auto'
})`
	li {
		display: flex;
		justify-content: space-between;
		gap: 1.2rem;
		align-items: center;
	}
	.select {
		height: max-content;
		border: 2px solid var(--main);
		background-color: var(--main30);
		border-radius: 5px;
		padding: 0.2rem 0.4rem;
		flex-shrink: 0;
	}
	.select:hover {
		background-color: var(--main50);
	}
`;

export const GameItem = styled.button.attrs({
	type: 'button',
	className: 'flex gap-3 items-center px-3 rounded-full text-xl'
})`
	border: 2px solid;
	${(props) => bgColor(props.$num)}

	&.edit::after {
		content: '';
		width: 1rem;
		aspect-ratio: 1;
		background: url(${baseUrl}Pen.svg) center / contain no-repeat;
		flex-shrink: 0;
	}
	max-width: calc(100% - 5rem);
	span {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	&:hover {
		opacity: 0.8;
	}
`;
