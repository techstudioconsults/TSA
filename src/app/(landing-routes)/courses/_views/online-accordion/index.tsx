"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react"; //
import Link from "next/link";

import { Wrapper } from "~/components/layout/wrapper";
import { FULLSTACKFAQS } from "~/constants";

export const OnlineClassAccordion: React.FC = () => {
  return (
    <section className="min-h-[857px] py-[50px] lg:py-[46px]">
      <Wrapper className="min-h-[580px]">
        <section className="min-h-[580px]">
          <Accordion type="multiple">
            {FULLSTACKFAQS.map((faqItem) => (
              <AccordionItem key={faqItem.id} value={`item-${faqItem.id}`}>
                <AccordionTrigger className="group flex h-[80px] w-full items-center justify-between text-left text-sm transition-all lg:text-xl">
                  <span>{faqItem.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent>
                  <p>{faqItem.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <p className="text-center">
          Can&apos;t find the answer you are looking for?{" "}
          <Link href="/contact" className="font-semibold text-primary">
            Send us a message here
          </Link>
        </p>
      </Wrapper>
    </section>
  );
};
