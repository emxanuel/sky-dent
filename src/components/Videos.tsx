import video1 from '../assets/video 1.mp4'
import video2 from '../assets/video 2.mp4'
import video3 from '../assets/video 3.mp4'
import video4 from '../assets/video 4.mp4'

const videos = [
    {
        id: 1,
        path: video1
    },
    {
        id: 2,
        path: video2
    },
    {
        id: 3,
        path: video3
    },
    {
        id: 4,
        path: video4
    }
]

const Videos = () => {
    return (
        <div className='grid grid-cols-4'>
            {videos.map((v) => (
                <video className='' controls key={v.id} src={v.path}></video>
            ))}
        </div>
    )
}

export default Videos