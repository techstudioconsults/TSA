import { TsaMarquee } from ".";
import { Meta, StoryFn } from "@storybook/react";
import Image from "next/image";

import { IMG_PATH } from "~/constants";
import { TsaMarqueeProperties } from "~/types/index.types";

// Adjust the Meta type to handle the complex types of Accordion components
const meta: Meta<typeof TsaMarquee> = {
  title: "Molecules/tsa-marquee",
  component: TsaMarquee,
};
export default meta;

const Template: StoryFn<typeof TsaMarquee> = (arguments_: TsaMarqueeProperties) => <TsaMarquee {...arguments_} />;

const logoList = IMG_PATH?.map((image, index) => {
  return <Image width={100} height={100} src={image} alt="logo" key={index} />;
});

export const Default = Template.bind({});
Default.args = {
  children: logoList,
};
