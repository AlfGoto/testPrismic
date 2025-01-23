import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GrosSlice`.
 */
export type GrosSliceProps = SliceComponentProps<Content.GrosSliceSlice>;

/**
 * Component for "GrosSlice" Slices.
 */
const GrosSlice = ({ slice }: GrosSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for gros_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default GrosSlice;
