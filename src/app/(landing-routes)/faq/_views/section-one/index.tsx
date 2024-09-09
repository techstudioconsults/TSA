"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@strategic-dot/components";
import Link from "next/link";
import React from "react";

import { Wrapper } from "~/components/layout/wrapper";
import { PaginationComp } from "../../_components/pagination";

export const SectionOne: React.FC = () => {
  return (
    <section className="py-[100px] lg:py-[46px]">
      <Wrapper>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="h-[80px] text-left text-sm lg:text-xl">
              Tell me what the Python Full stack program is about?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              porro ullam nobis atque dolor necessitatibus reiciendis eos itaque
              magni vitae quo exercitationem assumenda, maiores voluptatum harum
              eum iusto, cum minima fugiat maxime ipsam minus. Nisi, ipsa qui
              fugiat dignissimos itaque nobis aliquid reprehenderit! Impedit
              reprehenderit ipsa expedita in recusandae exercitationem.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="h-[80px] text-left text-sm lg:text-xl">
              Tell me what the Python Full stack program is about?
            </AccordionTrigger>
            <AccordionContent>Content for the second item.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="h-[80px] text-left text-sm lg:text-xl">
              What is the difference between Python FullStack and JavaScript
              FullStack?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              porro ullam nobis atque dolor necessitatibus reiciendis eos itaque
              magni vitae quo exercitationem assumenda, maiores voluptatum harum
              eum iusto, cum minima fugiat maxime ipsam minus. Nisi, ipsa qui
              fugiat dignissimos itaque nobis aliquid reprehenderit! Impedit
              reprehenderit ipsa expedita in recusandae exercitationem.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="h-[80px] text-left text-sm lg:text-xl">
              What is the difference between website evelopment and software
              development?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              porro ullam nobis atque dolor necessitatibus reiciendis eos itaque
              magni vitae quo exercitationem assumenda, maiores voluptatum harum
              eum iusto, cum minima fugiat maxime ipsam minus. Nisi, ipsa qui
              fugiat dignissimos itaque nobis aliquid reprehenderit! Impedit
              reprehenderit ipsa expedita in recusandae exercitationem.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="h-[80px] text-left text-sm lg:text-xl">
              Is coding the same as programming?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              porro ullam nobis atque dolor necessitatibus reiciendis eos itaque
              magni vitae quo exercitationem assumenda, maiores voluptatum harum
              eum iusto, cum minima fugiat maxime ipsam minus. Nisi, ipsa qui
              fugiat dignissimos itaque nobis aliquid reprehenderit! Impedit
              reprehenderit ipsa expedita in recusandae exercitationem.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="h-[80px] text-left text-sm lg:text-xl">
              What are the benefits of Registering with you?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              porro ullam nobis atque dolor necessitatibus reiciendis eos itaque
              magni vitae quo exercitationem assumenda, maiores voluptatum harum
              eum iusto, cum minima fugiat maxime ipsam minus. Nisi, ipsa qui
              fugiat dignissimos itaque nobis aliquid reprehenderit! Impedit
              reprehenderit ipsa expedita in recusandae exercitationem.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mb-[78px] mt-[144px]">
          <PaginationComp />
        </div>
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
