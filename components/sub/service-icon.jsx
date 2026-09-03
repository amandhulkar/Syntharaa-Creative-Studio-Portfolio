import {
  HiOutlineCursorArrowRays,
  HiOutlineLightBulb,
  HiOutlinePaintBrush,
  HiOutlinePlayCircle,
  HiOutlineSquaresPlus,
  HiOutlineWindow,
} from "react-icons/hi2";

const icons = {
  cursor: HiOutlineCursorArrowRays,
  sparkles: HiOutlineSquaresPlus,
  layout: HiOutlineWindow,
  pencil: HiOutlinePaintBrush,
  play: HiOutlinePlayCircle,
  compass: HiOutlineLightBulb,
};

export const ServiceIcon = ({ name, className }) => {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className={className} />;
};
