import { TsaNavbar } from ".";
import { Meta, StoryFn } from "@storybook/react";

import { STATIC_NAV_LINK } from "~/constants";
import { TsaNavbarProperties } from "../../../../types/index.types";

const meta: Meta<typeof TsaNavbar> = {
  title: "Molecules/tsa-navbar",
  component: TsaNavbar,
};
export default meta;

const Template: StoryFn<typeof TsaNavbar> = (arguments_: TsaNavbarProperties) => <TsaNavbar {...arguments_} />;

export const CustomCTA = Template.bind({});
CustomCTA.args = {
  navLinks: STATIC_NAV_LINK,
  logoPath: "/images/logo-black.png",
  className: "bg-accent",
  linkClassName: "text-black",
};

export const CustomCTA_2 = Template.bind({});
CustomCTA_2.args = {
  navLinks: STATIC_NAV_LINK,
  logoPath: "/images/logo-white.png",
  className: "bg-primary",
  linkClassName: "text-white",
};

export const CustomCTA_2_with_banner = Template.bind({});
CustomCTA_2_with_banner.args = {
  navLinks: STATIC_NAV_LINK,
  logoPath: "/images/logo-white.png",
  className: "bg-primary",
  linkClassName: "text-white",
  showBanner: true,
};
