// src/lib/image.js
// Helper that builds a real image URL from a text prompt.
export const image = (prompt, size = "landscape_4_3") =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${size}`;
