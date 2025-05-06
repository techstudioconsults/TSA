import { TsaFooter } from ".";
import { Meta, StoryFn } from "@storybook/react";

import { STATIC_NAV_LINK } from "~/constants";
import { TsaFooterProperties } from "../../../../types/index.types";

const meta: Meta<typeof TsaFooter> = {
  title: "Molecules/TsaFooter",
  component: TsaFooter,
};
export default meta;

const Template: StoryFn<TsaFooterProperties> = (arguments_) => <TsaFooter {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  navLinks: STATIC_NAV_LINK,
};
