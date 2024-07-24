import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStar,MdOutlineStarHalf } from "react-icons/md";

export default function Rating({rating}){
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    const renderStars = (count, IconComponent) => {
        return Array(count)
            .fill(null)
            .map((_, index) => <IconComponent key={index} />);
    };
    return(
        <div className="stars">
            {renderStars(fullStars, MdOutlineStar)}
            {renderStars(halfStars, MdOutlineStarHalf)}
            {renderStars(emptyStars, IoMdStarOutline)}
        </div>
    );
}