"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBlob } from "@/components/ui/animated-blob";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { Particles } from "@/components/ui/particles";
import { TypingEffect } from "@/components/ui/typing-effect";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socials";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20"
    >
      <BackgroundGrid />
      <Particles className="opacity-70" />
      <AnimatedBlob color="primary" className="-left-20 top-10" />
      <AnimatedBlob color="accent" className="right-0 top-1/3" delay="2s" />
      <AnimatedBlob color="secondary" className="left-1/3 bottom-0" delay="4s" />

      <div className="section-container relative grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12, 0.1)}
          className="flex flex-col items-start gap-6 text-left"
        >
          {profile.availableForWork ? (
            <motion.span
              variants={fadeUp}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              Available for new opportunities
            </motion.span>
          ) : null}

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.shortName}</span>
            <Sparkles className="ml-2 inline size-8 text-accent sm:size-10" />
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex h-9 items-center text-xl font-semibold text-muted-foreground sm:text-2xl"
          >
            <TypingEffect words={profile.roles} className="text-foreground/90" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <MagneticButton>
              <Button asChild size="lg" className="glow-primary">
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild size="lg" variant="outline">
                <a href={profile.resumeUrl} download>
                  <Download />
                  Download CV
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild size="lg" variant="ghost">
                <a href="#contact">
                  <Mail />
                  Contact Me
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3 pt-4">
            {socialLinks.slice(0, 4).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-brand opacity-30 blur-2xl" />
          <div className="glass shadow-premium relative size-full overflow-hidden rounded-[2.5rem] p-3">
            <div className="relative size-full overflow-hidden rounded-[2rem]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover"
              />
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass shadow-premium absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl px-4 py-3"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
              {profile.roles.length}
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold">Core Roles</span>
              <span className="text-xs text-muted-foreground">Fullstack · QA</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center justify-center rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground sm:flex"
      >
        <ArrowDown className="size-4" />
      </motion.a>
    </section>
  );
}
