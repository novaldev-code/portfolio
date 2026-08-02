"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Spotlight } from "@/components/ui/spotlight";
import { TechBadge } from "@/components/shared/tech-badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <Spotlight className="glass shadow-premium h-full rounded-3xl">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="flex h-full flex-col overflow-hidden rounded-3xl"
      >
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="relative aspect-[16/10] w-full overflow-hidden text-left"
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0" />
          {project.featured ? (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-white shadow-lg">
              <Sparkles className="size-3" />
              Featured
            </span>
          ) : null}
        </button>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            <span className="shrink-0 text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>

          <p className="text-sm text-muted-foreground">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <TechBadge key={tag} label={tag} />
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              View details
            </button>
            <div className="flex items-center gap-1">
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <SiGithub className="size-4" />
                </a>
              ) : null}
              {project.links.demo ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <ExternalLink className="size-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </motion.article>
    </Spotlight>
  );
}
