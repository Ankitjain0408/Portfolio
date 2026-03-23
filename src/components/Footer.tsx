import { Github, Linkedin } from "lucide-react";
import { profileLinks } from "@/constants/profileLinks";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6 md:px-12">
    <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Ankit Jain. All rights reserved.
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            title="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={profileLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profileLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-wider text-muted-foreground hover:text-primary transition-colors"
          >
            LeetCode
          </a>
          <a
            href={profileLinks.geeksforgeeks}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-wider text-muted-foreground hover:text-primary transition-colors"
          >
            GFG
          </a>
          <a
            href={profileLinks.codechef}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-wider text-muted-foreground hover:text-primary transition-colors"
          >
            CodeChef
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
