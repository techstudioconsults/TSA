import TsaButton from ".";
import { Meta, StoryFn } from "@storybook/react";
import { Orbit } from "lucide-react";

import { TsaButtonProperties } from "../../../../types/index.types";

const meta: Meta<typeof TsaButton> = {
  title: "Atoms/tsa-button",
  component: TsaButton,

  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};
export default meta;

const Template: StoryFn<typeof TsaButton> = (arguments_: TsaButtonProperties) => <TsaButton {...arguments_} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Subscribe",
  variant: "primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: "Subscribe",
  variant: "secondary",
};
export const Accent = Template.bind({});
Accent.args = {
  children: "Subscribe",
  variant: "primary",
};
export const destructive = Template.bind({});
destructive.args = {
  children: "Subscribe",
  variant: "destructive",
};

export const outline = Template.bind({});
outline.args = {
  children: "Subscribe",
  variant: "outline",
};
export const loading = Template.bind({});
loading.args = {
  children: "Subscribe",
  variant: "primary",
  isLoading: true,
};
export const disabled = Template.bind({});
disabled.args = {
  children: "Subscribe",
  variant: "primary",
  isDisabled: true,
};
export const withLeftIcon = Template.bind({});
withLeftIcon.args = {
  children: "Subscribe",
  variant: "primary",
  isLeftIconVisible: true,
  icon: <Orbit />,
};
export const withRightIcon = Template.bind({});
withRightIcon.args = {
  children: "Subscribe",
  variant: "primary",
  isRightIconVisible: true,
  icon: <Orbit />,
};
export const iconOnly = Template.bind({});
iconOnly.args = {
  children: "Subscribe",
  variant: "primary",
  isIconOnly: true,
  icon: <Orbit />,
  size: "sm",
};
