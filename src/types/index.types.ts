import { ChangeEventHandler, FocusEventHandler, HtmlHTMLAttributes, MouseEventHandler, ReactNode } from "react";

export interface LogoProperties {
  logo: string;
}

type Variant =
  | "default"
  | "primary"
  | "destructive"
  | "subtle"
  | "loading"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "accent";
type Size = "default" | "sm" | "lg" | "xl" | "link" | "icon" | "circle";

export interface TsaButtonProperties {
  type?: "submit" | "button" | "reset";
  /** Specifies the button style variant */
  variant?: Variant;
  /** Specifies the size of the button */
  size?: Size;
  /** Icon to be displayed inside the button */
  icon?: ReactNode;
  /** Text or elements to be displayed inside the button */
  children?: ReactNode;
  /** Indicates if the button is in a loading state */
  isLoading?: boolean;
  /** Indicates if the button is icon only */
  isIconOnly?: boolean;
  /** Indicates if the left icon is visible */
  isLeftIconVisible?: boolean;
  /** Indicates if the right icon is visible */
  isRightIconVisible?: boolean;
  /** Disables the button if true */
  isDisabled?: boolean;
  /** Accessibility label for the button */
  ariaLabel?: string;
  /** Href to link button to a URL or route */
  href?: string;
  /** Class for custom styling */
  className?: string;
  /** Click event handler for the button */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface TsaInputProperties {
  label?: string;
  isRequired?: boolean;
  state?: "default" | "primary" | "error";
  name?: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  isDisabled?: boolean;
  className?: string;
  helpText?: string;
  validate?: (value: string) => boolean;
}

export interface TsaNavbarProperties {
  navLinks: NavLink[];
  logopath: string;
  children?: ReactNode;
  bgScrollColor?: string;
  linkClassName?: string;
  className?: string;
  showBanner?: boolean;
  bannerDuration?: string;
}

export interface courseContentProperties {
  name: string;
  image: string;
  link: string;
}

type DropdownItem = {
  title: string;
  href: string;
  description: string;
};

export interface NavLink {
  route: string;
  link: string;
  dropdown?: DropdownItem[];
}

export interface TeamProperties {
  image: string;
  name: string;
  role: string;
  linkedIn: string;
}

export interface TsaBannerProperties extends HtmlHTMLAttributes<HTMLDivElement> {
  testimonials: { message: string; image: string; name: string; job: string }[];
  topSlot?: ReactNode;
  bottomSlot?: ReactNode;
}

export interface slideContentProperties {
  name: string;
  image: string;
  link: string;
  _image?: ReactNode;
}

export interface TsaMarqueeProperties extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface TsaBannerProperties extends HtmlHTMLAttributes<HTMLDivElement> {
  testimonials: { message: string; image: string; name: string; job: string }[];
  topSlot?: ReactNode;
  bottomSlot?: ReactNode;
}

export interface TsaCarouselProperties {
  courseContent?: slideContentProperties[];
  galleryContent?: ReactNode[];
  facilityContent?: string[];
  bgColor?: string;
  showIndicator?: boolean;
  variant?: "course" | "gallery" | "facility";
  stopZoom?: boolean;
  itemsPerView?: number;
  facilityCaroselFlatMaxWidth?: string;
}

export interface TsaFooterProperties extends TsaNavbarProperties, HtmlHTMLAttributes<HTMLDivElement> {
  subscribeComponent: ReactNode;
}
