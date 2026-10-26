# 🚨 AutoResQ (CarMe) — Roadside Emergency Diagnostic Assistant
> **Instant roadside vehicle triage, emergency step-by-step guides, GPS mechanic locator, and AI diagnostic chat powered by Sarvam AI (`sarvam-105b-conversations`).**

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://vaagmeesamhitha-droid.github.io/CarMe/)
[![Sarvam AI](https://img.shields.io/badge/Powered%20By-Sarvam%20AI-orange)](https://sarvam.ai/)
[![Repository](https://img.shields.io/badge/GitHub-CarMe-black?logo=github)](https://github.com/vaagmeesamhitha-droid/CarMe)

---

## 🌐 Live Website Link
Once pushed and Pages is enabled, your app will be live at:
👉 **[https://vaagmeesamhitha-droid.github.io/CarMe/](https://vaagmeesamhitha-droid.github.io/CarMe/)**

---

## 🌟 Key Features

1. **⚠️ Immediate Roadside Safety Protocol**
   - Instant 4-step hazard safety checklist: Hazard lights, pull off carriageway, firm handbrake, reflective triangle placement.

2. **🛞 Instant Emergency Scenarios (Interactive Step-by-Step Guides)**
   - **Flat Tire & Puncture**: Pinch-weld jacking, lug-nut pattern, spare tire swap.
   - **Won't Start / Dead Battery**: Starter diagnostic (rapid clicking vs dead silence) and exact jumper cable connection sequence.
   - **Engine Overheating / Steam**: Scald protection, 25-min cooldown rule, coolant inspection.
   - **Smoke or Burning Odor**: Electrical short vs burning oil vs coolant steam triage, evacuation protocol.
   - **Brakes Spongy or Failing**: Hydraulic pressure pumping, engine braking downshift, progressive handbrake control.
   - **Out of Fuel / Misfire**: Highway coasting, diesel priming sequence.

3. **🔊 Hands-Free Voice Assistant & Read-Aloud Narration**
   - **Voice Input**: Tap the microphone to dictate your breakdown symptoms in English or Indian languages.
   - **Voice Read-Aloud**: Audio narration of repair instructions so you don't need to look at your phone while working with dirty hands.

4. **🤖 Sarvam AI Conversational Diagnostic Brain**
   - Connects directly to Sarvam AI's flagship `sarvam-105b-conversations` model.
   - Enter your `SARVAM_API_KEY` securely in the browser settings modal (saved locally in browser storage, never exposed on GitHub).
   - Intelligent offline fallback so the app works even on remote highways with poor internet.

5. **📍 GPS Nearest Mechanics & Puncture Locator**
   - One-tap detection of your exact GPS coordinates.
   - Deep links for nearest auto mechanics, 24/7 tire puncture shops, tow trucks/RSA, and fuel stations.
   - Direct emergency hotlines: **112** (National Emergency), **1033** (Highway Patrol Helpline), **1073** (Accident Helpline).

6. **🚨 SOS Roadside Toolkit**
   - **High-Intensity Night Strobe**: Turns phone screen into an alternating emergency hazard beacon for oncoming traffic.
   - **Acoustic SOS Siren**: Synthesizes a loud warning wail to alert nearby motorists.

---

## 🚀 How to Push to GitHub (In 10 Seconds)

Open PowerShell and run:

```powershell
cd C:\Users\vaagm\.gemini\antigravity\scratch\car-emergency-assistant
git push -u origin main
```

A browser window will pop up asking you to authorize Git with your GitHub account. Click **Authorize**, and all your files will immediately be on GitHub!

---

## ⚙️ Enable GitHub Pages

1. Go to your repo: [https://github.com/vaagmeesamhitha-droid/CarMe](https://github.com/vaagmeesamhitha-droid/CarMe)
2. Click **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, choose **GitHub Actions** (the included `.github/workflows/deploy.yml` will handle it automatically) OR select **Deploy from a branch** (`main` / root).
4. Your website is instantly live at **[https://vaagmeesamhitha-droid.github.io/CarMe/](https://vaagmeesamhitha-droid.github.io/CarMe/)**!

---

## 🔒 Security Notice
- Your `.env` file contains your private API key and is excluded via `.gitignore`.
- On GitHub Pages, users enter their own Sarvam API key in the web app settings modal, stored locally in their browser `localStorage`.
