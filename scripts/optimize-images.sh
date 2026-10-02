#!/usr/bin/env bash
# Converts every PNG/JPG under public/images to WebP (keeps transparency),
# caps the long edge at 2400px, and removes the original.
#
#   npm run images
#
# Drop raw screenshots into public/images/projects/<slug>/ and run this.
set -euo pipefail
MAX=2400
find public/images -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -print0 |
while IFS= read -r -d '' src; do
  out="${src%.*}.webp"
  w=$(sips -g pixelWidth "$src" | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$src" | awk '/pixelHeight/{print $2}')
  resize=()
  if [ "$w" -ge "$h" ] && [ "$w" -gt $MAX ]; then resize=(-resize $MAX 0); fi
  if [ "$h" -gt "$w" ] && [ "$h" -gt $MAX ]; then resize=(-resize 0 $MAX); fi
  cwebp -quiet -q 84 -alpha_q 90 -m 6 ${resize[@]+"${resize[@]}"} "$src" -o "$out"
  rm "$src"
  echo "✓ $out"
done
