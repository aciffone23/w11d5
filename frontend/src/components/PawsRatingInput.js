import { useState, useEffect } from "react";

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating);

  // useEffect(() => {
  //   setActiveRating(rating);
  // }, [rating]);

  
  const pawsIcon = (number) => {
    const props = {};
    if (!disabled) {
      props.onMouseEnter = () => setActiveRating(number);
      props.onMouseLeave = () => setActiveRating(rating);
      props.onClick = () => onChange(number);
    }
    return (
      <div
        key={number}
        className={activeRating >= number ? "filled" : "empty"}
        {...props}
      >
        <i className="fa fa-paw"></i>
      </div>
    );
  };

  return (
    <div className="rating-input">
      {[1, 2, 3, 4, 5].map((number) => pawsIcon(number))}
    </div>
  );
};

export default PawsRatingInput;
