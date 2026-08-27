# 이력서 관리

이력서 사실 관계를 한곳에서 관리하고, 제출용 PDF를 재현 가능하게 뽑기 위한 디렉터리입니다.

```
resume/
├── CAREER.md           ★ 마스터 기록 (단일 출처) — 모든 사실은 여기서 시작
├── resume-2page.html   A4 2페이지 상세 이력서
├── resume-1page.html   A4 1페이지 요약 이력서
├── build.sh            HTML → PDF 렌더 + 페이지 수 검증
├── .gitignore          dist/ 제외 (공개 배포 저장소이므로 의도적)
└── dist/               생성된 PDF (git 추적 안 함)
```

---

## 사용법

### PDF 뽑기

```bash
./resume/build.sh              # 1page + 2page 모두
./resume/build.sh 1page        # 1페이지만
```

`dist/최정용_이력서_1page.pdf`, `dist/최정용_이력서_2page.pdf` 가 생성됩니다.
Chrome(또는 Chromium/Edge)이 설치돼 있어야 합니다.

`build.sh`는 렌더 후 **실제 PDF 페이지 수를 검증**합니다. 1page가 2페이지로
넘어갔거나 2page가 3페이지가 되면 실패로 표시되므로, 내용을 추가한 뒤 반드시 실행하세요.

### 내용 수정하기

1. **`CAREER.md`를 먼저 고칩니다.** 여기가 단일 출처입니다.
2. 그 변경이 이력서에 실릴 내용이면 `resume-2page.html` → `resume-1page.html` 순으로 반영합니다.
3. `./build.sh` 로 페이지 수를 검증합니다.
4. `CAREER.md` 맨 아래 **변경 이력** 표에 한 줄 남깁니다.

> `index.html`(웹 이력서)도 같은 사실을 담고 있습니다. 현재는 수동 동기화이며,
> 웹/2page/1page 세 곳의 표현 수준이 다릅니다. 아래 "동기화 상태" 참고.

---

## 세 문서의 역할 분담

| 문서 | 분량 | 용도 | 상세 수준 |
|---|---|---|---|
| `CAREER.md` | 무제한 | 마스터 기록, 면접 준비 | 전체 — 팀 구성, 기술 선택 근거, 미채택 제안까지 |
| `resume-2page.html` | A4 2p | 일반 제출용 | 프로젝트별 불릿 |
| `resume-1page.html` | A4 1p | 서류 스크리닝, 리크루터 | 회사별 핵심 성과만 |
| `/index.html` | 웹 | 온라인 프로필 | 2page와 유사 |

`CAREER.md`에만 있고 이력서에는 없는 것들 — 면접에서 꺼낼 카드:
- §6 "안정에 만족하지 않는 팀원" 사례 5건 (Procedure 오류로 천만 건 미업데이트 발견 등)
- 크래프트맨쉽 4단계 UX 설계 의도
- Kafka vs RabbitMQ 선택 근거, 미채택된 멀티 Producer 제안

---

## 페이지 예산 (A4 @96dpi)

레이아웃 조정 시 참고. 렌더 높이가 아래를 넘으면 페이지가 하나 더 생깁니다.

| 대상 | 이론 예산 | 실제 목표 (권장) |
|---|---|---|
| 1페이지 | 1123 px | ~1115 px |
| 2페이지 | 2246 px | ~2170 px |

> ⚠️ **이론 예산에 딱 맞추면 실패합니다.** 아래 측정 스크립트는 *화면* 레이아웃 높이를
> 재는데, Chrome의 *인쇄* 레이아웃은 폰트 메트릭 반올림과 페이지 경계의 widow/orphan
> 처리 때문에 미세하게 더 커집니다. 실제로 렌더 높이 2244px(예산 2246px)이 3페이지로
> 나온 사례가 있었습니다. **80px 정도 여유를 두세요.**
>
> 최종 판정은 항상 `build.sh`의 페이지 수 검증입니다. 측정값은 참고용입니다.

현재 렌더 높이를 직접 재려면:

```bash
python3 - <<'PY'
import re, subprocess, os
src = 'resume/resume-2page.html'          # 대상
s = open(src, encoding='utf-8').read()
js = "<script>document.body.insertAdjacentHTML('beforeend'," \
     "'<pre id=MEAS>'+document.documentElement.scrollHeight+'</pre>')</script>"
tmp = '/tmp/_measure.html'
open(tmp, 'w', encoding='utf-8').write(s.replace('</body>', js + '</body>'))
out = subprocess.run(['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '--headless', '--disable-gpu', '--dump-dom', '--virtual-time-budget=3000',
    '--window-size=794,1123', 'file://' + tmp],
    capture_output=True, text=True).stdout
print('렌더 높이:', re.findall(r'<pre id="?MEAS"?>(.*?)</pre>', out, re.S)[-1], 'px')
PY
```

### 페이지가 넘칠 때 줄이는 순서

효과가 큰 것부터. 폰트 크기를 먼저 줄이지 마세요 — 가독성 손실이 큽니다.

1. 불릿 병합 (두 항목을 한 줄로) — 항목당 ~13px
2. `.proj + .proj` / `section` 여백 — 1mm당 ~3.8px × 항목 수
3. `li { line-height }` 1.45 → 1.4 — 전체 ~50px
4. 항목 자체를 삭제하고 `CAREER.md`로 이동
5. 마지막 수단: `li { font-size }` (8.5pt 미만은 인쇄 가독성 저하)

> `.job { break-inside: avoid; }` 는 **넣지 마세요.** 한 페이지보다 큰 블록에
> 걸리면 Chrome이 블록 전체를 다음 페이지로 밀어내 빈 페이지가 생깁니다.
> (`.proj`는 블록이 작아서 안전하므로 유지합니다.)
>
> 같은 이유로 `orphans: 1; widows: 1;` 을 넣어 뒀습니다. 기본값 2는 페이지 경계에
> 걸친 `.stack` 같은 2줄 블록을 통째로 다음 페이지로 밀어냅니다.

---

## 디자인 규칙

`index.html`과 톤을 맞춘 값들. 변경 시 세 파일 모두 반영하세요.

| 항목 | 값 |
|---|---|
| 액센트 (골드) | `#C8A84B` |
| 헤더 배경 | `#2A2A2A` |
| 본문 텍스트 | `#1F1F1F` / 보조 `#5A5A5A` |
| 구분선 | `#E2DED8` |
| 폰트 | `"Helvetica Neue", "Apple SD Gothic Neo", "Noto Sans KR"` |

폰트는 **웹폰트를 쓰지 않습니다.** Google Fonts는 렌더 시점 네트워크 상태에
따라 PDF 결과가 달라져 재현성이 없습니다. 시스템 폰트로 고정했습니다.

---

## 동기화 상태 (2026-08-27)

`CAREER.md` 갱신 내용이 각 문서에 반영됐는지:

| 항목 | 2page | 1page | index.html |
|---|---|---|---|
| 경력 기간 7년 8개월 (8+ Years 수정) | ✅ | ✅ | ❌ |
| 정보처리산업기사 | ✅ | ✅ | ❌ |
| 크래프트맨쉽 서비스명 · URL | ✅ | ✅ | ❌ |
| 창업경진대회 24팀 중 3위 | ✅ | ✅ | ❌ |
| 팀 구성 인원 (BE/FE) | ✅ | — | ❌ |
| Kafka 선택 근거 | ✅ | ✅ | ❌ |
| 케이스타페이 4개 문제 정의 | ✅ | ✅ | ❌ |
| 포춘쿠키 담당 범위 정정 | ✅ | ✅ | ❌ |

**`index.html`은 아직 동기화되지 않았습니다.** 위 항목을 웹 이력서에도 반영해야 합니다.

또한 `CAREER.md` §7에 **문서 간 수치 불일치 8건**이 정리돼 있습니다.
(쿠차 배치 신규 건수 12 vs 32 등) 확정 값을 아시면 §7을 정리하고 발췌본에 반영하세요.
