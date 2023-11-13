import Rating from "../../components/ui/rating";

const RatingSection = (props: { rating: number; numReviews: number }) => {
  return (
    <div className="py-4">
      <Rating value={props.rating} text={`${props.numReviews} įvertinimų`} />
    </div>
  );
};

export default RatingSection;
