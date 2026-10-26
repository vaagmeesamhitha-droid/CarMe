// AutoResQ — Dad's Roadside Emergency Care
// Powered by Sarvam AI (sarvam-105b-conversations)

// --- Homely Dad Roadside Emergency Guides ---
const EMERGENCY_GUIDES = {
  puncture: {
    icon: '🛞',
    title: 'Dad\'s Step-by-Step Flat Tire Replacement Guide',
    meta: 'Time: ~15-20 min • "Don\'t rush beta, work smart, not hard!"',
    steps: [
      {
        title: 'Pull Over & Keep Yourself Safe First',
        desc: 'Alright beta, first take a deep breath. Switch on your hazard lights so speeding cars can spot you. Pull as far onto the flat shoulder as possible. Put the car in Park (or 1st gear for manual), and pull the handbrake all the way up firmly!',
        warning: 'Never ever change a tire on a slope or soft mud, beta. The car can slide right off the jack!'
      },
      {
        title: 'Dad\'s Secret: Loosen the Lug Nuts BEFORE Jacking Up',
        desc: 'Grab the L-shaped wrench from your boot. Fit it on the lug nuts and turn counter-clockwise (Remember: Left = Loose, Right = Tight). If a nut is jammed tight, don\'t hurt your back — just place the wrench horizontally and step on it gently with your heel! Loosen each nut by one full turn, but don\'t take them off yet.',
        warning: 'Keep the wheel firmly on the road while loosening, otherwise the wheel will just spin uselessly in the air.'
      },
      {
        title: 'Position the Jack Under the Pinch Weld Notch',
        desc: 'Peek underneath near the flat tire. You will feel a small reinforced metal groove/notch along the frame. Place the jack head right into that notch. Now start turning the jack handle until the flat tire lifts about 2 to 3 inches off the ground.',
        warning: 'Careful beta! Never position the jack against the flat plastic body panel underneath — it will crack the plastic!'
      },
      {
        title: 'Swap with the Spare Tire',
        desc: 'Unscrew the loosened lug nuts with your fingers now and set them in a clean spot so they don\'t roll away. Slide the flat tire off and mount the spare tire. Screw all the nuts back on by hand until they feel snug against the wheel.',
        warning: 'Don\'t push or shake the car while it\'s balancing on the jack. Easy does it!'
      },
      {
        title: 'Lower the Car & Tighten in a Star Pattern',
        desc: 'Turn the jack to lower the car back onto the ground. Now use the wrench to give every lug nut a strong final tighten. Always tighten in a criss-cross star pattern (across from each other, not in a circle) so the wheel sits flush and true.',
        warning: 'Remember kiddo, if it\'s a small temporary donut spare, drive under 80 km/h until you visit a puncture shop!'
      }
    ]
  },
  battery: {
    icon: '🔋',
    title: 'Dad\'s Dead Battery & Jumper Cable Guide',
    meta: 'Time: ~10 min • "Happens to the best of us, beta. We\'ll jump it!"',
    steps: [
      {
        title: 'Listen to the Car\'s Complaint',
        desc: 'Turn the key and listen closely. Do you hear a rapid "click-click-click"? That means the battery has a little charge left, but not enough power to spin the starter. If you hear dead silence and the dashboard lights dim out completely, the battery is totally drained or the terminals are loose.',
        warning: 'Make sure both vehicles have their engines and headlights switched OFF before touching any cables.'
      },
      {
        title: 'Red to Dead Positive (+)',
        desc: 'Take the RED jumper cable clamp. Attach it firmly onto the POSITIVE (+) terminal of your dead battery. Look for the little red plastic cover or the "+" sign stamped into the battery plastic.',
        warning: 'Rule number one with jumper cables: NEVER let the red and black clamp heads touch each other!'
      },
      {
        title: 'Red to Donor Positive (+)',
        desc: 'Now walk over to the helping car. Clamp the other RED end onto the POSITIVE (+) terminal of the good battery. Make sure the metal teeth bite down well through any grime.',
        warning: 'Double check: RED is always POSITIVE. Don\'t mix them up!'
      },
      {
        title: 'Black to Donor Negative (-)',
        desc: 'Clamp one BLACK cable head onto the NEGATIVE (-) terminal of the good battery.',
        warning: 'Watch out for radiator fans and engine belts — keep cables dangling clear.'
      },
      {
        title: 'Black to Bare Metal on Your Car (NOT the Dead Battery!)',
        desc: 'Now for the other BLACK clamp: DO NOT attach it to the dead battery\'s negative terminal! Instead, clamp it onto an unpainted shiny metal bolt or bracket on your car\'s engine block.',
        warning: 'Batteries release tiny hydrogen vapors when draining. Attaching to bare metal prevents any sparks from causing a pop!'
      },
      {
        title: 'Start the Good Car First, Then Yours!',
        desc: 'Start the helping car and let it run for 3 minutes to send some juice over. Now try starting your car. Once your engine revs up happily, remove the cables in the EXACT REVERSE order! Keep your car running for at least 30 minutes so the alternator charges it up.',
        warning: 'Don\'t turn your car off immediately after jumping it, or you\'ll have to jump it all over again!'
      }
    ]
  },
  overheat: {
    icon: '🌡️',
    title: 'Dad\'s Overheating & Steam Safety Protocol',
    meta: 'Time: 20-30 min wait • "Patience beta, do not touch that cap!"',
    steps: [
      {
        title: 'Pull Over Right Now & Turn the Engine OFF!',
        desc: 'Whoa, look at that temperature gauge in the red zone! Put your hazards on, pull safely onto the shoulder, and switch the ignition OFF immediately. Driving an overheated engine for even 2 minutes can warp the engine head and blow a head gasket!',
        warning: 'Life of your engine is at stake here. Do not try to "limp" it home while it is in the red zone.'
      },
      {
        title: 'DO NOT Open That Radiator Cap, Beta!',
        desc: 'Listen to dad on this: that boiling radiator is under intense pressure right now. If you twist that metal cap, superheated steam and scalding coolant will explode out all over your face and hands! Your mom and I would be horrified. Step back and sit in the shade for 20-30 minutes.',
        warning: 'Seriously kiddo, keep your hands off the radiator cap until the hood is completely cool to the touch.'
      },
      {
        title: 'Inspect the Plastic Expansion Tank & Ground',
        desc: 'Once the hiss stops and it cools down, look underneath the front bumper. Do you see a puddle of bright green, pink, or orange water? That means a rubber hose split or the water pump gave out.',
        warning: 'Never pour freezing cold water directly into a scorching hot engine — the sudden temperature drop can crack the iron block!'
      },
      {
        title: 'Top Up with Clean Drinking Water or Coolant',
        desc: 'Once the engine feels barely warm to the touch, slowly open the transparent plastic coolant overflow tank. Pour in coolant or plain clean drinking water to reach the "MAX" line. If the water leaks right out onto the floor, call a tow truck.',
        warning: 'While driving slowly to the nearest garage, keep your AC off and blast the cabin heater to full — it pulls heat away from the engine!'
      }
    ]
  },
  smoke: {
    icon: '🔥',
    title: 'Dad\'s Smoke & Burning Odor Emergency Response',
    meta: 'Immediate Action Required • "Safety first, metal can be replaced!"',
    steps: [
      {
        title: 'Turn Off Ignition & Get Everyone Out of the Car!',
        desc: 'Pull over immediately away from dry bushes or tall grass. Turn off the ignition key, unbuckle everybody, and get all passengers out and behind the roadside guardrail at least 30 meters away.',
        warning: 'Never sit inside a vehicle that smells like burning electrical wire or fuel. Your safety is 100x more important than the car!'
      },
      {
        title: 'What Does the Odor Smell Like?',
        desc: 'Let\'s identify the scent from a safe distance:\n• Sweet syrup smell = Radiator coolant steam (not a fire).\n• Burning rubber/plastic = Electrical wire short or alternator belt slipping.\n• Thick blue smoke with burnt toast smell = Engine oil leaking onto hot exhaust pipe.',
        warning: 'If you smell raw petrol/gasoline fumes, do not turn on any phone flashlights or lighters nearby.'
      },
      {
        title: 'Fire Caution Under the Hood',
        desc: 'If you see wisps of smoke from the front, pop the hood latch from inside the cabin, but DO NOT fling the hood wide open! Rushing fresh oxygen can feed a small flame. If you have an extinguisher, aim through the front grille.',
        warning: 'If you see actual red flames inside the engine bay, do NOT play hero! Dial 112 immediately and keep your distance.'
      }
    ]
  },
  brakes: {
    icon: '🛑',
    title: 'Dad\'s Spongy or Failing Brakes Emergency Guide',
    meta: 'Moving Vehicle Emergency • "Stay calm, grip the wheel, let\'s stop safely!"',
    steps: [
      {
        title: 'Start Rapidly Pumping the Brake Pedal!',
        desc: 'If you step on the brake and it sinks all the way down to the carpet, don\'t panic! Start pumping the pedal hard and fast — pump, pump, pump! Most modern cars have dual hydraulic brake circuits, and fast pumping builds back up residual pressure.',
        warning: 'Don\'t freeze up after just one push. Continuous hard pumping often gets you 25% braking power back!'
      },
      {
        title: 'Downshift Gears (Engine Braking)',
        desc: 'Let the transmission do the hard work. In a manual car, shift down sequentially: 4th -> 3rd -> 2nd -> 1st. In an automatic car, slide the shifter into "L" (Low), "S" (Sport), or shift into Manual mode and tap the minus (-) gear.',
        warning: 'Do not slam the gearbox into Reverse or Park while the car is flying down the road!'
      },
      {
        title: 'Gently Modulate the Handbrake',
        desc: 'Hold down the little release button on your handbrake lever with your thumb so it doesn\'t lock, and slowly pull up on the lever. If you feel the back tires skid, ease off slightly, then pull again.',
        warning: 'Never yank the handbrake up violently at 80 km/h, or the rear of the car will spin around like a top!'
      },
      {
        title: 'Steer onto the Incline or Gravel Shoulder',
        desc: 'Flash your hazard lights, honk the horn to warn other cars, and guide the car onto the gravel shoulder, grass, or an uphill incline to scrub off speed. Turn off the key ONLY once the vehicle has come to a complete standstill.',
        warning: 'Never turn off the ignition key while the car is rolling fast! On many cars, turning the key off locks the steering wheel!'
      }
    ]
  },
  fuel: {
    icon: '⛽',
    title: 'Dad\'s Out of Fuel / Engine Misfire Protocol',
    meta: 'Time: ~10 min • "Don\'t feel embarrassed, beta. Let\'s get you fuel!"',
    steps: [
      {
        title: 'Coast Gently Off the Main Carriageway',
        desc: 'When the engine stutters and dies from an empty tank, two things will happen immediately: the steering wheel will become heavy (power steering stops), and the brake pedal will feel hard. Grip the wheel firmly with both hands and coast smoothly onto the shoulder.',
        warning: 'Push the brake pedal firmly with your whole leg — it will feel stiff without engine vacuum assist.'
      },
      {
        title: 'Locate the Nearest Petrol Pump Below',
        desc: 'Tap the "Petrol / Diesel Pumps" button below to find the nearest station. If you are on a National Highway, call NHAI (1033) — highway patrol vans often carry emergency 5-liter fuel cans!',
        warning: 'Never use old plastic water bottles or unapproved containers to carry petrol — it\'s a major fire hazard.'
      },
      {
        title: 'For Diesel Cars: The Priming Trick',
        desc: 'If your car is a Diesel, running dry pulls air into the fuel rail. After adding fresh diesel, turn the ignition key to "ON" (lights turn on, but don\'t crank) 4 or 5 times for 10 seconds each. This lets the electric lift pump push out all the air bubbles.',
        warning: 'Don\'t crank a diesel engine continuously with air in the lines, or you will drain the starter battery.'
      }
    ]
  }
};

// --- Offline Reassuring Dad Fallback Knowledge for AI Chat ---
const OFFLINE_DAD_DIAGNOSTICS = [
  {
    triggers: ['click', 'won\'t start', 'starter', 'crank', 'battery', 'dead'],
    response: `**"Hey beta, sounds like our starter battery is feeling weak."**\n\n1. **Take a peek under the hood**: Are the battery terminal clamps loose or covered in that chalky white-green powder? Sometimes a gentle wiggle on the clamp gets it running!\n2. **What does the noise tell us?**:\n   - Rapid *click-click-click*: The starter is begging for juice, but the battery doesn't have enough amps.\n   - Complete dead silence: Battery is 100% drained or a main fuse blew.\n3. **What to do**: Check out my **Dead Battery & Jumper Cable Guide** above! If you have jumper cables, we'll get you moving in 5 minutes.`
  },
  {
    triggers: ['tire', 'tyre', 'puncture', 'flat', 'blowout', 'wobble'],
    response: `**"Don't worry kiddo, flat tires happen all the time!"**\n\n1. **First step**: Hazards ON, pull onto flat, firm ground. Never jack up a car on soft dirt or a slope!\n2. **Look for the nail**: See if there's a nail or screw in the tread, or if the rim is sitting on the rubber.\n3. **Dad's plan**: Follow my **Flat Tire Guide** above step-by-step. If you don't have a spare wheel or a jack, tap **Tire Puncture Shops** below and I'll find a puncture guy near your exact spot!`
  },
  {
    triggers: ['heat', 'overheat', 'temperature', 'red', 'coolant', 'steam'],
    response: `**"Whoa beta, stop the car right now! Engine heat is no joke!"**\n\n1. **Turn the engine off immediately**: Running hot for even 2 minutes will warp the engine cylinder head and cost a fortune.\n2. **DON'T TOUCH THE RADIATOR CAP**: I mean it! That steam is under pressure. Sit in the shade and drink some water for 25 minutes.\n3. **Check the ground**: Look for bright green or pink puddles underneath. Once cooled, we can top it up with clean drinking water to reach the nearest mechanic.`
  },
  {
    triggers: ['smoke', 'smell', 'fire', 'burn', 'plastic'],
    response: `**"Beta, safety first! Get yourself and everyone out of the car right now!"**\n\n1. **Evacuate**: Turn off the key, step out, and move 30 meters away behind the guardrail. Metal can be replaced, you cannot.\n2. **What's the smell?**:\n   - Sweet maple syrup = Coolant steam.\n   - Burning plastic/rubber = Electrical short.\n   - Heavy oily smoke = Oil dripping on exhaust.\n3. **If you see flames**: Do NOT open the hood wide. Dial **112** immediately!`
  },
  {
    triggers: ['brake', 'spongy', 'soft', 'stopping', 'pedal'],
    response: `**"Okay kiddo, take a deep breath. Let's handle these brakes carefully."**\n\n1. **Pump that pedal**: Fast pumping builds back residual hydraulic pressure.\n2. **Downshift gears**: Let the engine compression slow down the car (engine braking).\n3. **Gently pull the handbrake**: Modulate it slowly so the back tires don't lock up.\n4. **Do NOT drive further**: Once stopped, call a flatbed tow truck from the Towing section below. Driving with failing brakes is strictly forbidden!`
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
      showStatus(statusMsg, 'Dad\'s Sarvam AI brain is connected and saved!', 'success');
      setTimeout(() => settingsModal.classList.add('hidden'), 1200);
    } else {
      localStorage.removeItem('sarvam_api_key');
      showStatus(statusMsg, 'Key cleared. Dad will use his offline emergency knowledge base.', 'error');
    }
  });

  testApiBtn.addEventListener('click', async () => {
    const key = apiKeyInput.value.trim();
    if (!key) {
      showStatus(statusMsg, 'Please enter an API key to test, beta.', 'error');
      return;
    }
    showStatus(statusMsg, 'Connecting with Sarvam AI...', '');
    try {
      const response = await fetch('https://api.sarvam.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-subscription-key': key
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: 'Say "Dad is ready" in 3 words.' }],
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
            ${s.warning ? `<div class="step-warning">🛑 <strong>Dad's Warning:</strong> ${escapeHtml(s.warning)}</div>` : ''}
          </div>
        </div>
      `).join('');

      guideSection.classList.remove('hidden');
      guideSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      readAloudBtn.onclick = () => {
        speakDadGuide(data.title, data.steps);
      };
    });
  });

  closeGuideBtn.addEventListener('click', () => {
    guideSection.classList.add('hidden');
    stopSpeaking();
  });
}

// --- Homely Dad Voice (Speech Synthesis) ---
function speakDadGuide(title, steps) {
  if (!('speechSynthesis' in window)) {
    alert('Voice narration is not supported on this browser.');
    return;
  }
  stopSpeaking();

  let script = `Hey beta. Don't worry, let's fix this together. ${title}. `;
  steps.forEach((s, i) => {
    script += `Step ${i + 1}: ${s.title}. ${s.desc} `;
  });
  script += "Take your time beta, and stay safe!";

  const utterance = new SpeechSynthesisUtterance(script);
  utterance.rate = 0.88; // Slower, calmer dad cadence
  utterance.pitch = 0.95; // Slightly deeper, comforting pitch
  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// --- AI Diagnostic Chat Engine (Dad Persona) ---
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
      appendMessage('bot', `⚠️ Could not complete diagnostic request: ${err.message}. Don't panic beta, call highway patrol (1033) or emergency (112) right away.`);
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
                "You are 'Dad' (AutoResQ Roadside Care). You are a loving, calm, highly experienced Indian father figure "
                + "who knows everything about cars, mechanics, and roadside safety. The user is stranded with a breakdown and stressed or panicked. "
                + "Always reassure them first with warmth ('Don't worry beta, take a breath, Dad is right here with you'). "
                + "Give step-by-step, practical DIY checks in homely, simple language with zero complicated mechanic jargon. "
                + "Use gentle dad humor and caring warnings (e.g. 'Watch your fingers', 'Don't touch that hot radiator cap or your mom will get mad at both of us'). "
                + "If it's dangerous, strictly order them to stand safely behind the guardrail and call 112 or a tow truck."
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
        return data.choices?.[0]?.message?.content || 'Diagnostic check complete. Please inspect carefully, beta.';
      }
    } catch (e) {
      console.warn('Sarvam API call failed, falling back to local emergency engine:', e);
    }
  }

  // Fallback intelligent diagnostic search
  const lower = query.toLowerCase();
  for (const item of OFFLINE_DAD_DIAGNOSTICS) {
    if (item.triggers.some(t => lower.includes(t))) {
      return item.response;
    }
  }

  return `**"Don't worry beta, let's look at this carefully together."**\n\n1. **First step**: Put on your hazard lights, stay off the road lane, and make sure you're safe.\n2. **Look at the dashboard**: Are there any red or yellow warning symbols blinking?\n3. **Quick check**: Take a look at my top guides above (Flat tire, Dead battery, Overheating, Smoke, Brakes), or tap below so I can locate the nearest mechanics or 24/7 towing services for you!\n\n*(Tip: Add your Sarvam API Key in Settings ⚙️ to connect Dad's deep AI brain!)*`;
}

function appendMessage(sender, text) {
  const chatHistory = document.getElementById('chatHistory');
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-message ${sender}-message`;
  
  const formattedText = formatMarkdown(text);
  const avatar = sender === 'user' ? '👤' : '👨‍🦳';

  msgDiv.innerHTML = `
    <div class="msg-avatar">${avatar}</div>
    <div class="msg-body">
      ${formattedText}
      ${sender === 'bot' ? `<button class="btn-voice-mini" onclick="speakText(this)" title="Listen to Dad">🔊 Listen to Dad</button>` : ''}
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
    u.rate = 0.88;
    u.pitch = 0.95;
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
    <div class="msg-avatar">👨‍🦳</div>
    <div class="msg-body" style="font-style: italic; color: var(--text-secondary);">
      Dad is checking the car symptoms with Sarvam AI...
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
      userInput.placeholder = 'Dad is listening... Speak now beta!';
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
    userInput.placeholder = 'Tell Dad what happened...';
    isRecording = false;
  };

  recognition.onend = () => {
    voiceBtn.classList.remove('recording');
    userInput.placeholder = 'Tell Dad what happened...';
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
