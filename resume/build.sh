#!/usr/bin/env bash
#
# 이력서 HTML → PDF 렌더링 + A4 페이지 수 검증
#
#   사용법:  ./build.sh            # 전체 빌드
#            ./build.sh 1page      # 특정 파일만
#
# 산출물은 dist/ 에 생성됩니다 (git 추적 제외 — .gitignore 참고).
#
set -euo pipefail

cd "$(dirname "$0")"
OUT="dist"
mkdir -p "$OUT"

# ── 렌더러 탐색 ────────────────────────────────────────────────
CHROME=""
for c in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Chromium.app/Contents/MacOS/Chromium" \
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge" \
  "$(command -v google-chrome || true)" \
  "$(command -v chromium || true)"
do
  [ -n "$c" ] && [ -x "$c" ] && CHROME="$c" && break
done

if [ -z "$CHROME" ]; then
  echo "✗ Chrome/Chromium을 찾을 수 없습니다. 설치 후 다시 실행하세요." >&2
  exit 1
fi

# ── 대상 결정 ──────────────────────────────────────────────────
if [ $# -gt 0 ]; then
  TARGETS=()
  for t in "$@"; do TARGETS+=("resume-${t}.html"); done
else
  TARGETS=(resume-1page.html resume-2page.html)
fi

# A4 1페이지 = 1123 CSS px @96dpi
PAGE_PX=1123

for src in "${TARGETS[@]}"; do
  if [ ! -f "$src" ]; then
    echo "✗ $src 없음" >&2
    exit 1
  fi

  base="${src%.html}"
  pdf="$OUT/최정용_이력서_${base#resume-}.pdf"

  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=3000 \
    --print-to-pdf="$PWD/$pdf" \
    "file://$PWD/$src" >/dev/null 2>&1

  # ── 검증: 실제 PDF 페이지 수 + 렌더 높이 여유 ──────────────
  python3 - "$pdf" "$src" "$PAGE_PX" <<'PY'
import re, sys
pdf, src, page_px = sys.argv[1], sys.argv[2], int(sys.argv[3])
data = open(pdf, 'rb').read()
pages = len(re.findall(rb'/Type\s*/Page[^s]', data))
expected = 1 if '1page' in src else 2
mark = "✓" if pages == expected else "✗"
slack = expected * page_px
print(f"{mark} {pdf}  —  {pages}p (기대 {expected}p), {len(data)//1024}KB")
if pages != expected:
    print(f"  ! 페이지 수가 기대와 다릅니다. {src} 의 여백/폰트 크기를 조정하세요.")
    print(f"  ! A4 {expected}페이지 예산은 렌더 높이 {slack}px 입니다.")
    sys.exit(1)
PY
done

echo
echo "완료. dist/ 를 확인하세요."
