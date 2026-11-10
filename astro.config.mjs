// VEON demo base: technical setup only. Visual design comes from design/concept.md of each client.
// CSS is inlined and assets are referenced relatively (img/, fonts/), so dist/ works from any base path and from file://.
import { defineConfig } from "astro/config";

export default defineConfig({
  build: { inlineStylesheets: "always" },
  compressHTML: true,
  devToolbar: { enabled: false },
});
