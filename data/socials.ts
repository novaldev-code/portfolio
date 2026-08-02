import { SiGithub, SiInstagram, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";
import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/nyverz",
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nyverz",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/nyverz",
    icon: SiInstagram,
  },
  {
    label: "Email",
    href: "mailto:hello@nyverz.dev",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281200000000",
    icon: SiWhatsapp,
  },
  {
    label: "Location",
    href: "https://maps.google.com/?q=Indonesia",
    icon: MapPin,
  },
];
