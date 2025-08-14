"use client";

import Image from "next/image";
import Script from "next/script";

// import { useSearchParams } from "next/navigation";

import { Wrapper } from "~/components/layout/wrapper";
import TsaButton from "~/lib/storybook/atoms/tsa-button";

interface PageProperties {
  params: { slug: string };
}

export default function RegistrationSuccessPage({ params }: PageProperties) {
  const { slug } = params;
  //   const searchParameters = useSearchParams();
  const message =
    // searchParameters.get("msg") ||
    "Thank you for contacting us! Our team is reviewing your message and will respond promptly. Feel free to explore our website for more information in the meantime. We appreciate your patience!";

  return (
    <main className="relative z-[1] mt-40 bg-white py-16">
      {/* Facebook Pixel: Lead event on success page */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1171106073347114');
          fbq('track', 'Lead');
        `}
      </Script>
      <noscript>
        <Image
          alt={`facebook-img`}
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1171106073347114&ev=Lead&noscript=1"
        />
      </noscript>
      <Wrapper className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        {/* <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-50"> */}
        <Image src="/images/yes.png" alt="Success" width={100} height={100} className="mb-6" priority />
        {/* </div> */}
        <h1 className="mb-3 text-2xl font-extrabold text-[#072C5B] sm:text-3xl">Registration successful</h1>
        <p className="mx-auto mb-8 max-w-[640px] text-balance text-sm text-[#475569] sm:text-base">{message}</p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <TsaButton href={`/courses/${slug}`} variant="primary" size="lg" className="bg-mid-blue text-white">
            Back to course
          </TsaButton>
          <TsaButton href="/courses" variant="outline" size="lg" className="border-mid-blue text-mid-blue">
            Explore more programs
          </TsaButton>
        </div>
      </Wrapper>
    </main>
  );
}
