import { useState } from 'react';
import { ImgPreview, ImgClose, ImgSelect } from '../styles/Diary.style';

export default function ImgUpload({ imgUrls, setImgUrls }) {
	const selectImg = (e) => {
		const files = e.target.files;
		if (files.length === 0) return;

		const newUrls = Array.from(files).map((file) => URL.createObjectURL(file));
		setImgUrls((prevUrls) => [...prevUrls, ...newUrls]);
	};

	const ImgRemove = (index) => {
		const imgRevoke = imgUrls[index];
		URL.revokeObjectURL(imgRevoke);
		const newUrls = imgUrls.filter((_, i) => i !== index);
		setImgUrls(newUrls);
	};

	return (
		<div className='flex justify-between items-end gap-4'>
			<ImgPreview>
				{imgUrls.map((url, index) => (
					<div key={index}>
						<img src={url} alt={`Selected ${index}`} />
						<ImgClose onClick={() => ImgRemove(index)} />
					</div>
				))}
			</ImgPreview>
			<ImgSelect>
				<input
					type='file'
					accept='image/*'
					name='file'
					multiple
					onChange={selectImg}
				/>
			</ImgSelect>
		</div>
	);
}
