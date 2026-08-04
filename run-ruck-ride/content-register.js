document.getElementById("site").insertAdjacentHTML("beforeend", `<section id="register" class="registration container" aria-labelledby="register-heading">
      <div class="registration-grid">
        <div class="registration-summary">
          <p class="section-kicker">Founding Registration</p>
          <h2 class="section-title" id="register-heading">Claim one of 50 spots.</h2>
          <p class="section-copy">Presented by Relentless and hosted by Daniel Island Fitness at 145 River Landing Drive, Suite 101A. Public registration is $10. Active Relentless coaching clients and Daniel Island Fitness clients are included at no additional cost and will be verified after registration.</p>
          <p class="registration-price"><span>$10</span> Public<br />Free for Relentless + DI Fitness clients</p>
          <p class="microcopy">Public participants will continue to secure Stripe checkout after submitting this form. Official digital route maps, landmark directions, optional Strava links, and event instructions will be emailed to every registered participant at least 72 hours before the event.</p>
        </div>

        <div class="panel">
          <div class="panel-inner">
            <form id="event-registration-form" method="POST" action="https://formspree.io/f/xgojegzy">
              <input type="hidden" name="_subject" value="New Run Ruck Ride Registration" />
              <input type="hidden" name="event" value="Relentless Run Ruck Ride — August 29, 2026" />
              <input type="hidden" name="waiver_version" value="2026-08-03" />
              <input id="signed-at" type="hidden" name="waiver_signed_at" value="" />
              <div class="form-grid">
                <div class="field"><label for="first-name">Participant First Name</label><input id="first-name" type="text" name="first_name" autocomplete="given-name" required /></div>
                <div class="field"><label for="last-name">Participant Last Name</label><input id="last-name" type="text" name="last_name" autocomplete="family-name" required /></div>
                <div class="field"><label for="email">Email</label><input id="email" type="email" name="email" autocomplete="email" required /></div>
                <div class="field"><label for="phone">Mobile Phone</label><input id="phone" type="tel" name="phone" autocomplete="tel" required /></div>

                <fieldset class="field full" id="discipline-fieldset">
                  <legend>Which disciplines will you participate in? Choose one, two, or all three.</legend>
                  <div class="choice-grid">
                    <label class="choice-card" for="discipline-run"><input id="discipline-run" class="discipline-choice" type="checkbox" name="disciplines" value="5K Run" /><span><strong>5K Run</strong>Run, jog, or walk.</span></label>
                    <label class="choice-card" for="discipline-ruck"><input id="discipline-ruck" class="discipline-choice" type="checkbox" name="disciplines" value="1-Mile Ruck" /><span><strong>1-Mile Ruck</strong>Self-selected load.</span></label>
                    <label class="choice-card" for="discipline-ride"><input id="discipline-ride" class="discipline-choice" type="checkbox" name="disciplines" value="5K Scenic Ride" /><span><strong>5K Scenic Ride</strong>Untimed. No e-bikes.</span></label>
                  </div>
                </fieldset>

                <div class="field">
                  <label for="age-range">Participant Age Range</label>
                  <select id="age-range" name="age_range" required>
                    <option value="" selected disabled>Select</option><option>Under 18</option><option>18–29</option><option>30–39</option><option>40–49</option><option>50–59</option><option>60–69</option><option>70+</option>
                  </select>
                </div>
                <div class="field">
                  <label for="registration-type">Registration Type</label>
                  <select id="registration-type" name="registration_type" required>
                    <option value="" selected disabled>Select</option>
                    <option value="public">Public participant — $10</option>
                    <option value="relentless-client">Active Relentless coaching client — included</option>
                    <option value="di-fitness-client">Active Daniel Island Fitness client — included</option>
                  </select>
                </div>
                <div class="field"><label for="emergency-name">Emergency Contact</label><input id="emergency-name" type="text" name="emergency_contact_name" required /></div>
                <div class="field"><label for="emergency-phone">Emergency Contact Phone</label><input id="emergency-phone" type="tel" name="emergency_contact_phone" required /></div>
                <div class="field">
                  <label for="bike-type">Bike Type</label>
                  <select id="bike-type" name="bike_type">
                    <option value="not-riding" selected>Not participating in the ride</option><option>Road bike</option><option>Hybrid / fitness bike</option><option>Mountain bike</option><option>Cruiser</option><option>Other non-electric bicycle</option><option>I need help finding a bicycle</option>
                  </select>
                </div>
                <div class="field"><label for="ruck-plan">Planned Ruck Load</label><input id="ruck-plan" type="text" name="planned_ruck_load" placeholder="Example: 15 lb or undecided" /></div>
                <div class="field full"><label for="experience">Anything we should know?</label><textarea id="experience" name="notes" placeholder="Relevant limitations, accommodations, or questions."></textarea></div>
              </div>

              <div class="waiver-summary" aria-labelledby="waiver-summary-heading">
                <p class="section-kicker">Required Participant Waiver</p>
                <h3 id="waiver-summary-heading">Assumption of Risk, Release of Liability, and Emergency Authorization</h3>
                <p>Run • Ruck • Ride includes running, walking, carrying weight, cycling, public-road crossings, and use of shared paths. Risks include falls, collisions, traffic, uneven or slippery surfaces, weather and heat, overexertion, equipment failure, contact with other people or animals, serious injury, illness, property damage, and death.</p>
                <p>By signing, you voluntarily accept these risks and, to the fullest extent permitted by South Carolina law, release Relentless, Longevity Performance Group, Daniel Island Fitness, identified event sponsors and community partners, volunteers, route-support personnel, property owners and managers, and their respective owners, officers, employees, agents, contractors, and representatives from claims arising from participation, including claims based on their ordinary negligence. This release does not apply to gross negligence, reckless or willful misconduct, intentional misconduct, or any claim that cannot legally be waived.</p>
                <p><a class="legal-link" href="waiver.html" target="_blank" rel="noopener">Read the full waiver in a new tab</a></p>
              </div>

              <div class="form-grid">
                <div class="field">
                  <label for="signer-role">Who is signing?</label>
                  <select id="signer-role" name="waiver_signer_role" required>
                    <option value="" selected disabled>Select</option>
                    <option value="adult-participant">Participant, age 18 or older</option>
                    <option value="parent-guardian">Parent or legal guardian of participant under 18</option>
                  </select>
                </div>
                <div class="field" id="guardian-relationship-field" hidden>
                  <label for="guardian-relationship">Relationship to Minor</label>
                  <input id="guardian-relationship" type="text" name="guardian_relationship" placeholder="Example: parent or legal guardian" />
                </div>
                <div class="field full">
                  <label for="waiver-signature">Electronic Signature — Full Legal Name</label>
                  <input id="waiver-signature" type="text" name="waiver_signature" autocomplete="name" placeholder="Type the signer’s full legal name" required />
                  <p class="signature-note">Typing your name and submitting this registration constitutes your electronic signature.</p>
                </div>
              </div>

              <div class="checkbox-row"><input id="rules-agreement" type="checkbox" name="rules_agreement" value="Agreed" required /><label for="rules-agreement">I have read the event format and safety rules, will use equipment in safe working condition, will choose an appropriate pace and ruck load, and agree to follow all route and event instructions.</label></div>
              <div class="checkbox-row"><input id="waiver-agreement" type="checkbox" name="waiver_agreement" value="Agreed and electronically signed" required /><label for="waiver-agreement">I have read and understand the full Participant Waiver, voluntarily assume the risks of participation, agree to its release and other terms, authorize reasonable emergency care if needed, and intend my typed name to serve as my electronic signature. If signing for a minor, I certify that I am the participant’s parent or legal guardian and agree on my own behalf and, to the fullest extent permitted by law, on behalf of the minor.</label></div>
              <div class="checkbox-row"><input id="media-release" type="checkbox" name="media_release" value="Authorized" required /><label for="media-release">I understand that photography and video recording will occur during the event. I authorize Relentless and Daniel Island Fitness to photograph or record my image, likeness, and voice and to use that media for event documentation and reasonable promotional purposes without compensation. A separate permission will be requested before using my name in a testimonial or personal endorsement. If signing for a minor, I provide this authorization as the participant’s parent or legal guardian.</label></div>

              <button class="button" type="submit">Submit Registration</button>
              <p class="form-note">Public participants are redirected to Stripe to complete the $10 payment. A public spot is confirmed after payment. Relentless and Daniel Island Fitness client status will be verified, and official route information will be sent to the email entered above.</p>
              <p id="form-status" class="status" role="status" aria-live="polite"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
`);