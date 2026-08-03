document.getElementById("site").insertAdjacentHTML("beforeend", `<section id="register" class="registration container" aria-labelledby="register-heading">
      <div class="registration-grid">
        <div class="registration-summary">
          <p class="section-kicker">Founding Registration</p>
          <h2 class="section-title" id="register-heading">Claim one of 50 spots.</h2>
          <p class="section-copy">Presented by Relentless and hosted by Daniel Island Fitness at 145 River Landing Drive, Suite 101A. Public registration is $10. Active Relentless coaching clients and Daniel Island Fitness clients are included at no additional cost and will be verified after registration.</p>
          <p class="registration-price"><span>$10</span> Public<br />Free for Relentless + DI Fitness clients</p>
          <p class="microcopy">Public spots are confirmed after payment. Final route maps, landmark directions, and event instructions will be emailed to every registered participant at least 72 hours before the event.</p>
        </div>

        <div class="panel">
          <div class="panel-inner">
            <form id="event-registration-form" method="POST" action="https://formspree.io/f/xgojegzy">
              <input type="hidden" name="_subject" value="New Run Ruck Ride Registration" />
              <input type="hidden" name="event" value="Relentless Run Ruck Ride — August 29, 2026" />
              <div class="form-grid">
                <div class="field"><label for="first-name">First Name</label><input id="first-name" type="text" name="first_name" autocomplete="given-name" required /></div>
                <div class="field"><label for="last-name">Last Name</label><input id="last-name" type="text" name="last_name" autocomplete="family-name" required /></div>
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
                  <label for="age-range">Age Range</label>
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

              <div class="checkbox-row"><input id="rules-agreement" type="checkbox" name="rules_agreement" value="Agreed" required /><label for="rules-agreement">I have read the event format and bike safety rules, will use equipment in safe working condition, and agree to follow all route and event instructions.</label></div>
              <div class="checkbox-row"><input id="activity-acknowledgment" type="checkbox" name="activity_acknowledgment" value="Acknowledged" required /><label for="activity-acknowledgment">I understand this is a voluntary physical activity. I am responsible for choosing an appropriate pace and ruck load, and I will stop if I experience pain, dizziness, unusual shortness of breath, or other concerning symptoms. A formal event waiver may also be required before participation.</label></div>
              <div class="checkbox-row"><input id="photo-consent" type="checkbox" name="photo_consent" value="Consented" /><label for="photo-consent">I consent to appearing in event photography or video that may be used by Relentless to document and promote the community. This is optional.</label></div>

              <button class="button" type="submit">Submit Registration</button>
              <p class="form-note">Submitting this form does not automatically confirm a public spot until the $10 registration payment is completed. Relentless and Daniel Island Fitness client status will be verified. Final route information will be sent to the email entered above.</p>
              <p id="form-status" class="status" role="status" aria-live="polite"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
`);
