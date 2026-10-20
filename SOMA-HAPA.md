# SULE — Hatua za uhakika (soma mara moja)

## 1. Push ZIP hii KAMILI kwenye GitHub
Futa folder ya zamani ya repo (au replace files), extract ZIP mpya, push YOTE.

Lazima zipo:
- package.json
- package-lock.json
- capacitor.config.json
- .github/workflows/build-android.yml
- www/
- app.py, templates/, static/

## 2. Secret MOJA kwenye GitHub
Settings → Secrets → Actions → New:
Name: GOOGLE_SERVICES_JSON
Value: yaliyomo YOTE ya google-services.json (Firebase Android app package com.sule.business)

Bila secret hii APK bado itajengwa, lakini push ya native haitafanya kazi.

## 3. Vercel env
FCM_SERVICE_ACCOUNT_JSON = service account JSON yote
SUPABASE_BUCKET = upload
+ keys zingine za kawaida
Redeploy.

## 4. Build
Actions → Build Android APK → Run workflow
Server URL = ACHIA TUPU
Subiri hadi kijani → Artifacts → sule-business-debug → download APK

## 5. Simu
Sakinisha APK → Login → Ruhusu notifications

Site: https://sule-kmmmg11sp-dutoza.vercel.app
