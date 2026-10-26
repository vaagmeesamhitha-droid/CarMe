// AutoResQ — Roadside Emergency Diagnostics & Assistant
// Powered by Sarvam AI (sarvam-105b-conversations)

// --- Built-in Step-by-Step Emergency Guides ---
const EMERGENCY_GUIDES = {
  puncture: {
    icon: '🛞',
    title: 'Flat Tire Replacement & Safety Guide',
    meta: 'Time: ~15-20 min • Tools: Jack, Lug Wrench, Spare Tire (Donut/Full)',
    steps: [
      {
        title: 'Park on Level, Firm Ground',
        desc: 'Engage hazard lights immediately. Pull as far off the road as possible. Put the gear in Park (automatic) or 1st/Reverse (manual). Engage handbrake completely.',
        warning: 'NEVER change a tire on a slope or soft dirt. The jack can slip!'
      },
      {
        title: 'Loosen Lug Nuts Before Jacking Up',
        desc: 'Take out the wrench. Loosen the lug nuts by turning counter-clockwise (Left = Loose) about 1 full turn. DO NOT remove them completely yet.',
        warning: 'Keep the tire firmly on the ground while breaking the tight nuts.'
      },
      {
        title: 'Position the Jack at Reinforced Pinch Weld',
        desc: 'Look underneath the vehicle body near the flat tire for the metal notch/reinforcement point. Position the jack and raise until the flat wheel is 2-3 inches off the ground.',
        warning: 'NEVER place the jack against the plastic rocker panel or floor pan.'
      },
      {
        title: 'Swap with Spare & Hand-Tighten Nuts',
        desc: 'Unscrew the lug nuts completely, remove the flat wheel, and mount the spare. Screw on the lug nuts by hand until snug.',
        warning: 'Do not kick or shake the vehicle while it is elevated on the jack.'
      },
      {
        title: 'Lower Car & Torque Tighten in Star Pattern',
        desc: 'Lower the car slowly until the tire touches the ground. Use the wrench to tighten the nuts fully in a crisscross/star pattern to ensure even clamping.',
        warning: 'Max speed on a temporary donut spare is 80 km/h (50 mph).'
      }
    ]
  },
  battery: {
    icon: '🔋',
    title: 'Dead Battery Diagnosis & Jumpstart Procedure',
    meta: 'Time: ~10 min • Tools: Jumper Cables, Booster Vehicle or Jump Pack',
    steps: [
      {
        title: 'Diagnose the Starter Symptom',
        desc: 'Turn the key. If you hear rapid clicking: battery is weak. If total silence & dashboard lights dim: battery is completely drained or terminals are loose/corroded.',
        warning: 'Ensure both cars are turned off before connecting cables.'
      },
      {
        title: 'Connect RED (+) to Dead Battery Positive',
        desc: 'Attach one RED clamp to the positive (+) terminal of the dead car battery. Positive terminal usually has a red plastic cap.',
        warning: 'Never let the red and black clamp heads touch each other!'
      },
      {
        title: 'Connect RED (+) to Good Battery Positive',
        desc: 'Attach the other RED clamp to the positive (+) terminal of the donor/booster car battery.',
        warning: 'Ensure clean metal contact without dirt or severe corrosion.'
      },
      {
        title: 'Connect BLACK (-) to Good Battery Negative',
        desc: 'Attach one BLACK clamp to the negative (-) terminal of the donor car battery.',
        warning: 'Check that cables are clear of engine radiator fans and accessory belts.'
      },
      {
        title: 'Connect BLACK (-) to Unpainted Metal Ground (Dead Car)',
        desc: 'Attach the final BLACK clamp to an unpainted metal bracket or engine bolt on the dead vehicle, NOT the negative terminal.',
        warning: 'Connecting directly to the dead negative terminal can spark and ignite battery vapors.'
      },
      {
        title: 'Start Donor Car, Wait 3 Mins, Then Start Dead Car',
        desc: 'Run donor car engine at ~2000 RPM for 3 minutes. Then crank the dead car. Once running, disconnect cables in the EXACT REVERSE order.',
        warning: 'Drive the jumped car for at least 30 minutes to allow the alternator to recharge.'
      }
    ]
  },
  overheat: {
    icon: '🌡️',
    title: 'Engine Overheating & Steam Protocol',
    meta: 'Time: 20-30 min wait • Risk Level: HIGH (Scald Hazard)',
    steps: [
      {
        title: 'Pull Over Immediately & Shut Off Engine',
        desc: 'Turn on hazard lights, roll down windows to check for smoke vs steam, pull over safely, and switch off ignition immediately to prevent engine seizure.',
        warning: 'Driving with an overheated engine for even 2 minutes can warp the cylinder head and blow the head gasket!'
      },
      {
        title: 'DO NOT Open the Radiator Cap While Hot!',
        desc: 'The cooling system is under intense boiling pressure. Opening the radiator cap will spray scalding coolant onto your face and hands.',
        warning: 'Wait at least 20-30 minutes until the engine block has cooled down.'
      },
      {
        title: 'Check Radiator Coolant Reservoir & Fan',
        desc: 'Inspect the transparent plastic expansion tank. If dry, check underneath for green/orange puddles (radiator hose burst or water pump leak).',
        warning: 'Never pour cold water into a boiling hot engine; rapid thermal shock can crack the engine block.'
      },
      {
        title: 'Top Up Coolant / Clean Water & Drive to Mechanic',
        desc: 'Once cooled to the touch, open the overflow tank and top up with 50/50 coolant or clean drinking water. If coolant leaks out immediately, call a tow truck.',
        warning: 'Keep the AC OFF and turn heater to MAXIMUM if temperature rises while driving to workshop.'
      }
    ]
  },
  smoke: {
    icon: '🔥',
    title: 'Smoke or Burning Odor Emergency Response',
    meta: 'Immediate Action Required • Risk Level: EXTREME',
    steps: [
      {
        title: 'Stop Vehicle Safely & Evacuate Passengers',
        desc: 'Pull over immediately away from dry grass or bushes. Turn off the ignition, disembark all occupants, and move at least 30 meters upwind from the car.',
        warning: 'Vehicle fires can accelerate rapidly. Life safety comes first!'
      },
      {
        title: 'Identify Smoke Type and Color',
        desc: 'White steam with sweet maple syrup odor = Radiator coolant. Blue/gray thick smoke = Motor oil on hot exhaust. Black acrid smoke with ozone/plastic smell = Electrical wire short.',
        warning: 'If electrical smoke is smelled, pop hood release from inside but DO NOT open wide immediately.'
      },
      {
        title: 'Handle Under-Hood Fire Precautions',
        desc: 'If fire is suspected, never throw the hood fully open (oxygen rush will burst flames). Spray fire extinguisher through the front grille or slight gap.',
        warning: 'If flames are visible inside engine bay, call 112 immediately and do not attempt DIY firefighting.'
      }
    ]
  },
  brakes: {
    icon: '🛑',
    title: 'Spongy or Failing Brakes Emergency Procedure',
    meta: 'Moving Vehicle Emergency • Immediate Stopping Technique',
    steps: [
      {
        title: 'Rapidly Pump the Brake Pedal',
        desc: 'If the brake pedal sinks to the floor, pump it quickly and repeatedly. Dual-circuit master cylinders can build residual hydraulic pressure.',
        warning: 'Do not give up after one push; continuous pumping often restores 20-30% braking force.'
      },
      {
        title: 'Downshift Gears (Engine Braking)',
        desc: 'Downshift sequentially through gears (4th -> 3rd -> 2nd -> 1st) in manual or shift to L / Sport / Manual mode in automatic to let engine compression slow the vehicle.',
        warning: 'Do not slam directly into Reverse or Park while traveling fast.'
      },
      {
        title: 'Gradually Apply Emergency Handbrake',
        desc: 'Hold down the handbrake button and pull gently/progressively. If wheels lock or skid, release slightly and modulate.',
        warning: 'Yanking the handbrake abruptly at high speeds can cause the vehicle to spin out.'
      },
      {
        title: 'Steer to Road Shoulder or Incline',
        desc: 'Turn hazard lights on and steer onto grass, gravel shoulder, or uphill incline to bleed remaining momentum. Turn ignition off only after car stops.',
        warning: 'Turning off the key while moving locks the steering wheel on most modern cars!'
      }
    ]
  },
  fuel: {
    icon: '⛽',
    title: 'Out of Fuel / Engine Misfire Protocol',
    meta: 'Time: ~10 min • Safety: Flammable Vapor Precautions',
    steps: [
      {
        title: 'Coast Safely to the Roadside',
        desc: 'When engine sputters or dies from empty fuel, you will lose power steering and power brake boost. Grip wheel firmly and coast safely off the lane.',
        warning: 'Brake pedal will feel hard; push with both feet if needed.'
      },
      {
        title: 'Locate Nearest Fuel Station',
        desc: 'Use the "Nearest Petrol Pumps" button below to find the closest station. If traveling on highways, call National Highway Authority (1033) for emergency petrol can support.',
        warning: 'Never carry open containers or plastic soda bottles for fuel.'
      },
      {
        title: 'Diesel Priming / Electric Car Check',
        desc: 'For Diesel vehicles: after refilling, cycle the ignition key 4-5 times without cranking to let the electric fuel pump purge air bubbles from the common rail.',
        warning: 'Extended cranking with air in the diesel fuel line can drain the battery.'
      }
    ]
  }
};

// --- Offline Emergency Fallback Knowledge for AI Chat ---
const OFFLINE_DIAGNOSTICS = [
  {
    triggers: ['click', 'won\'t start', 'starter', 'crank', 'battery', 'dead'],
    response: `**Diagnostic Assessment: Electrical / Battery Weakness**\n\n1. **Check Battery Terminals**: Open hood, check if positive/negative clamps are loose or coated with white/green powdery corrosion.\n2. **Identify Sound**:\n   - Rapid *click-click-click*: Starter solenoid is trying to engage, but battery has insufficient amperage.\n   - Single click or total silence: Starter relay failure or completely drained battery.\n3. **Quick Action**: Try jump-starting using our *Won't Start / Dead Battery* guide above, or tap nearby mechanics if no jumper cables are available.`
  },
  {
    triggers: ['tire', 'tyre', 'puncture', 'flat', 'blowout', 'wobble'],
    response: `**Diagnostic Assessment: Tire Pressure Loss / Puncture**\n\n1. **Immediate Safety**: Pull over onto a flat, solid shoulder away from speeding traffic. Turn hazard lights ON.\n2. **Inspect the Tire**: Look for nails, sidewall cracks, or rim separation.\n3. **Recommended Fix**: Use your spare wheel and jack following our step-by-step *Flat Tire Guide*. If you don't have a spare, tap *Tire Puncture Shops* below to find nearby puncture repair roadside services.`
  },
  {
    triggers: ['heat', 'overheat', 'temperature', 'red', 'coolant', 'steam'],
    response: `**Critical Diagnostic: Engine Overheating (High Risk)**\n\n1. **Stop Driving Immediately**: Pull over, engage handbrake, and shut off engine to save cylinder head from warping.\n2. **DO NOT OPEN RADIATOR CAP**: Wait at least 25 minutes for pressure to dissipate.\n3. **Check for Puddles**: Once cool, inspect coolant reservoir. If completely dry, add clean drinking water or coolant as an emergency measure to reach the nearest garage.`
  },
  {
    triggers: ['smoke', 'smell', 'fire', 'burn', 'plastic'],
    response: `**Urgent Warning: Potential Thermal / Electrical Hazard**\n\n1. **Immediate Action**: Turn off ignition immediately, get all passengers out, and step 30 meters away from the vehicle.\n2. **Smell Identification**:\n   - Sweet syrup smell: Radiator coolant boiling.\n   - Burning rubber/plastic: Electrical wire short or alternator belt friction.\n   - Acrid oil smoke: Oil leaking onto hot exhaust manifold.\n3. **If flames are visible**: Dial **112** immediately. Do not open the hood fully.`
  },
  {
    triggers: ['brake', 'spongy', 'soft', 'stopping', 'pedal'],
    response: `**Safety Warning: Hydraulic Brake System Issue**\n\n1. **Check Brake Fluid**: Inspect the small translucent reservoir with yellow cap near the firewall under the hood.\n2. **If Pedal Sinks**: Do NOT drive on open roads. Rapidly pump pedal 3-4 times to rebuild pressure, downshift for engine braking, and use the emergency handbrake gradually.\n3. **Action**: Call a flatbed tow truck from our Towing section below; driving with failing brakes is prohibited.`
  }
];

// --- Application State ---
let userCoords = null;
let currentGuideAudio = null;
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

  // Load existing key if stored
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
      showStatus(statusMsg, 'Sarvam API key saved successfully in browser storage!', 'success');
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

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const issue = card.getAttribute('data-issue');
      const data = EMERGENCY_GUIDES[issue];
      if (!data) return;

      guideIcon.textContent = data.icon;
      guideTitle.textContent = data.title;
      guideTime.textContent = data.meta;

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

      // Setup speech synthesis
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

// --- Text-to-Speech Helper ---
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
  utterance.rate = 0.95;
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

    // Append User Message
    appendMessage('user', query);
    userInput.value = '';

    // Typing indicator
    const typingId = appendTypingIndicator();

    try {
      const reply = await queryDiagnosisEngine(query);
      removeTypingIndicator(typingId);
      appendMessage('bot', reply);
    } catch (err) {
      removeTypingIndicator(typingId);
      appendMessage('bot', `⚠️ Could not complete diagnostic request: ${err.message}. Please check your connection or roadside helpline (112 / 1033).`);
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
              content: 'You are AutoResQ, an expert emergency roadside vehicle diagnostic assistant. The user is stranded with a car emergency. Prioritize personal safety first (hazards, moving off road, fire/steam dangers). Provide clear, concise, step-by-step diagnostic questions and DIY instructions. If the situation is dangerous, advise calling emergency services or towing.'
            },
            {
              role: 'user',
              content: query
            }
          ],
          model: model,
          temperature: 0.3,
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

  return `**Emergency Assessment Protocol:**\n\n1. **Safety First**: Engage hazard lights, ensure you are in a safe pull-off zone, and keep passengers behind the road safety guardrail.\n2. **Symptom Check**: Look for warning lights on the dashboard (Red = Stop Immediately; Amber = Drive with caution to garage).\n3. **Quick Assistance**: Check our top emergency guides (Puncture, Battery, Overheating, Smoke, Brakes) or tap below to scan nearby mechanics and 24/7 tow services.\n\n*(Tip: Add your Sarvam API Key in Settings ⚙️ to enable deep AI diagnostics!)*`;
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
    u.rate = 1.0;
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
    <div class="msg-body" style="font-style: italic; color: var(--text-secondary);">
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
  // Simple markdown conversion
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
  recognition.lang = 'en-IN'; // Indian English / Hindi friendly

  let isRecording = false;

  voiceBtn.addEventListener('click', () => {
    if (isRecording) {
      recognition.stop();
      return;
    }
    try {
      recognition.start();
      voiceBtn.classList.add('recording');
      userInput.placeholder = 'Listening... Speak your problem now';
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
    userInput.placeholder = 'Describe the issue with your car...';
    isRecording = false;
  };

  recognition.onend = () => {
    voiceBtn.classList.remove('recording');
    userInput.placeholder = 'Describe the issue with your car...';
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

  // Attempt automatic detection on load
  fetchLiveLocation(statusText, coordsText);
}

function fetchLiveLocation(statusText, coordsText) {
  if (!('geolocation' in navigator)) {
    statusText.textContent = 'Geolocation not supported';
    coordsText.textContent = 'Using global query for nearby workshops';
    return;
  }

  statusText.textContent = 'Scanning GPS coordinates...';

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
    // Lock screen wake if supported
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

    // Siren frequency modulation (wailing)
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
