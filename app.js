// AutoResQ — Roadside Emergency Diagnostics & Assistant
// Powered by Sarvam AI (sarvam-105b-conversations)

// --- Step-by-Step Emergency Guides ---
const EMERGENCY_GUIDES = {
  puncture: {
    icon: '🛞',
    title: 'Flat Tire Replacement & Safety Guide',
    meta: 'Time: ~15-20 min • Safety: Level ground required',
    videoUrl: 'https://www.youtube.com/watch?v=joBmbH0AGSQ',
    steps: [
      {
        title: 'Pull Over Safely & Secure the Car',
        desc: 'Take a deep breath. Switch on your hazard lights so approaching vehicles can spot you from afar. Pull as far onto the flat shoulder as possible. Shift into Park (or 1st gear for manual), and pull the handbrake all the way up firmly!',
        warning: 'Never change a tire on a slope or soft mud. The car can slide off the jack!'
      },
      {
        title: 'Pro Tip: Loosen the Lug Nuts BEFORE Jacking Up',
        desc: 'Take the L-shaped wrench from your boot. Fit it onto each lug nut and turn counter-clockwise (Left = Loose, Right = Tight). If a nut is stuck tight, don\'t strain your back — place the wrench horizontally and step on it gently with your heel! Loosen each nut by one full turn, but keep them on for now.',
        warning: 'Keep the tire firmly on the ground while breaking the nuts loose, otherwise the wheel will just spin in the air.'
      },
      {
        title: 'Position the Jack Under the Pinch Weld Notch',
        desc: 'Look underneath near the flat tire for a small reinforced metal groove/notch along the frame. Place the jack head right into that notch. Slowly turn the jack handle until the flat tire lifts about 2 to 3 inches off the ground.',
        warning: 'Never position the jack against the flat plastic body panel underneath — it will crack the panel!'
      },
      {
        title: 'Swap with the Spare Tire',
        desc: 'Unscrew the loosened lug nuts with your fingers and place them in a clean spot. Slide the flat tire off and mount the spare tire. Screw all the nuts back on by hand until snug against the wheel.',
        warning: 'Do not shake or push the car while it is elevated on the jack. Easy does it!'
      },
      {
        title: 'Lower the Car & Tighten in a Star Pattern',
        desc: 'Lower the car back down onto the ground. Use the wrench to firmly tighten each lug nut. Always tighten in a criss-cross star pattern (across from each other, not in a circle) so the wheel mounts evenly.',
        warning: 'If you installed a temporary donut spare tire, keep your speed under 80 km/h until you visit a puncture shop!'
      }
    ]
  },
  battery: {
    icon: '🔋',
    title: 'Dead Battery Diagnosis & Jumper Cable Guide',
    meta: 'Time: ~10 min • Requires: Jumper cables & donor car',
    videoUrl: 'https://www.youtube.com/watch?v=0hY5P7mZ3eA',
    steps: [
      {
        title: 'Diagnose the Starter Symptom',
        desc: 'Turn the key and listen closely. If you hear a rapid "click-click-click", the battery has a little power left but lacks the amps to crank the starter. If you hear dead silence and dashboard lights dim completely, the battery is fully drained or the terminals are loose.',
        warning: 'Ensure both cars have their engines and headlights switched OFF before connecting any cables.'
      },
      {
        title: 'Red to Dead Battery Positive (+)',
        desc: 'Take the RED jumper cable clamp. Attach it firmly onto the POSITIVE (+) terminal of your dead battery. Look for the red plastic cap or the "+" marking on the battery casing.',
        warning: 'Rule number one with jumper cables: NEVER let the red and black clamp heads touch each other!'
      },
      {
        title: 'Red to Donor Battery Positive (+)',
        desc: 'Walk over to the booster car. Clamp the other RED end onto the POSITIVE (+) terminal of the good battery. Ensure clean metal contact through any grime.',
        warning: 'Double check: RED is always POSITIVE (+).'
      },
      {
        title: 'Black to Donor Battery Negative (-)',
        desc: 'Clamp one BLACK cable head onto the NEGATIVE (-) terminal of the booster car\'s good battery.',
        warning: 'Watch out for engine belts and radiator fans — keep cables hanging clear.'
      },
      {
        title: 'Black to Bare Metal on Dead Car (NOT the Dead Battery!)',
        desc: 'For the other BLACK clamp: DO NOT attach it to the dead battery\'s negative terminal. Instead, clamp it onto an unpainted metal bracket or bolt on your car\'s engine block.',
        warning: 'Attaching to bare engine metal prevents any tiny sparks from igniting battery vapors.'
      },
      {
        title: 'Start the Good Car First, Then Yours',
        desc: 'Start the booster car and let it run for 3 minutes to send charge over. Now start your vehicle. Once running, disconnect cables in the EXACT REVERSE order! Keep your engine running for at least 30 minutes to recharge.',
        warning: 'Do not shut off your car right after jump-starting, or the alternator won\'t have time to recharge the battery.'
      }
    ]
  },
  overheat: {
    icon: '🌡️',
    title: 'Engine Overheating & Steam Protocol',
    meta: 'Time: 20-30 min wait • High Scald Hazard',
    videoUrl: 'https://www.youtube.com/results?search_query=how+to+fix+overheating+car+emergency+roadside',
    steps: [
      {
        title: 'Pull Over Immediately & Shut Off Engine',
        desc: 'If the temperature needle hits the red zone or steam rises from the hood, switch your hazard lights on, pull safely onto the shoulder, and turn the engine OFF right away. Driving an overheated engine can warp the cylinder head in minutes!',
        warning: 'Do not attempt to limp the car to a far away station while the temperature gauge is pinned in the red zone.'
      },
      {
        title: 'DO NOT Open the Radiator Cap While Hot!',
        desc: 'The cooling system is under boiling pressure. If you twist that metal cap open, superheated steam and scalding coolant will erupt like a geyser. Step back and wait 20-30 minutes until the hood is cool to the touch.',
        warning: 'Wait until the engine is completely cool before attempting to inspect the radiator.'
      },
      {
        title: 'Inspect the Coolant Reservoir & Ground',
        desc: 'Look underneath the front bumper. If you see a puddle of bright green, orange, or pink liquid, a radiator hose has split or the water pump is leaking.',
        warning: 'Never pour ice-cold water directly into a hot engine — the thermal shock can crack the iron block!'
      },
      {
        title: 'Top Up Coolant or Clean Water',
        desc: 'Once cooled, slowly open the transparent plastic expansion tank and top up with coolant or clean drinking water to the MAX line. If liquid immediately pours out the bottom, call a tow truck.',
        warning: 'If you must drive a short distance to a garage, turn the AC off and blast the cabin heater to maximum to help bleed engine heat.'
      }
    ]
  },
  smoke: {
    icon: '🔥',
    title: 'Smoke or Burning Odor Emergency Response',
    meta: 'Immediate Action Required • High Hazard',
    videoUrl: 'https://www.youtube.com/results?search_query=car+engine+smoking+what+to+do+emergency',
    steps: [
      {
        title: 'Turn Off Ignition & Evacuate Passengers',
        desc: 'Pull over immediately away from dry bushes or tall grass. Turn off the ignition key, unbuckle everybody, and move at least 30 meters away behind the road guardrail.',
        warning: 'Your life and safety are the number one priority. Metal can always be repaired or replaced!'
      },
      {
        title: 'Identify the Scent from a Safe Distance',
        desc: '• Sweet syrup smell = Radiator coolant steam (not fire).\n• Burning rubber/plastic = Electrical short or alternator belt friction.\n• Heavy acrid blue smoke = Engine oil dripping onto the hot exhaust pipe.',
        warning: 'If you smell raw petrol/fuel, do not use lighters or open flames anywhere near the vehicle.'
      },
      {
        title: 'Handle Under-Hood Fire Precautions',
        desc: 'If you see smoke coming from the front, pop the hood latch from inside the cabin, but DO NOT swing the hood fully open. A rush of fresh oxygen can fan an ember into flame. Aim fire extinguisher through the grille.',
        warning: 'If you see active flames inside the engine bay, do not attempt DIY firefighting. Dial 112 immediately!'
      }
    ]
  },
  brakes: {
    icon: '🛑',
    title: 'Spongy or Failing Brakes Emergency Procedure',
    meta: 'Moving Vehicle Emergency • Immediate Technique',
    videoUrl: 'https://www.youtube.com/results?search_query=what+to+do+if+brakes+fail+while+driving',
    steps: [
      {
        title: 'Rapidly Pump the Brake Pedal',
        desc: 'If the brake pedal sinks down to the floor, start pumping the pedal hard and fast. Dual-circuit master cylinders often build back residual hydraulic pressure when pumped repeatedly.',
        warning: 'Don\'t give up after one push. Continuous hard pumping can restore up to 25% braking force.'
      },
      {
        title: 'Downshift Gears for Engine Braking',
        desc: 'In a manual car, shift down sequentially: 4th -> 3rd -> 2nd -> 1st. In an automatic car, shift into "L" (Low) or Manual mode and tap downshift. Engine compression will rapidly slow the car.',
        warning: 'Do not slam directly into Reverse or Park while the vehicle is traveling fast.'
      },
      {
        title: 'Gently Modulate the Handbrake',
        desc: 'Hold down the handbrake release button with your thumb and pull up smoothly. If the rear tires begin to skid, release slightly, then modulate again.',
        warning: 'Never jerk the handbrake violently at high speed, as this can cause the car to fishtail or spin.'
      },
      {
        title: 'Steer onto Incline or Gravel Shoulder',
        desc: 'Turn hazard lights on, honk your horn to alert others, and steer onto the gravel shoulder, grass, or an uphill incline to scrub off remaining speed. Switch off the key only after coming to a full stop.',
        warning: 'Never turn the key off while traveling fast — turning off the key can lock the steering wheel on many cars!'
      }
    ]
  },
  fuel: {
    icon: '⛽',
    title: 'Out of Fuel / Engine Misfire Protocol',
    meta: 'Time: ~10 min • Highway safety',
    videoUrl: 'https://www.youtube.com/results?search_query=what+to+do+if+car+runs+out+of+gas+on+highway',
    steps: [
      {
        title: 'Coast Safely to the Road Shoulder',
        desc: 'When the engine runs out of fuel, power steering and brake boost will shut off. The steering wheel will feel heavy and the brake pedal will feel stiff. Grip the wheel firmly with both hands and coast smoothly onto the shoulder.',
        warning: 'Push the brake pedal firmly with your whole leg — it requires more foot effort without engine vacuum assist.'
      },
      {
        title: 'Locate Nearest Fuel Station Below',
        desc: 'Tap the "Petrol / Diesel Pumps" button below to find the closest fuel station. On National Highways, dial 1033 — patrol vehicles often carry emergency fuel supplies.',
        warning: 'Never use unapproved plastic soda bottles or open containers to carry fuel.'
      },
      {
        title: 'Diesel Priming Procedure',
        desc: 'If your car is a Diesel, running dry introduces air into the fuel lines. After refilling, turn the ignition key to ON (without cranking) 4 to 5 times for 10 seconds each to let the electric lift pump purge air bubbles.',
        warning: 'Avoid continuous starter cranking on an empty diesel line, as it drains the battery.'
      }
    ]
  }
};

// --- Offline Emergency Fallback Knowledge for AI Chat ---
const OFFLINE_DIAGNOSTICS = [
  {
    triggers: ['click', 'won\'t start', 'starter', 'crank', 'battery', 'dead'],
    response: `**Diagnostic Assessment: Weak Battery or Starter Relay**\n\n1. **Check Battery Clamps**: Inspect under the hood to see if terminal clamps are loose or coated with white/green corrosion.\n2. **Sound Check**:\n   - Rapid *click-click-click*: Battery has low voltage, unable to turn the starter.\n   - Complete silence: Battery is completely drained or main fuse has blown.\n3. **Action**: Follow our **Dead Battery & Jumper Cable Guide** above. If you don't have cables, tap nearby mechanics below.`
  },
  {
    triggers: ['tire', 'tyre', 'puncture', 'flat', 'blowout', 'wobble'],
    response: `**Diagnostic Assessment: Tire Pressure Loss / Puncture**\n\n1. **Safety First**: Pull over onto level, firm shoulder ground away from traffic. Turn hazard lights ON.\n2. **Inspect the Tire**: Look for nails, sidewall cracks, or rim damage.\n3. **Action**: Follow our **Flat Tire Replacement Guide** step-by-step. If you have no spare or jack, tap **Tire Puncture Shops** below to find nearby assistance.`
  },
  {
    triggers: ['heat', 'overheat', 'temperature', 'red', 'coolant', 'steam'],
    response: `**Urgent Warning: Engine Overheating (High Risk)**\n\n1. **Stop Driving Immediately**: Turn off the engine right now to prevent cylinder head damage.\n2. **DO NOT OPEN RADIATOR CAP**: Wait at least 25 minutes for boiling steam pressure to dissipate.\n3. **Inspect**: Check for coolant puddles underneath. Once cooled, top up with coolant or clean water to reach a repair shop.`
  },
  {
    triggers: ['smoke', 'smell', 'fire', 'burn', 'plastic'],
    response: `**Critical Alert: Potential Electrical or Thermal Hazard**\n\n1. **Evacuate**: Turn off ignition immediately, get all occupants out, and stand 30 meters away behind the guardrail.\n2. **Identify Odor**:\n   - Sweet syrup smell = Coolant steam.\n   - Burning plastic/rubber = Electrical short or belt slip.\n   - Acrid blue smoke = Oil leaking onto hot exhaust.\n3. **If flames are visible**: Dial **112** immediately. Do not attempt DIY firefighting.`
  },
  {
    triggers: ['brake', 'spongy', 'soft', 'stopping', 'pedal'],
    response: `**Emergency Warning: Hydraulic Brake Pressure Loss**\n\n1. **Pump the Pedal**: Rapid, hard pumping can rebuild residual hydraulic pressure.\n2. **Downshift**: Shift into lower gears (4->3->2->1 or Low mode) for engine braking.\n3. **Handbrake**: Modulate gently while holding the release button.\n4. **Action**: Stop and do not drive further. Call a flatbed tow truck from our Towing section below.`
  }
];

// --- Application State ---
let userCoords = null;
let sirenOscillator = null;
let audioContext = null;

// --- Initialize DOM & Events ---
document.addEventListener('DOMContentLoaded', () => {
  initSettings();
  initScenarioCards();
  initChatBot();
  initLocation();
  initSosTools();
  initSpeechRecognition();
});

// --- Settings Management (Sarvam API Key) ---
function initSettings() {
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsBtn = document.getElementById('closeSettingsBtn');
  const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
  const testApiBtn = document.getElementById('testApiBtn');
  const apiKeyInput = document.getElementById('apiKeyInput');
  const modelSelect = document.getElementById('modelSelect');
  const statusMsg = document.getElementById('apiStatusMessage');

  const savedKey = localStorage.getItem('sarvam_api_key');
  if (savedKey) apiKeyInput.value = savedKey;

  const savedModel = localStorage.getItem('sarvam_model');
  if (savedModel) modelSelect.value = savedModel;

  settingsBtn.addEventListener('click', () => {
    settingsModal.classList.remove('hidden');
    statusMsg.className = 'status-msg hidden';
  });

  closeSettingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
  });

  saveApiKeyBtn.addEventListener('click', () => {
    const key = apiKeyInput.value.trim();
    if (key) {
      localStorage.setItem('sarvam_api_key', key);
      localStorage.setItem('sarvam_model', modelSelect.value);
      showStatus(statusMsg, 'Sarvam AI key saved successfully in browser storage!', 'success');
      setTimeout(() => settingsModal.classList.add('hidden'), 1200);
    } else {
      localStorage.removeItem('sarvam_api_key');
      showStatus(statusMsg, 'Key cleared. App will use offline emergency knowledge base.', 'error');
    }
  });

  testApiBtn.addEventListener('click', async () => {
    const key = apiKeyInput.value.trim();
    if (!key) {
      showStatus(statusMsg, 'Please enter an API key to test.', 'error');
      return;
    }
    showStatus(statusMsg, 'Testing connection with Sarvam AI...', '');
    try {
      const response = await fetch('https://api.sarvam.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-subscription-key': key
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: 'Say "Connection successful" in 2 words.' }],
          model: modelSelect.value || 'sarvam-105b-conversations',
          max_tokens: 15
        })
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || 'Connected!';
        showStatus(statusMsg, `Success: ${reply}`, 'success');
      } else {
        const err = await response.json().catch(() => ({}));
        showStatus(statusMsg, `Error (${response.status}): ${err.message || 'Authentication failed. Check your key.'}`, 'error');
      }
    } catch (e) {
      showStatus(statusMsg, `Network Error: ${e.message}`, 'error');
    }
  });
}

function showStatus(element, text, type) {
  element.textContent = text;
  element.className = `status-msg ${type}`;
  element.classList.remove('hidden');
}

// --- Emergency Scenario Guides ---
function initScenarioCards() {
  const cards = document.querySelectorAll('.scenario-card');
  const guideSection = document.getElementById('stepGuideSection');
  const guideIcon = document.getElementById('guideIcon');
  const guideTitle = document.getElementById('guideTitle');
  const guideTime = document.getElementById('guideTime');
  const guideStepsContainer = document.getElementById('guideStepsContainer');
  const closeGuideBtn = document.getElementById('closeGuideBtn');
  const readAloudBtn = document.getElementById('readAloudBtn');
  const videoTutorialBtn = document.getElementById('videoTutorialBtn');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const issue = card.getAttribute('data-issue');
      const data = EMERGENCY_GUIDES[issue];
      if (!data) return;

      guideIcon.textContent = data.icon;
      guideTitle.textContent = data.title;
      guideTime.textContent = data.meta;
      if (videoTutorialBtn && data.videoUrl) {
        videoTutorialBtn.href = data.videoUrl;
      }

      guideStepsContainer.innerHTML = data.steps.map((s, index) => `
        <div class="step-card">
          <div class="step-num">${index + 1}</div>
          <div class="step-content">
            <h4>${escapeHtml(s.title)}</h4>
            <p>${escapeHtml(s.desc)}</p>
            ${s.warning ? `<div class="step-warning">⚠️ <strong>Safety Warning:</strong> ${escapeHtml(s.warning)}</div>` : ''}
          </div>
        </div>
      `).join('');

      guideSection.classList.remove('hidden');
      guideSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      readAloudBtn.onclick = () => {
        speakGuideSteps(data.title, data.steps);
      };
    });
  });

  closeGuideBtn.addEventListener('click', () => {
    guideSection.classList.add('hidden');
    stopSpeaking();
  });
}

// --- Audio Guide (Speech Synthesis) ---
function speakGuideSteps(title, steps) {
  if (!('speechSynthesis' in window)) {
    alert('Voice narration is not supported on this browser.');
    return;
  }
  stopSpeaking();

  let script = `${title}. `;
  steps.forEach((s, i) => {
    script += `Step ${i + 1}: ${s.title}. ${s.desc} `;
  });

  const utterance = new SpeechSynthesisUtterance(script);
  utterance.rate = 0.92;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// --- AI Diagnostic Chat Engine ---
function initChatBot() {
  const chatForm = document.getElementById('chatForm');
  const userInput = document.getElementById('userInput');
  const chatHistory = document.getElementById('chatHistory');
  const quickChips = document.querySelectorAll('.chip-btn');

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.getAttribute('data-text');
      userInput.value = text;
      chatForm.dispatchEvent(new Event('submit'));
    });
  });

  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = userInput.value.trim();
    if (!query) return;

    appendMessage('user', query);
    userInput.value = '';

    const typingId = appendTypingIndicator();

    try {
      const reply = await queryDiagnosisEngine(query);
      removeTypingIndicator(typingId);
      appendMessage('bot', reply);
    } catch (err) {
      removeTypingIndicator(typingId);
      appendMessage('bot', `⚠️ Could not complete diagnostic request: ${err.message}. If in danger, please call emergency (112) or highway patrol (1033) immediately.`);
    }
  });
}

async function queryDiagnosisEngine(query) {
  const apiKey = localStorage.getItem('sarvam_api_key');
  const model = localStorage.getItem('sarvam_model') || 'sarvam-105b-conversations';

  if (apiKey) {
    try {
      const res = await fetch('https://api.sarvam.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-subscription-key': apiKey
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: (
                "You are AutoResQ, a calm, reassuring, and experienced roadside vehicle diagnostic assistant. "
                + "Stranded drivers are often anxious. Reassure them first ('Take a deep breath, we will get this figured out step-by-step'). "
                + "Provide clear, concise, step-by-step diagnostic checks and practical DIY fix instructions in simple language without complicated jargon. "
                + "Always emphasize safety first (hazards, moving off roadway, scald/steam dangers, fire evacuation). "
                + "If the situation is dangerous, advise them to stand safely behind the guardrail and call 112 or a tow service."
              )
            },
            {
              role: 'user',
              content: query
            }
          ],
          model: model,
          temperature: 0.35,
          max_tokens: 500
        })
      });

      if (res.ok) {
        const data = await res.json();
        return data.choices?.[0]?.message?.content || 'Diagnostic check complete. Please inspect carefully.';
      }
    } catch (e) {
      console.warn('Sarvam API call failed, falling back to local emergency engine:', e);
    }
  }

  // Fallback intelligent diagnostic search
  const lower = query.toLowerCase();
  for (const item of OFFLINE_DIAGNOSTICS) {
    if (item.triggers.some(t => lower.includes(t))) {
      return item.response;
    }
  }

  return `**Emergency Assessment:**\n\n1. **Safety First**: Engage hazard lights, ensure you are in a safe pull-off zone, and keep all passengers behind the guardrail.\n2. **Dashboard Check**: Are there any red (Stop Immediately) or amber (Caution) warning lights illuminated?\n3. **Recommended Action**: Select one of our emergency guides above (Flat Tire, Dead Battery, Overheating, Smoke, Brakes) or tap below to scan nearby mechanics and towing services.\n\n*(Tip: Add your Sarvam API Key in Settings ⚙️ to enable deep AI diagnostics!)*`;
}

function appendMessage(sender, text) {
  const chatHistory = document.getElementById('chatHistory');
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-message ${sender}-message`;
  
  const formattedText = formatMarkdown(text);
  const avatar = sender === 'user' ? '👤' : '🤖';

  msgDiv.innerHTML = `
    <div class="msg-avatar">${avatar}</div>
    <div class="msg-body">
      ${formattedText}
      ${sender === 'bot' ? `<button class="btn-voice-mini" onclick="speakText(this)" title="Listen to response">🔊 Listen</button>` : ''}
    </div>
  `;
  chatHistory.appendChild(msgDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

function speakText(btn) {
  const body = btn.parentElement;
  const clone = body.cloneNode(true);
  const miniBtn = clone.querySelector('.btn-voice-mini');
  if (miniBtn) miniBtn.remove();
  const text = clone.innerText;

  if ('speechSynthesis' in window) {
    stopSpeaking();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    u.pitch = 1.0;
    window.speechSynthesis.speak(u);
  }
}

function appendTypingIndicator() {
  const chatHistory = document.getElementById('chatHistory');
  const id = 'typing-' + Date.now();
  const div = document.createElement('div');
  div.id = id;
  div.className = 'chat-message bot-message';
  div.innerHTML = `
    <div class="msg-avatar">🤖</div>
    <div class="msg-body" style="font-style: italic; color: var(--text-muted);">
      Diagnosing vehicle condition with Sarvam AI...
    </div>
  `;
  chatHistory.appendChild(div);
  chatHistory.scrollTop = chatHistory.scrollHeight;
  return id;
}

function removeTypingIndicator(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function formatMarkdown(text) {
  let html = escapeHtml(text);
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/`(.*?)`/g, '<code>$1</code>');
  html = html.replace(/\n\n/g, '</p><p>');
  html = html.replace(/\n/g, '<br>');
  return `<p>${html}</p>`;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// --- Voice Input (Speech Recognition) ---
function initSpeechRecognition() {
  const voiceBtn = document.getElementById('voiceInputBtn');
  const userInput = document.getElementById('userInput');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    voiceBtn.title = 'Voice input not supported in this browser';
    voiceBtn.style.opacity = '0.5';
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-IN';

  let isRecording = false;

  voiceBtn.addEventListener('click', () => {
    if (isRecording) {
      recognition.stop();
      return;
    }
    try {
      recognition.start();
      voiceBtn.classList.add('recording');
      userInput.placeholder = 'Listening... Speak your issue now';
      isRecording = true;
    } catch (e) {
      console.warn('Speech recognition start failed:', e);
    }
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    userInput.value = transcript;
    document.getElementById('chatForm').dispatchEvent(new Event('submit'));
  };

  recognition.onerror = () => {
    voiceBtn.classList.remove('recording');
    userInput.placeholder = 'Describe what happened...';
    isRecording = false;
  };

  recognition.onend = () => {
    voiceBtn.classList.remove('recording');
    userInput.placeholder = 'Describe what happened...';
    isRecording = false;
  };
}

// --- Geolocation & Nearby Services ---
function initLocation() {
  const detectBtn = document.getElementById('detectLocBtn');
  const statusText = document.getElementById('locStatusText');
  const coordsText = document.getElementById('locCoordsText');

  detectBtn.addEventListener('click', () => {
    fetchLiveLocation(statusText, coordsText);
  });

  fetchLiveLocation(statusText, coordsText);
}

function fetchLiveLocation(statusText, coordsText) {
  if (!('geolocation' in navigator)) {
    statusText.textContent = 'Geolocation not supported';
    coordsText.textContent = 'Using global query for nearby workshops';
    return;
  }

  statusText.textContent = 'Detecting your GPS location...';

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      userCoords = {
        lat: pos.coords.latitude.toFixed(5),
        lon: pos.coords.longitude.toFixed(5)
      };

      statusText.textContent = `Live GPS: ${userCoords.lat}, ${userCoords.lon}`;
      coordsText.textContent = 'Accurate within ~' + Math.round(pos.coords.accuracy) + ' meters';

      updateNearbyLinks(userCoords.lat, userCoords.lon);
    },
    (err) => {
      console.warn('Geolocation error:', err);
      statusText.textContent = 'GPS permission needed';
      coordsText.textContent = 'Click "Refresh GPS" or allow location in your browser bar.';
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function updateNearbyLinks(lat, lon) {
  const linkMechanic = document.getElementById('linkMechanic');
  const linkPuncture = document.getElementById('linkPuncture');
  const linkTow = document.getElementById('linkTow');
  const linkFuel = document.getElementById('linkFuel');

  linkMechanic.href = `https://www.google.com/maps/search/car+repair+mechanic/@${lat},${lon},14z`;
  linkPuncture.href = `https://www.google.com/maps/search/car+tire+puncture+repair/@${lat},${lon},14z`;
  linkTow.href = `https://www.google.com/maps/search/tow+truck+roadside+assistance/@${lat},${lon},14z`;
  linkFuel.href = `https://www.google.com/maps/search/petrol+pump+gas+station/@${lat},${lon},14z`;
}

// --- Emergency Roadside SOS Tools (Strobe & Siren) ---
function initSosTools() {
  const sosAlertBtn = document.getElementById('sosAlertBtn');
  const strobeModal = document.getElementById('strobeModal');
  const stopStrobeBtn = document.getElementById('stopStrobeBtn');
  const sirenSoundBtn = document.getElementById('sirenSoundBtn');

  sosAlertBtn.addEventListener('click', () => {
    strobeModal.classList.remove('hidden');
    if ('wakeLock' in navigator) {
      navigator.wakeLock.request('screen').catch(() => {});
    }
  });

  stopStrobeBtn.addEventListener('click', () => {
    strobeModal.classList.add('hidden');
    stopSiren();
    sirenSoundBtn.textContent = '🔊 Toggle Siren';
  });

  sirenSoundBtn.addEventListener('click', () => {
    if (sirenOscillator) {
      stopSiren();
      sirenSoundBtn.textContent = '🔊 Toggle Siren';
    } else {
      startSiren();
      sirenSoundBtn.textContent = '🔇 Stop Siren';
    }
  });
}

function startSiren() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioCtx();
    sirenOscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    sirenOscillator.type = 'sawtooth';
    sirenOscillator.frequency.setValueAtTime(600, audioContext.currentTime);

    const now = audioContext.currentTime;
    for (let i = 0; i < 30; i++) {
      sirenOscillator.frequency.exponentialRampToValueAtTime(1100, now + i * 0.8 + 0.4);
      sirenOscillator.frequency.exponentialRampToValueAtTime(600, now + i * 0.8 + 0.8);
    }

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    sirenOscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    sirenOscillator.start();
  } catch (e) {
    console.warn('Audio siren creation error:', e);
  }
}

function stopSiren() {
  if (sirenOscillator) {
    try {
      sirenOscillator.stop();
      sirenOscillator.disconnect();
    } catch (e) {}
    sirenOscillator = null;
  }
  if (audioContext) {
    try { audioContext.close(); } catch (e) {}
    audioContext = null;
  }
}
