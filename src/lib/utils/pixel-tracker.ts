/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import ReactPixel, { AdvancedMatching } from "react-facebook-pixel";

type PixelOptions = {
  autoConfig?: boolean;
  debug?: boolean;
};

const useFacebookPixel = (pixelId?: string, advancedMatching?: AdvancedMatching, options?: PixelOptions) => {
  useEffect(() => {
    if (!pixelId) {
      console.warn("Facebook Pixel ID is required");
      return;
    }

    // Initialize the pixel
    ReactPixel.init(pixelId, advancedMatching, {
      autoConfig: options?.autoConfig ?? true,
      debug: options?.debug ?? false,
    });

    // Track initial page view
    // ReactPixel.pageView();

    // Cleanup function (though pixel typically persists)
    return () => {
      // we might want to disable the pixel in some cases
      // ReactPixel.disable();
    };
  }, [pixelId, advancedMatching, options]);

  return {
    trackEvent: (event: string, data?: any) => ReactPixel.track(event, data),
    trackSingle: (pixelId: string, event: string, data?: any) => ReactPixel.trackSingle(pixelId, event, data),
    trackCustomEvent: (event: string, data?: any) => ReactPixel.trackCustom(event, data),
    trackSingleCustom: (pixelId: string, event: string, data?: any) =>
      ReactPixel.trackSingleCustom(pixelId, event, data),
    pageView: () => ReactPixel.pageView(),
    // Add other pixel methods as needed
  };
};

export default useFacebookPixel;
