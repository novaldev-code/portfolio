"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/shared/tech-badge";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, onOpenChange }: ProjectModalProps) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto rounded-3xl! p-0 sm:max-w-3xl">
        {project ? (
          <div className="flex flex-col">
            <div className="relative aspect-video w-full">
              <Image
                src={project.image}
                alt={`${project.title} cover`}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="rounded-t-3xl object-cover"
              />
            </div>

            <div className="flex flex-col gap-6 p-6 sm:p-8">
              <DialogHeader className="gap-2 text-left">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <DialogTitle className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </DialogTitle>
                  <span className="text-sm text-muted-foreground">
                    {project.role} · {project.year}
                  </span>
                </div>
                <DialogDescription className="text-base">
                  {project.longDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TechBadge key={tag} label={tag} />
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.links.demo ? (
                  <Button asChild>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink />
                      Live Demo
                    </a>
                  </Button>
                ) : null}
                {project.links.github ? (
                  <Button asChild variant="outline">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SiGithub />
                      View Code
                    </a>
                  </Button>
                ) : null}
              </div>

              <Tabs defaultValue="features">
                <TabsList variant="line" className="flex-wrap">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="architecture">Architecture</TabsTrigger>
                  <TabsTrigger value="challenges">Challenges</TabsTrigger>
                  <TabsTrigger value="lessons">Lessons</TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="pt-4">
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 rounded-xl bg-muted/50 p-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="gallery" className="pt-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.gallery.map((image) => (
                      <div
                        key={image}
                        className="relative aspect-video overflow-hidden rounded-xl"
                      >
                        <Image
                          src={image}
                          alt={`${project.title} screenshot`}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="architecture" className="pt-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.architecture}
                  </p>
                </TabsContent>

                <TabsContent value="challenges" className="pt-4">
                  <ul className="space-y-2">
                    {project.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-destructive" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="lessons" className="pt-4">
                  <ul className="space-y-2">
                    {project.lessons.map((lesson) => (
                      <li
                        key={lesson}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-success" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
