export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Miss a Medication Refill Again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Smart refill reminders with pharmacy sync. Track every medication, get SMS &amp; email alerts before you run out — built for patients with chronic conditions and their caregivers.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $6/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">📅</div>
            <h3 className="font-semibold text-white mb-1">Calendar View</h3>
            <p className="text-sm text-[#8b949e]">Visual medication schedule with refill due dates highlighted at a glance.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">💊</div>
            <h3 className="font-semibold text-white mb-1">Auto Calculations</h3>
            <p className="text-sm text-[#8b949e]">Enter dosage and supply — we calculate exactly when you need to reorder.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">🔔</div>
            <h3 className="font-semibold text-white mb-1">SMS &amp; Email Alerts</h3>
            <p className="text-sm text-[#8b949e]">Get notified 7, 3, and 1 day before your refill is due. Never scramble again.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$6</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited medications</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> SMS &amp; email reminders</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Pharmacy sync integration</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Caregiver sharing (up to 3)</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Calendar export (iCal/Google)</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does pharmacy sync work?</h3>
            <p className="text-sm text-[#8b949e]">We integrate with major pharmacy networks. Once connected, your refill dates and prescription details sync automatically — no manual entry needed.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I manage medications for a family member?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Caregivers can manage up to 3 patient profiles under one account, with separate calendars and notification settings for each person.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my health data secure?</h3>
            <p className="text-sm text-[#8b949e]">All data is encrypted at rest and in transit. We are HIPAA-compliant and never sell your health information to third parties.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        <p>&copy; {new Date().getFullYear()} MedRefill. All rights reserved.</p>
      </footer>
    </main>
  );
}
