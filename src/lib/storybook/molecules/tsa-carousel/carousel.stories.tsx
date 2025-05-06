import { TsaCarousel } from ".";
import { Meta, StoryFn } from "@storybook/react";

import { FACILITY_CONTENT, SLIDE_CONTENT } from "~/constants";
import { GALLARY_CONTENT } from "~/views/gallery";
import { TsaCarouselProperties } from "../../../../types/index.types";

const meta: Meta<typeof TsaCarousel> = {
  title: "Molecules/TsaCarousel",
  component: TsaCarousel,
};
export default meta;

const Template: StoryFn<typeof TsaCarousel> = (arguments_: TsaCarouselProperties) => (
  <TsaCarousel {...arguments_} showIndicator={false} courseContent={SLIDE_CONTENT} />
);

export const CourseCarousel = Template.bind({});
CourseCarousel.args = {
  variant: `course`,
};

export const GalleryCarousel = Template.bind({});
GalleryCarousel.args = {
  variant: `gallery`,
  galleryContent: GALLARY_CONTENT,
};

export const FacilityCarousel = Template.bind({});
FacilityCarousel.args = {
  variant: `facility`,
  facilityContent: FACILITY_CONTENT,
};
