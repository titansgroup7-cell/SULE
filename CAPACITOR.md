# SULE BUSINESS — GitHub Actions (workflow) + Capacitor

Jenga **APK otomatiki** kutoka GitHub — **bila** Android Studio kila siku.

---

## Njia: GitHub Actions Workflow

Faili: `.github/workflows/build-android.yml`

### Unachohitaji kwenye GitHub

1. **Repo** yenye code hii (push ZIP / git push).
2. **Secrets** (Repo → Settings → Secrets and variables → Actions):

| Secret | Lazima? | Maelezo |
|--------|---------|---------|
| `GOOGLE_SERVICES_JSON` | Ndiyo (kwa push) | Yaliyomo **yote** ya `google-services.json` (paste text) |
| `ANDROID_KEYSTORE_BASE64` | Hapana | Keystore ya release (base64) — signed APK |
| `KEYSTORE_PASSWORD` | Hapana | Password ya keystore |
| `KEY_ALIAS` | Hapana | Alias ya key |
| `KEY_PASSWORD` | Hapana | Password ya key |

#### Jinsi ya kuweka `GOOGLE_SERVICES_JSON`

1. Firebase Console → Project → Android app `com.sule.business`
2. Download `google-services.json`
3. Fungua faili → copy **maandishi yote**
4. GitHub → Settings → Secrets → New → Name: `GOOGLE_SERVICES_JSON` → paste

#### Backend (Vercel) — env

```
FCM_SERVER_KEY=...     # Firebase → Cloud Messaging → Server key
SUPABASE_BUCKET=upload
SUPABASE_URL=...
SUPABASE_SERVICE_KEY=...
```

---

## Jinsi ya kuendesha workflow

### A) Otomatiki
Kila **push** kwenye `main` / `master` → build inaanzia.

### B) Manual
1. GitHub → **Actions**
2. **Build Android APK**
3. **Run workflow**
4. (Hiari) weka server URL
5. Run

Baada ya ~5–10 dakika:
- Actions → run iliyomalizika → **Artifacts**
- Download **`sule-business-debug`** (APK)
- Sakinisha kwenye simu (ruhusu Install unknown apps)

---

## Push hata app imefungwa

1. APK imejengwa na `GOOGLE_SERVICES_JSON`
2. Vercel ina `FCM_SERVER_KEY`
3. User **anaingia (login)** kwenye app
4. Ruhusu notifications

| Njia | Wapi | App imefungwa |
|------|------|----------------|
| Web Push (VAPID) | Browser / PWA | Ndiyo |
| FCM | Capacitor APK | **Ndiyo** |

---

## Badilisha domain

`capacitor.config.json` → `server.url`  
Au Run workflow → input `server_url`.

---

## Signed release (Play Store)

```bash
keytool -genkey -v -keystore release.keystore -alias sule \
  -keyalg RSA -keysize 2048 -validity 10000
base64 -w0 release.keystore   # → secret ANDROID_KEYSTORE_BASE64
```

Secrets: `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD`  
Artifact: **`sule-business-release`**

---

Backend → **Vercel**. Workflow → **APK** tu (wrapper ya URL yako).
