import React from 'react';

const VideoDetail = ({videos}) => {
	if( !videos ){
		return <div> Loading .. </div>;
	}
	const vId = videos.id.videoId;
	const url = `https://www.youtube.com/embed/${vId}`;
	return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url} ></iframe>
				</div> 
				<div className="details">
					<div>{videos.snippet.title}</div>
					<div>{videos.snippet.description}</div>
				</div>
			</div>

		);
};


export default VideoDetail;