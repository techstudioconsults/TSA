"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@strategic-dot/components";
import Link from "next/link";
import React, { useEffect } from "react";

import { AccordionSkeleton } from "~/app/(landing-routes)/faq/_components/skeleton/accordion.skeleton";
import useFAQStore from "~/app/(landing-routes)/faq/action";
import { Wrapper } from "~/components/layout/wrapper";
import { PaginationComp } from "../pagination";

export const TsaAccordion: React.FC = () => {
  const { getFAQ, faq, loading, error } = useFAQStore();

  useEffect(() => {
    getFAQ();
  }, [getFAQ]);

  return (
    <section className="min-h-[857px] py-[50px] lg:py-[46px]">
      <Wrapper className="min-h-[580px]">
        {/* Render the Accordion when the data is loaded */}
        <section className="min-h-[580px]">
          {loading && <AccordionSkeleton />}
          {error && (
            <p className="text-center text-lg text-red-500">
              Failed to load FAQs: {error}
            </p>
          )}
          {!loading && !error && faq && (
            <Accordion type="multiple">
              {faq.map((faqItem) => (
                <AccordionItem key={faqItem.id} value={`item-${faqItem.id}`}>
                  <AccordionTrigger className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up h-[80px] text-left text-sm lg:text-xl">
                    {faqItem.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* Check if it's the online class question with bullet points */}
                    {faqItem.bullets ? (
                      <ul className="ml-4 list-disc">
                        {faqItem.bullets.map(
                          (bullet: string, index: number) => (
                            <li key={index}>{bullet}</li>
                          ),
                        )}
                      </ul>
                    ) : (
                      <p>{faqItem.answer}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </section>

        {/* Pagination */}
        <div className="mb-[78px] mt-[50px]">
          <PaginationComp />
        </div>

        {/* Fallback message */}
        <p className="text-center">
          Can’t find the answer you are looking for?{" "}
          <Link href="/contact" className="font-semibold text-primary">
            Send us a message here
          </Link>
        </p>
      </Wrapper>
    </section>
  );
};
