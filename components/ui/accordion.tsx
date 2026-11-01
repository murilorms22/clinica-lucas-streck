"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "rounded-xl border border-ink/10 bg-surface px-5 transition-colors data-[state=open]:border-gold/35 data-[state=open]:bg-surface-2/70 sm:px-6",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-medium text-ink transition-colors hover:text-gold sm:text-lg [&[data-state=open]>span.icon-wrap]:border-gold/50 [&[data-state=open]>span.icon-wrap]:bg-gold/15 [&[data-state=open]>span.icon-wrap>svg]:rotate-45 [&[data-state=open]>span.icon-wrap>svg]:text-gold",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <span className="icon-wrap flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/14 bg-bg/60 transition-colors">
        <Plus className="h-4 w-4 text-muted transition-transform duration-200" aria-hidden="true" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm leading-relaxed text-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down sm:text-base"
    {...props}
  >
    <div className={cn("pt-0 pb-5", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

