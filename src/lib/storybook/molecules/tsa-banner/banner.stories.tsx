import { TsaBanner } from ".";
import { Meta, StoryFn } from "@storybook/react";

import { TsaBannerProperties } from "~/types/index.types";

// Adjust the Meta type to handle the complex types of Accordion components
const meta: Meta<typeof TsaBanner> = {
  title: "Molecules/tsa-banner",
  component: TsaBanner,
};
export default meta;

const Template: StoryFn<typeof TsaBanner> = (arguments_: TsaBannerProperties) => <TsaBanner {...arguments_} />;

export const Default = Template.bind({});
Default.args = {};
