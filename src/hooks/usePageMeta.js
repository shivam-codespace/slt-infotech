import { useEffect } from "react";
import { SITE } from "../data/site";

// Sets the document title and meta description for the current page.
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name} — AI, Cloud & Software Engineering`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);
}
