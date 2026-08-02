"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/shared/project-card";
import { ProjectModal } from "@/components/shared/project-modal";
import { projects } from "@/data/projects";
import { staggerContainer, fadeUp } from "@/lib/motion";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === "All" || project.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-container flex flex-col gap-12">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          description="A mix of fullstack products, tooling, and experiments — built end-to-end."
        />

        <div className="flex flex-col items-center gap-5">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects or tech..."
              className="h-11 rounded-full pl-10"
              aria-label="Search projects"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((item) => (
              <Button
                key={item}
                type="button"
                size="sm"
                variant={category === item ? "default" : "outline"}
                className={cn("rounded-full", category === item && "glow-primary")}
                onClick={() => setCategory(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer(0.08)}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <ProjectCard project={project} onOpen={setSelected} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-muted-foreground">
            No projects match your search. Try a different keyword.
          </p>
        )}
      </div>

      <ProjectModal
        project={selected}
        onOpenChange={(open) => !open && setSelected(null)}
      />
    </section>
  );
}
