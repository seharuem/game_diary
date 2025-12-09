import { diaryStore } from '../store/diaryStore';
import { ImgPreview, ImgClose, ImgSelect } from '../styles/Diary.style';

export default function ImgUpload() {
	const { imgUrls, selectImg, imgRemove } = diaryStore();

	return (
		<div className='flex justify-between items-end gap-4'>
			<ImgPreview>
				{imgUrls.map((url, index) => (
					<div key={index}>
						<img src={url} alt={`Selected ${index}`} />
						<ImgClose onClick={() => imgRemove(index)} />
					</div>
				))}
			</ImgPreview>
			<ImgSelect>
				<input
					type='file'
					accept='image/*'
					name='file'
					multiple
					onChange={(e) => selectImg(e.target.files)}
				/>
			</ImgSelect>
		</div>
	);
}
