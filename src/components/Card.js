import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Card(props) {
	const imgRef = useRef(null);
	useIntersectionObserver(imgRef);

	return (
		<div className="Card text-center">
			<img data-src={props.image} ref={imgRef} />
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
