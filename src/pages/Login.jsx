import { useNavigate } from 'react-router-dom';
import Logo from '../assets/img/logo.svg?react';
import { Box, Label, Btn } from '../styles/Login.style.js';

const Form = [
	{ label: 'ID', type: 'text', text: '아이디를 입력하세요.' },
	{ label: 'PW', type: 'password', text: '비밀번호를 입력하세요.' },
	{ label: '자동 로그인', type: 'checkbox', text: '' }
];

export default function Login() {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate('/diary');
	};

	return (
		<div className='flex flex-col items-center gap-20'>
			<Logo />
			<Box>
				<form className='flex flex-col gap-10'>
					<div className='flex flex-col gap-6 items-center'>
						{Form.map((label) => (
							<Label key={label}>
								{label.label}
								<input type={label.type} placeholder={label.text} />
							</Label>
						))}
					</div>

					<div className='flex flex-col gap-6'>
						<Btn disabled>로그인</Btn>
						<Btn onClick={handleLogin}>게스트 로그인</Btn>
						<Btn>회원 가입</Btn>
					</div>
				</form>
			</Box>
		</div>
	);
}
