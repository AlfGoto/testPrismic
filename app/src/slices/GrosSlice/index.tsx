import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `GrosSlice`.
 */
export type GrosSliceProps = SliceComponentProps<Content.GrosSliceSlice>;

/**
 * Component for "GrosSlice" Slices.
 */
export default function GrosSlice({ slice }: GrosSliceProps): JSX.Element {
  return (
    <section className="px-6 py-12 text-gray-800 bg-gray-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <PrismicRichText
            field={slice.primary.TexteTresRiche}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-4xl font-bold">{children}</h1>
              ),
              paragraph: ({ children }) => (
                <p className="mt-4 text-lg text-gray-600">{children}</p>
              ),
            }}
          />
          <PrismicNextImage field={slice.primary.image} />
        </div>
      </div>
    </section>
  );
}
