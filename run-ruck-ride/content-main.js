document.getElementById("site").insertAdjacentHTML("beforeend", `
  <header class="site-header">
    <nav class="nav container" aria-label="Primary navigation">
      <a class="brand-link" href="../" aria-label="Relentless home">
        <img class="brand-logo" src="" alt="Relentless — Stronger Every Day" />
      </a>
      <div class="nav-links">
        <a href="#format">The Format</a>
        <a href="#safety">Safety</a>
        <a href="#about">About Relentless</a>
        <a class="button" href="#register">Register</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-grid container">
        <div>
          <span class="eyebrow">Presented by Relentless · Hosted by Daniel Island Fitness · 50 Spots</span>
          <h1 class="hero-title">Run <span class="green">•</span> Ruck <span class="green">•</span> Ride</h1>
          <p class="hero-lead">Choose one, two, or all three: a 5K run, 1-mile ruck, and 5K scenic ride—built around movement, challenge, connection, and becoming stronger every day.</p>
          <div class="hero-actions">
            <a class="button" href="#register">Reserve Your Spot — $10</a>
            <a class="button secondary" href="#format">See the Format</a>
          </div>
          <p class="microcopy">Active Relentless and Daniel Island Fitness clients participate at no additional cost.</p>
        </div>

        <aside class="event-card" aria-label="Event details">
          <div class="event-card-inner">
            <h2>Founding Event</h2>
            <dl class="event-facts">
              <div class="event-fact"><dt>Date</dt><dd>Saturday, August 29, 2026</dd></div>
              <div class="event-fact"><dt>Check-In</dt><dd>8:00 a.m.</dd></div>
              <div class="event-fact"><dt>Briefing</dt><dd>8:20 a.m.</dd></div>
              <div class="event-fact"><dt>Start</dt><dd>8:30 a.m.</dd></div>
              <div class="event-fact"><dt>Host</dt><dd>Daniel Island Fitness</dd></div>
              <div class="event-fact"><dt>Address</dt><dd>145 River Landing Drive, Suite 101A<br />Daniel Island, SC 29492</dd></div>
              <div class="event-fact"><dt>Format</dt><dd>Choose: 5K Run · 1-Mile Ruck · 5K Scenic Ride</dd></div>
              <div class="event-fact"><dt>Capacity</dt><dd>Limited to 50 participants</dd></div>
            </dl>
            <span class="price-pill">$10 public · Relentless + DI Fitness clients included</span>
          </div>
        </aside>
      </div>
    </section>

    <section id="format" class="container" aria-labelledby="format-heading">
      <p class="section-kicker">The Relentless Founding Format</p>
      <h2 class="section-title" id="format-heading">Choose one, two, or all three.</h2>
      <p class="section-copy">Build the morning around your current ability and interests. Register for the 5K run, 1-mile ruck, 5K scenic ride, or any combination. Every route begins and finishes at Daniel Island Fitness, the host location for the founding event.</p>
      <div class="format-grid">
        <article class="discipline" data-step="1">
          <h3>Run</h3><span class="distance">5 kilometers · 3.1 miles</span>
          <p>Run, jog, or walk the full course. Participants who want to compete against their own benchmark may record their time.</p>
          <p><strong>Choose it if:</strong> You want to run, jog, or walk a measured community 5K.</p>
        </article>
        <article class="discipline" data-step="2">
          <h3>Ruck</h3><span class="distance">1 mile · Self-selected load</span>
          <p>Carry weight in a secure backpack, purpose-built ruck, or weighted vest for one mile. There is no required minimum weight for the founding event.</p>
          <p><strong>Suggested load:</strong> About 5–10% of body weight for newer participants, 10–15% for experienced ruckers, and up to 20% only if you already train safely with that load.</p>
        </article>
        <article class="discipline" data-step="3">
          <h3>Ride</h3><span class="distance">5 kilometers · Scenic ride</span>
          <p>The ride is intentionally untimed. It is a scenic, leisure-paced route designed around control, shared-trail awareness, and enjoying the Daniel Island waterfront.</p>
          <p><strong>No e-bikes.</strong> Helmets are mandatory.</p>
        </article>
      </div>
      <div class="notice"><strong>Founding-event principle:</strong> Choose the challenge that fits you. Run and ruck at your chosen pace. Ride with control, respect the shared trail, and return safely to the community finish.</div>
    </section>

    <section id="safety" class="container">
      <div class="two-col">
        <div>
          <p class="section-kicker">Safety Standard</p>
          <h2 class="section-title">The ride is scenic—not a race.</h2>
          <p class="section-copy">Daniel Island’s paths are shared with walkers, families, runners, and other cyclists. Every participant is responsible for riding conservatively and following the event rules.</p>
          <ul class="rules">
            <li>Wear a properly fitted helmet for the entire ride.</li>
            <li>No e-bikes, scooters, or motorized vehicles.</li>
            <li>Yield to pedestrians at all times.</li>
            <li>Slow down at crossings, blind turns, narrow sections, and congested areas.</li>
            <li>Pass only when there is ample room and clearly announce, “Passing on your left.”</li>
            <li>No drafting, racing, aggressive passing, or headphones during the ride.</li>
            <li>Use the official route, stay alert, and obey all traffic controls.</li>
            <li>Unsafe riding may result in removal from the event.</li>
          </ul>
        </div>
        <aside class="panel">
          <div class="panel-inner">
            <p class="section-kicker">What to Bring</p>
            <h2 style="margin:0;color:var(--off-white);font:900 2.6rem/0.95 'Barlow Condensed',Impact,sans-serif;text-transform:uppercase;">Arrive ready.</h2>
            <ul class="checklist">
              <li>A bicycle in safe working condition</li><li>A properly fitted bike helmet</li><li>A secure backpack, ruck, or weighted vest</li><li>Your chosen ruck weight, if needed</li><li>Water and electrolytes</li><li>Athletic shoes and weather-appropriate clothing</li><li>Sunscreen and a positive attitude</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <section class="container" aria-labelledby="routes-heading">
      <p class="section-kicker">Route Information</p>
      <h2 class="section-title" id="routes-heading">Simple maps. Clear directions. Optional Strava links.</h2>
      <p class="section-copy">Official digital maps, simple landmark-based directions, and direct Strava route links will be emailed to every registered participant at least 72 hours before the event. Maps and written directions can be saved, screenshotted, or printed, so Strava is optional. All routes begin and finish at Daniel Island Fitness.</p>
      <div class="route-grid">
        <article class="route-card"><div><h3>5K Run Route</h3><p>A measured waterfront course with a digital map, simple landmark directions, and an optional direct Strava link.</p></div><span class="route-status">Included in route email</span></article>
        <article class="route-card"><div><h3>1-Mile Ruck Route</h3><p>A straightforward one-mile course with a digital map, simple landmark directions, and an optional direct Strava link.</p></div><span class="route-status">Included in route email</span></article>
        <article class="route-card"><div><h3>5K Ride Route</h3><p>A scenic shared-use route with a digital map, simple landmark directions, and an optional direct Strava link.</p></div><span class="route-status">Included in route email</span></article>
      </div>
      <div class="panel navigation-panel">
        <div class="panel-inner">
          <p class="section-kicker">How Route Information Works</p>
          <h2 style="margin:0;color:var(--off-white);font:900 2.8rem/.95 'Barlow Condensed',Impact,sans-serif;text-transform:uppercase;">Register now. Get everything in one email.</h2>
          <div class="navigation-steps">
            <div class="navigation-step"><b>01</b><p>Register for the discipline or disciplines you plan to complete.</p></div>
            <div class="navigation-step"><b>02</b><p>At least 72 hours before the event, receive one email with official maps, written directions, and direct Strava links.</p></div>
            <div class="navigation-step"><b>03</b><p>Open, save, screenshot, or print the map and directions before event morning.</p></div>
            <div class="navigation-step"><b>04</b><p>Strava is optional. Open the direct link in the app or browser if helpful; no app is required to participate.</p></div>
          </div>
          <p class="microcopy">You will not need to keep checking the website. Route information and important event updates will be sent to the email used during registration.</p>
        </div>
      </div>
    </section>

    <section class="giveaway-band" aria-labelledby="giveaway-heading">
      <div class="giveaway-grid container">
        <div><p class="section-kicker">Community Giveaways</p><h2 class="section-title" id="giveaway-heading">Health, fitness, and wellness prizes.</h2></div>
        <div>
          <p class="section-copy">Participants will have opportunities to win products and experiences from Relentless community partners. Specific partners and prizes will be announced as they are confirmed.</p>
          <ul class="giveaway-list"><li>Every registered participant is eligible for the event giveaway.</li><li>Scenic photos shared with the event tag may earn additional entries.</li><li>Final giveaway rules will be posted before event day.</li></ul>
        </div>
      </div>
    </section>

    <section id="about" class="mission-band">
      <div class="mission-content container">
        <blockquote class="mission-quote">Build the capability to live fully.</blockquote>
        <div class="mission-copy">
          <p>Relentless exists to help people build and preserve the strength, resilience, and physical capability to live fully—for themselves, their families, and future generations.</p>
          <p>Hosted by Daniel Island Fitness, Run • Ruck • Ride brings that mission to life through challenge, community, connection, and shared experiences. The event is one part of a broader system built around understanding where you stand physically and knowing what to do next.</p>
          <a class="button secondary" href="../#early-access-form">Explore the Relentless Assessment</a>
        </div>
      </div>
    </section>
`);