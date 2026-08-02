"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Certificate } from "@/types";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="glass shadow-premium group flex flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-sm font-semibold leading-snug">
          {certificate.title}
        </h3>
        <p className="text-xs text-muted-foreground">
          {certificate.provider} · {certificate.year}
        </p>
        {certificate.credentialUrl ? (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View credential
            <ExternalLink className="size-3.5" />
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}
