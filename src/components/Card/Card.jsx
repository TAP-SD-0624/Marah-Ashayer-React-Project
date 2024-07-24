import './Card.css';
import Rating from '../Rating/Rating';

export default function Card({course}){
    const imageUrl = `${process.env.PUBLIC_URL}/images/${course.image}`;
    return(
        <a href="/details/details.html?id={encodeURIComponent(course.id)}" className="card-link">
        <div className="card">
            <img src={imageUrl} alt={course.topic} className="card-image"/>
            <div className="info">
                <p className="category" title={course.category}>{course.category}</p>
                <h3 className="title" title={course.topic}>{course.topic}</h3>
                <div className="stars">
                    <Rating rating={course.rating} />
                </div>
                <h6 className="author-card">Author: {course.name}</h6>
            </div>
        </div>
    </a>
    );
}