"use client";

import { useEffect, useState } from "react";
import { Compass, Download, Mail, Moon, Sun } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { useTheme } from "next-themes";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandInput,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { NAV_ITEMS } from "@/constants/site";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socials";

/** Global Cmd+K command palette for fast navigation, matching the Linear/Vercel UX pattern. */
export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function runCommand(command: () => void) {
    setOpen(false);
    command();
  }

  const github = socialLinks.find((link) => link.label === "GitHub");
  const linkedin = socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Command Menu"
      description="Quickly jump to a section or action"
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {NAV_ITEMS.map((item) => (
            <CommandItem
              key={item.href}
              onSelect={() =>
                runCommand(() =>
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: "smooth" }),
                )
              }
            >
              <Compass />
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() =>
              runCommand(() => window.open(profile.resumeUrl, "_blank"))
            }
          >
            <Download />
            <span>Download CV</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(
                () => (window.location.href = `mailto:${profile.email}`),
              )
            }
          >
            <Mail />
            <span>Email Me</span>
          </CommandItem>
          {github ? (
            <CommandItem
              onSelect={() =>
                runCommand(() => window.open(github.href, "_blank"))
              }
            >
              <SiGithub />
              <span>Open GitHub</span>
            </CommandItem>
          ) : null}
          {linkedin ? (
            <CommandItem
              onSelect={() =>
                runCommand(() => window.open(linkedin.href, "_blank"))
              }
            >
              <FaLinkedin />
              <span>Open LinkedIn</span>
            </CommandItem>
          ) : null}
          <CommandItem
            onSelect={() =>
              runCommand(() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark"),
              )
            }
          >
            {resolvedTheme === "dark" ? <Sun /> : <Moon />}
            <span>Toggle Theme</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
      <div className="hidden items-center justify-end gap-1 border-t border-border px-3 py-2 text-xs text-muted-foreground sm:flex">
        <span>Press</span>
        <CommandShortcut className="ml-0 rounded border border-border px-1.5 py-0.5">
          Esc
        </CommandShortcut>
        <span>to close</span>
      </div>
    </CommandDialog>
  );
}
