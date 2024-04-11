import React from "react";
import Rating from "@mui/material/Rating";

const RatingComponent = ({ rating, onRatingChange }) => {
  return (
    <Rating
      name="item-rating"
      value={rating}
      onChange={(event, newValue) => {
        onRatingChange(newValue);
      }}
    />
  );
};

export default RatingComponent;