import styled from 'styled-components';

const baseUrl = import.meta.env.BASE_URL;

export const MonthBtn = styled.button.attrs({
	type: 'button',
	className: 'ml-6 w-max flex items-center justify-center gap-2 text-xl'
})`
	&::before {
		content: '';
		width: 1.2rem;
		aspect-ratio: 1;
		background: url(${baseUrl}calendar.svg) center / contain no-repeat;
	}
	&:hover {
		opacity: 0.8;
	}
`;

export const WeekWrap = styled.div.attrs({
	className: 'flex items-center justify-between py-2 px-6'
})`
	border-bottom: 2px solid var(--pink);
`;

export const DateWrap = styled.button.attrs({
	type: 'button',
	className: 'flex flex-col items-center gap-1 rounded-full w-12 py-4'
})`
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
	&:is(:first-child, :last-child) {
		color: var(--pink);
	}
	&:is(:first-child, :last-child).select:not(.today) {
		color: var(--pink);
		background-color: var(--pink30);
	}
	& span:last-child {
		font-size: 1.2rem;
	}
	&.today {
		color: var(--main);
	}
	&.select {
		background-color: var(--main30);
	}
`;

export const TodayWrap = styled.div.attrs({
	className: 'text-xl text-(--mainFt) text-left py-4 px-6'
})``;

export const BorderBtn = styled.button.attrs({
	type: 'button',
	className: 'rounded-lg py-2 px-4 border-solid border-2'
})`
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

export const NewBtn = styled(BorderBtn).attrs({
	className:
		'mt-8 self-center flex items-center gap-2'
})`
	&::after {
		content: '';
		width: 0.8rem;
		aspect-ratio: 1;
		background: url(${baseUrl}Plus.svg) center / contain no-repeat;
	}
`;

export const DiaryList = styled.form.attrs({
	className: 'p-6 pt-0 flex flex-col gap-4 w-full flex-1'
})`
	.list {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
	input[type='text'] {
		padding: 0.4rem 1rem;
	}
	input[type='date'] {
		font-size: 1.2rem;
		color: white;
	}
	.field {
		flex: 1;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		position: relative;
	}
	textarea {
		width: 100%;
		flex: 1;
		resize: none;
		border-radius: inherit;
		padding-inline: 0.4rem;
	}
`;

export const GameSelectBtn = styled.button.attrs({
	type: 'button',
	className: 'rounded-full px-3 bg-(--main30)'
})`
	border: 2px solid var(--main);
	&:hover {
		background-color: var(--main50);
	}
`;

export const ImgPreview = styled.div.attrs({
	className: 'h-[5.4rem] flex gap-4 flex-1 overflow-auto pt-2'
})`
	scrollbar-gutter: stable;
	&::-webkit-scrollbar {
		height: 0.4rem;
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 0.2rem;
	}
	div {
		position: relative;
		height: 4rem;
		aspect-ratio: 4 / 3;
	}
	img {
		height: 100%;
		object-fit: cover;
		border-radius: 12px;
	}
`;

export const ImgClose = styled.button.attrs({
	type: 'button'
})`
	position: absolute;
	top: -0.4rem;
	right: -0.4rem;
	width: 1.2rem;
	aspect-ratio: 1;
	background: url(${baseUrl}close.svg) center / 13px no-repeat;
	border-radius: 50%;
	background-color: white;
	&:hover {
		opacity: 0.8;
	}
`;

export const ImgSelect = styled.label.attrs({
	className: 'size-6 cursor-pointer'
})`
	background: url(${baseUrl}image.svg) center / contain no-repeat;
	&:hover {
		opacity: 0.8;
	}
	input {
		display: none;
	}
`;

export const Cancel = styled.button.attrs({
	type: 'button',
	className: 'py-2'
})`
	&:hover {
		opacity: 0.8;
	}
`;

export const Submit = styled(Cancel).attrs({
	className: 'border-2 border-solid rounded-lg px-4'
})``;
