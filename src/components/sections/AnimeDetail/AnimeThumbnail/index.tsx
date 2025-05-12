import { CardMedia, Skeleton } from "@mui/material";

interface AnimeThumbnailProps {
  image?: string;
  title?: string;
  loading: boolean;
}

const AnimeThumbnail: React.FC<AnimeThumbnailProps> = ({ image, title, loading }) => {
  return !loading && image ? (
    <CardMedia
      component="img"
      image={image}
      alt={title}
      sx={{ width: 300, height: "auto", borderRadius: 1 }}
    />
  ) : (
    <Skeleton width={300} height={300} sx={{ backgroundColor: "#b5b5b5" }} />
  );
};

export default AnimeThumbnail;
