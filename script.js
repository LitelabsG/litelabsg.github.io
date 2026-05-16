/* ===========================================================
   VTS | Virtual Trading School — Application Logic
   =========================================================== */

/* ============ I18N ============ */
const I18N = {
  en: {
    si_benefit_3: 'No data shared with third parties',
    si_benefit_2: "We don't read your contacts, photos, or files",
    si_benefit_1: 'Your progress stays safe across devices',
    mb_title: 'Mystery Box',
    splash_tag: 'Educational Trading Virtual',
    onb1_title: 'Master Trading. No Real Risk.',
    onb1_sub: 'Practice across 80+ markets in a fully virtual sandbox environment. Build skills, not losses.',
    onb1_b1t: 'AI-Powered Sandbox', onb1_b1d: 'All charts, prices, and market movements are generated entirely by AI on your device. No real data, no real markets — just a safe space to practice.',
    onb1_b2t: 'TP / SL & Position Tools', onb1_b2d: 'Take Profit, Stop Loss, and a full lot calculator with risk awareness.',
    onb1_b3t: 'Built-in Education', onb1_b3d: 'Dozens of in-app lessons on candles, leverage, risk management and psychology.',
    onb1_b4t: 'Achievements & Daily Rewards', onb1_b4d: 'Unlock milestones and claim daily virtual bonuses to keep practicing.',
    onb_start: 'Start Trading',
    onb2_title: 'Verify Your Age', onb2_sub: 'You must be 18 or older to use this educational virtual.',
    onb2_hint: 'Date of birth',
    dob_q: 'What is your year of birth?', dob_privacy: 'This data is not collected. This step is only used to verify legal age within VTS — Virtual Trading School (VTS APP) and qualify you as a future trader.',
    onb_back: 'Back', onb_continue: 'Continue',
    onb3_title: 'Terms & Conditions', onb3_sub: 'Please read carefully before continuing.',
    onb_decline: 'Decline', onb_agree: 'I Agree',
    onb_decl_title: 'Terms Declined', onb_decl_sub: 'You declined the Terms & Conditions. Acceptance is required to use the application.', onb_decl_note: 'You may close the app, or review and accept the terms to continue.', onb_decl_review: 'Review Terms Again',
    gate_off_title: 'Connection Needed', gate_off_msg: "We can't reach our servers right now. Please connect to the internet so we can refresh your virtual session data and give you the best experience.", gate_retry: 'Try Again', gate_upd_title: 'A Newer Version is Available', gate_upd_msg: 'Get the latest improvements, fixes, and new lessons by updating to the newest version. It only takes a moment.', gate_upd_btn: 'Update Now', gate_si_title: 'Sign In to Continue', gate_si_msg: 'Sign in with your Google account so we can save your progress and keep your account secure across devices.', gate_si_btn: 'Continue with Google', gate_ua_title: 'Adult Content', gate_ua_msg: 'This educational trading virtual is designed for users 18 and older. Thanks for understanding.',
    age_too_young: 'You must be at least 18 years old.',
    age_invalid: 'Please enter a valid date of birth.',
    balance: 'Balance',
    cat_all: 'All', cat_fav: '★ Favorites', cat_forex: 'Forex', cat_crypto: 'Crypto', cat_stocks: 'Stocks', cat_commodities: 'Commodities', cat_indices: 'Indices',
    search_ph: 'Search assets…',
    markets: 'Markets',
    high24: '24h High', low24: '24h Low', spread: 'Spread',
    ad_placeholder: 'AdMob banner placeholder · Replace with real ad in production',
    place_order: 'Place Order',
    margin: 'Margin',
    advanced: 'Advanced Options (TP / SL)',
    tp_pts: 'TP (pts)', sl_pts: 'SL (pts)',
    open_positions: 'Open Positions',
    no_positions: 'No open positions yet. Start your first trade above!',
    daily_rewards: 'Daily Rewards',
    daily: 'Daily', boost: 'Boost', claim: 'Claim', watch_ad: 'Ad for $300',
    trading_record: 'Trading Record', wins: 'Wins', losses: 'Losses', winrate: 'Win Rate',
    reset_title: 'Professional Reset', reset_sub: 'Recover 15% of starting balance · 3 ads required',
    reset_watch3: 'Watch 3 Ads to Reset (15%)', reset_watch2: 'Watch 2 More Ads ({n}/3)',
    reset_watch1: 'Watch 1 More Ad ({n}/3)', reset_apply: '✓ Apply 15% Reset Now',
    reset_done: 'Already used today',
    trade_history: 'Trade History', no_history: 'No closed trades yet.',
    achievements: 'Achievements',
    hints_title: 'Trade Hints — Learn the Markets',
    settings: 'Settings',
    language: 'Language', language_sub: 'Choose your preferred language',
    sound: 'Sound Effects', sound_sub: 'Subtle UI feedback sounds',
    haptics: 'Haptics', haptics_sub: 'Vibrations for actions',
    reset_data: 'Reset App Data', reset_data_sub: 'Wipes all progress · cannot be undone',
    reset_btn: 'Reset',
    about: 'About Us',
    about_text: 'VTS — Virtual Trading School v1.0 — Educational virtual. All prices are AI-generated. Asset names are fictional. No real money or trading. Compliant with Google Play educational policy.',
    /* ad_playing/ad_wait removed — VTS has no ads */
    cancel: 'Cancel', confirm: 'Confirm',
    compliance_text: 'Virtual Currency · Educational Purposes Only · No Real Money',
    insufficient: 'Insufficient balance for this lot size.',
    invalid_lot: 'Lot size must be between 0.01 and 50.',
    trade_opened: '{side} {lot} {sym} opened',
    trade_closed: 'Position closed: {pnl}',
    bonus_claimed: 'Bonus claimed: +${amt}',
    daily_claimed: 'Daily reward claimed: +$100',
    boost_claimed: 'Boost claimed: +$300',
    daily_wait: 'Available in {h}h {m}m',
    rewarded_15: 'Hourly bonus: +$15!',
    achievement_unlocked: '🏆 Achievement: {name}',
    reset_confirm_title: 'Confirm Professional Reset',
    reset_confirm_text: 'You have completed all 3 ads. Apply 15% balance recovery now?',
    wipe_confirm_title: 'Reset All Data?',
    wipe_confirm_text: 'This will permanently erase all your progress including balance, history, and achievements. Continue?',
    closed_tp: 'TP', closed_sl: 'SL', closed_man: 'MAN',
    confirm_close: 'Close this position?',
    /* hourly card flip */
    flip_title: 'Hourly Practice Reward',
    flip_sub: 'Trade freely. Practice without risk. Pick a card and earn a virtual reward toward your sandbox journey.',
    flip_won: 'You won +${amt}!',
    flip_wait: 'Next pick in {h}h {m}m',
    flip_ready: 'Ready! Tap a card.',
    /* info buttons */
    ib_hints: 'Trade Hints', ib_hints_s: 'Tutorials & lessons',
    ib_faq: 'FAQ', ib_faq_s: 'Common questions',
    ib_terms: 'Terms', ib_terms_s: 'Terms & conditions',
    ib_disc: 'Disclaimer', ib_disc_s: 'Liability notice',
    ib_ach: 'Achievements',
    faq_title: 'Frequently Asked Questions',
    terms_title: 'Terms & Conditions',
    disclaimer_title: 'Disclaimer',
    /* sign-in */
    si_title: 'Sign In to Continue',
    si_sub: 'A quick sign-in keeps your account secure and your progress saved. We never share your personal info or browse your Google data.',
    si_btn: 'Sign in with Google',
    si_foot: 'Educational virtual · No real money involved',
    si_signing: 'Verifying…',
    si_failed: 'Sign-in failed. Please try again.',
    si_success: 'Welcome, {name}!',
    /* account / settings */
    account: 'Account', sign_out: 'Sign Out',
    signed_in_as: 'Signed in as {name}',
    sign_out_confirm_title: 'Sign Out?',
    sign_out_confirm_text: 'You will be returned to the sign-in screen. Your progress is saved.',
    /* language select */
    ls_title: 'Choose Your Language',
    ls_continue: 'Continue',
    tip_label: 'Tip',
    zr_title: '0 LOSSES', virtual: 'Virtual', news_title: 'Market News', ach_title: 'Achievements', mood_btn: 'Market Mood', slow_down: "Markets reward patience. Take a breath before your next move.", trade_first: "Complete a trade first to unlock this feature.", coming_soon: "More from us is coming soon. We would love your honest review.", what_is_sl: "Stop Loss (SL): a price below your entry where the trade auto-closes to limit loss. Take Profit (TP): a price above (for buy) or below (for sell) where the trade auto-closes to lock in profit.", what_is_risk: "Risk shows the percentage of your balance currently committed to this trade. The lower this percentage, the safer your position.", what_is_vol: "Vol = Volatility. The expected price movement range per tick. Higher vol = bigger swings = bigger risk and reward.", what_is_sma: "SMA = Simple Moving Average over the last 14 candles. Price above the SMA suggests an uptrend; below suggests a downtrend.",
    practice_success: 'Practice = Success', zr_subtitle: '100% Sandbox · No Real Money',
    theme: 'Theme', theme_sub: 'Choose your visual style', theme_dark: 'Dark', theme_midnight: 'Midnight', theme_forest: 'Forest', theme_sunset: 'Sunset',
    streak_days: 'Day Streak', streak_today: 'Practice today to keep your streak!', daily_challenge: 'Daily Challenge', dc_complete: 'Challenge complete! +${amt} reward', mood_bullish: 'Bullish', mood_bearish: 'Bearish', mood_neutral: 'Neutral', mood_label: 'Market Mood', risk_calc: 'Risk Calculator', risk_pct: 'Risk %', risk_sl_pts: 'SL Distance (pts)', risk_suggested: 'Suggested lot size',
    qs_today: 'Today', qs_trades: 'Trades', qs_winrate: 'Win Rate',
    lang_more_soon: "This is an early version of the app. More languages, features, and improvements are coming soon — stay tuned!"
  ,
    terms_scroll_hint: 'Please scroll down to read all terms', terms_scroll_done: 'You may now agree'
  ,
    tut_skip: 'Skip', tut_prev: 'Back', tut_next: 'Next', tut_finish: 'Finish', tut_replay_label: 'App Tutorial', tut_replay_sub: 'Replay the guided tour to learn every feature', tut_replay_btn: 'Replay Tutorial', tut_brand_t: 'Welcome to VTS', tut_brand_b: "This is VTS — Virtual Trading School. Everything you will see is a virtual session: prices, news, and balances are virtual.", tut_balance_t: 'Virtual Balance', tut_balance_b: "This is your sandbox balance. It is virtual money for practicing trading. You can never lose real funds here.", tut_compliance_t: 'Educational Notice', tut_compliance_b: 'A constant reminder that this app uses virtual currency for educational purposes only. No real money is involved.', tut_qs_t: 'Quick Stats', tut_qs_b: 'Daily P&L, number of trades, and win rate. Track your performance at a glance.', tut_search_t: 'Search Assets', tut_search_b: 'Quickly find any virtual asset by name or ticker.', tut_cats_t: 'Asset Categories', tut_cats_b: 'Filter assets by category: Forex, Crypto, Stocks, Commodities, or Indices. All names are fictional.', tut_assets_t: 'Asset List', tut_assets_b: 'Tap any asset to view its chart and start trading.', tut_chart_t: 'Live Chart', tut_chart_b: 'Virtual candlestick chart with multiple timeframes (1m to 1d). All movements are AI-generated.', tut_mb_t: 'Mystery Box', tut_mb_b: 'Every 2 hours, open a mystery box to win a virtual reward — boost your next trade or win virtual cash.', tut_pulse_t: 'Trading Pulse', tut_pulse_b: 'Track your daily streak, complete challenges, and check the virtual market mood.', tut_dc_t: 'Daily Challenges', tut_dc_b: 'Tap to view 4 daily challenges. Complete each one to earn a virtual $12.99 reward. Cards refresh every 24 hours.', tut_mood_t: 'Market Mood', tut_mood_b: 'Watch a short ad to unlock the virtual market mood (Bullish/Bearish/Neutral) for 60 seconds.', tut_flip_t: 'Hourly Card Game', tut_flip_b: 'Every hour, flip a card to win a small virtual reward. A fun way to keep engaging with the app.', tut_trade_t: 'Place Order', tut_trade_b: 'Choose lot size, set TP/SL, and place virtual BUY or SELL orders. Risk-free practice.', tut_news_t: 'Market News', tut_news_b: 'Virtual market news appears every few minutes and affects virtual prices. All news is fictional.', tut_info_t: 'Lessons & Help', tut_info_b: 'Trading lessons, FAQs, terms, and disclaimers. Tap any to learn more.', tut_settings_t: 'Settings', tut_settings_b: 'Change language, theme, sound, and replay this tutorial anytime.'
  ,
    help_got_it: 'Got it'
  ,
    reset_app_label: "Reset App", reset_app_sub: "Clear all data and start fresh — useful for testing or starting over", reset_app_btn: "Reset Everything", reset_app_confirm_title: "Reset Everything?", reset_app_confirm_text: "This will erase all your progress, settings, and saved data. The app will restart from the very first screen. This cannot be undone."
  ,
    select_asset_first: "Please select an asset first"
  
  ,
    dc_all_done: "All challenges completed!", dc_card: "CARD", dc_intro_title: "Daily Challenges", dc_intro_text: "Practice your trading skills! Complete any challenge below to earn a virtual $12.99 reward. New challenges every 24 hours.", dc_progress_label: "Tap to view", mb_boost_18_applied: "18% boost active on next trade", mb_boost_2_applied: "2% boost active on next trade", mb_done: "Done", mb_extra_50: "Claim $12.99 bonus reward", mb_locked: "LOCKED", mb_opened: "Mystery Box opened", mb_pick_card: "Pick a card", mb_ready: "Ready!", mb_ready_status: "Mystery Box is ready", mb_reward_added: "Reward added to your balance", mb_sub_locked: "Every 2 hours, open a Mystery Box to win a virtual reward", news_empty: "No news yet", signed_out_toast: "Signed out successfully"
  ,
    early_version_title: "Early Access Build",
    early_version_text: "This is an early release of VTS — Virtual Trading School. You may encounter occasional bugs or rough edges as we polish the experience. Additional languages, features, and improvements are actively being developed and will arrive in upcoming updates. Thank you for being an early user — your feedback shapes the product."
  }
};

const TERMS = {
  en: `<h4>1. Definition & Nature of the Service</h4>
<p>VTS — Virtual Trading School (the "App") is a strictly <span class="highlight">virtual trading platform</span> intended solely for educational, training, and entertainment purposes. The App does not constitute, and shall never be construed as, a brokerage service, financial intermediary, exchange, custodial service, payment processor, or any form of regulated financial activity.</p>
<h4>2. No Real Money. No Real Trading. No Real Assets.</h4>
<p>All balances, deposits, withdrawals, profits, losses, prices, transactions, instruments, rewards, and any monetary representation displayed within the App are <span class="highlight">entirely virtual and fictitious</span>. No real currency, securities, derivatives, commodities, cryptocurrencies, or any other asset of monetary value is held, transmitted, exchanged, or processed at any point.</p>
<h4>3. No Withdrawal, Transfer, or Conversion</h4>
<p>Virtual balances, virtual rewards, and any in-app values <span class="highlight">cannot under any circumstance</span> be exchanged for real money, transferred to real bank accounts, withdrawn, sold, gifted, traded for goods or services, or converted into anything of real-world monetary value, whether directly or indirectly.</p>
<h4>4. Algorithmically Generated Market Data</h4>
<p>All prices, charts, candlesticks, spreads, volumes, and market behaviors shown within the App are <span class="highlight">generated algorithmically</span> on your device. They are not, and shall not be assumed to be, real market data, live quotes, or any reflection of actual financial markets. Asset names are fictional symbols used solely to provide educational realism and have no live market connection.</p>
<h4>5. No Financial, Investment, Tax, or Legal Advice</h4>
<p>Nothing displayed, generated, suggested, or implied within the App constitutes financial advice, investment advice, tax advice, legal advice, a recommendation, an offer, or a solicitation to buy, sell, or hold any asset. The user is solely responsible for any decisions made in real markets and must consult licensed professionals for any actual investment activity.</p>
<h4>6. Strict Age Requirement (18+)</h4>
<p>The App is intended for users who are <span class="highlight">at least eighteen (18) years of age</span> or have reached the age of majority under their applicable local law, whichever is greater. By using the App you represent and warrant that you meet this requirement. Knowingly providing false age information is a material breach of these Terms.</p>
<h4>7. Anonymous Use and No Account Required</h4>
<p>The App does not require any account, registration, sign-in, or login of any kind. You may use the App <span class="highlight">completely anonymously</span>. No email, phone number, name, or third-party account credentials are requested or collected at any point. The App does not interact with Google Sign-In, Apple Sign-In, social login providers, or any identity verification service.</p>
<h4>8. License Grant</h4>
<p>Subject to your continuous compliance with these Terms, you are granted a <span class="highlight">limited, non-exclusive, non-transferable, revocable</span> license to use the App for personal, non-commercial educational purposes only. All other rights are reserved.</p>
<h4>9. Intellectual Property</h4>
<p>All content, code, designs, trademarks, logos, lessons, copy, animations, sounds, and visual assets within the App are the exclusive property of the publisher or its licensors and are protected by copyright, trademark, and other intellectual property laws. No part may be copied, modified, reverse-engineered, extracted, redistributed, or repurposed without express written consent.</p>
<h4>10. Prohibited Conduct</h4>
<p>You agree not to: (a) attempt to bypass, hack, or exploit the App's logic, randomness, or rewards; (b) use automated tools, bots, or scripts; (c) reverse-engineer, decompile, or modify the App; (d) use the App for any unlawful purpose; (e) misrepresent the App as a real trading platform; or (f) use the App to provide, advertise, or imply any real financial service to third parties.</p>
<h4>11. No Advertising</h4>
<p>The App contains <span class="highlight">no advertisements of any kind</span>. There are no banner ads, interstitial ads, rewarded video ads, sponsored content, native ads, push-notification ads, redirects to advertising networks, or any other form of paid promotion within the App. The App does not integrate with Google AdMob, Meta Audience Network, Unity Ads, AppLovin, IronSource, or any other advertising SDK or service. The App is offered free of charge as a personal, independent project.</p>
<h4>12. Local Data Storage Only</h4>
<p>App progress — including virtual balances, virtual trade history, achievements, theme preferences, and tutorial state — is stored <span class="highlight">exclusively on your local device</span> using your browser's standard storage mechanisms. The App does not synchronize, back up, or transmit your data to any cloud, server, account, or third-party service. Uninstalling the App or clearing its storage will permanently erase your local progress, as no remote copy exists. The App does not collect, store, or process real financial information, payment data, or any sensitive personal data.</p>
<h4>13. Privacy and Anonymous Analytics</h4>
<p>The App uses <span class="highlight">Google Analytics</span> to improve app performance and understand anonymous usage patterns. The App does not request passwords, contacts, private files, or personal messages. No personal information is collected. Aggregated, anonymous data such as page views and feature usage is processed solely for app improvement, performance optimization, bug fixing, and understanding general usage patterns. The App does not sell or share personal data with third parties.</p>
<h4>14. No Warranty</h4>
<p>The App is provided <span class="highlight">"AS IS" and "AS AVAILABLE"</span>, without warranties of any kind, whether express, implied, statutory, or otherwise, including but not limited to merchantability, fitness for a particular purpose, accuracy, reliability, uninterrupted operation, or freedom from errors or harmful components.</p>
<h4>15. Limitation of Liability</h4>
<p>To the maximum extent permitted by law, the publisher, its affiliates, contractors, officers, and licensors shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages, including loss of data, loss of profits, loss of opportunity, or any losses incurred in real markets, however arising, even if advised of the possibility of such damages.</p>
<h4>16. Real-World Trading Risk Warning</h4>
<p>Real-world trading of forex, cryptocurrencies, stocks, commodities, indices, derivatives, or any leveraged instruments involves <span class="highlight">substantial risk of loss, including the loss of all invested capital</span>. Past virtual performance, in-app rewards, or any in-app outcomes are not, and shall not be construed as, indicators of real-world results.</p>
<h4>17. No Affiliation</h4>
<p>The App is not affiliated with, endorsed by, sponsored by, partnered with, or supervised by any real broker, exchange, financial institution, regulatory authority, central bank, or government agency mentioned, displayed, referenced, or implied anywhere within the App.</p>
<h4>18. Compliance with Platform Policies</h4>
<p>The App complies with <span class="highlight">Google Play educational and virtual trading policies</span>. It does not facilitate, enable, advertise, or promote real-money gambling, real trading, the purchase or sale of real financial instruments, or any regulated financial activity in any jurisdiction.</p>
<h4>19. Geographic Availability</h4>
<p>You are solely responsible for determining whether your use of the App complies with the laws and regulations of your jurisdiction. The App may not be used where prohibited by law.</p>
<h4>20. Modification of Terms & Features</h4>
<p>The publisher reserves the right to modify, suspend, or discontinue any feature, content, virtual reward mechanic, balance, or these Terms at any time, with or without prior notice. Continued use of the App after any modification constitutes acceptance of the updated Terms.</p>
<h4>21. Termination</h4>
<p>The publisher may suspend or terminate your access to the App at any time, in its sole discretion, including for breach of these Terms. Upon termination, your license to use the App ends immediately and any virtual balances or rewards are forfeited and have no monetary value.</p>
<h4>22. Governing Law & Severability</h4>
<p>These Terms shall be governed by, and construed in accordance with, the laws applicable to the publisher's jurisdiction, without regard to conflict-of-law principles. If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
<h4>23. No Third-Party Liability</h4>
<p>The publisher shall not be liable for any acts, omissions, decisions, content, or services provided by Google Play, the device operating system, the device manufacturer, the user's network provider, or any other third party whose technology is integrated into or accessed through the operating environment in which the App runs. The user's relationship with such third parties is governed exclusively by their respective terms.</p>
<h4>24. Anti-Tampering and System Integrity</h4>
<p>The App incorporates <span class="highlight">tamper-detection mechanisms</span> to ensure fair use of time-gated features such as the Mystery Box, Daily Challenges, hourly card-flip rewards, and streak counters. These mechanisms detect, but are not limited to, manipulation of the device system clock, calendar, or time zone. If tampering is detected, the App may automatically delay or reset the affected features to preserve the educational experience for all users. The publisher reserves the right to modify these protections at any time without prior notice. Attempting to circumvent these mechanisms constitutes a material breach of these Terms.</p>
<h4>25. Indemnification</h4>
<p>You agree to indemnify, defend, and hold harmless the publisher, its affiliates, employees, contractors, and licensors from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from your use of the App, your breach of these Terms, or your violation of any third-party rights.</p>
<h4>26. No Sale of Goods</h4>
<p>The App does not sell, broker, exchange, or facilitate the sale or transfer of any real-world goods, services, securities, currencies, or items of value. Any in-app virtual reward, balance, or item is not a good or service in any commercial or legal sense.</p>
<h4>27. Anti-Money-Laundering and Sanctions Compliance</h4>
<p>The App does not process or accept real funds and is therefore not subject to anti-money-laundering reporting requirements. However, the user agrees not to use the App to evade sanctions, launder reputation, or simulate fictitious financial activity for the purpose of misleading any third party.</p>
<h4>28. Children's Privacy</h4>
<p>The App is not directed at children under the age of 18. The publisher does not knowingly collect personal information from minors. If you believe a minor has accessed the App or provided personal data, please contact the publisher so the data can be deleted.</p>
<h4>29. Open-Source Components</h4>
<p>The App may include open-source software components governed by their respective licenses. A list of such components and their attribution may be made available upon request. Use of these components remains subject to the terms of the App as a whole.</p>
<h4>30. Entire Agreement</h4>
<p>These Terms, together with the Privacy Policy and Disclaimer presented within the App, constitute the entire agreement between you and the publisher regarding the App and supersede any prior or contemporaneous communications, representations, or agreements, whether oral or written.</p>
<h4>31. Voluntary Donations & Developer Support</h4>
<p>The App may display a link to a third-party donation platform (such as <span class="highlight">Ko-fi</span> at ko-fi.com/litelabs) inviting users to voluntarily contribute toward the ongoing development, hosting, and maintenance of the App. Any contribution is <span class="highlight">strictly voluntary</span> and is processed entirely by the third-party platform, governed by that platform's own terms and privacy policy. Donations are <span class="highlight">non-refundable</span>, do not entitle the donor to any service, feature, virtual reward, or premium access within the App, and create no contractual obligation on the part of the developer. The donation link will open in your device's external browser; the App does not collect, store, or process any payment information.</p>
<h4>Acknowledgement</h4>
<p>By tapping <span class="highlight">"I Agree"</span> you acknowledge that you have read, understood, and irrevocably accepted these Terms in full, and that you understand <span class="highlight">no real money is involved at any point</span>, that this is strictly a sandbox educational virtual, and that nothing within the App constitutes a real financial service.</p>`,

};

const HINTS_DATA = {
  en: [
    {t:'Forex & Crypto Basics', p:[
      'Forex (foreign exchange) is the global market for trading currencies. Crypto markets trade digital assets 24/7.',
      'Both markets quote prices in pairs — for example EUR/USD means how many US dollars you need to buy one Euro.'
    ], tip:'Major forex pairs all involve the US Dollar; cross pairs do not.'},
    {t:'Reading Japanese Candles', p:[
      'Each candle shows four prices: Open, High, Low, Close. The body is the open-to-close range; the wicks are the highs and lows reached during that interval.',
      'A green (bullish) candle closes above its open; a red (bearish) candle closes below it.'
    ], tip:'Long wicks signal rejection — price tried that level but was pushed back.'},
    {t:'Currency Pairs', p:[
      'The pair has a base currency (left) and a quote currency (right). Buying EUR/USD means going long Euro and short Dollar.',
      'Spread is the difference between the buy and sell price — the cost of entering a trade.'
    ], tip:'Tighter spreads usually mean a more liquid, healthier market.'},
    {t:'Lot Size & Leverage', p:[
      'A standard lot is 100,000 units of the base currency. A mini lot = 0.1 (10,000 units), a micro lot = 0.01 (1,000 units).',
      'Leverage amplifies both gains and losses. The virtual uses 1:100 by default — $1 controls $100.'
    ], tip:'Bigger lot ≠ smarter trade. Risk only what your account can absorb.'},
    {t:'Take Profit & Stop Loss', p:[
      'Take Profit (TP) closes the trade automatically once price moves in your favor by a set number of points.',
      'Stop Loss (SL) closes the trade once price moves against you by a set number of points — protecting your account.'
    ], tip:'A common ratio: SL = 30 pts, TP = 60 pts (1:2 risk-to-reward).'},
    {t:'Technical Analysis: Support & Resistance', p:[
      'Support is a price floor where buyers tend to step in. Resistance is a ceiling where sellers tend to dominate.',
      'When a level breaks, it often becomes the opposite — old resistance turns into new support.'
    ], tip:'The more times a level is tested, the more significant it becomes.'},
    {t:'Moving Average (SMA)', p:[
      'A Simple Moving Average smooths price over N periods. The yellow line on the chart is a 14-period SMA.',
      'Price above the SMA suggests an uptrend; price below suggests a downtrend.'
    ], tip:'Crossovers between two SMAs (fast & slow) are popular trend signals.'},
    {t:'Risk Management', p:[
      'Never risk more than 1–2% of your account on a single trade. The risk meter on this app helps you visualize lot exposure.',
      'Plan your exit before you enter — both for profit and for loss.'
    ], tip:'Position sizing is the single biggest predictor of long-term survival.'},
    {t:'Trading Psychology', p:[
      'Fear and greed are the two emotions that destroy accounts. A plan removes them.',
      'After a loss, do not "revenge trade". After a win, do not increase size impulsively.'
    ], tip:'Treat each trade as one of the next 1,000 — not the most important one.'},
    {t:'Practicing With This Virtual', p:[
      'Try a 30-trade challenge: same lot size, same SL/TP, only one asset. Then review your win-rate.',
      'Use TP/SL on every trade. Track which timeframes you perform best on.'
    ], tip:'The goal here is consistency, not maximum profit. Real edge is built over many trades.'},
    {t:'Spread, Slippage & Fees (Real-World)', p:[
      'In live markets you pay the spread on entry, plus possible slippage in fast moves. Some brokers add commission per lot.',
      'This virtual includes spread, but ignores commission and overnight fees for simplicity.'
    ], tip:'Always factor real-world costs when transitioning to a live account.'},
    {t:'Trend, Momentum & Volatility', p:[
      'Trend is the direction over time. Momentum is how quickly price is moving. Volatility is how wide it swings.',
      'High volatility = bigger moves but bigger risk. Adjust your lot size accordingly.'
    ], tip:'Don\'t use the same lot size in calm and volatile markets.'},
    {t:'RSI — Relative Strength Index', p:[
      'RSI is a momentum oscillator that ranges from 0 to 100, measuring how strong recent price changes are.',
      'Above 70 is traditionally "overbought"; below 30 is "oversold". But strong trends can stay extreme for a long time.'
    ], tip:'A more reliable signal is RSI divergence — price makes a new high but RSI does not.'},
    {t:'MACD — Moving Average Convergence Divergence', p:[
      'MACD compares two moving averages (typically 12 and 26) and plots the difference along with a 9-period signal line.',
      'A bullish crossover (MACD line crosses above signal) suggests momentum is shifting up; bearish is the reverse.'
    ], tip:'MACD lags. Combine it with structure (support/resistance) instead of using it alone.'},
    {t:'Bollinger Bands', p:[
      'Bollinger Bands wrap a moving average with two bands placed two standard deviations above and below.',
      'When the bands narrow ("the squeeze"), volatility is low and a big move often follows.'
    ], tip:'Price riding the upper or lower band is normal in trends — don\'t auto-fade it.'},
    {t:'Fibonacci Retracements', p:[
      'After an impulse move, price often retraces to one of the Fibonacci levels: 23.6%, 38.2%, 50%, 61.8%, or 78.6%.',
      'The "golden zone" between 61.8% and 78.6% is a common spot to look for trend continuation entries.'
    ], tip:'Anchor your fib only on clean, obvious swing high/low pairs — not noise.'},
    {t:'Divergence — Hidden & Regular', p:[
      'Regular bullish divergence: price prints a lower low while an oscillator (RSI/MACD) prints a higher low.',
      'Hidden bullish divergence: price prints a higher low but the oscillator prints a lower low — a continuation signal.'
    ], tip:'Divergence is a warning, not a trigger. Wait for price to confirm before entering.'},
    {t:'Chart Patterns: Head & Shoulders', p:[
      'A head-and-shoulders pattern has three peaks: a higher middle peak (head) flanked by two lower peaks (shoulders).',
      'The "neckline" connects the two valleys. A break below it signals a bearish reversal.'
    ], tip:'The measured target is roughly the head\'s height, projected down from the neckline.'},
    {t:'Chart Patterns: Double Top & Bottom', p:[
      'A double top is two failed attempts at a resistance — a classic bearish reversal pattern when the neckline breaks.',
      'A double bottom is its mirror: two failed sell-offs at support, leading to a bullish reversal on neckline break.'
    ], tip:'The wider apart the two peaks/valleys, the stronger the eventual reversal tends to be.'},
    {t:'Chart Patterns: Flags & Pennants', p:[
      'Flags are short, parallel consolidations that form after a sharp move — often continuation patterns.',
      'Pennants are similar but converge into a small triangle. Both usually break in the trend\'s original direction.'
    ], tip:'Look for flags forming on shrinking volume — that often precedes the breakout.'},
    {t:'Chart Patterns: Triangles', p:[
      'Ascending triangle: flat top, rising lows — typically bullish. Descending: flat bottom, falling highs — typically bearish.',
      'Symmetrical triangles converge from both sides and can break either way; trade the breakout.'
    ], tip:'Wait for the close beyond the trendline, not just a wick poke.'},
    {t:'Breakouts vs Fakeouts', p:[
      'A breakout is when price closes decisively beyond a level on increasing volume or momentum.',
      'A fakeout looks like a breakout but quickly reverses — often trapping late entries before the real move.'
    ], tip:'Strong breakouts rarely retest immediately. If the level fails on retest, it was likely a fakeout.'},
    {t:'Multi-Timeframe Analysis', p:[
      'Top-down: identify trend on a higher timeframe (4H, daily), then drop to a lower one (15m, 1H) to find entries.',
      'A trade aligned with the higher-timeframe trend has odds on its side; counter-trend setups need tighter management.'
    ], tip:'Define your "trade timeframe" and "trigger timeframe" before opening the chart.'},
    {t:'Risk-to-Reward Ratio (R:R)', p:[
      'R:R compares what you risk (SL distance) with what you target (TP distance). 1:2 means risking 1 to make 2.',
      'A 1:2 system can be profitable even with a 40% win rate. Lower R:R needs a much higher win rate.'
    ], tip:'Calculate R:R before every trade. If it\'s below 1:1.5, ask yourself why you\'re taking it.'},
    {t:'Position Sizing & The 1% Rule', p:[
      'Risk no more than 1% of account equity on a single trade. With $1,000, that\'s a $10 max loss per trade.',
      'Lot size = (Account × Risk%) / (SL distance × Pip value). The virtual\'s lot input multiplies position size linearly.'
    ], tip:'Cut risk after losses, not after wins. Compound when winning, protect when losing.'},
    {t:'Drawdown & Recovery Math', p:[
      'A 20% drawdown needs a 25% gain to recover. A 50% drawdown needs a 100% gain. Losses scale non-linearly.',
      'This is why protecting capital matters more than chasing winners. Survival first, profits second.'
    ], tip:'Set a hard daily loss cap (e.g., 3 losers in a row) and walk away when it hits.'},
    {t:'Expectancy — The Real Edge', p:[
      'Expectancy = (Win% × Avg Win) − (Loss% × Avg Loss). Positive expectancy means you make money over many trades.',
      'A 50% win rate at 1:2 R:R has positive expectancy; a 70% win rate at 1:0.5 R:R can still be a losing system.'
    ], tip:'Forget single trades. Judge your system over 50+ trades using expectancy.'},
    {t:'Trading Journals & Review', p:[
      'Log every trade: entry, exit, reason, emotion, screenshot. Review weekly for patterns in your behavior.',
      'Most edges come from cutting your worst losing setups, not finding new winning ones.'
    ], tip:'If a trade doesn\'t fit your written plan, it shouldn\'t be on the chart.'},
    {t:'Market Sessions: Asia, London, New York', p:[
      'London open (around 08:00 UTC) and the London/NY overlap (12:00-16:00 UTC) bring the heaviest forex volume.',
      'Asia session is calmer — better for range trading. NY close often reverses the day\'s trend.'
    ], tip:'Trade the session that fits your schedule. Don\'t force trades during dead hours.'},
    {t:'News & Economic Calendar', p:[
      'High-impact news (CPI, NFP, central bank rates) can cause violent spikes and wide spreads in seconds.',
      'Most pros either trade the news with a plan, or stand aside until the dust settles.'
    ], tip:'Never hold a tight-stop position into a known major news release.'},
    {t:'Trading Crypto vs Forex', p:[
      'Crypto runs 24/7, has bigger swings, and is less regulated. Forex has clearer sessions and tighter spreads.',
      'Crypto pairs tend to correlate strongly with the largest digital assets; forex pairs correlate with global rate expectations.'
    ], tip:'Volatility ≠ opportunity. The same lot size in crypto can wipe an account 5× faster than in forex.'},
    {t:'Trading Indices & Commodities', p:[
      'Indices (S&P 500, NAS100, DAX) reflect baskets of stocks — they move on macro news, not single tickers.',
      'Gold thrives in fear and inflation; oil moves on supply/demand and geopolitical headlines.'
    ], tip:'Each instrument has its own personality — don\'t apply forex tactics to gold without adjusting.'},
    {t:'Hedging & Correlations', p:[
      'Two pairs that move together (e.g., EUR/USD and GBP/USD) are correlated. Trading both same-direction doubles risk, not opportunity.',
      'A hedge is a counter-position to offset open risk — useful for pros, often misused by beginners as "hope".'
    ], tip:'If you can\'t close a losing trade, you don\'t need a hedge — you need to take the loss.'},
    {t:'Trading Psychology — Tilt & Revenge', p:[
      'Tilt is emotional trading after a loss: revenge trades, oversizing, abandoning the plan. It is the #1 account killer.',
      'When you feel tilt, the only correct move is to step away from the chart for at least an hour.'
    ], tip:'Set a "stop trading" rule: if you break your plan once, the day is done.'},
    {t:'Building a Trading System', p:[
      'A system has three parts: an entry trigger, an exit (TP/SL/trail), and a position-sizing rule. All three must be written.',
      'Backtest the system on at least 100 historical trades before going live. Look at expectancy, max drawdown, and consistency.'
    ], tip:'A boring system you actually follow beats a brilliant system you don\'t.'},
    {t:'Support and Resistance Zones', p:[
      'Support is a price area where buyers historically step in; resistance is where sellers do. They are zones, not exact lines.',
      'Old resistance often becomes new support after a clean break, and vice versa — this is called role reversal.'
    ], tip:'Mark zones on higher timeframes first; they\'re more reliable than zones drawn on noisy short charts.'},
    {t:'Reading Volume Correctly', p:[
      'Volume measures conviction. A breakout on rising volume is more credible than the same breakout on shrinking volume.',
      'Climax volume — a sudden huge spike at the end of a trend — often precedes reversal, not continuation.'
    ], tip:'Volume that lies is rare. Price that lies (fakeouts) is common. Trust volume more than price alone.'},
    {t:'The Spread and Slippage', p:[
      'Spread is the cost broker takes on every trade. In low-volatility hours spreads are tight; during news, spreads widen drastically.',
      'Slippage is the difference between your expected entry and the price actually filled. It worsens in fast markets.'
    ], tip:'Avoid market orders during major news. Use limit orders to control slippage.'},
    {t:'Long vs Short Positions', p:[
      'Going long means buying with the expectation of selling higher. Going short means selling first, with the obligation to buy back lower.',
      'Both directions carry equal risk in theory. In practice, shorts in trending markets can be devastating during squeezes.'
    ], tip:'Never short into clear strength without a stop. Markets can stay irrational longer than you can stay solvent.'},
    {t:'Liquidity Pools', p:[
      'Stop-loss clusters above swing highs and below swing lows are "liquidity pools." Smart money often hunts these to fill large orders.',
      'A sharp wick into a pool that quickly reverses ("liquidity grab") is a common smart-money pattern.'
    ], tip:'If your SL is at an obvious level, expect it to be tested. Place stops with breathing room.'},
    {t:'Order Types Explained', p:[
      'Market orders execute immediately at the best available price. Limit orders execute only at your specified price or better.',
      'Stop orders trigger a market order when a price level is hit — used for breakout entries and stop-losses.'
    ], tip:'Use limits for entries you have time to plan. Use markets only when speed matters more than price.'},
    {t:'Pip vs Point vs Tick', p:[
      'A pip is the standard unit of price change in forex (4th decimal for most pairs). A point is broker-specific, often 1/10 of a pip.',
      'Tick is the smallest price change, common in stocks and futures. Mixing these up is a beginner\'s most expensive mistake.'
    ], tip:'When setting TP/SL in "points," double-check what the broker means by "point" — pips or smaller units.'},
    {t:'Equity vs Balance vs Margin', p:[
      'Balance is your account total when no trades are open. Equity = Balance + unrealized P&L of open positions.',
      'Free margin is what\'s left to open new trades. When equity drops below margin requirement, you get a margin call.'
    ], tip:'Watch equity, not balance. Balance is yesterday\'s news; equity is today\'s reality.'},
    {t:'The 200 EMA Rule', p:[
      'The 200-period exponential moving average is the most-watched single line in trading. Many algos buy above it and sell below it.',
      'Price reclaiming the 200 EMA after a long stay below often marks the start of a new bull phase.'
    ], tip:'Don\'t fight the 200 EMA. Trade with its slope, not against it.'},
    {t:'Round Numbers as Magnets', p:[
      'Round prices in forex, crypto, and stocks attract orders because of human psychology and stop placement.',
      'Big round numbers often act as both magnets (price drifts toward them) and barriers (rejection on first touch).'
    ], tip:'Don\'t place TP exactly on a round number — go just before. Don\'t place SL exactly past one — go further.'},
    {t:'Risk On vs Risk Off', p:[
      '"Risk on" is when investors chase growth — stocks, crypto, and high-yield currencies (AUD, NZD) rise; safe havens fall.',
      '"Risk off" reverses: capital flees to USD, JPY, CHF, gold, and bonds. Knowing the regime tells you what to trade.'
    ], tip:'A risk-on day is usually a bad day to short equities. A risk-off day is a bad day to long them.'},
    {t:'Funding Rates in Crypto', p:[
      'In perpetual futures (the most-traded crypto product), longs pay shorts (or vice versa) every 8 hours based on the funding rate.',
      'Extreme positive funding = the crowd is overly long → a short squeeze risk. Extreme negative funding = oversold conditions.'
    ], tip:'Funding rate is sentiment in numbers. When everyone agrees, the move usually ends.'},
    {t:'Avoiding Overtrading', p:[
      'Overtrading is the fastest path to ruin. More trades means more spread paid, more emotional decisions, and lower expectancy.',
      'Set a daily trade limit (e.g., 3 setups per day). Pass on every trade that doesn\'t meet your written criteria.'
    ], tip:'The cleanest equity curves come from doing less, not more.'},
    {t:'The Habit of Walking Away', p:[
      'Walking away from the screen after a win or loss is a skill. Most traders give back profits chasing "one more trade."',
      'Set a clear daily target and a daily loss cap. Hit either, close the platform — without exception.'
    ], tip:'Discipline isn\'t about effort. It\'s about removing yourself from the temptation entirely.'},
    {t:'The Sandbox Mindset', p:[
      'Treat every trade in this virtual as if it were real — but never treat real trades as if they were a virtual. The first builds skill; the second destroys accounts.',
      'Use this sandbox to test setups, refine entries, and master TP/SL placement until it becomes muscle memory before risking a single real dollar.'
    ], tip:'Sandbox first. Master the craft. Real money comes after — if it ever needs to.'},
    {t:'Confirmation Bias', p:[
      'Confirmation bias is the tendency to seek and remember information that supports your existing belief while ignoring contrary evidence.',
      'In trading, this looks like: forming a bullish view on an asset, then only reading bullish news about it. Your edge dies the moment your charts only confirm what you want to see.'
    ], tip:'Before every trade, ask: "What would tell me I\'m wrong?" Write the answer down.'},
    {t:'Recency Bias', p:[
      'Recency bias makes you overweight what just happened. After three winning trades you feel invincible; after three losses you feel hopeless.',
      'Markets don\'t remember your last trade. Each setup is statistically independent of the previous one if your edge is real.'
    ], tip:'Your equity curve over 100 trades is your truth. Your last 3 trades are noise.'},
    {t:'Loss Aversion', p:[
      'Studies show losses feel about 2× as painful as equivalent gains feel pleasurable. That asymmetry is why traders close winners early and let losers run.',
      'Recognize the urge before you act on it. The same brain circuits that helped your ancestors avoid predators are sabotaging your trades today.'
    ], tip:'Pre-commit to your TP/SL. Set them at order time. Don\'t move them under emotional pressure.'},
    {t:'The Disposition Effect', p:[
      'The disposition effect is the classic mistake of selling winners too quickly while holding losers too long, hoping they\'ll come back.',
      'A winning trade does not owe you a profit at any specific level. A losing trade does not owe you a return to breakeven. Each trade is judged on its own R:R against your system.'
    ], tip:'If you wouldn\'t open the same trade fresh right now, close it.'},
    {t:'Cup and Handle Pattern', p:[
      'A cup and handle is a continuation pattern: price forms a rounded "U" cup, pulls back into a small handle, then breaks out higher on volume.',
      'It\'s most reliable on daily/weekly charts and after a clear prior uptrend. The handle should not retrace more than a third of the cup\'s depth.'
    ], tip:'Place stops below the handle low, target equal to the cup depth measured from breakout.'},
    {t:'Rising and Falling Wedges', p:[
      'A rising wedge has converging up-sloping trendlines and is bearish — it signals fading momentum despite higher prices.',
      'A falling wedge has converging down-sloping trendlines and is bullish — sellers exhaust themselves before buyers reverse the move.'
    ], tip:'Wedge breaks fail often if volume doesn\'t expand at the breakout. Confirm with volume.'},
    {t:'Island Reversal', p:[
      'An island reversal is rare but powerful: a gap up, then sideways trading, then a gap down (or the inverse). It "isolates" price as an island.',
      'It signals a sharp shift in sentiment and often marks major tops or bottoms on weekly charts.'
    ], tip:'Don\'t fade an island reversal — trade with it. The crowd has already turned.'},
    {t:'Three Drives Pattern', p:[
      'A three drives pattern shows three successive price thrusts, usually into a key Fibonacci extension (1.27 or 1.618).',
      'Each thrust is followed by a corrective pullback. The third thrust often exhausts buyers (or sellers) and reverses sharply.'
    ], tip:'Pair three drives with RSI or volume divergence for higher-probability reversals.'},
    {t:'Harmonic Patterns', p:[
      'Harmonic patterns (Gartley, Bat, Butterfly, Crab) use precise Fibonacci ratios between price swings to predict potential reversal zones.',
      'They\'re mathematical, not subjective — but require strict adherence to ratio rules. A Gartley with a 0.5 retrace is not a Gartley.'
    ], tip:'Use indicator tools to validate harmonic ratios — they\'re too precise to draw by eye.'},
    {t:'Break of Structure (BOS)', p:[
      'A Break of Structure happens when price decisively breaks a previous swing high (in an uptrend) or swing low (in a downtrend), confirming continuation.',
      'BOS is the foundational confirmation in modern price-action trading — it tells you the trend is intact.'
    ], tip:'A wick break is not a BOS. Wait for a body close beyond the swing point.'},
    {t:'Change of Character (CHoCH)', p:[
      'CHoCH is the first sign of a trend reversal: price breaks a counter-trend swing point that had been respected during the prior trend.',
      'It\'s often the earliest entry signal for trend reversals — but the riskiest, because it can be a false break.'
    ], tip:'CHoCH + retest is more reliable than CHoCH alone. Wait for the retest before committing.'},
    {t:'Order Blocks', p:[
      'An order block is the last candle before a strong impulse move — it represents where institutions accumulated before pushing price.',
      'Price often returns to test order blocks before continuing. They act as high-probability zones for entries with tight stops.'
    ], tip:'Bullish order block = last bearish candle before a strong rally. Bearish = last bullish candle before a sharp drop.'},
    {t:'Fair Value Gaps (FVG)', p:[
      'A fair value gap is a 3-candle pattern where the middle candle\'s body leaves a "gap" between the wicks of the surrounding candles.',
      'These imbalances often get "filled" later as price returns to balance buying and selling pressure.'
    ], tip:'FVGs in the direction of trend on a higher timeframe are the highest-probability entries.'},
    {t:'Imbalances and Inefficiencies', p:[
      'Imbalances are areas where price moved too quickly, leaving uneven volume distribution. Markets tend to revisit these zones.',
      'Trading imbalance theory is about anticipating mean reversion to "fix" inefficient price action.'
    ], tip:'Combine imbalances with HTF support/resistance for context — not every imbalance gets filled.'},
    {t:'Scaling In and Scaling Out', p:[
      'Scaling in means adding to a winning position as it moves in your favor. Scaling out means taking partial profits at predefined levels while letting the rest run.',
      'Both are tools for managing conviction and risk: scale in only when the trade proves itself; scale out to lock in returns and reduce stress.'
    ], tip:'Never scale into a losing position — that\'s "averaging down" and the fastest way to blow accounts.'},
    {t:'Pyramiding', p:[
      'Pyramiding is scaling in with progressively smaller positions as the trend extends. Each addition has a higher entry but a smaller size.',
      'Done right, it lets you ride trends with maximum profit. Done wrong, it concentrates risk at the trend\'s exhaustion point.'
    ], tip:'Move stops to breakeven on the first add, and trail behind the trend on each subsequent add.'},
    {t:'Fractional Kelly Sizing', p:[
      'The Kelly Criterion calculates the mathematically optimal bet size based on your edge. Most pros use Half-Kelly or Quarter-Kelly to reduce drawdowns.',
      'Formula: f = (p × b − q) / b, where p = win rate, q = loss rate, b = avg win / avg loss. Use 25–50% of f for real-world position size.'
    ], tip:'Full Kelly maximizes long-term growth but causes 50%+ drawdowns. Trade smaller than the math suggests.'},
    {t:'ATR-Based Stops', p:[
      'Average True Range (ATR) measures recent volatility. Setting stops at 1.5× to 2× ATR adapts to current market conditions instead of using fixed pip distances.',
      'A 30-pip stop on EUR/USD makes sense in calm markets but is far too tight during high-volatility news events.'
    ], tip:'Wider ATR = wider stop = smaller position size. Volatility and risk are linked, not separate.'},
    {t:'Trailing Stops Done Right', p:[
      'A trailing stop locks in profit by moving with price in your favor — but never against you. Common methods: ATR trail, swing-low trail, or % trail.',
      'The trade-off: tighter trails capture less of the move; looser trails let winners run but give back more on reversals.'
    ], tip:'Trail behind structure, not behind price. Wicks shake out tight trails constantly.'},
    {t:'Gold and the Dollar Index', p:[
      'Gold (XAU/USD) and the US Dollar Index (DXY) typically move inversely. A weakening dollar pushes gold higher and vice versa.',
      'When this correlation breaks (both rise or fall together), it usually signals a major macro shift — like a flight to safety in a crisis.'
    ], tip:'Watch DXY before trading gold. A strong DXY uptrend is a strong headwind for long gold positions.'},
    {t:'Oil Seasonality', p:[
      'Crude oil has predictable seasonal patterns: demand rises in summer (driving season) and winter (heating). Refinery maintenance schedules also create supply shifts.',
      'Inventory reports (EIA Wednesday) and OPEC meetings move oil more than almost any other scheduled event.'
    ], tip:'Don\'t hold oil positions through inventory data unless you\'re prepared for 2–4% gaps in either direction.'},
    {t:'Bond and Equity Correlations', p:[
      'In normal markets, bonds (TLT) and equities (SPY) are negatively correlated — when one falls, the other rises. This is the basis of 60/40 portfolios.',
      'In stagflation regimes, both can fall together. The 2022 selloff was a stark example.'
    ], tip:'When bonds and stocks both crash, cash and gold are the only refuges left.'},
    {t:'Market Dominance', p:[
      'Market dominance measures the largest digital asset\'s share of the total crypto market cap. Rising dominance usually means smaller assets are bleeding harder than the leader.',
      'Falling dominance means rotation — capital moves from the leader into smaller, higher-beta assets.'
    ], tip:'Don\'t rotate into smaller assets until leader dominance starts falling and the leader has stabilized after a major move.'},
    {t:'Kill Zones', p:[
      'Kill zones are the highest-volume, highest-volatility hours: London open (3–5 AM EST), New York open (8:30–10:30 AM EST), and the London/NY overlap.',
      'Most institutional moves and reversals happen in these windows. Trading outside them often means thinner liquidity and choppier action.'
    ], tip:'If your edge requires liquidity, trade only kill zones. The rest of the day is a tax on your patience.'},
    {t:'The NY Open Algorithm', p:[
      'The "NY open" is more than the bell — it\'s when major US algorithmic systems wake up. The first 90 minutes set the daily tone.',
      'Watch for "NY judas swing": a fake move in one direction at the open, then a sharp reversal that sets the day\'s real direction.'
    ], tip:'Don\'t commit to direction in the first 15 minutes of NY. Let the fakeout happen, then trade the reversal.'},
    {t:'The London Fix', p:[
      'The London Fix (4 PM London) is when a basket of major banks set benchmark currency rates used in trillions of dollars of contracts daily.',
      'In the 30 minutes around the fix, currencies — especially GBP and EUR — can move sharply on flow imbalances.'
    ], tip:'Avoid scalping during the London Fix unless you specifically trade the volatility spike.'},
    {t:'The Asian Range', p:[
      'The Asian session (roughly 7 PM – 4 AM EST) is typically low volatility. Price often consolidates in a tight range that becomes the day\'s "Asian high/low."',
      'When London opens, price often hunts liquidity above or below this range before the real trend begins.'
    ], tip:'Mark the Asian high and low before London opens. They\'re magnet levels for the rest of the day.'},
    {t:'Ichimoku Cloud', p:[
      'The Ichimoku Cloud is a Japanese indicator that combines trend, momentum, and support/resistance into one visual. Price above the cloud = bullish; below = bearish.',
      'The cloud\'s thickness shows how strong support or resistance will be. Thin clouds break easily; thick clouds hold.'
    ], tip:'For pure trend-following, only take longs above the cloud and shorts below. Inside the cloud = no-trade zone.'},
    {t:'ADX — Trend Strength', p:[
      'The Average Directional Index (ADX) measures trend strength regardless of direction. ADX above 25 = trending; below 20 = ranging.',
      'ADX rising from low to high signals the start of a new trend. ADX falling from high signals trend exhaustion.'
    ], tip:'Trend-following systems work in ADX > 25 environments. Mean-reversion systems work in ADX < 20 environments.'},
    {t:'Stochastic Oscillator', p:[
      'The Stochastic compares current price to its recent range, oscillating between 0 and 100. Above 80 = overbought; below 20 = oversold.',
      'In strong trends, Stochastic can stay overbought or oversold for long stretches. Don\'t fade trends with it — use it for reversal confirmation.'
    ], tip:'Stochastic crossovers in the direction of higher-timeframe trend are the highest-probability entries.'},
    {t:'On-Balance Volume (OBV)', p:[
      'OBV adds volume on up-days and subtracts on down-days. Rising OBV with rising price confirms the trend; falling OBV with rising price warns of weakness.',
      'It\'s especially useful for spotting accumulation or distribution before price reflects it.'
    ], tip:'Look for OBV breakouts before price breakouts — smart money accumulates before retail notices.'},
    {t:'VWAP — Volume Weighted Avg Price', p:[
      'VWAP is the average price weighted by volume from session open. Institutions use it as a benchmark — they buy below VWAP and sell above it.',
      'Price respecting VWAP as support/resistance signals the trend is healthy. Price ignoring it signals strong directional conviction.'
    ], tip:'On strong-trend days, VWAP is the textbook pullback entry. Wait for it.'},
    {t:'Anchored VWAP', p:[
      'Anchored VWAP starts from a specific event (earnings, news, swing low/high) instead of session open. It tracks the average price since that event.',
      'Useful for asking: "Where is the average buyer/seller since the last major catalyst sitting?" That answer drives where they\'ll defend or capitulate.'
    ], tip:'Anchor VWAP from a major swing low — it becomes the trend\'s "line in the sand."'},
    {t:'Footprint Charts', p:[
      'Footprint charts show actual buy and sell volume at every price level, not just OHLC. They reveal who was aggressive — buyers or sellers — within each candle.',
      'A green candle dominated by sell volume is a warning: buyers were absorbed but volume was actually selling pressure.'
    ], tip:'Footprints are pro tools. They show what happened inside the candle, not just the result.'},
    {t:'Delta Divergence', p:[
      'Delta is buy volume minus sell volume. When price makes a new high but delta doesn\'t, sellers are absorbing the move — a bearish divergence.',
      'Delta divergence often precedes reversals at exhaustion points like swing highs and lows.'
    ], tip:'Use delta divergence as a confirmation tool, never as a primary signal alone.'},
    {t:'Absorption', p:[
      'Absorption happens when large limit orders soak up aggressive market orders without moving price. It signals that institutions are quietly defending a level.',
      'You see it as flat candles with high volume — price isn\'t moving despite heavy trading.'
    ], tip:'Absorption at a key level + a reversal candle = high-probability turn. Wait for both.'},
    {t:'Exhaustion Patterns', p:[
      'Exhaustion is when price can\'t make new highs (or lows) despite continued effort. Volume rises, ranges narrow, but price stalls.',
      'Climactic candles with massive volume but small bodies are textbook exhaustion signals.'
    ], tip:'Exhaustion at trend extremes + reversal candle = the classic top/bottom signal.'},
    {t:'The Fed Dot Plot', p:[
      'The "dot plot" shows each Fed member\'s projected interest rate path over the next several years. Released quarterly with FOMC meetings.',
      'Surprises in the dot plot — more or fewer expected hikes than the market priced in — can move markets violently.'
    ], tip:'Read the dot plot, not just the rate decision. The path matters more than the destination.'},
    {t:'FOMC Meetings', p:[
      'The Federal Open Market Committee (FOMC) meets 8 times a year to set US interest rates. Decisions release at 2 PM EST, press conference at 2:30 PM.',
      'The 30 minutes after the press conference start are the most volatile — initial reaction often reverses as traders parse the actual message.'
    ], tip:'Don\'t hold positions through FOMC unless you\'re explicitly trading the event. Spreads widen brutally.'},
    {t:'NFP Playbook', p:[
      'Non-Farm Payrolls (first Friday of each month at 8:30 AM EST) is the most-traded US economic release. It moves USD, gold, and equities.',
      'A common pattern: initial spike one direction, reversal within 30 minutes, then continuation in the reversed direction. Never enter on the first move.'
    ], tip:'The "NFP fakeout" wins more often than the initial reaction. Wait 15 minutes before committing.'}
  ],

};

/* ============ ASSET DATABASE ============ */
const ASSETS = [
  /* === VIRTUAL FOREX-LIKE PAIRS (fictional) ===
   * All currency codes are made up. They are not real ISO currencies.
   */
  {sym:'AUR/NUM', name:'Auria / Numeric', cat:'forex', base:1.0850, vol:0.00045, decimals:5, spread:0.00012, pip:0.00001},
  {sym:'NUM/SYL', name:'Numeric / Sylvan', cat:'forex', base:148.32, vol:0.075, decimals:3, spread:0.020, pip:0.001},
  {sym:'SYL/NUM', name:'Sylvan / Numeric', cat:'forex', base:0.00674, vol:0.0000028, decimals:6, spread:0.0000010, pip:0.000001},
  {sym:'OAK/NUM', name:'Oakland / Numeric', cat:'forex', base:1.2680, vol:0.00050, decimals:5, spread:0.00015, pip:0.00001},
  {sym:'NUM/PIN', name:'Numeric / Pinecrest', cat:'forex', base:0.8920, vol:0.00040, decimals:5, spread:0.00012, pip:0.00001},
  {sym:'AUR/SYL', name:'Auria / Sylvan', cat:'forex', base:160.85, vol:0.085, decimals:3, spread:0.022, pip:0.001},
  {sym:'AUR/OAK', name:'Auria / Oakland', cat:'forex', base:0.8560, vol:0.00038, decimals:5, spread:0.00012, pip:0.00001},
  {sym:'OAK/SYL', name:'Oakland / Sylvan', cat:'forex', base:188.20, vol:0.090, decimals:3, spread:0.025, pip:0.001},
  {sym:'AUR/PIN', name:'Auria / Pinecrest', cat:'forex', base:0.9680, vol:0.00045, decimals:5, spread:0.00015, pip:0.00001},
  {sym:'AUS/NUM', name:'Austral / Numeric', cat:'forex', base:0.6580, vol:0.00040, decimals:5, spread:0.00014, pip:0.00001},
  {sym:'NUM/CAS', name:'Numeric / Cascadia', cat:'forex', base:1.3680, vol:0.00045, decimals:5, spread:0.00015, pip:0.00001},
  {sym:'NEW/NUM', name:'NewLand / Numeric', cat:'forex', base:0.6080, vol:0.00040, decimals:5, spread:0.00014, pip:0.00001},
  /* === VIRTUAL CRYPTO-LIKE COINS (fictional) ===
   * Made-up tickers that resemble crypto in volatility but have no relation to any real coin.
   */
  {sym:'NXC', name:'Nexora', cat:'crypto', base:67450.20, vol:280, decimals:2, spread:18.0, pip:0.01},
  {sym:'EVR', name:'Evermore', cat:'crypto', base:3520.15, vol:18, decimals:2, spread:1.20, pip:0.01},
  {sym:'AZL', name:'Azuralite', cat:'crypto', base:158.40, vol:1.4, decimals:2, spread:0.16, pip:0.01},
  {sym:'SLR', name:'Solarian', cat:'crypto', base:0.6180, vol:0.012, decimals:4, spread:0.0010, pip:0.0001},
  {sym:'OBL', name:'Obelis', cat:'crypto', base:7.840, vol:0.10, decimals:3, spread:0.012, pip:0.001},
  {sym:'LMN', name:'Lumenex', cat:'crypto', base:0.4260, vol:0.011, decimals:4, spread:0.0010, pip:0.0001},
  {sym:'AVL', name:'Avalith', cat:'crypto', base:38.20, vol:0.55, decimals:2, spread:0.06, pip:0.01},
  {sym:'KSM', name:'Kismath', cat:'crypto', base:42.30, vol:0.65, decimals:2, spread:0.07, pip:0.01},
  {sym:'POL', name:'Polaria', cat:'crypto', base:0.5680, vol:0.014, decimals:4, spread:0.0012, pip:0.0001},
  {sym:'TRX', name:'Trinex', cat:'crypto', base:0.1480, vol:0.005, decimals:4, spread:0.0006, pip:0.0001},
  {sym:'CSM', name:'Cosmara', cat:'crypto', base:8.420, vol:0.12, decimals:3, spread:0.014, pip:0.001},
  {sym:'NER', name:'Neartic', cat:'crypto', base:6.180, vol:0.09, decimals:3, spread:0.012, pip:0.001},
  /* === VIRTUAL COMMODITIES (fictional names) === */
  {sym:'AURUM', name:'Aurum-S', cat:'commodities', base:2415.80, vol:5.5, decimals:2, spread:0.40, pip:0.01},
  {sym:'ARGEN', name:'Argentum-S', cat:'commodities', base:28.90, vol:0.18, decimals:3, spread:0.015, pip:0.001},
  {sym:'CRUDE', name:'CrudeBlend-S', cat:'commodities', base:78.40, vol:0.55, decimals:2, spread:0.05, pip:0.01},
  {sym:'BREN', name:'NorthSeaBlend-S', cat:'commodities', base:82.30, vol:0.55, decimals:2, spread:0.05, pip:0.01},
  {sym:'NGAS', name:'NaturalGas-S', cat:'commodities', base:2.480, vol:0.030, decimals:3, spread:0.005, pip:0.001},
  {sym:'CPRX', name:'Copperis-S', cat:'commodities', base:4.380, vol:0.040, decimals:3, spread:0.005, pip:0.001},
  {sym:'PLAT', name:'Platinex-S', cat:'commodities', base:945.60, vol:8, decimals:2, spread:1.20, pip:0.01},
  {sym:'PALL', name:'Palladex-S', cat:'commodities', base:985.40, vol:14, decimals:2, spread:1.80, pip:0.01},
  /* === VIRTUAL INDICES (fictional) === */
  {sym:'SPN500', name:'Span500-S', cat:'indices', base:5485.20, vol:11, decimals:1, spread:0.5, pip:0.1},
  {sym:'TQX100', name:'Techtra-S', cat:'indices', base:18920.40, vol:38, decimals:1, spread:1.5, pip:0.1},
  {sym:'INDU30', name:'Indust30-S', cat:'indices', base:39820.50, vol:55, decimals:1, spread:2, pip:0.1},
  {sym:'NIK225', name:'Nippon225-S', cat:'indices', base:38450.10, vol:65, decimals:1, spread:3, pip:0.1},
  {sym:'DAX40', name:'Daxar40-S', cat:'indices', base:18750.20, vol:25, decimals:1, spread:1.2, pip:0.1},
  {sym:'BRIT100', name:'Britex100-S', cat:'indices', base:8290.40, vol:8, decimals:1, spread:1, pip:0.1},
  {sym:'CAC40', name:'Caspian40-S', cat:'indices', base:7560.20, vol:9, decimals:1, spread:1.2, pip:0.1},
  {sym:'HKE50', name:'Harbour50-S', cat:'indices', base:21450.20, vol:30, decimals:1, spread:4, pip:0.1},
  {sym:'AUS200', name:'Austral200-S', cat:'indices', base:8250.30, vol:9, decimals:1, spread:1.5, pip:0.1},
  {sym:'EUR50', name:'Eurostar50-S', cat:'indices', base:4920.50, vol:6, decimals:1, spread:0.8, pip:0.1},
  /* === VIRTUAL COMPANY-LIKE STOCKS (fictional names with suffix '-S' for "virtual") === */
  /* Tech-like */
  {sym:'APLX', name:'Aplexa-S', cat:'stocks', base:228.40, vol:1.5, decimals:2, spread:0.10, pip:0.01},
  {sym:'MCSF', name:'Mecasoft-S', cat:'stocks', base:418.30, vol:2.4, decimals:2, spread:0.18, pip:0.01},
  {sym:'GRUX', name:'Grupex-S', cat:'stocks', base:175.80, vol:1.4, decimals:2, spread:0.10, pip:0.01},
  {sym:'MEVA', name:'Mevarex-S', cat:'stocks', base:528.40, vol:3.5, decimals:2, spread:0.20, pip:0.01},
  {sym:'AMZN-S', name:'Amazex-S', cat:'stocks', base:188.20, vol:1.6, decimals:2, spread:0.10, pip:0.01},
  {sym:'NVDX', name:'Novidia-S', cat:'stocks', base:128.40, vol:2.4, decimals:2, spread:0.10, pip:0.01},
  {sym:'TSLX', name:'Teslara-S', cat:'stocks', base:248.30, vol:3.0, decimals:2, spread:0.16, pip:0.01},
  {sym:'NFLX-S', name:'Netflyx-S', cat:'stocks', base:728.40, vol:5.5, decimals:2, spread:0.30, pip:0.01},
  {sym:'ORLX', name:'Oraclen-S', cat:'stocks', base:165.30, vol:1.6, decimals:2, spread:0.10, pip:0.01},
  {sym:'CRMX', name:'Salesform-S', cat:'stocks', base:312.40, vol:3.0, decimals:2, spread:0.18, pip:0.01},
  {sym:'ADOX', name:'Adobon-S', cat:'stocks', base:548.20, vol:5.5, decimals:2, spread:0.30, pip:0.01},
  {sym:'PYPX', name:'Paypax-S', cat:'stocks', base:74.80, vol:0.9, decimals:2, spread:0.06, pip:0.01},
  {sym:'INTX', name:'Intelex-S', cat:'stocks', base:31.45, vol:0.55, decimals:2, spread:0.04, pip:0.01},
  {sym:'AMDX', name:'Amdara-S', cat:'stocks', base:142.80, vol:2.4, decimals:2, spread:0.10, pip:0.01},
  {sym:'CSCX', name:'Ciscom-S', cat:'stocks', base:58.20, vol:0.5, decimals:2, spread:0.04, pip:0.01},
  {sym:'IBMX', name:'IbeMex-S', cat:'stocks', base:212.50, vol:1.7, decimals:2, spread:0.10, pip:0.01},
  {sym:'QCOM-S', name:'Qualcomm-S', cat:'stocks', base:168.90, vol:1.9, decimals:2, spread:0.12, pip:0.01},
  {sym:'AVGX', name:'Avgora-S', cat:'stocks', base:1685.40, vol:14, decimals:2, spread:0.80, pip:0.01},
  {sym:'TXNX', name:'Texin-S', cat:'stocks', base:198.20, vol:1.6, decimals:2, spread:0.10, pip:0.01},
  {sym:'MUEX', name:'Microx-S', cat:'stocks', base:108.50, vol:1.7, decimals:2, spread:0.08, pip:0.01},
  {sym:'SHPX', name:'Shopfix-S', cat:'stocks', base:78.40, vol:1.4, decimals:2, spread:0.07, pip:0.01},
  {sym:'SNPX', name:'Snapix-S', cat:'stocks', base:11.20, vol:0.30, decimals:2, spread:0.02, pip:0.01},
  {sym:'PNTX', name:'Pinmark-S', cat:'stocks', base:32.80, vol:0.55, decimals:2, spread:0.04, pip:0.01},
  /* Finance-like */
  {sym:'JPMX', name:'Jaymorg-S', cat:'stocks', base:228.50, vol:1.8, decimals:2, spread:0.10, pip:0.01},
  {sym:'BACX', name:'BankAmer-S', cat:'stocks', base:46.30, vol:0.5, decimals:2, spread:0.04, pip:0.01},
  {sym:'WFCX', name:'WellsFar-S', cat:'stocks', base:74.20, vol:0.7, decimals:2, spread:0.05, pip:0.01},
  {sym:'GSNX', name:'Goldsacks-S', cat:'stocks', base:548.90, vol:5.5, decimals:2, spread:0.30, pip:0.01},
  {sym:'MSTX', name:'Morstan-S', cat:'stocks', base:128.60, vol:1.3, decimals:2, spread:0.08, pip:0.01},
  {sym:'CITX', name:'CityGr-S', cat:'stocks', base:69.40, vol:0.7, decimals:2, spread:0.05, pip:0.01},
  {sym:'VISX', name:'Visora-S', cat:'stocks', base:312.50, vol:2.2, decimals:2, spread:0.14, pip:0.01},
  {sym:'MASX', name:'Mastra-S', cat:'stocks', base:528.80, vol:4.0, decimals:2, spread:0.25, pip:0.01},
  {sym:'AMEX-S', name:'AmEx-S', cat:'stocks', base:298.40, vol:2.6, decimals:2, spread:0.16, pip:0.01},
  {sym:'BRKX', name:'Berkshira-S', cat:'stocks', base:478.90, vol:3.0, decimals:2, spread:0.20, pip:0.01},
  /* Retail / Consumer-like */
  {sym:'WALX', name:'Walmark-S', cat:'stocks', base:96.40, vol:0.7, decimals:2, spread:0.05, pip:0.01},
  {sym:'CSTX', name:'Costora-S', cat:'stocks', base:945.20, vol:7.5, decimals:2, spread:0.45, pip:0.01},
  {sym:'TGTX', name:'Targon-S', cat:'stocks', base:148.80, vol:1.5, decimals:2, spread:0.09, pip:0.01},
  {sym:'HMDX', name:'Homedep-S', cat:'stocks', base:412.30, vol:3.2, decimals:2, spread:0.20, pip:0.01},
  {sym:'LWEX', name:'Lowex-S', cat:'stocks', base:268.50, vol:2.4, decimals:2, spread:0.14, pip:0.01},
  {sym:'NIKX', name:'Niketon-S', cat:'stocks', base:78.20, vol:0.9, decimals:2, spread:0.06, pip:0.01},
  {sym:'SBUX-S', name:'Starbox-S', cat:'stocks', base:96.40, vol:0.9, decimals:2, spread:0.06, pip:0.01},
  {sym:'MCDX', name:'McDarl-S', cat:'stocks', base:298.50, vol:2.0, decimals:2, spread:0.12, pip:0.01},
  {sym:'COKX', name:'CokaCoka-S', cat:'stocks', base:68.40, vol:0.4, decimals:2, spread:0.03, pip:0.01},
  {sym:'PEPX', name:'Pepsica-S', cat:'stocks', base:158.30, vol:1.0, decimals:2, spread:0.07, pip:0.01},
  /* Healthcare-like */
  {sym:'JNJX', name:'JohnJohn-S', cat:'stocks', base:158.20, vol:1.0, decimals:2, spread:0.07, pip:0.01},
  {sym:'PFEX', name:'Pfizara-S', cat:'stocks', base:28.80, vol:0.30, decimals:2, spread:0.02, pip:0.01},
  {sym:'MRKX', name:'Merkina-S', cat:'stocks', base:104.50, vol:0.9, decimals:2, spread:0.06, pip:0.01},
  {sym:'LLYX', name:'Lillyora-S', cat:'stocks', base:842.30, vol:9, decimals:2, spread:0.50, pip:0.01},
  {sym:'UHCX', name:'UnitHealth-S', cat:'stocks', base:548.90, vol:5.0, decimals:2, spread:0.30, pip:0.01},
  /* Energy / Industrial-like */
  {sym:'XOMX', name:'ExoMobl-S', cat:'stocks', base:118.40, vol:1.2, decimals:2, spread:0.07, pip:0.01},
  {sym:'CHVX', name:'Chevora-S', cat:'stocks', base:158.30, vol:1.4, decimals:2, spread:0.10, pip:0.01},
  {sym:'BOEX', name:'Boeira-S', cat:'stocks', base:178.20, vol:2.4, decimals:2, spread:0.14, pip:0.01},
  {sym:'CATX', name:'Catpilar-S', cat:'stocks', base:382.50, vol:3.4, decimals:2, spread:0.20, pip:0.01},
  {sym:'GENX', name:'GenElec-S', cat:'stocks', base:188.40, vol:1.7, decimals:2, spread:0.10, pip:0.01},
  {sym:'FMOX', name:'FordMot-S', cat:'stocks', base:11.30, vol:0.20, decimals:2, spread:0.02, pip:0.01},
  {sym:'GMOX', name:'GenMotor-S', cat:'stocks', base:52.40, vol:0.6, decimals:2, spread:0.04, pip:0.01},
  /* Europe-like */
  {sym:'SAPX', name:'Sapora-S', cat:'stocks', base:228.40, vol:2.0, decimals:2, spread:0.12, pip:0.01},
  {sym:'ASMX', name:'Asmerix-S', cat:'stocks', base:768.50, vol:8, decimals:2, spread:0.45, pip:0.01},
  {sym:'NESX', name:'Nestlex-S', cat:'stocks', base:88.20, vol:0.6, decimals:2, spread:0.05, pip:0.01},
  {sym:'NVDX-S', name:'NovoNor-S', cat:'stocks', base:128.40, vol:1.4, decimals:2, spread:0.08, pip:0.01},
  {sym:'LVMX', name:'Luvmax-S', cat:'stocks', base:728.30, vol:7, decimals:2, spread:0.40, pip:0.01},
  {sym:'TOTX', name:'Totalin-S', cat:'stocks', base:62.40, vol:0.6, decimals:2, spread:0.04, pip:0.01},
  {sym:'BPLX', name:'BeePeel-S', cat:'stocks', base:38.40, vol:0.5, decimals:2, spread:0.04, pip:0.01},
  {sym:'SHLX', name:'Shellix-S', cat:'stocks', base:72.80, vol:0.7, decimals:2, spread:0.05, pip:0.01},
  /* Asia-like */
  {sym:'TSMX', name:'TaiSemi-S', cat:'stocks', base:208.40, vol:2.4, decimals:2, spread:0.14, pip:0.01},
  {sym:'BABX', name:'Aliboba-S', cat:'stocks', base:108.20, vol:1.8, decimals:2, spread:0.10, pip:0.01},
  {sym:'BIDX', name:'Baidora-S', cat:'stocks', base:88.40, vol:1.3, decimals:2, spread:0.08, pip:0.01},
  {sym:'JDLX', name:'JayDlux-S', cat:'stocks', base:42.30, vol:0.7, decimals:2, spread:0.05, pip:0.01},
  {sym:'PDDX', name:'Pinduo-S', cat:'stocks', base:128.50, vol:2.4, decimals:2, spread:0.14, pip:0.01},
  {sym:'NIOX', name:'NioMot-S', cat:'stocks', base:5.40, vol:0.20, decimals:2, spread:0.02, pip:0.01},
  {sym:'TOYX', name:'Toyora-S', cat:'stocks', base:178.30, vol:1.6, decimals:2, spread:0.10, pip:0.01},
  {sym:'SONX', name:'Sonyra-S', cat:'stocks', base:98.40, vol:1.0, decimals:2, spread:0.07, pip:0.01},
  /* === 25 NEW FICTIONAL ASSETS — Premium tier === */
  /* Premium Tech */
  {sym:'QNTM-S', name:'Quantora-S',  cat:'stocks', base:412.80, vol:5.8, decimals:2, spread:0.28, pip:0.01},
  {sym:'NEXG-S', name:'Nexagon-S',   cat:'stocks', base:284.40, vol:3.6, decimals:2, spread:0.18, pip:0.01},
  {sym:'ZYLX-S', name:'Zyloxis-S',   cat:'stocks', base:78.20,  vol:1.2, decimals:2, spread:0.06, pip:0.01},
  {sym:'ORBX-S', name:'Orbitex-S',   cat:'stocks', base:524.60, vol:7.2, decimals:2, spread:0.32, pip:0.01},
  {sym:'PHTX-S', name:'Photovix-S',  cat:'stocks', base:148.30, vol:2.1, decimals:2, spread:0.10, pip:0.01},
  /* Pharma / Biotech */
  {sym:'GENZ-S', name:'Genozeph-S',  cat:'stocks', base:642.80, vol:9.4, decimals:2, spread:0.42, pip:0.01},
  {sym:'BIOR-S', name:'BioRevia-S',  cat:'stocks', base:204.40, vol:3.2, decimals:2, spread:0.14, pip:0.01},
  {sym:'NRXP-S', name:'Neurexpa-S',  cat:'stocks', base:88.50,  vol:1.6, decimals:2, spread:0.08, pip:0.01},
  /* Industrial / Defense */
  {sym:'TITN-S', name:'Titanex-S',   cat:'stocks', base:184.20, vol:2.4, decimals:2, spread:0.12, pip:0.01},
  {sym:'AERX-S', name:'Aerospar-S',  cat:'stocks', base:312.80, vol:4.6, decimals:2, spread:0.20, pip:0.01},
  {sym:'STLR-S', name:'Stellaro-S',  cat:'stocks', base:62.30,  vol:0.9, decimals:2, spread:0.05, pip:0.01},
  /* Consumer / Retail */
  {sym:'LUMA-S', name:'Lumarex-S',   cat:'stocks', base:42.40,  vol:0.7, decimals:2, spread:0.04, pip:0.01},
  {sym:'CRSP-S', name:'Crispira-S',  cat:'stocks', base:128.60, vol:2.0, decimals:2, spread:0.10, pip:0.01},
  {sym:'VRDX-S', name:'Verdaxis-S',  cat:'stocks', base:92.30,  vol:1.4, decimals:2, spread:0.08, pip:0.01},
  /* Energy / Green */
  {sym:'SLRX-S', name:'Solarix-S',   cat:'stocks', base:54.80,  vol:0.9, decimals:2, spread:0.05, pip:0.01},
  {sym:'WNDX-S', name:'Windexor-S',  cat:'stocks', base:36.20,  vol:0.6, decimals:2, spread:0.04, pip:0.01},
  {sym:'HYDR-S', name:'Hydronex-S',  cat:'stocks', base:108.40, vol:1.8, decimals:2, spread:0.10, pip:0.01},
  /* Finance */
  {sym:'AURM-S', name:'Aurumex-S',   cat:'stocks', base:188.50, vol:2.2, decimals:2, spread:0.12, pip:0.01},
  {sym:'CAPX-S', name:'Capitora-S',  cat:'stocks', base:74.30,  vol:1.0, decimals:2, spread:0.06, pip:0.01},
  {sym:'INSU-S', name:'Insurex-S',   cat:'stocks', base:222.40, vol:2.6, decimals:2, spread:0.14, pip:0.01},
  /* Crypto */
  {sym:'ZTH-S',  name:'Zenith-S',    cat:'crypto', base:2840.50, vol:62, decimals:2, spread:1.80, pip:0.01},
  {sym:'OBL-S',  name:'Obelis-S',    cat:'crypto', base:418.40,  vol:14, decimals:2, spread:0.45, pip:0.01},
  {sym:'VLR-S',  name:'Velora-S',    cat:'crypto', base:18.40,   vol:1.2, decimals:3, spread:0.040, pip:0.001},
  {sym:'AXM-S',  name:'Axiom-S',     cat:'crypto', base:0.4280,  vol:0.020, decimals:4, spread:0.0010, pip:0.0001},
  {sym:'KSM-S',  name:'Kosmos-S',    cat:'crypto', base:62.40,   vol:2.4, decimals:2, spread:0.10, pip:0.01}
];

/* ============ LANGUAGES ============ */
const LANGUAGES = [
  {code:'en', native:'English', en:'English', rtl:false}
];
function getLang(code) { return LANGUAGES[0]; }
function isRTL(code) { return false; }

/* ============ ROTATING TAGLINES (0-RISK MESSAGING) ============ */
const TAGLINES = {
  en: [
    'This is a sandbox trading virtual. No real money involved.',
    'Trade freely with 0 LOSSES. Learn safely.',
    'Practice trading. 0 LOSSES, real skill.',
    'Your safe space to learn trading.',
    '0 LOSSES. Pure practice. Real growth.',
    'A virtual environment built for learning.',
    'No real funds. No real losses. Real lessons.',
    'Sandbox markets. Real-world skills.',
    'Practice every strategy at zero cost.',
    'Designed to teach, not to trade.',
    'Mistakes here cost nothing. Make many.',
    'Build trading instincts in a risk-free space.',
    'Educational virtual. Not a brokerage.',
    '0 LOSSES. Maximum learning.',
    'A virtual that replaces fear with familiarity.',
    'Every trade here is a lesson, not a loss.',
    'Try it. Test it. No consequences.',
    'Repetition without risk builds skill.',
    'Virtual prices. Sandbox capital. Genuine learning.',
    'Train your discipline before your wallet.',
    'A safe rehearsal for real markets.',
    'Confidence is built one virtual trade at a time.',
    'All trades are virtual. All learning is real.',
    'Practice TP/SL until it becomes second nature.',
    'Test ideas without putting money at stake.',
    'A trading lab where outcomes don\'t follow you home.',
    'Skill is built through repetition. Risk is not.',
    'Learn the markets, not the regrets.',
    'A controlled environment for uncontrolled curiosity.',
    'Trade today. Learn forever. Owe nothing.',
    'Virtual Session is the safest path to mastery.',
    'Real charts. Real spreads. Sandbox capital.',
    'The cheapest tuition in trading is a virtual.',
    'Sandbox first. Markets later — if ever.',
    'Trading practice. Always free. Always virtual.'
  ],
};

function getRandomTagline() {
  const lang = (typeof S !== 'undefined' && S && S.language) ? S.language : 'en';
  const list = TAGLINES[lang] || TAGLINES.en;
  return list[Math.floor(Math.random() * list.length)];
}

function showSandboxBanner(text, durationMs) {
  const el = document.getElementById('sandboxBanner');
  if (!el) return;
  // Don't show banner during onboarding/signin/lang select — only in main shell
  const shell = document.getElementById('shell');
  if (!shell || !shell.classList.contains('active')) return;
  const tx = el.querySelector('.sb-text');
  if (tx) tx.textContent = text || getRandomTagline();
  el.classList.add('show');
  clearTimeout(el._hideT);
  el._hideT = setTimeout(() => {
    el.classList.remove('show');
  }, durationMs || 4500);
}

/* ZERO RISK Flash — shows briefly on entry then fades */
function showZeroRiskFlash(durationMs) {
  const el = document.getElementById('zeroRiskFlash');
  if (!el) return;
  // Localized title and subtitle
  const ttl = el.querySelector('.zrf-title');
  if (ttl) ttl.textContent = t('zr_title');
  const sub = document.getElementById('zeroRiskFlashSub');
  if (sub) sub.textContent = t('zr_subtitle');
  el.classList.add('show');
  clearTimeout(el._hideT);
  el._hideT = setTimeout(() => {
    el.classList.remove('show');
  }, durationMs || 5000);
}

/* ============ FAQ CONTENT ============ */
const FAQ_DATA = {
  en: [
    {q:'Is this real money?', a:'No. All balances, prices, trades, rewards, and any monetary representation are entirely virtual and have no real-world value at any point.'},
    {q:'How are prices generated?', a:'Prices are virtual using algorithms that run locally on your device. They mimic realistic volatility but are not connected to real markets in any way.'},
    {q:'Do I need to create an account?', a:'No account or sign-in is required. The app works fully offline-capable, anonymously, with no registration. Your progress is stored privately on your device only.'},
    {q:'Can I withdraw or convert my virtual earnings?', a:'No. Virtual balances have no monetary value and cannot be exchanged, transferred, or withdrawn under any circumstance.'},
    {q:'How does TP / SL work?', a:'Take Profit (TP) and Stop Loss (SL) are point-distance triggers from your entry. The virtual auto-closes your position when the price reaches them.'},
    {q:'What is the spread?', a:'The spread is the small difference between BUY (ask) and SELL (bid) prices. It mirrors how real brokers charge for trades.'},
    {q:'Does this app contain advertisements?', a:'No. VTS is completely ad-free. There are no banner ads, interstitial ads, rewarded video ads, or sponsored content of any kind anywhere in the app.'},
    {q:'Does the app cost anything?', a:'No. VTS is 100% free with no premium tiers, no in-app purchases, no subscriptions, and no paywalls. Every feature is available to every user.'},
    {q:'How is my progress saved?', a:'Locally on your device using your browser\'s private storage. Closing or restarting the app does not lose your progress as long as your device storage is intact.'},
    {q:'Will I lose my progress if I uninstall?', a:'Yes. Because no account or cloud sync is used, uninstalling the app or clearing its storage erases your local progress. This is a deliberate privacy choice — your data never leaves your device.'},
    {q:'What language is the app in?', a:'The app is currently in English. More languages may be added in future updates.'},
    {q:'Is leverage real here?', a:'Leverage is virtual for educational purposes only. Real trading carries significant risk and you can lose more than your initial deposit.'},
    {q:'How does the hourly card-flip reward work?', a:'Once every hour you can pick one of four face-down cards and reveal a virtual reward. The cards reset automatically each hour.'},
    {q:'What happens when my balance hits zero?', a:'You can use the Pro Reset feature to recover a portion of your initial deposit instantly. There\'s no game over here — only practice.'},
    {q:'Can the virtual predict real markets?', a:'Absolutely not. The price action is generated locally on your device. Anyone claiming an app like this can predict real markets is misleading you.'},
    {q:'Why am I asked to confirm I\'m 18+?', a:'Even though no real money is involved, financial education content is rated for adults to align with platform policies. The age check is a one-time confirmation.'},
    {q:'Are my trading patterns shared with anyone?', a:'No. Your individual trade history stays on your device only. The app uses Google Analytics to understand anonymous, aggregated usage patterns (such as which screens are visited) for app improvement, but no personal trade data is transmitted off your device.'},
    {q:'Does this app collect any personal data?', a:'No. VTS does not collect passwords, contacts, private files, personal messages, email, name, or phone number. The app uses Google Analytics for anonymous usage patterns only — to help improve performance, fix bugs, and understand which features people use.'},
    {q:'What\'s the best way to use this app?', a:'Start with the Trade Hints lessons (90 of them). Practice one strategy at a time. Use TP/SL on every trade. Review your win rate weekly.'},
    {q:'How is the win rate calculated?', a:'It\'s simply: closed winning trades ÷ total closed trades, expressed as a percentage. Open positions don\'t count until they close.'},
    {q:'Why are there 80+ assets?', a:'To expose you to different market personalities — forex pairs behave differently from crypto, indices, or commodities. Variety builds intuition.'},
    {q:'What\'s the difference between Forex pairs and Crypto?', a:'Forex pairs trade in fractional pip movements with tight spreads; crypto moves in larger, faster swings with wider spreads. Each requires its own approach.'},
    {q:'Does the SMA line on the chart help?', a:'The 14-period Simple Moving Average gives a quick visual of trend direction. Price above SMA = uptrend bias, below = downtrend bias.'},
    {q:'How realistic is this compared to a real broker?', a:'Order execution, spread, TP/SL, and lot mechanics mirror real brokers closely. The price feed is virtual. It\'s about 85% realistic for learning purposes.'},
    {q:'Can I trade multiple positions at once?', a:'Yes. You can have multiple open positions across different assets simultaneously, each with its own TP/SL and lot size.'},
    {q:'What is a "lot"?', a:'A lot is the standard unit for position size. 1.00 lot is full size; 0.10 is mini, 0.01 is micro. Lot size determines how much each price point is worth.'},
    {q:'Why does my position have a margin requirement?', a:'Margin is the virtual collateral required to open a leveraged position. It scales with lot size and the asset\'s leverage ratio (e.g., 1:100).'},
    {q:'Can I see my trade history?', a:'Yes. The Trading Record panel shows all closed trades with their entry, exit, P&L, and reason for close (TP, SL, or manual).'},
    {q:'Do I get charged commission per trade?', a:'No commission is charged in the virtual. Real brokers may charge commission, swaps, and other fees — these are not virtual here.'},
    {q:'Is there a leaderboard?', a:'No public leaderboard exists. Your stats are completely private and visible only to you on your own device.'},
    {q:'Why do prices sometimes spike sharply?', a:'The virtual occasionally injects volatility to mimic real-market events like news releases. This teaches you to manage risk during fast-moving conditions.'},
    {q:'Can I trust the lessons inside the app?', a:'The 90 trading lessons cover well-established concepts. They are educational and generalized — for advanced or personalized advice, consult a licensed professional.'},
    {q:'What if I disagree with the Terms?', a:'You can decline the Terms during onboarding. Without acceptance, the app will not function. You can review the Terms again at any time before accepting.'},
    {q:'Are achievements real prizes?', a:'No. Achievements are purely visual recognition of your in-app progress. They have no monetary or redeemable value.'},
    {q:'Why does the app remind me it\'s a sandbox?', a:'Periodic reminders reinforce that no real money is involved, which is a key requirement of educational virtual policies and helps you stay focused on learning.'},
    {q:'What if the app crashes during a trade?', a:'Your virtual balance and open positions auto-save every few seconds. Reopening the app restores your last state.'},
    {q:'How can I support the developer?', a:'VTS is a one-person passion project, offered free with no ads. If you find it useful, you can support development via the donation link in Settings → Support the Project. All contributions are voluntary, non-refundable, and grant no in-app benefits.'},
    {q:'How do I get the most out of the virtual?', a:'Treat it like real practice: define a system, journal your trades, track your win rate, and aim for consistency. Boring discipline beats lucky guesses.'},
    {q:'How is it guaranteed that no real money is involved?',a:'Every trade, balance, reward, and consequence in this app is virtual. The application has no payment processor, no withdrawal flow, and no fiat connection — there is no technical pathway through which real funds could be moved. The risk-free nature is built into the architecture, not added as a label.'},
    {q:'Can I lose any real money no matter what I do?',a:'No. Even if you blew through your virtual balance every single day for a year, your real-world wallet would never be touched. The virtual\'s safety applies regardless of how aggressively or recklessly you trade inside the sandbox.'},
    {q:'Why does the app keep mentioning it is a sandbox?',a:'Repetition reinforces the mental model that this is a learning environment, not a path to real-money trading. It also satisfies platform educational policies and helps prevent confusion between virtual results and real markets.'},
    {q:'Can I share my virtual wins with others?',a:'Yes — sharing screenshots is fine. But never imply or claim that virtual gains are real, redeemable, or predictive. Doing so could mislead others and may violate platform policies.'},
    {q:'Does the safety of the virtual mean I can be careless?',a:'In trading mechanics, yes — make every mistake here. In habits, no. The sandbox is most powerful when you treat it like real practice: define a system, journal trades, follow your rules. Sloppy practice builds sloppy habits.'}
  ],

};
/* ============ DISCLAIMER CONTENT ============ */
const DISCLAIMER_DATA = {
  en: [
    {h:'Educational and Entertainment Use Only', p:'VTS — Virtual Trading School is provided strictly for educational, training, and entertainment purposes. Nothing within this application constitutes financial advice, investment advice, tax advice, legal advice, an investment recommendation, an offer, or a solicitation to buy, sell, or hold any real-world asset.'},
    {h:'Absolutely No Real Money', p:'All balances, transactions, profits, losses, rewards, deposits, and any monetary representation displayed within the application are entirely virtual. They have no monetary value, cannot be exchanged, transferred, withdrawn, sold, gifted, or redeemed for real currency, goods, services, or any other thing of value, whether directly or indirectly.'},
    {h:'Algorithmically Virtual Market Data', p:'Price movements, candlestick patterns, charts, spreads, volumes, and market behavior shown within the application are generated locally on your device by algorithms. They are not derived from real-time, delayed, or historical market data feeds and must not be used to make actual trading decisions in real markets.'},
    {h:'No Liability for User Decisions', p:'The developers, publishers, distributors, and operators of this application bear no responsibility or liability whatsoever for any decisions, actions, conduct, financial losses, or consequences incurred by users in real markets, with real brokers, or in real financial activities, whether or not influenced by experience gained within this virtual.'},
    {h:'Severe Risk Warning for Real Trading', p:'Real-world trading of forex, cryptocurrencies, stocks, commodities, indices, derivatives, CFDs, options, futures, or any leveraged or unleveraged financial instruments carries a high level of risk. You can lose all of your invested capital, and in some markets you may lose more than your initial deposit. The vast majority of retail traders lose money. Always consult a licensed financial advisor before engaging in any real trading.'},
    {h:'Past Performance Is Not Indicative', p:'Any in-app outcomes, virtual profits, virtual win rates, achievements, or virtual balances achieved within this application are not, and shall not be construed as, indicators or predictors of any real-world trading performance. Skill demonstrated in a virtual may not transfer to real markets due to differences in execution, slippage, emotion, capital, and liquidity.'},
    {h:'No Affiliation, Endorsement, or Sponsorship', p:'This application is not affiliated with, endorsed by, partnered with, sponsored by, certified by, regulated by, or supervised by any real broker, exchange, financial institution, regulatory authority, central bank, government agency, or trading platform mentioned, displayed, referenced, or implied anywhere within the application.'},
    {h:'No Advertising and Anonymous Analytics', p:'This application contains no advertisements of any kind — no banner ads, no interstitial ads, no rewarded video ads, no sponsored content, and no third-party advertising networks. The application uses Google Analytics to understand anonymous usage patterns and improve app performance. No personal information is collected — no passwords, contacts, private files, or personal messages.'},
    {h:'Compliance with Platform Policies', p:'This application complies with Google Play\'s educational and virtual trading policies. It does not enable, facilitate, advertise, or promote real-money gambling, real trading, the purchase or sale of real financial instruments, or any other regulated financial activity. The application provides no on-ramp to real markets.'},
    {h:'No Predictive Capability', p:'No element of this virtual — including but not limited to AI-generated price action, virtual candles, virtual indicators, in-app trade outcomes, or "lucky" rewards — has any predictive capability or correlation with real-world financial markets. Anyone claiming otherwise is misrepresenting the application.'},
    {h:'Virtual Rewards Have No Cash Value', p:'In-app rewards (including hourly card-flip rewards, daily challenge rewards, achievements, mystery box rewards, and any reset recoveries) are entirely virtual and have no cash value. They are awarded solely as gameplay incentives and cannot be converted, traded, withdrawn, or redeemed under any circumstance.'},
    {h:'Educational Content Is Generalized', p:'All lessons, tips, FAQs, and educational content provided within the application are generalized for instructional purposes and do not constitute personalized financial advice. They may be incomplete, oversimplified, or outdated. Do not rely on them as the sole source of trading knowledge.'},
    {h:'No Guarantee of Continuous Availability', p:'The publisher does not guarantee uninterrupted access, continuous availability, error-free operation, or preservation of progress. The application may be modified, suspended, or discontinued at any time without prior notice, and any virtual balances or rewards are forfeited upon termination.'},
    {h:'User Responsibility for Local Compliance', p:'You are solely responsible for ensuring that your use of this application complies with the laws, regulations, and policies of your jurisdiction. The application may not be available or appropriate for users in all locations and is intended only for jurisdictions where virtual educational trading content is permitted.'},
    {h:'Mental Health and Financial Wellbeing', p:'If real-world trading or financial speculation is causing you distress, financial harm, or addictive behavior, please seek professional help. VTS — Virtual Trading School is not designed or intended to encourage, glamorize, or promote real-world speculation. It is a learning tool only.'},
    {h:'Acknowledgement', p:'By using this application you acknowledge that you have read, understood, and irrevocably accepted this Disclaimer in full, that you understand no real money is involved at any point, that this is strictly a sandbox educational virtual, and that you assume sole responsibility for any decisions you may make in real-world financial markets.'}
  ],

};

/* ============ GOOGLE ANALYTICS HELPERS ============ */
/* Safely send a GA event — never throws, works even if gtag fails to load */
function gaEvent(eventName, params) {
  try {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params || {});
    }
  } catch (e) { /* noop — analytics never blocks the app */ }
}
/* Send a virtual page view (single-page app navigation) */
function gaPageView(pageName) {
  try {
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_title: pageName,
        page_location: (typeof location !== 'undefined' && location.href) ? location.href : '',
        page_path: '/' + (pageName || 'home')
      });
    }
  } catch (e) { /* noop */ }
}

/* ============ STATE ============ */
const STORAGE_KEY = 'sbt_v2';
const DEFAULT_STATE = {
  balance: 3.00,
  startBalance: 8.00,
  initialDeposit: 8.00,
  lot: 0.10,
  selectedSym: 'EUR/USD',
  category: 'all',
  timeframe: '5m',
  search: '',
  positions: [],
  history: [],
  wins: 0,
  losses: 0,
  closedSinceInterstitial: 0,
  favorites: [],
  lastFlipPlay: 0,
  // News feed
  activeNews: [],
  newsFeed: [],
  // Mystery Box
  mbReadyAt: 0,
  mbRevealedReward: null,
  mbActiveBoost: null,
  mbBootWall: 0,         // anti-tamper anchor (wall clock at first launch)
  // Market Mood — 2-hour cooldown next-available timestamp (trusted-time millis)
  moodNextAvailableAt: 0,
  // Tutorial flag
  tutorialDone: false,
  // Trading Pulse: streak + daily challenge
  streakCount: 0,
  lastActiveDay: '',
  dailyChallenge: null,    // { type, target, progress, day, completed }
  resetAds: 0,
  resetDay: '',
  language: 'en',
  langSelected: true,
  signedIn: false,
  playerName: '',
  sound: true,
  haptics: true,
  theme: 'default',
  launchCount: 0,
  flipCount: 0,
  agreed: false,
  age18: false,
  showSMA: true,
  showMA: true,
  showBOLL: false,
  showVol: false,
  showRSI: false,
  achievements: {
    first_trade: false,
    first_win: false,
    five_wins_streak: false,
    big_win: false,
    diversified: false,
    survivor: false,
    high_roller: false,
    daily_streak: false
  },
  achievementHistory: { tradedSymbols: [], winStreak: 0 },
  prices: {}, // current price per symbol
  candles: {}, // candle history per symbol per timeframe
  prevDayClose: {} // for 24h change
};

let S = loadState();

/* ============ STORAGE HEALTH CHECK ============ */
/* Detect if localStorage is actually persisting between page loads.
   If not, warn the user (e.g., private browsing, Brave Shields blocking, full storage). */
function _checkStorageHealth() {
  try {
    const testKey = '__vts_storage_test__';
    const now = Date.now();
    const prev = localStorage.getItem(testKey);
    localStorage.setItem(testKey, String(now));
    // Read it back immediately to verify write
    const readBack = localStorage.getItem(testKey);
    if (readBack !== String(now)) {
      console.warn('[VTS] localStorage write failed silently');
      return { ok: false, reason: 'write-failed' };
    }
    // Check if previous test value persisted (only meaningful after a reload)
    if (prev) {
      const prevTime = parseInt(prev, 10);
      const elapsed = now - prevTime;
      if (elapsed < 60 * 60 * 1000) {
        // < 1 hour means we likely had a previous session — storage IS persisting
        return { ok: true, persisting: true };
      }
    }
    return { ok: true, persisting: false };
  } catch (e) {
    console.warn('[VTS] localStorage error:', e);
    return { ok: false, reason: 'exception', error: e };
  }
}
// Run the check immediately; cache result for later warning
const _storageHealth = _checkStorageHealth();
if (!_storageHealth.ok) {
  console.warn('[VTS] WARNING: Your browser is blocking localStorage. ' +
               'Your progress will not be saved. ' +
               'This often happens in: Incognito/Private mode, Brave Shields, ' +
               'or when storage is full.');
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    let s;
    if (!raw) s = JSON.parse(JSON.stringify(DEFAULT_STATE));
    else {
      const parsed = JSON.parse(raw);
      s = Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), parsed);
    }
    // English-only + no-Google build: always force these
    s.language = 'en';
    s.langSelected = true;
    s.signedIn = true;
    if (!s.playerName) s.playerName = 'Trader';
    // Transient fields — regenerated by initVirtual on every launch.
    // We do NOT persist these in localStorage (too large, exceeds 5MB quota).
    s.candles = {};
    s.prices = {};
    s.prevDayClose = s.prevDayClose || {};
    return s;
  } catch (e) {
    const s = JSON.parse(JSON.stringify(DEFAULT_STATE));
    s.language = 'en';
    s.langSelected = true;
    s.signedIn = true;
    s.playerName = 'Trader';
    s.candles = {};
    s.prices = {};
    s.prevDayClose = {};
    return s;
  }
}
function saveState() {
  try {
    // Strip large transient fields that don't need to persist across sessions.
    // candles/prices are regenerated on every launch (Mock virtual).
    // Keeping them in localStorage exceeds the 5MB browser quota on Android,
    // causing the save to fail silently and reset balance + tutorial.
    const persisted = {};
    for (const k in S) {
      if (k === 'candles' || k === 'prices' || k === 'prevDayClose') continue;
      persisted[k] = S[k];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  } catch (e) {
    console.warn('save failed', e);
  }
}
let saveTimer = null;
function saveSoon() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveState, 400);
}

/* ============ UTILS ============ */
function $(sel, ctx=document) { return ctx.querySelector(sel); }
function $$(sel, ctx=document) { return Array.from(ctx.querySelectorAll(sel)); }
function t(key, vars) {
  let s = (I18N[S.language] && I18N[S.language][key]) || I18N.en[key] || key;
  if (vars) Object.keys(vars).forEach(k => { s = s.replace('{'+k+'}', vars[k]); });
  return s;
}
function fmt(n, decimals) {
  if (n === undefined || n === null || isNaN(n)) return '—';
  return Number(n).toFixed(decimals);
}
function fmtMoney(n) {
  if (isNaN(n)) return '$0.00';
  const sign = n < 0 ? '-' : '';
  return sign + '$' + Math.abs(n).toFixed(2);
}
function fmtSignedMoney(n) {
  if (isNaN(n)) return '$0.00';
  const sign = n >= 0 ? '+' : '-';
  return sign + '$' + Math.abs(n).toFixed(2);
}
function nowStr() { return new Date(getTrustedTime()).toLocaleString(); }
function todayKey() { return new Date(getTrustedTime()).toISOString().slice(0,10); }
function getAsset(sym) { return ASSETS.find(a => a.sym === sym); }
function clamp(v, mn, mx) { return Math.max(mn, Math.min(mx, v)); }
function getPrice(sym) {
  const p = S.prices[sym];
  return p ? p.last : (getAsset(sym) ? getAsset(sym).base : 0);
}
function getBid(sym) {
  const a = getAsset(sym); if (!a) return 0;
  return getPrice(sym) - a.spread/2;
}
function getAsk(sym) {
  const a = getAsset(sym); if (!a) return 0;
  return getPrice(sym) + a.spread/2;
}

function vibrate(ms) {
  if (S.haptics && navigator.vibrate) {
    try { navigator.vibrate(ms || 12); } catch(e){}
  }
}
let audioCtx = null;
function beep(freq, dur, vol) {
  if (!S.sound) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = 'sine';
    o.frequency.value = freq;
    g.gain.value = vol || 0.05;
    o.connect(g); g.connect(audioCtx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (dur||0.08));
    o.stop(audioCtx.currentTime + (dur||0.08));
  } catch(e){}
}

/* ============ TOAST ============ */
function toast(msg, type = 'info', duration = 2400) {
  const wrap = $('#toastWrap');
  if (!wrap) return;
  // Suppress all toasts while the user is viewing Settings — keeps that screen calm
  const settingsModal = document.getElementById('settingsModal');
  if (settingsModal && settingsModal.classList.contains('open')) {
    // Only let critical error toasts through (e.g. storage failures, gate issues)
    if (type !== 'error') return;
  }
  // Dedupe: if the same message is currently showing, refresh it instead of stacking
  const existing = Array.from(wrap.querySelectorAll('.toast')).find(el => {
    const m = el.querySelector('.msg');
    return m && m.textContent === String(msg);
  });
  if (existing) {
    // Reset its lifetime
    existing.classList.remove('out');
    if (existing._dismissTimer) clearTimeout(existing._dismissTimer);
    existing._dismissTimer = setTimeout(() => {
      existing.classList.add('out');
      setTimeout(() => existing.remove(), 250);
    }, duration);
    return;
  }
  // Cap concurrent toasts — remove the oldest if 3 are already showing
  const current = wrap.querySelectorAll('.toast:not(.out)');
  if (current.length >= 3) {
    const oldest = current[0];
    oldest.classList.add('out');
    setTimeout(() => oldest.remove(), 200);
  }
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  el.innerHTML = `<span class="ic">${icons[type] || ''}</span><span class="msg">${msg}</span>`;
  wrap.appendChild(el);
  el._dismissTimer = setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 250);
  }, duration);
}

/* ============ MARKET SIMULATOR ============ */
/* Multi-factor model: trend + cyclical wave + momentum + volatility shock */
function initVirtual() {
  ASSETS.forEach(a => {
    if (!S.prices[a.sym]) {
      S.prices[a.sym] = {
        last: a.base,
        trend: (Math.random() - 0.5) * 0.0002,
        momentum: 0,
        wavePhase: Math.random() * Math.PI * 2,
        prevDay: a.base * (1 + (Math.random()-0.5)*0.02),
        high24: a.base * 1.005,
        low24: a.base * 0.995
      };
    }
    if (!S.candles[a.sym]) S.candles[a.sym] = {};
    Object.keys(TF_INTERVALS).forEach(tf => {
      if (!S.candles[a.sym][tf]) {
        S.candles[a.sym][tf] = generateInitialCandles(a, 80);
      }
    });
  });
}

function generateInitialCandles(asset, count) {
  const arr = [];
  let p = asset.base;
  let trend = (Math.random() - 0.5) * 0.0001;
  for (let i = 0; i < count; i++) {
    const o = p;
    const drift = trend * p;
    const noise = (Math.random() - 0.5) * 2 * asset.vol;
    const wave = Math.sin(i * 0.18) * asset.vol * 0.6;
    const c = Math.max(0.0001, o + drift + noise + wave);
    const hi = Math.max(o, c) + Math.random() * asset.vol * 0.8;
    const lo = Math.min(o, c) - Math.random() * asset.vol * 0.8;
    arr.push({ o, h: hi, l: Math.max(0.0001, lo), c, t: Date.now() - (count - i) * 60000 });
    p = c;
    if (Math.random() < 0.04) trend = (Math.random() - 0.5) * 0.0002;
  }
  return arr;
}

/* =========================================================
 * NEWS ENGINE — virtual market news that drives prices
 * News items are generated from templates with categorical
 * impact on selected assets (forex/crypto/stocks/etc).
 * Each news has a duration during which it pushes prices
 * in a direction with decaying strength.
 * ========================================================= */
const NEWS_TEMPLATES = {
  en: [
    // Central bank / monetary policy
    { key:'cb_hawkish',       headline:'Central authority signals hawkish stance',                    cat:'macro',       impact:{ forex:'usd_up', stocks:'down', crypto:'down', commodities:'down', indices:'down' }, severity:1.4 },
    { key:'cb_dovish',        headline:'Central authority turns dovish on policy outlook',           cat:'macro',       impact:{ forex:'usd_down', stocks:'up', crypto:'up', commodities:'up', indices:'up' },   severity:1.4 },
    { key:'inflation_hot',    headline:'Inflation print comes in hotter than forecast',              cat:'macro',       impact:{ forex:'usd_up', stocks:'down', crypto:'down', commodities:'mixed', indices:'down' }, severity:1.3 },
    { key:'inflation_cool',   headline:'Inflation eases, below the projected band',                  cat:'macro',       impact:{ forex:'usd_down', stocks:'up', crypto:'up', commodities:'up', indices:'up' },   severity:1.2 },
    { key:'jobs_strong',      headline:'Strong employment report beats expectations',                cat:'macro',       impact:{ forex:'usd_up', stocks:'mixed', commodities:'down', indices:'mixed' },          severity:1.3 },
    { key:'jobs_weak',        headline:'Weak jobs report — slowdown fears resurface',                cat:'macro',       impact:{ forex:'usd_down', stocks:'down', commodities:'down', indices:'down' },         severity:1.4 },
    { key:'rates_up',         headline:'Rate hike announced to curb price pressures',                cat:'macro',       impact:{ forex:'eur_up', indices:'down' },                                                severity:1.1 },
    { key:'fx_intervention',  headline:'Currency intervention reported in the market',               cat:'macro',       impact:{ forex:'jpy_up' },                                                                 severity:1.5 },

    // Commodities
    { key:'energy_cut',       headline:'Energy producers announce surprise supply cut',              cat:'commodities', impact:{ commodities:'up_oil', forex:'cad_up', stocks:'mixed' },                          severity:1.3 },
    { key:'energy_build',     headline:'Energy inventories build above forecast',                    cat:'commodities', impact:{ commodities:'down_oil', forex:'cad_down' },                                      severity:1.0 },
    { key:'metals_rally',     headline:'Precious metals rally on safe-haven flows',                  cat:'commodities', impact:{ commodities:'up_gold', forex:'usd_down' },                                       severity:1.2 },

    // Crypto
    { key:'crypto_inflow',    headline:'Digital-asset funds see record daily inflows',               cat:'crypto',      impact:{ crypto:'up' },                                                                    severity:1.4 },
    { key:'crypto_regulation',headline:'New regulatory framework proposed for digital assets',      cat:'crypto',      impact:{ crypto:'down' },                                                                  severity:1.3 },
    { key:'crypto_upgrade',   headline:'Major network upgrade ships successfully',                   cat:'crypto',      impact:{ crypto:'up' },                                                                    severity:1.1 },

    // Stocks
    { key:'tech_strong',      headline:'Technology sector posts blockbuster earnings',               cat:'stocks',      impact:{ stocks:'up_tech', indices:'up' },                                                 severity:1.2 },
    { key:'tech_weak',        headline:'Tech leader misses estimates, shares tumble',                cat:'stocks',      impact:{ stocks:'down_tech', indices:'down' },                                             severity:1.3 },
    { key:'finance_stress',   headline:'Financial sector pressured by credit concerns',              cat:'stocks',      impact:{ stocks:'down_finance', indices:'down' },                                          severity:1.2 },

    // Macro / global
    { key:'macro_stimulus',   headline:'Stimulus program announced for global growth',               cat:'macro',       impact:{ stocks:'up', crypto:'up', commodities:'up', indices:'up' },                      severity:1.2 },
    { key:'geo_tensions',     headline:'Geopolitical tensions escalate in key region',               cat:'macro',       impact:{ commodities:'up_gold', commodities2:'up_oil', stocks:'down', forex:'usd_up' },   severity:1.5 },
    { key:'trade_friction',   headline:'Trade frictions reported between major partners',            cat:'macro',       impact:{ stocks:'down', forex:'usd_up' },                                                  severity:1.1 }
  ],

};

const NEWS_DURATION_MS = 6 * 60 * 1000;   // each news event affects market for 6 minutes
const NEWS_SPAWN_MS_MIN = 3 * 60 * 1000;  // 3 minutes minimum between news (per user request)
const NEWS_SPAWN_MS_MAX = 3 * 60 * 1000;  // exactly every 3 minutes
const NEWS_KEEP_HISTORY = 30;             // keep last 30 in feed

let _nextNewsTime = Date.now() + 30000;   // first news soon after launch (uses raw clock for boot timing only)

/* Returns the price-impulse for a given asset based on currently active news. */
function _getNewsImpulse(asset) {
  if (!S.activeNews || !S.activeNews.length) return 0;
  const now = getTrustedTime();
  let total = 0;
  S.activeNews.forEach(n => {
    if (now > n.until) return;
    const remaining = n.until - now;
    const decay = remaining / NEWS_DURATION_MS; // 1.0 → 0.0
    const dir = _newsDirectionFor(n, asset);
    if (dir === 0) return;
    // Strength = severity * decay * 0.6 base, with sign from direction
    total += dir * n.severity * decay * 0.6;
  });
  return total;
}

/* Maps an active news + an asset to a -1/0/+1 direction multiplier */
function _newsDirectionFor(news, asset) {
  const cat = asset.cat;
  const sym = asset.sym;
  const isUSD = sym.includes('USD');
  const isUSDQuote = sym.endsWith('USD') || sym.endsWith('/USD');
  const isUSDBase = sym.startsWith('USD');
  const isJPY = sym.includes('JPY');
  const isEUR = sym.includes('EUR');
  const isCAD = sym.includes('CAD');
  const isOil = sym === 'OIL' || sym === 'BRENT';
  const isGold = sym === 'XAU/USD' || sym === 'GOLD';
  const isTech = ['AAPL','MSFT','GOOGL','META','AMZN','NVDA','TSLA','NFLX','ORCL','CRM','ADBE','INTC','AMD','CSCO','IBM','QCOM','AVGO','TXN','MU','SHOP','SNAP','PINS','TSM','SAP','ASML','BABA','BIDU','JD','PDD','SONY'].includes(sym);
  const isFinance = ['JPM','BAC','WFC','GS','MS','C','V','MA','AXP','BRK'].includes(sym);

  for (const [target, code] of Object.entries(news.impact || {})) {
    if (target === 'forex' && cat !== 'forex') continue;
    if (target === 'stocks' && cat !== 'stocks') continue;
    if (target === 'crypto' && cat !== 'crypto') continue;
    if ((target === 'commodities' || target === 'commodities2') && cat !== 'commodities') continue;
    if (target === 'indices' && cat !== 'indices') continue;

    if (code === 'up') return 1;
    if (code === 'down') return -1;
    if (code === 'mixed') return (Math.random() - 0.5) * 0.5;
    if (code === 'usd_up') {
      if (isUSDBase) return 1;       // USD/JPY rises when USD up
      if (isUSDQuote) return -1;     // EUR/USD falls when USD up
    }
    if (code === 'usd_down') {
      if (isUSDBase) return -1;
      if (isUSDQuote) return 1;
    }
    if (code === 'eur_up' && isEUR) return sym.startsWith('EUR') ? 1 : -1;
    if (code === 'jpy_up' && isJPY) return sym.startsWith('JPY') ? 1 : -1;
    if (code === 'cad_up' && isCAD) return sym.startsWith('CAD') ? 1 : -1;
    if (code === 'cad_down' && isCAD) return sym.startsWith('CAD') ? -1 : 1;
    if (code === 'up_oil' && isOil) return 1;
    if (code === 'down_oil' && isOil) return -1;
    if (code === 'up_gold' && isGold) return 1;
    if (code === 'up_tech' && isTech) return 1;
    if (code === 'down_tech' && isTech) return -1;
    if (code === 'down_finance' && isFinance) return -1;
  }
  return 0;
}

/* Decays / cleans up old news; called each tick */
function _newsTickEffects() {
  if (!S.activeNews) S.activeNews = [];
  const now = getTrustedTime();
  S.activeNews = S.activeNews.filter(n => now <= n.until);
  // Only spawn news when the user is actively on the main shell
  const _shellEl = document.getElementById('shell');
  const _onShell = _shellEl && _shellEl.classList.contains('active');
  if (_onShell && now >= _nextNewsTime) {
    spawnRandomNews();
    _nextNewsTime = now + NEWS_SPAWN_MS_MIN + Math.random() * (NEWS_SPAWN_MS_MAX - NEWS_SPAWN_MS_MIN);
  }
}

/* Generate a random news event — adds it to feed + active list */
function spawnRandomNews() {
  const lang = S.language || 'en';
  const list = NEWS_TEMPLATES[lang] || NEWS_TEMPLATES.en;
  const tpl = list[Math.floor(Math.random() * list.length)];
  // Find the same template in EN to get canonical key
  const enTpl = NEWS_TEMPLATES.en.find(x => x.key === tpl.key) || tpl;
  const now = getTrustedTime();
  const news = {
    key: tpl.key,
    headline: tpl.headline,
    cat: tpl.cat,
    impact: enTpl.impact,
    severity: enTpl.severity,
    at: now,
    until: now + NEWS_DURATION_MS
  };
  if (!S.activeNews) S.activeNews = [];
  if (!S.newsFeed) S.newsFeed = [];
  S.activeNews.push(news);
  S.newsFeed.unshift(news);
  if (S.newsFeed.length > NEWS_KEEP_HISTORY) S.newsFeed.length = NEWS_KEEP_HISTORY;
  // Mark as unread for the notification dot
  S.newsUnreadCount = (S.newsUnreadCount || 0) + 1;
  const dot = document.getElementById('newsUnreadDot');
  if (dot) dot.classList.add('show');
  // Re-render the feed if open
  if (typeof renderNewsFeed === 'function') renderNewsFeed();
  // Toast a brief alert — only when user is on the main shell
  const _shell = document.getElementById('shell');
  if (_shell && _shell.classList.contains('active')) {
    if (typeof toast === 'function') toast(news.headline, 'info', 4500);
  }
}

function tickVirtual() {
  const now = Date.now();
  // Decay active news effects
  if (typeof _newsTickEffects === 'function') _newsTickEffects();
  ASSETS.forEach(a => {
    const st = S.prices[a.sym];
    // Initialize advanced state fields if missing (lazy upgrade)
    if (st.regime === undefined) {
      st.regime = 'normal';        // normal | trending | choppy | breakout
      st.regimeTicks = 0;          // how long current regime has lasted
      st.meanPrice = a.base;       // long-run mean for reversion
      st.volMultiplier = 1.0;      // dynamic volatility multiplier
    }
    // === REGIME SWITCHING ===
    // Each regime persists for a while then transitions
    st.regimeTicks++;
    if (st.regimeTicks > 60 + Math.random() * 180) {
      // Time to switch regime
      const r = Math.random();
      if (r < 0.35) {
        st.regime = 'normal';
        st.volMultiplier = 1.0;
      } else if (r < 0.65) {
        st.regime = 'trending';
        st.trend = (Math.random() - 0.5) * 0.0005; // stronger trend
        st.volMultiplier = 0.8;
      } else if (r < 0.90) {
        st.regime = 'choppy';
        st.trend = 0;
        st.volMultiplier = 1.4;
      } else {
        st.regime = 'breakout';
        st.trend = (Math.random() - 0.5) * 0.0012; // very strong directional
        st.volMultiplier = 1.8;
      }
      st.regimeTicks = 0;
    }
    // === MOMENTUM (auto-decay) ===
    st.momentum *= 0.92;
    // === OCCASIONAL TREND ADJUSTMENT (subtle drift change) ===
    if (Math.random() < 0.008) {
      st.trend += (Math.random() - 0.5) * 0.00015;
      // Clamp trend to keep it realistic
      st.trend = Math.max(-0.0015, Math.min(0.0015, st.trend));
    }
    // === MULTI-FREQUENCY WAVES (more realistic than single sine) ===
    st.wavePhase += 0.05 + Math.random() * 0.02;
    const wave1 = Math.sin(st.wavePhase) * a.vol * 0.35;
    const wave2 = Math.sin(st.wavePhase * 2.7) * a.vol * 0.15;  // higher-freq layer
    const wave3 = Math.sin(st.wavePhase * 0.3) * a.vol * 0.5;   // low-freq slow swing
    const waveComp = wave1 + wave2 + wave3;
    // === MEAN REVERSION (price drifts toward long-run mean) ===
    // Update meanPrice slowly (EMA of last)
    st.meanPrice = st.meanPrice * 0.999 + st.last * 0.001;
    const distFromMean = (st.last - st.meanPrice) / st.meanPrice;
    const reversion = -distFromMean * a.vol * 0.4; // pulls price back
    // === VOLATILITY SHOCKS (rare, sharp moves) ===
    let shock = 0;
    const shockChance = st.regime === 'breakout' ? 0.025 : (st.regime === 'choppy' ? 0.018 : 0.010);
    if (Math.random() < shockChance) {
      shock = (Math.random() - 0.5) * a.vol * (4 + Math.random() * 4) * st.volMultiplier;
    }
    // === GEOMETRIC BROWNIAN MOTION (proportional noise — more realistic) ===
    const gbmNoise = (Math.random() - 0.5) * 2 * a.vol * st.volMultiplier;
    // === NEWS IMPULSE ===
    let newsImpulse = 0;
    if (typeof _getNewsImpulse === 'function') {
      newsImpulse = _getNewsImpulse(a) * a.vol;
    }
    // === COMPOSITE PRICE MOVE ===
    const drift = st.trend * st.last;
    const move = drift + gbmNoise + waveComp + reversion + shock + st.momentum + newsImpulse;
    st.momentum += move * 0.05;
    // Apply move proportionally (price never goes negative)
    st.last = Math.max(0.000001, st.last + move);
    // === 24H TRACKING ===
    if (st.last > st.high24) st.high24 = st.last;
    if (st.last < st.low24) st.low24 = st.last;

    // === UPDATE CURRENT CANDLE (latest of each tf) ===
    Object.keys(S.candles[a.sym]).forEach(tf => {
      const arr = S.candles[a.sym][tf];
      if (!arr.length) return;
      const last = arr[arr.length - 1];
      last.c = st.last;
      if (st.last > last.h) last.h = st.last;
      if (st.last < last.l) last.l = st.last;
    });
  });
}

/* push new candle every N seconds per timeframe */
// Candle advance intervals — realistic time-scale.
// 1m candle advances every 60 seconds (real time), other TFs scale proportionally.
const TF_INTERVALS = {
  '1m':  60 * 1000,                  // 1 minute
  '5m':  5 * 60 * 1000,              // 5 minutes
  '30m': 30 * 60 * 1000,             // 30 minutes
  '1h':  60 * 60 * 1000,             // 1 hour
  '4h':  4 * 60 * 60 * 1000,         // 4 hours
  '1d':  24 * 60 * 60 * 1000,        // 1 day
  '1w':  7 * 24 * 60 * 60 * 1000,    // 1 week
  '1mo': 30 * 24 * 60 * 60 * 1000    // 1 month (30 days)
};
const lastCandleTime = {};
function maybeAdvanceCandles() {
  const now = Date.now();
  ASSETS.forEach(a => {
    Object.keys(TF_INTERVALS).forEach(tf => {
      const key = a.sym + '|' + tf;
      if (!lastCandleTime[key]) lastCandleTime[key] = now;
      if (now - lastCandleTime[key] >= TF_INTERVALS[tf]) {
        lastCandleTime[key] = now;
        const arr = S.candles[a.sym][tf];
        const last = arr[arr.length - 1];
        const newCandle = { o: last.c, h: last.c, l: last.c, c: last.c, t: now };
        arr.push(newCandle);
        if (arr.length > 120) arr.shift();
      }
    });
  });
}

/* ============ TRADING ============ */
function calcMargin(lot, sym) {
  // Virtual margin: lot * contract_size * price / leverage
  // Simplified: lot * 100 (approx, scaled for educational use)
  const a = getAsset(sym);
  if (!a) return 0;
  const contractValue = 1000 * lot * (a.cat === 'crypto' ? 1 : (a.cat === 'forex' ? 1 : 0.5));
  const margin = contractValue / 100; // 1:100 leverage
  return Math.max(0.5, margin);
}

function calcPnl(pos, currentPrice) {
  const a = getAsset(pos.sym);
  if (!a) return 0;
  const dir = pos.side === 'BUY' ? 1 : -1;
  const diff = (currentPrice - pos.entry) * dir;
  const points = diff / a.pip;
  // money pnl ≈ points * lot * 0.10 (educational scale)
  const pnl = points * pos.lot * 0.10;
  return { pnl, points };
}

/* ============ BANKRUPT BANNER LOGIC ============ */
/* Shows a banner when virtual balance hits $0 (or close to it).
   The banner tells the user they can wait for the Hourly Card / Mystery Box
   or reset the app from Settings to start fresh. */
let _bankruptDismissedAt = 0;
let _bankruptAutoHideTimer = null;
let _bankruptLastShownAt = 0;

function showBankruptBanner() {
  const el = document.getElementById('bankruptBanner');
  if (!el) return;
  // Throttle: don't re-trigger sound/animation more than once every 8 seconds
  const now = Date.now();
  if (now - _bankruptLastShownAt < 8000 && !el.hidden) return;
  _bankruptLastShownAt = now;
  el.hidden = false;
  // Restart slide-in animation
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = '';
  // Notification sound (gentle 2-tone chime)
  if (typeof beep === 'function') {
    beep(880, 0.10, 0.06);
    setTimeout(() => beep(1100, 0.12, 0.05), 100);
  }
  if (typeof vibrate === 'function') vibrate(40);
  // Auto-dismiss after 5 seconds — feels like a notification toast
  if (_bankruptAutoHideTimer) clearTimeout(_bankruptAutoHideTimer);
  _bankruptAutoHideTimer = setTimeout(() => {
    el.hidden = true;
  }, 5000);
}

function hideBankruptBanner() {
  const el = document.getElementById('bankruptBanner');
  if (!el) return;
  el.hidden = true;
  if (_bankruptAutoHideTimer) { clearTimeout(_bankruptAutoHideTimer); _bankruptAutoHideTimer = null; }
}

/* Called periodically — only re-shows banner if user re-tries a trade while broke. */
function updateBankruptBanner() {
  // No automatic re-show; only manual triggers from tryOpenPosition.
  // This function is kept for backward compatibility (called from renderAll).
  return;
}

function _bindBankruptBanner() {
  const closeBtn = document.getElementById('bankruptClose');
  if (closeBtn && !closeBtn._bound) {
    closeBtn._bound = true;
    closeBtn.addEventListener('click', () => {
      _bankruptDismissedAt = Date.now();
      hideBankruptBanner();
    });
  }
}

function tryOpenPosition(side) {
  const sym = S.selectedSym;
  // Defensive: if no symbol selected (or selected symbol no longer exists), bail out cleanly
  if (!sym || !getAsset(sym)) {
    return toast(t('select_asset_first') || 'Please select an asset first', 'error');
  }
  // Bankrupt guard — balance at $0 or below and no open positions to recover from
  if (S.balance <= 0 && (!S.positions || S.positions.length === 0)) {
    showBankruptBanner();
    return;
  }
  const lot = parseFloat(S.lot);
  if (isNaN(lot) || lot < 0.01 || lot > 50) {
    return toast(t('invalid_lot'), 'error');
  }
  const margin = calcMargin(lot, sym);
  if (margin > S.balance) {
    // Not enough free balance for THIS trade — could still be recoverable via card/mystery box
    showBankruptBanner();
    return;
  }
  S.balance -= margin;
  const a = getAsset(sym);
  const entry = side === 'BUY' ? getAsk(sym) : getBid(sym);
  const tp = parseFloat($('#tpInput').value) || 0;
  const sl = parseFloat($('#slInput').value) || 0;

  const tpPrice = tp > 0 ? entry + (side==='BUY'?1:-1) * tp * a.pip : null;
  const slPrice = sl > 0 ? entry - (side==='BUY'?1:-1) * sl * a.pip : null;

  const pos = {
    id: 'p' + Date.now() + Math.floor(Math.random()*1000),
    sym, side, lot, entry, margin,
    tp: tpPrice, sl: slPrice,
    tpPts: tp, slPts: sl,
    openedAt: Date.now()
  };
  S.positions.push(pos);
  // achievement
  if (!S.achievements.first_trade) unlockAchievement('first_trade');
  if (!S.achievementHistory.tradedSymbols.includes(sym)) {
    S.achievementHistory.tradedSymbols.push(sym);
    if (S.achievementHistory.tradedSymbols.length >= 5 && !S.achievements.diversified) unlockAchievement('diversified');
  }
  if (lot >= 5 && !S.achievements.high_roller) unlockAchievement('high_roller');
  // Trading Pulse: streak + challenges
  updateStreak();
  bumpChallenge('open_n');
  if (side === 'BUY') bumpChallenge('open_buy');
  else if (side === 'SELL') bumpChallenge('open_sell');
  if (tp || sl) bumpChallenge('use_tp_sl');
  // Asset-category specific challenges
  const _asset = ASSETS.find(a => a.sym === sym);
  if (_asset) {
    if (_asset.cat === 'forex') bumpChallenge('open_forex');
    else if (_asset.cat === 'crypto') bumpChallenge('open_crypto');
    else if (_asset.cat === 'stocks') bumpChallenge('open_stock');
    // Diversify by category — track unique categories per day
    const dayKey = _todayStr();
    if (!S._catsTradedToday || S._catsTradedToday.day !== dayKey) {
      S._catsTradedToday = { day: dayKey, cats: [] };
    }
    if (!S._catsTradedToday.cats.includes(_asset.cat)) {
      S._catsTradedToday.cats.push(_asset.cat);
      bumpChallenge('diversify_5');
      // all_categories — assume the virtual has 4+ categories (forex, crypto, stocks, commodities, indices)
      // Mark complete once user has used at least 4 distinct categories
      if (S._catsTradedToday.cats.length >= 4) bumpChallenge('all_categories');
    }
  }
  // Lot-size challenges
  if (lot >= 1.0) {
    bumpChallenge('large_lot');
    bumpChallenge('large_lot_5');
  }
  if (lot >= 5.0) bumpChallenge('huge_lot');
  if (lot <= 0.10) bumpChallenge('small_lot');
  if (Math.abs(lot - 0.01) < 0.005) bumpChallenge('precision_lot');
  // Open-count hard challenges (per-day aggregates)
  bumpChallenge('open_30');
  bumpChallenge('open_50');
  // Diversification challenges
  if (_asset && !S.achievementHistory.tradedSymbols.includes(sym)) {
    // first time today this symbol is traded — already added above, but bump count
    bumpChallenge('diversify_10');
  }
  // Rapid-fire: track timestamps; this is a simple counter approach
  if (!S._rapidFireTimes) S._rapidFireTimes = [];
  S._rapidFireTimes.push(getTrustedTime());
  // Keep only the last 5 minutes worth
  const fiveMinAgo = getTrustedTime() - 5 * 60 * 1000;
  S._rapidFireTimes = S._rapidFireTimes.filter(t => t >= fiveMinAgo);
  if (S._rapidFireTimes.length === 1) {
    // First trade in the window — count it
    bumpChallenge('rapid_fire');
  } else {
    bumpChallenge('rapid_fire');
  }
  toast(t('trade_opened',{side,lot:lot.toFixed(2),sym}),'success');
  beep(side==='BUY'?880:440, 0.08);
  vibrate(15);
  saveSoon();
  renderAll();
}

function closePosition(id, reason='manual') {
  const idx = S.positions.findIndex(p => p.id === id);
  if (idx < 0) return;
  const pos = S.positions[idx];
  const cur = (pos.side === 'BUY') ? getBid(pos.sym) : getAsk(pos.sym);
  let { pnl, points } = calcPnl(pos, cur);
  // Apply Mystery Box "next trade" boost if active (consumed once)
  if (S.mbActiveBoost && pnl !== 0) {
    pnl = pnl * (1 + S.mbActiveBoost);
    pnl = Math.round(pnl * 100) / 100;
    S.mbActiveBoost = null; // consume
  }
  // Return margin + pnl
  S.balance += pos.margin + pnl;
  if (S.balance < 0) S.balance = 0;
  // record history
  const histEntry = {
    sym: pos.sym, side: pos.side, lot: pos.lot,
    entry: pos.entry, exit: cur, pnl, points,
    openedAt: pos.openedAt, closedAt: Date.now(),
    reason: reason
  };
  S.history.unshift(histEntry);
  if (S.history.length > 30) S.history.length = 30;
  // wins/losses
  if (pnl >= 0) {
    S.wins++;
    S.achievementHistory.winStreak = (S.achievementHistory.winStreak || 0) + 1;
    if (!S.achievements.first_win) unlockAchievement('first_win');
    if (S.achievementHistory.winStreak >= 5 && !S.achievements.five_wins_streak) unlockAchievement('five_wins_streak');
    if (pnl >= 50 && !S.achievements.big_win) unlockAchievement('big_win');
  } else {
    S.losses++;
    S.achievementHistory.winStreak = 0;
  }
  if ((S.wins + S.losses) >= 30 && !S.achievements.survivor) unlockAchievement('survivor');
  S.positions.splice(idx, 1);
  S.closedSinceInterstitial++;
  // Trading Pulse: bump close challenge + keep streak alive
  updateStreak();
  bumpChallenge('close_n');
  if (pnl > 0) {
    bumpChallenge('profit_trade');
    // Daily profit aggregates (hard challenges)
    bumpChallenge('profit_50',  pnl);
    bumpChallenge('profit_100', pnl);
    bumpChallenge('profit_250', pnl);
    bumpChallenge('profit_500', pnl);
    // Single-trade big-win challenges
    if (pnl >= 25)  bumpChallenge('big_win',  25);
    if (pnl >= 100) bumpChallenge('mega_win', 100);
    // Master trader — win counter for the day
    bumpChallenge('master_trader');
  }
  // Win streak hard challenges (use achievementHistory.winStreak)
  if (pnl >= 0) {
    const ws = S.achievementHistory.winStreak || 0;
    if (ws >= 5)  bumpChallenge('win_streak_5');
    if (ws >= 10) bumpChallenge('win_streak_10');
  }
  // TP / SL based
  if (reason === 'tp') bumpChallenge('tp_hit_5');
  if (reason !== 'sl') bumpChallenge('no_sl_hit');
  // Perfect-day challenge (no losses)
  if (pnl >= 0) bumpChallenge('no_losses_10');
  toast(t('trade_closed',{pnl: fmtSignedMoney(pnl)}), pnl >= 0 ? 'success' : 'error');
  beep(pnl >= 0 ? 1200 : 300, 0.12);
  vibrate(pnl >= 0 ? 30 : 80);
  saveSoon();
  renderAll();
}

function checkTpSl() {
  for (let i = S.positions.length - 1; i >= 0; i--) {
    const p = S.positions[i];
    const cur = (p.side === 'BUY') ? getBid(p.sym) : getAsk(p.sym);
    if (p.side === 'BUY') {
      if (p.tp && cur >= p.tp) { closePosition(p.id, 'tp'); continue; }
      if (p.sl && cur <= p.sl) { closePosition(p.id, 'sl'); continue; }
    } else {
      if (p.tp && cur <= p.tp) { closePosition(p.id, 'tp'); continue; }
      if (p.sl && cur >= p.sl) { closePosition(p.id, 'sl'); continue; }
    }
  }
}

/* ============ ACHIEVEMENTS — 32 total, organized by tier ============ */
/* svg is an inline SVG `<path>` string. Color comes from CSS based on unlock state. */
const ACHIEVEMENTS = {
  // ===== TIER 1: Getting Started =====
  first_trade:        { tier: 1, svg: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>', en: 'First Trade', enD: 'Open your first position' },
  first_win:          { tier: 1, svg: '<path d="M6 9h12l-1 9H7z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/><path d="M6 12h-2"/><path d="M18 12h2"/>', en: 'First Win', enD: 'Close a winning trade' },
  first_loss:         { tier: 1, svg: '<path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"/><path d="M9 9l6 6M15 9l-6 6"/>', en: 'Learn From Loss', enD: 'Close your first losing trade' },
  open_close:         { tier: 1, svg: '<path d="M3 12h4l3-9 4 18 3-9h4"/>', en: 'Round Trip', enD: 'Open and close 5 trades' },
  used_tp_sl:         { tier: 1, svg: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18"/><path d="M9 7l3-3 3 3"/><path d="M9 17l3 3 3-3"/>', en: 'Safety First', enD: 'Use Take Profit & Stop Loss' },

  // ===== TIER 2: Volume Milestones =====
  ten_trades:         { tier: 2, svg: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M6 8h4v6H6zM14 6h4v8h-4z"/>', en: '10 Trades', enD: 'Complete 10 trades' },
  fifty_trades:       { tier: 2, svg: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M6 14V8M10 14V8M14 14v-4M18 14V6"/>', en: '50 Trades', enD: 'Complete 50 trades' },
  survivor:           { tier: 2, svg: '<path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/><path d="M9 12l2 2 4-4"/>', en: 'Survivor', enD: 'Complete 30 trades' },
  hundred_trades:     { tier: 2, svg: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>', en: '100 Trades', enD: 'Complete 100 trades' },
  diversified:        { tier: 2, svg: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a13 13 0 0 1 0 18a13 13 0 0 1 0-18z"/>', en: 'Diversified', enD: 'Trade 5+ different assets' },

  // ===== TIER 3: Streaks & Skill =====
  five_wins_streak:   { tier: 3, svg: '<path d="M13 2L3 14h7l-1 8 10-12h-7z"/>', en: '5-Win Streak', enD: 'Win 5 trades in a row' },
  ten_wins_streak:    { tier: 3, svg: '<path d="M13 2L3 14h7l-1 8 10-12h-7z"/><circle cx="18" cy="6" r="2.5"/>', en: '10-Win Streak', enD: 'Win 10 trades in a row' },
  perfect_day:        { tier: 3, svg: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>', en: 'Perfect Day', enD: 'Win 10 trades in one day, no losses' },
  precise_trader:     { tier: 3, svg: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>', en: 'Precise Trader', enD: 'Hit Take Profit 10 times' },
  iron_hands:         { tier: 3, svg: '<path d="M6 11V7a6 6 0 0 1 12 0v4"/><rect x="4" y="11" width="16" height="10" rx="2"/>', en: 'Iron Hands', enD: 'Hold a position for 1 hour' },

  // ===== TIER 4: Profit Milestones =====
  big_win:            { tier: 4, svg: '<path d="M21 12l-3-3-3 3-3-3-3 3-3-3-3 3v6h18z"/><path d="M12 5v4"/>', en: 'Big Catch', enD: 'Win $25+ in a single trade' },
  mega_win:           { tier: 4, svg: '<path d="M2 22l3-8h14l3 8z"/><path d="M5 14V8a7 7 0 0 1 14 0v6"/><path d="M9 18l3-2 3 2"/>', en: 'Mega Catch', enD: 'Win $100+ in a single trade' },
  jackpot:            { tier: 4, svg: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-5"/><path d="M12 3v2M12 19v2"/>', en: 'Jackpot', enD: 'Win $500+ in a single trade' },
  doubled_balance:    { tier: 4, svg: '<path d="M3 17l6-6 4 4 8-8"/><polyline points="14 7 21 7 21 14"/>', en: 'Doubled Balance', enD: 'Double your starting balance' },
  ten_x_balance:      { tier: 4, svg: '<path d="M3 17l6-6 4 4 8-8"/><polyline points="14 7 21 7 21 14"/><circle cx="21" cy="7" r="3"/>', en: '10× Balance', enD: 'Grow balance to 10× starting amount' },

  // ===== TIER 5: Lot Size =====
  high_roller:        { tier: 5, svg: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><circle cx="6.5" cy="6.5" r="1" fill="currentColor"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/><circle cx="6.5" cy="17.5" r="1" fill="currentColor"/><circle cx="17.5" cy="17.5" r="1" fill="currentColor"/>', en: 'High Roller', enD: 'Trade with 5.0+ lot size' },
  micro_master:       { tier: 5, svg: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2" fill="currentColor"/>', en: 'Micro Master', enD: 'Open 20 trades with 0.01 lot' },

  // ===== TIER 6: Engagement / Daily =====
  daily_streak:       { tier: 6, svg: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><circle cx="12" cy="15" r="1.5" fill="currentColor"/>', en: 'Daily Devotee', enD: 'Claim daily bonus 3 days' },
  week_streak:        { tier: 6, svg: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M7 14h2M11 14h2M15 14h2M7 18h2M11 18h2"/>', en: '7-Day Streak', enD: '7-day login streak' },
  month_streak:       { tier: 6, svg: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M9 14l2 2 4-4"/>', en: '30-Day Streak', enD: '30-day login streak' },
  mystery_opened:     { tier: 6, svg: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8L8 4l-2 4M12 8l4-4 2 4"/>', en: 'Treasure Hunter', enD: 'Open 10 mystery boxes' },
  flip_winner:        { tier: 6, svg: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 12l2 2 4-4"/>', en: 'Card Flipper', enD: 'Win 10 hourly card flips' },

  // ===== TIER 7: Learning =====
  scholar:            { tier: 7, svg: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>', en: 'Scholar', enD: 'Read 10 lessons' },
  professor:          { tier: 7, svg: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><circle cx="12" cy="14" r="2" fill="currentColor"/>', en: 'Professor', enD: 'Read all 90 lessons' },
  news_reader:        { tier: 7, svg: '<path d="M4 4h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4z"/><path d="M19 6h2v13a2 2 0 0 1-2 2"/><path d="M8 8h7M8 12h7M8 16h4"/>', en: 'News Reader', enD: 'Read 20 market news events' },

  // ===== TIER 8: Mastery / Endgame =====
  master_trader:      { tier: 8, svg: '<path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>', en: 'Master Trader', enD: 'Win 50 trades total' },
  legendary:          { tier: 8, svg: '<path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/><circle cx="12" cy="11" r="2" fill="currentColor"/>', en: 'Legendary', enD: 'Win 200 trades total' },
  no_sl_hit:          { tier: 8, svg: '<path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/><path d="M8 10v3M16 10v3M12 14h0"/>', en: 'Diamond Defense', enD: 'Close 20 trades without SL hit' },
  all_categories:     { tier: 8, svg: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>', en: 'Renaissance', enD: 'Trade in all asset categories' }
};
function unlockAchievement(key) {
  if (!ACHIEVEMENTS[key]) return;
  if (S.achievements[key]) return;
  S.achievements[key] = true;
  const a = ACHIEVEMENTS[key];
  toast('Achievement unlocked: ' + a.en, 'success', 3500);
  beep(1500, 0.2, 0.08);
  vibrate(50);
  saveSoon();
}

/* ============ HOURLY CARD-FLIP GAME ============ */
const FLIP_COOLDOWN_MS = 60 * 60 * 1000; // 1 hour
const FLIP_WIN_MIN = 5;     // actual reward range player wins (normal)
const FLIP_WIN_MAX = 35;
const FLIP_BONUS_MIN = 50;  // every 6th flip is a bonus reward
const FLIP_BONUS_MAX = 80;
const FLIP_BONUS_INTERVAL = 6;
const FLIP_DISPLAY_MIN = 5; // displayed range on non-winner cards (mystery range)
const FLIP_DISPLAY_MAX = 500;

let _flipChosen = false; // session flag — once user picks, lock until cooldown

function canFlip() {
  return getTrustedTime() - (S.lastFlipPlay || 0) >= FLIP_COOLDOWN_MS;
}
function flipTimeLeft() {
  const remaining = FLIP_COOLDOWN_MS - (getTrustedTime() - (S.lastFlipPlay || 0));
  if (remaining <= 0) return '';
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  return t('flip_wait', {h, m});
}

function renderFlipCards() {
  const wrap = $('#flipCards');
  if (!wrap) return;
  const ready = canFlip();
  // build 4 cards — always start face-DOWN (decorative back, no "?")
  let html = '';
  for (let i = 0; i < 4; i++) {
    html += `<div class="flip-card${ready ? '' : ' locked'}" data-idx="${i}">
      <div class="face back"><div class="back-deco"></div></div>
      <div class="face front"><div class="amt">$0</div><div class="lbl">REWARD</div></div>
    </div>`;
  }
  wrap.innerHTML = html;
  // timer text
  const tm = $('#flipTimer');
  if (tm) tm.textContent = ready ? t('flip_ready') : flipTimeLeft();
  // bind clicks if ready
  if (ready) {
    _flipChosen = false;
    $$('.flip-card', wrap).forEach(card => {
      card.addEventListener('click', onFlipCardClick);
    });
  }
}

function _randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function onFlipCardClick(e) {
  if (_flipChosen) return;
  if (!canFlip()) return;
  _flipChosen = true;
  const card = e.currentTarget;
  const wrap = $('#flipCards');
  const all = $$('.flip-card', wrap);
  // Track total flips. Every 6th flip gives bonus reward (silently).
  S.flipCount = (S.flipCount || 0) + 1;
  const isBonusFlip = (S.flipCount % FLIP_BONUS_INTERVAL === 0);
  const wonAmt = isBonusFlip
    ? _randInt(FLIP_BONUS_MIN, FLIP_BONUS_MAX)
    : _randInt(FLIP_WIN_MIN, FLIP_WIN_MAX);
  // Other 3 cards display mystery values in wider range $5-$500 (visual variety only)
  all.forEach(c => {
    const isWinner = c === card;
    const displayAmt = isWinner ? wonAmt : _randInt(FLIP_DISPLAY_MIN, FLIP_DISPLAY_MAX);
    const amtEl = $('.front .amt', c);
    if (amtEl) amtEl.textContent = '$' + displayAmt;
    if (!isWinner) c.classList.add('dim');
  });
  // flip the chosen card immediately
  card.classList.add('flipped', 'winner');
  // flip the other cards after a delay (reveal)
  setTimeout(() => {
    all.forEach(c => { if (c !== card) c.classList.add('flipped', 'locked'); });
  }, 350);
  // award after flip animation
  setTimeout(() => {
    S.balance += wonAmt;
    S.lastFlipPlay = getTrustedTime();
    bumpChallenge('flip_card');
    updateStreak();
    toast(t('flip_won', {amt: wonAmt}), 'success', 2800);
    beep(1200, 0.15);
    vibrate(40);
    saveSoon();
    renderTopBar();
    // update timer text
    const tm = $('#flipTimer');
    if (tm) tm.textContent = flipTimeLeft();
    // After a brief reveal pause, reset all cards to face-down state (mystery)
    setTimeout(() => {
      all.forEach(c => {
        c.classList.remove('flipped', 'winner', 'dim', 'locked');
        // empty card front amount
        const amtEl = $('.front .amt', c);
        if (amtEl) amtEl.textContent = '$0';
      });
      // visually mark as locked-until-next-hour
      all.forEach(c => c.classList.add('locked'));
    }, 2400);
  }, 650);
  vibrate(25);
  beep(900, 0.08);
}

function renderFlipTimer() {
  const tm = $('#flipTimer');
  if (!tm) return;
  if (canFlip()) {
    // if cards were previously locked, re-render to enable
    const wrap = $('#flipCards');
    if (wrap && $$('.flip-card.flipped', wrap).length > 0) {
      renderFlipCards();
    } else {
      tm.textContent = t('flip_ready');
    }
  } else {
    tm.textContent = flipTimeLeft();
  }
}

/* ============ AD MODAL ============ */
/* Removed — VTS contains no ads. */

/* ============ CONFIRM DIALOG ============ */
function confirmDialog(title, text, onOk) {
  $('#confirmTitle').textContent = title;
  $('#confirmText').textContent = text;
  const bg = $('#confirmBg');
  bg.classList.add('open');
  const ok = $('#confirmOk');
  const cancel = $('#confirmCancel');
  const close = () => bg.classList.remove('open');
  const okHandler = () => { close(); ok.removeEventListener('click', okHandler); cancel.removeEventListener('click', cancelHandler); onOk && onOk(); };
  const cancelHandler = () => { close(); ok.removeEventListener('click', okHandler); cancel.removeEventListener('click', cancelHandler); };
  ok.addEventListener('click', okHandler);
  cancel.addEventListener('click', cancelHandler);
}

/* ============ CHART RENDERING ============ */
const chartCanvas = $('#chartCanvas');
const chartCtx = chartCanvas.getContext('2d');
let chartHover = null;

function resizeChart() {
  const r = chartCanvas.parentElement.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  chartCanvas.width = r.width * dpr;
  chartCanvas.height = r.height * dpr;
  chartCanvas.style.width = r.width + 'px';
  chartCanvas.style.height = r.height + 'px';
  chartCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

/* ============ BINANCE-PRO CHART HELPERS ============ */
/* Calculate Simple Moving Average for the given period at each candle index.
   Returns array of {idx, value} or null where not enough data. */
function _calcMA(candles, period) {
  const out = new Array(candles.length).fill(null);
  let sum = 0;
  for (let i = 0; i < candles.length; i++) {
    sum += candles[i].c;
    if (i >= period) sum -= candles[i - period].c;
    if (i >= period - 1) out[i] = sum / period;
  }
  return out;
}
/* Bollinger Bands: middle = MA(period), upper = mid + k*stddev, lower = mid - k*stddev */
function _calcBollinger(candles, period, k) {
  const ma = _calcMA(candles, period);
  const upper = new Array(candles.length).fill(null);
  const lower = new Array(candles.length).fill(null);
  for (let i = period - 1; i < candles.length; i++) {
    let sumSq = 0;
    for (let j = i - period + 1; j <= i; j++) {
      const diff = candles[j].c - ma[i];
      sumSq += diff * diff;
    }
    const sd = Math.sqrt(sumSq / period);
    upper[i] = ma[i] + k * sd;
    lower[i] = ma[i] - k * sd;
  }
  return { mid: ma, upper, lower };
}
/* Relative Strength Index — standard Wilder's smoothing */
function _calcRSI(candles, period) {
  const out = new Array(candles.length).fill(null);
  if (candles.length < period + 1) return out;
  let gain = 0, loss = 0;
  // Initial averages
  for (let i = 1; i <= period; i++) {
    const diff = candles[i].c - candles[i-1].c;
    if (diff >= 0) gain += diff;
    else loss -= diff;
  }
  gain /= period; loss /= period;
  out[period] = loss === 0 ? 100 : 100 - 100 / (1 + gain/loss);
  // Wilder smoothing for rest
  for (let i = period + 1; i < candles.length; i++) {
    const diff = candles[i].c - candles[i-1].c;
    const g = diff > 0 ? diff : 0;
    const l = diff < 0 ? -diff : 0;
    gain = (gain * (period - 1) + g) / period;
    loss = (loss * (period - 1) + l) / period;
    out[i] = loss === 0 ? 100 : 100 - 100 / (1 + gain/loss);
  }
  return out;
}
/* Format time-axis labels based on timeframe */
function _formatTimeLabel(ts, tf) {
  const d = new Date(ts);
  if (tf === '1mo' || tf === '1w') {
    return (d.getMonth()+1) + '/' + d.getDate();
  }
  if (tf === '1d' || tf === '4h') {
    return d.getMonth()+1 + '/' + d.getDate();
  }
  // intraday — HH:MM
  const h = String(d.getHours()).padStart(2,'0');
  const m = String(d.getMinutes()).padStart(2,'0');
  return h + ':' + m;
}

function drawChart() {
  const w = chartCanvas.width / (window.devicePixelRatio||1);
  const h = chartCanvas.height / (window.devicePixelRatio||1);
  chartCtx.clearRect(0, 0, w, h);

  const sym = S.selectedSym;
  const candles = (S.candles[sym] && S.candles[sym][S.timeframe]) || [];
  if (!candles.length) return;
  const visible = candles.slice(-60);
  const a = getAsset(sym);

  // ============ PANE LAYOUT ============
  // Dynamically allocate vertical space based on which sub-panes are enabled
  const padL = 8, padR = 64, padT = 8, padB = 22;
  const totalW = w - padL - padR;
  const totalH = h - padT - padB;
  const showVol = !!S.showVol;
  const showRSI = !!S.showRSI;
  const subPanes = (showVol ? 1 : 0) + (showRSI ? 1 : 0);
  // Price pane gets the lion's share
  let priceH, volH = 0, rsiH = 0;
  if (subPanes === 0) {
    priceH = totalH;
  } else if (subPanes === 1) {
    priceH = Math.round(totalH * 0.78);
    if (showVol) volH = totalH - priceH;
    else rsiH = totalH - priceH;
  } else {
    priceH = Math.round(totalH * 0.66);
    volH   = Math.round(totalH * 0.17);
    rsiH   = totalH - priceH - volH;
  }
  const priceTop = padT;
  const volTop   = priceTop + priceH;
  const rsiTop   = volTop + (showVol ? volH : 0);
  const plotW = totalW;
  const plotH = priceH;

  // ============ PRICE BOUNDS ============
  let mn = Infinity, mx = -Infinity;
  visible.forEach(c => { if (c.l < mn) mn = c.l; if (c.h > mx) mx = c.h; });
  // If Bollinger is on, extend bounds to include the bands
  let bollData = null;
  if (S.showBOLL && visible.length >= 20) {
    bollData = _calcBollinger(visible, 20, 2);
    for (let i = 0; i < visible.length; i++) {
      if (bollData.upper[i] != null && bollData.upper[i] > mx) mx = bollData.upper[i];
      if (bollData.lower[i] != null && bollData.lower[i] < mn) mn = bollData.lower[i];
    }
  }
  const pad = (mx - mn) * 0.12 || a.vol*4;
  mn -= pad; mx += pad;
  const range = mx - mn;

  // ============ PRICE PANE BACKGROUND ============
  chartCtx.fillStyle = '#0B0E11';
  chartCtx.fillRect(padL, priceTop, plotW, priceH);

  // ============ FINE GRID (price pane) ============
  chartCtx.strokeStyle = 'rgba(132, 142, 156, 0.08)';
  chartCtx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = Math.round(priceTop + (priceH / 5) * i) + 0.5;
    chartCtx.beginPath();
    chartCtx.moveTo(padL, y); chartCtx.lineTo(w - padR, y); chartCtx.stroke();
  }
  for (let i = 0; i <= 8; i++) {
    const x = Math.round(padL + (plotW / 8) * i) + 0.5;
    chartCtx.beginPath();
    chartCtx.moveTo(x, priceTop); chartCtx.lineTo(x, priceTop + priceH); chartCtx.stroke();
  }

  // ============ RIGHT-AXIS PRICE LABELS (Binance style) ============
  const axisX = w - padR;
  chartCtx.fillStyle = '#161A1E';
  chartCtx.fillRect(axisX, priceTop, padR, priceH);
  chartCtx.strokeStyle = 'rgba(132, 142, 156, 0.15)';
  chartCtx.lineWidth = 1;
  chartCtx.beginPath();
  chartCtx.moveTo(axisX + 0.5, priceTop);
  chartCtx.lineTo(axisX + 0.5, priceTop + priceH);
  chartCtx.stroke();
  chartCtx.fillStyle = '#848E9C';
  chartCtx.font = '500 10px JetBrains Mono, ui-monospace, monospace';
  chartCtx.textAlign = 'left';
  chartCtx.textBaseline = 'middle';
  for (let i = 0; i <= 5; i++) {
    const v = mx - (range / 5) * i;
    const y = priceTop + (priceH / 5) * i;
    chartCtx.fillText(fmt(v, a.decimals), axisX + 5, y);
  }

  // ============ BOLLINGER BANDS ============
  if (bollData) {
    // Fill area between upper and lower with translucent purple/blue
    chartCtx.fillStyle = 'rgba(177, 152, 235, 0.05)';
    chartCtx.beginPath();
    let started = false;
    for (let i = 0; i < visible.length; i++) {
      if (bollData.upper[i] == null) continue;
      const x = padL + (plotW / (visible.length - 1)) * i;
      const y = priceTop + priceH * (1 - (bollData.upper[i] - mn) / range);
      if (!started) { chartCtx.moveTo(x, y); started = true; } else chartCtx.lineTo(x, y);
    }
    for (let i = visible.length - 1; i >= 0; i--) {
      if (bollData.lower[i] == null) continue;
      const x = padL + (plotW / (visible.length - 1)) * i;
      const y = priceTop + priceH * (1 - (bollData.lower[i] - mn) / range);
      chartCtx.lineTo(x, y);
    }
    chartCtx.closePath();
    chartCtx.fill();

    // Helper to draw a band line
    const drawLine = (arr, color, dashed) => {
      chartCtx.strokeStyle = color;
      chartCtx.lineWidth = 1;
      if (dashed) chartCtx.setLineDash([3, 3]);
      chartCtx.beginPath();
      let first = true;
      for (let i = 0; i < visible.length; i++) {
        if (arr[i] == null) continue;
        const x = padL + (plotW / (visible.length - 1)) * i;
        const y = priceTop + priceH * (1 - (arr[i] - mn) / range);
        if (first) { chartCtx.moveTo(x, y); first = false; } else chartCtx.lineTo(x, y);
      }
      chartCtx.stroke();
      chartCtx.setLineDash([]);
    };
    drawLine(bollData.upper, '#B198EB', false);  // light purple
    drawLine(bollData.lower, '#B198EB', false);
    drawLine(bollData.mid,   '#FFB400', true);   // dashed amber middle
  }

  // ============ MOVING AVERAGES (MA 5, 10, 30) ============
  if (S.showMA) {
    const ma5  = _calcMA(visible, 5);
    const ma10 = _calcMA(visible, 10);
    const ma30 = _calcMA(visible, 30);
    const drawMA = (arr, color, label) => {
      chartCtx.strokeStyle = color;
      chartCtx.lineWidth = 1.2;
      chartCtx.lineCap = 'round';
      chartCtx.lineJoin = 'round';
      chartCtx.beginPath();
      let first = true;
      for (let i = 0; i < visible.length; i++) {
        if (arr[i] == null) continue;
        const x = padL + (plotW / (visible.length - 1)) * i;
        const y = priceTop + priceH * (1 - (arr[i] - mn) / range);
        if (first) { chartCtx.moveTo(x, y); first = false; } else chartCtx.lineTo(x, y);
      }
      chartCtx.stroke();
    };
    drawMA(ma5,  '#FFD64C');  // bright yellow — MA(5)
    drawMA(ma10, '#FF7BAC');  // pink         — MA(10)
    drawMA(ma30, '#7DC8FF');  // sky blue     — MA(30)
    chartCtx.lineCap = 'butt';
    chartCtx.lineJoin = 'miter';
  }

  // ============ MA / BOLL LEGEND (top-left, like Binance) ============
  if (S.showMA || S.showBOLL) {
    chartCtx.font = '600 9.5px JetBrains Mono, monospace';
    chartCtx.textAlign = 'left';
    chartCtx.textBaseline = 'top';
    let lx = padL + 6;
    const ly = priceTop + 6;
    const lastIdx = visible.length - 1;
    const drawLegend = (label, color, arr) => {
      const v = arr && arr[lastIdx];
      const txt = v != null ? label + ': ' + fmt(v, a.decimals) : label;
      chartCtx.fillStyle = color;
      chartCtx.fillText(txt, lx, ly);
      lx += chartCtx.measureText(txt).width + 12;
    };
    if (S.showMA) {
      const ma5  = _calcMA(visible, 5);
      const ma10 = _calcMA(visible, 10);
      const ma30 = _calcMA(visible, 30);
      drawLegend('MA5',  '#FFD64C', ma5);
      drawLegend('MA10', '#FF7BAC', ma10);
      drawLegend('MA30', '#7DC8FF', ma30);
    }
    if (S.showBOLL && bollData) {
      drawLegend('BOLL', '#B198EB', bollData.mid);
    }
  }

  // ============ CANDLES — Binance style ============
  const candleSpacing = plotW / visible.length;
  const cw = Math.max(2, candleSpacing * 0.74);
  const wickW = Math.max(1, Math.min(1.4, candleSpacing * 0.10));
  const bullFill = '#0ECB81', bullBorder = '#0ECB81';
  const bearFill = '#F6465D', bearBorder = '#F6465D';
  const lastIdx = visible.length - 1;
  visible.forEach((c, i) => {
    const x = Math.round(padL + (plotW / (visible.length - 1)) * i);
    const yO = priceTop + priceH * (1 - (c.o - mn) / range);
    const yC = priceTop + priceH * (1 - (c.c - mn) / range);
    const yH = priceTop + priceH * (1 - (c.h - mn) / range);
    const yL = priceTop + priceH * (1 - (c.l - mn) / range);
    const up = c.c >= c.o;
    const fillColor = up ? bullFill : bearFill;
    const isLast = (i === lastIdx);

    // Wick
    chartCtx.strokeStyle = fillColor;
    chartCtx.lineWidth = wickW;
    chartCtx.lineCap = 'butt';
    chartCtx.beginPath();
    const wx = (Math.round(wickW) === 1) ? x + 0.5 : x;
    chartCtx.moveTo(wx, Math.round(yH));
    chartCtx.lineTo(wx, Math.round(yL));
    chartCtx.stroke();

    // Body
    const bodyTop = Math.min(yO, yC);
    const bodyBot = Math.max(yO, yC);
    const bx = Math.round(x - cw / 2);
    const by = Math.round(bodyTop);
    const bw = Math.round(cw);
    const bh = Math.max(1, Math.round(bodyBot) - by);
    if (Math.abs(yC - yO) < 0.6) {
      chartCtx.strokeStyle = fillColor;
      chartCtx.lineWidth = 1.5;
      chartCtx.beginPath();
      chartCtx.moveTo(bx, by + 0.5);
      chartCtx.lineTo(bx + bw, by + 0.5);
      chartCtx.stroke();
    } else {
      if (isLast) { chartCtx.shadowColor = fillColor; chartCtx.shadowBlur = 8; }
      chartCtx.fillStyle = fillColor;
      chartCtx.fillRect(bx, by, bw, bh);
      chartCtx.shadowBlur = 0;
    }
  });
  chartCtx.lineCap = 'butt';
  chartCtx.shadowBlur = 0;

  // ============ VOLUME PANE ============
  if (showVol) {
    chartCtx.fillStyle = '#0B0E11';
    chartCtx.fillRect(padL, volTop, plotW, volH);
    // Right axis bg
    chartCtx.fillStyle = '#161A1E';
    chartCtx.fillRect(axisX, volTop, padR, volH);
    // Find max volume (use ATR-like proxy: candle range × 100 as fake volume)
    let maxVol = 0;
    const vols = visible.map(c => Math.abs(c.h - c.l) * 100);
    vols.forEach(v => { if (v > maxVol) maxVol = v; });
    if (maxVol === 0) maxVol = 1;
    // Volume bars colored by candle direction
    visible.forEach((c, i) => {
      const x = Math.round(padL + (plotW / (visible.length - 1)) * i);
      const v = vols[i];
      const barH = Math.max(1, Math.round((v / maxVol) * (volH - 4)));
      const bx = Math.round(x - cw / 2);
      chartCtx.fillStyle = c.c >= c.o ? 'rgba(14, 203, 129, 0.55)' : 'rgba(246, 70, 93, 0.55)';
      chartCtx.fillRect(bx, volTop + volH - barH - 2, Math.round(cw), barH);
    });
    // Volume label top-left of its pane
    chartCtx.fillStyle = '#848E9C';
    chartCtx.font = '600 9px JetBrains Mono, monospace';
    chartCtx.textAlign = 'left';
    chartCtx.textBaseline = 'top';
    chartCtx.fillText('VOL', padL + 6, volTop + 4);
  }

  // ============ RSI PANE ============
  if (showRSI && visible.length >= 15) {
    chartCtx.fillStyle = '#0B0E11';
    chartCtx.fillRect(padL, rsiTop, plotW, rsiH);
    chartCtx.fillStyle = '#161A1E';
    chartCtx.fillRect(axisX, rsiTop, padR, rsiH);
    // RSI guides at 30 / 70
    const rsiToY = v => rsiTop + rsiH * (1 - v / 100);
    chartCtx.strokeStyle = 'rgba(132, 142, 156, 0.20)';
    chartCtx.setLineDash([2, 3]);
    chartCtx.beginPath();
    chartCtx.moveTo(padL, rsiToY(70)); chartCtx.lineTo(w - padR, rsiToY(70));
    chartCtx.moveTo(padL, rsiToY(30)); chartCtx.lineTo(w - padR, rsiToY(30));
    chartCtx.stroke();
    chartCtx.setLineDash([]);
    // RSI line
    const rsi = _calcRSI(visible, 14);
    chartCtx.strokeStyle = '#FFD64C';
    chartCtx.lineWidth = 1.2;
    chartCtx.lineCap = 'round';
    chartCtx.lineJoin = 'round';
    chartCtx.beginPath();
    let first = true;
    for (let i = 0; i < visible.length; i++) {
      if (rsi[i] == null) continue;
      const x = padL + (plotW / (visible.length - 1)) * i;
      const y = rsiToY(rsi[i]);
      if (first) { chartCtx.moveTo(x, y); first = false; } else chartCtx.lineTo(x, y);
    }
    chartCtx.stroke();
    chartCtx.lineCap = 'butt';
    // RSI labels
    chartCtx.fillStyle = '#848E9C';
    chartCtx.font = '600 9px JetBrains Mono, monospace';
    chartCtx.textAlign = 'left';
    chartCtx.textBaseline = 'top';
    chartCtx.fillText('RSI(14)', padL + 6, rsiTop + 4);
    chartCtx.fillText('70', axisX + 5, rsiToY(70) - 5);
    chartCtx.fillText('30', axisX + 5, rsiToY(30) - 5);
    // Current RSI value
    const lastRSI = rsi[visible.length - 1];
    if (lastRSI != null) {
      const valColor = lastRSI > 70 ? '#F6465D' : lastRSI < 30 ? '#0ECB81' : '#FFD64C';
      chartCtx.fillStyle = valColor;
      chartCtx.fillText(lastRSI.toFixed(2), padL + 50, rsiTop + 4);
    }
  }

  // ============ TIME AXIS (bottom labels) ============
  chartCtx.fillStyle = '#848E9C';
  chartCtx.font = '500 9.5px JetBrains Mono, monospace';
  chartCtx.textAlign = 'center';
  chartCtx.textBaseline = 'top';
  const timeY = padT + totalH + 4;
  // Show ~6 time labels evenly distributed
  const labelCount = 6;
  for (let i = 0; i <= labelCount; i++) {
    const idx = Math.round((visible.length - 1) * i / labelCount);
    const c = visible[idx];
    if (!c || !c.t) continue;
    const x = padL + (plotW / (visible.length - 1)) * idx;
    chartCtx.fillText(_formatTimeLabel(c.t, S.timeframe), x, timeY);
  }

  // ============ CURRENT PRICE LINE + LABEL ============
  const last = visible[visible.length - 1];
  const lastY = priceTop + priceH * (1 - (last.c - mn) / range);
  // Price direction (Binance-style: green if up, red if down)
  const priceUp = visible.length >= 2 ? (visible[visible.length-1].c >= visible[visible.length-2].c) : true;
  // Dashed reference line — match pill color
  chartCtx.strokeStyle = priceUp ? 'rgba(14,203,129,0.45)' : 'rgba(246,70,93,0.45)';
  chartCtx.lineWidth = 1;
  chartCtx.setLineDash([5,4]);
  chartCtx.beginPath();
  chartCtx.moveTo(padL, lastY); chartCtx.lineTo(w - padR, lastY);
  chartCtx.stroke();
  chartCtx.setLineDash([]);
  // Price pill
  const tagX = w - padR + 2;
  const tagW = padR - 4;
  const tagH = 20;
  const tagY = lastY - tagH/2;
  const drawRoundedRect = (x, y, ww, hh, r) => {
    chartCtx.beginPath();
    chartCtx.moveTo(x + r, y);
    chartCtx.lineTo(x + ww - r, y);
    chartCtx.quadraticCurveTo(x + ww, y, x + ww, y + r);
    chartCtx.lineTo(x + ww, y + hh - r);
    chartCtx.quadraticCurveTo(x + ww, y + hh, x + ww - r, y + hh);
    chartCtx.lineTo(x + r, y + hh);
    chartCtx.quadraticCurveTo(x, y + hh, x, y + hh - r);
    chartCtx.lineTo(x, y + r);
    chartCtx.quadraticCurveTo(x, y, x + r, y);
    chartCtx.closePath();
  };
  chartCtx.shadowColor = 'rgba(0,0,0,0.55)';
  chartCtx.shadowBlur = 6;
  chartCtx.shadowOffsetY = 1;
  // Color the pill based on price direction (up=green/down=red), Binance-style
  const pillBg   = priceUp ? 'rgba(14, 203, 129, 0.92)'  : 'rgba(246, 70, 93, 0.92)';
  const pillEdge = priceUp ? 'rgba(14, 203, 129, 0.40)'  : 'rgba(246, 70, 93, 0.40)';
  chartCtx.fillStyle = pillBg;
  drawRoundedRect(tagX, tagY, tagW, tagH, 3);
  chartCtx.fill();
  chartCtx.shadowBlur = 0;
  chartCtx.shadowOffsetY = 0;
  // Subtle 1px border for Binance crispness
  chartCtx.strokeStyle = pillEdge;
  chartCtx.lineWidth = 1;
  drawRoundedRect(tagX + 0.5, tagY + 0.5, tagW - 1, tagH - 1, 3);
  chartCtx.stroke();
  chartCtx.fillStyle = '#FFFFFF';
  chartCtx.font = '700 10px JetBrains Mono, monospace';
  chartCtx.textAlign = 'left';
  chartCtx.textBaseline = 'middle';
  chartCtx.fillText(fmt(last.c, a.decimals), tagX + 5, lastY);

  // ============ OPEN POSITION MARKERS ============
  const myPositions = S.positions.filter(p => p.sym === sym);
  myPositions.forEach(p => {
    const y = priceTop + priceH * (1 - (p.entry - mn) / range);
    if (y < priceTop - 2 || y > priceTop + priceH + 2) return;
    chartCtx.strokeStyle = p.side === 'BUY' ? 'rgba(14,203,129,0.65)' : 'rgba(246,70,93,0.65)';
    chartCtx.setLineDash([2,3]);
    chartCtx.beginPath();
    chartCtx.moveTo(padL, y); chartCtx.lineTo(w - padR, y);
    chartCtx.stroke();
    chartCtx.setLineDash([]);
    chartCtx.fillStyle = p.side === 'BUY' ? '#0ECB81' : '#F6465D';
    chartCtx.fillRect(padL, y - 6, 26, 12);
    chartCtx.fillStyle = '#fff';
    chartCtx.font = 'bold 8px JetBrains Mono, monospace';
    chartCtx.textAlign = 'center';
    chartCtx.fillText(p.side, padL + 13, y);
    if (p.tp) {
      const ytp = priceTop + priceH * (1 - (p.tp - mn) / range);
      if (ytp > priceTop && ytp < priceTop + priceH) {
        chartCtx.strokeStyle = 'rgba(14,203,129,0.4)';
        chartCtx.setLineDash([1,3]);
        chartCtx.beginPath(); chartCtx.moveTo(padL, ytp); chartCtx.lineTo(w-padR, ytp); chartCtx.stroke();
        chartCtx.setLineDash([]);
      }
    }
    if (p.sl) {
      const ysl = priceTop + priceH * (1 - (p.sl - mn) / range);
      if (ysl > priceTop && ysl < priceTop + priceH) {
        chartCtx.strokeStyle = 'rgba(246,70,93,0.4)';
        chartCtx.setLineDash([1,3]);
        chartCtx.beginPath(); chartCtx.moveTo(padL, ysl); chartCtx.lineTo(w-padR, ysl); chartCtx.stroke();
        chartCtx.setLineDash([]);
      }
    }
  });

  // ============ CROSSHAIR (hover) ============
  if (chartHover) {
    const idx = clamp(Math.round((chartHover.x - padL) / (plotW / (visible.length - 1))), 0, visible.length - 1);
    const c = visible[idx];
    const cx = padL + (plotW / (visible.length - 1)) * idx;
    // Vertical crosshair spans ALL panes
    chartCtx.strokeStyle = 'rgba(255,255,255,0.20)';
    chartCtx.setLineDash([2,2]);
    chartCtx.beginPath();
    chartCtx.moveTo(cx, padT); chartCtx.lineTo(cx, padT + totalH); chartCtx.stroke();
    // Horizontal crosshair only in price pane
    if (chartHover.y >= priceTop && chartHover.y <= priceTop + priceH) {
      chartCtx.beginPath();
      chartCtx.moveTo(padL, chartHover.y); chartCtx.lineTo(w - padR, chartHover.y); chartCtx.stroke();
    }
    chartCtx.setLineDash([]);
    // Tooltip
    const tt = $('#chartTooltip');
    tt.classList.add('show');
    tt.innerHTML = `
      <div><span class="lbl">O:</span> ${fmt(c.o, a.decimals)}</div>
      <div><span class="lbl">H:</span> ${fmt(c.h, a.decimals)}</div>
      <div><span class="lbl">L:</span> ${fmt(c.l, a.decimals)}</div>
      <div><span class="lbl">C:</span> <span class="${c.c>=c.o?'v-up':'v-dn'}">${fmt(c.c, a.decimals)}</span></div>
    `;
    let ttX = cx + 8;
    if (ttX + 90 > w - padR) ttX = cx - 90;
    tt.style.left = ttX + 'px';
    tt.style.top = (priceTop + 4) + 'px';
  } else {
    $('#chartTooltip').classList.remove('show');
  }
}

chartCanvas.addEventListener('touchstart', e => {
  const r = chartCanvas.getBoundingClientRect();
  const t0 = e.touches[0];
  chartHover = { x: t0.clientX - r.left, y: t0.clientY - r.top };
  drawChart();
}, {passive:true});
chartCanvas.addEventListener('touchmove', e => {
  const r = chartCanvas.getBoundingClientRect();
  const t0 = e.touches[0];
  chartHover = { x: t0.clientX - r.left, y: t0.clientY - r.top };
  drawChart();
}, {passive:true});
chartCanvas.addEventListener('touchend', () => { chartHover = null; drawChart(); }, {passive:true});

/* ============ RENDERERS ============ */
function setLanguage(lang) {
  // English-only build: ignore the parameter, always set English
  lang = 'en';
  S.language = 'en';
  document.documentElement.setAttribute('lang', 'en');
  document.body.setAttribute('dir', 'ltr');
  // Translate text labels — but preserve any .help-icon child by re-appending it
  $$('[data-i18n]').forEach(el => {
    const helpIcon = el.querySelector(':scope > .help-icon');
    el.textContent = t(el.getAttribute('data-i18n'));
    if (helpIcon) el.appendChild(helpIcon);
  });
  $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
  // Swap brand text
  applyBrandText('en');
  // compliance
  const cmp = $('#compliance'); if (cmp) cmp.textContent = t('compliance_text');
  // terms
  const tb = $('#termsBox'); if (tb) tb.innerHTML = TERMS.en;
  // ticker
  if (typeof rebuildTicker === 'function') rebuildTicker();
  // re-render content modals if open / cached
  if (typeof renderFaq === 'function') renderFaq();
  if (typeof renderDisclaimer === 'function') renderDisclaimer();
  if (typeof renderTermsModal === 'function') renderTermsModal();
  if (typeof renderHints === 'function') renderHints();
  // dynamic strings
  if (typeof renderFlipCards === 'function') renderFlipCards();
  if (typeof renderAccountInfo === 'function') renderAccountInfo();
  saveSoon();
}

/* Brand text per language — VTS short stays universal; full name is translated */
const BRAND_FULL = {
  en: 'Virtual Trading School',
};
function applyBrandText(lang) {
  const full = BRAND_FULL[lang] || BRAND_FULL.en;
  document.querySelectorAll('[data-brand-full]').forEach(el => {
    el.textContent = full;
  });
  // legacy data-brand-en — also fill with full name
  document.querySelectorAll('[data-brand-en]').forEach(el => {
    el.textContent = '';
  });
}

function renderLangPicker() {
  // English-only build: no-op (the language picker has been replaced
  // with an "Early Access Build" disclaimer in the Settings panel).
}

function applyTheme(theme) {
  const valid = ['default', 'midnight', 'forest', 'sunset'];
  if (!valid.includes(theme)) theme = 'default';
  const prev = S.theme || 'default';
  S.theme = theme;
  if (theme === 'default') {
    document.body.removeAttribute('data-theme');
  } else {
    document.body.setAttribute('data-theme', theme);
  }
  renderThemePicker();
  if (prev !== theme && typeof bumpChallenge === 'function') bumpChallenge('theme_switch');
  saveSoon();
}

function renderThemePicker() {
  const tp = document.getElementById('themePicker');
  if (!tp) return;
  $$('.theme-card', tp).forEach(c => {
    c.classList.toggle('sel', c.dataset.theme === (S.theme || 'default'));
  });
}

/* ============ TRADING PULSE: Streak + Daily Challenge + Market Mood ============ */
function _todayStr() {
  return new Date(getTrustedTime()).toISOString().slice(0, 10);
}
function _yesterdayStr() {
  const d = new Date(getTrustedTime());
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

function updateStreak() {
  const today = _todayStr();
  if (S.lastActiveDay === today) return;
  if (S.lastActiveDay === _yesterdayStr()) {
    S.streakCount = (S.streakCount || 0) + 1;
  } else if (!S.lastActiveDay) {
    S.streakCount = 1;
  } else {
    // Missed a day — reset streak
    S.streakCount = 1;
  }
  S.lastActiveDay = today;
  // Hard challenges: streak day milestones
  if (typeof bumpChallenge === 'function') {
    if (S.streakCount >= 7)  bumpChallenge('streak_day_7',  7);
    if (S.streakCount >= 30) bumpChallenge('streak_day_30', 30);
  }
  saveSoon();
}

function renderStreak() {
  const v = $('#streakVal');
  const f = $('#streakFlame');
  if (!v || !f) return;
  const count = S.streakCount || 0;
  v.textContent = count;
  if (count === 0) f.classList.add('cold');
  else f.classList.remove('cold');
}

/* Challenge templates — many variations through parameters give thousands of combos */
const _CHALLENGE_TEMPLATES = [
  // === EASY-MEDIUM (existing) ===
  { type: 'open_n',       targetRange: [2, 8] },       // Open N trades
  { type: 'close_n',      targetRange: [3, 10] },      // Close N trades
  { type: 'flip_card',    targetRange: [1, 3] },       // Pick N hourly cards
  { type: 'switch_asset', targetRange: [3, 8] },       // Browse N different assets
  { type: 'use_tp_sl',    targetRange: [1, 4] },       // Use TP/SL N times
  { type: 'open_buy',     targetRange: [1, 5] },       // Open N BUY positions
  { type: 'open_sell',    targetRange: [1, 5] },       // Open N SELL positions
  { type: 'profit_trade', targetRange: [1, 3] },       // Close N profitable trades
  { type: 'open_forex',   targetRange: [1, 3] },       // Open N forex trades
  { type: 'open_crypto',  targetRange: [1, 3] },       // Open N crypto trades
  { type: 'open_stock',   targetRange: [1, 3] },       // Open N stock trades
  { type: 'large_lot',    targetRange: [1, 2] },       // Open trade with lot >= 1.0
  { type: 'small_lot',    targetRange: [2, 5] },       // Open trades with lot <= 0.10
  { type: 'theme_switch', targetRange: [1, 1] },       // Try a different theme
  { type: 'lang_switch',  targetRange: [1, 1] },       // Try a different language
  { type: 'open_news',    targetRange: [1, 2] },       // Read news details
  { type: 'open_lesson',  targetRange: [1, 3] },       // Open lessons

  // === HARD CHALLENGES (rare drops, big effort) ===
  { type: 'win_streak_5',     targetRange: [5, 5] },       // Win 5 in a row
  { type: 'win_streak_10',    targetRange: [10, 10] },     // Win 10 in a row
  { type: 'profit_50',        targetRange: [50, 50] },     // Earn $50 in one day
  { type: 'profit_100',       targetRange: [100, 100] },   // Earn $100 in one day
  { type: 'profit_250',       targetRange: [250, 250] },   // Earn $250 in one day
  { type: 'profit_500',       targetRange: [500, 500] },   // Earn $500 in one day
  { type: 'big_win',          targetRange: [25, 25] },     // Close a single trade for $25+ profit
  { type: 'mega_win',         targetRange: [100, 100] },   // Close a single trade for $100+ profit
  { type: 'open_30',          targetRange: [30, 30] },     // Open 30 trades in one day
  { type: 'open_50',          targetRange: [50, 50] },     // Open 50 trades in one day
  { type: 'tp_hit_5',         targetRange: [5, 5] },       // Hit TP 5 times in one day
  { type: 'no_sl_hit',        targetRange: [10, 10] },     // Close 10 trades, NONE on SL
  { type: 'diversify_5',      targetRange: [5, 5] },       // Trade 5 different asset categories
  { type: 'diversify_10',     targetRange: [10, 10] },     // Trade 10 different symbols in one day
  { type: 'precision_lot',    targetRange: [10, 10] },     // Use exact lot 0.01 ten times
  { type: 'large_lot_5',      targetRange: [5, 5] },       // Open 5 trades with lot ≥ 1.0
  { type: 'huge_lot',         targetRange: [1, 1] },       // Open one trade with lot ≥ 5.0
  { type: 'master_trader',    targetRange: [20, 20] },     // Win 20 trades in one day
  { type: 'all_categories',   targetRange: [1, 1] },       // Trade ALL categories (forex+crypto+stock+...)
  { type: 'streak_day_7',     targetRange: [7, 7] },       // 7-day login streak
  { type: 'streak_day_30',    targetRange: [30, 30] },     // 30-day login streak
  { type: 'mystery_3',        targetRange: [3, 3] },       // Open 3 mystery boxes in one day
  { type: 'no_losses_10',     targetRange: [10, 10] },     // Close 10 trades — all profitable
  { type: 'rapid_fire',       targetRange: [10, 10] },     // Open 10 trades in 5 minutes
];
const _CHALLENGE_LABELS = {
  en: {
    open_n: 'Open {n} trades', close_n: 'Close {n} trades', flip_card: 'Open {n} mystery card{s}',
    switch_asset: 'Browse {n} different assets', use_tp_sl: 'Use TP/SL on {n} trade{s}',
    open_buy: 'Open {n} BUY position{s}', open_sell: 'Open {n} SELL position{s}',
    profit_trade: 'Close {n} profitable trade{s}', open_forex: 'Open {n} forex trade{s}',
    open_crypto: 'Open {n} crypto trade{s}', open_stock: 'Open {n} stock trade{s}',
    large_lot: 'Open a trade with lot ≥ 1.00', small_lot: 'Open {n} trades with lot ≤ 0.10',
    theme_switch: 'Try a new app theme', lang_switch: 'Try a different language',
    open_news: 'Read {n} news article{s}', open_lesson: 'Read {n} lesson{s}',
    // Hard challenges
    win_streak_5: 'Win 5 trades IN A ROW',
    win_streak_10: 'Win 10 trades IN A ROW',
    profit_50: 'Earn $50+ profit in one day',
    profit_100: 'Earn $100+ profit in one day',
    profit_250: 'Earn $250+ profit in one day',
    profit_500: 'Earn $500+ profit in one day',
    big_win: 'Close a single trade for $25+ profit',
    mega_win: 'Close a single trade for $100+ profit',
    open_30: 'Open 30 trades in one day',
    open_50: 'Open 50 trades in one day',
    tp_hit_5: 'Hit Take Profit 5 times today',
    no_sl_hit: 'Close 10 trades — NONE on Stop Loss',
    diversify_5: 'Trade 5 different asset categories',
    diversify_10: 'Trade 10 different symbols today',
    precision_lot: 'Use exact lot 0.01 ten times',
    large_lot_5: 'Open 5 trades with lot ≥ 1.00',
    huge_lot: 'Open ONE trade with lot ≥ 5.00',
    master_trader: 'Win 20 trades in one day',
    all_categories: 'Trade in every asset category',
    streak_day_7: '7-day login streak',
    streak_day_30: '30-day login streak',
    mystery_3: 'Open 3 mystery boxes today',
    no_losses_10: 'Close 10 trades — ALL profitable',
    rapid_fire: 'Open 10 trades in 5 minutes'
  },
};

function _getChallengeText(challenge) {
  const lang = S.language || 'en';
  const map = _CHALLENGE_LABELS[lang] || _CHALLENGE_LABELS.en;
  let txt = map[challenge.type] || challenge.type;
  txt = txt.replace('{n}', challenge.target);
  txt = txt.replace('{s}', challenge.target === 1 ? '' : 's');
  return txt;
}

/* Seeded random per day — stable until UTC date change */
function _seedRandom(seed) {
  // simple PRNG
  let x = seed;
  return () => {
    x = Math.sin(x) * 10000;
    return x - Math.floor(x);
  };
}

function ensureDailyChallenge() {
  const today = _todayStr();
  if (!S.dailyChallenge || S.dailyChallenge.day !== today) {
    // Generate 4 challenges as cards, picked randomly per day
    const seed = today.split('-').reduce((a,b,i)=>a + (parseInt(b,10) * (i+1)), 31);
    const rnd = _seedRandom(seed);
    const indices = [];
    while (indices.length < 4) {
      const i = Math.floor(rnd() * _CHALLENGE_TEMPLATES.length);
      if (!indices.includes(i)) indices.push(i);
    }
    const cards = indices.map(i => {
      const tpl = _CHALLENGE_TEMPLATES[i];
      const min = tpl.targetRange[0];
      const max = tpl.targetRange[1];
      const target = Math.max(min, Math.min(max, Math.floor(rnd() * (max - min + 1)) + min));
      return { type: tpl.type, target, progress: 0, completed: false, claimed: false };
    });
    S.dailyChallenge = { day: today, cards, totalRewardPerCard: 12.99 };
    saveSoon();
  }
}

function renderDailyChallenge() {
  ensureDailyChallenge();
  const dc = S.dailyChallenge;
  const tx = $('#dcText');
  const pr = $('#dcProgress');
  if (!dc || !tx || !pr) return;
  // Summary in pulse cell — show count completed / total
  const completedCount = dc.cards.filter(c => c.completed).length;
  const total = dc.cards.length;
  if (completedCount === total) {
    tx.innerHTML = '<span style="color:var(--green);">✓ ' + (t('dc_all_done') || 'All challenges done!') + '</span>';
    pr.style.width = '100%';
  } else {
    // Show currently active challenge briefly
    const active = dc.cards.find(c => !c.completed) || dc.cards[0];
    tx.textContent = (t('dc_progress_label') || 'Tap to view') + ' · ' + completedCount + '/' + total;
    pr.style.width = Math.min(100, (completedCount / total) * 100) + '%';
  }
  // Also re-render the modal cards if it's open
  renderChallengeModal();
}

function renderChallengeModal() {
  const cont = document.getElementById('challengeCards');
  if (!cont) return;
  ensureDailyChallenge();
  const dc = S.dailyChallenge;
  if (!dc || !dc.cards) return;
  const reward = dc.totalRewardPerCard || 12.99;
  cont.innerHTML = dc.cards.map((c, i) => {
    const txt = _getChallengeText(c);
    const pct = Math.min(100, (c.progress / c.target) * 100);
    const activeClass = (!c.completed && c.progress > 0) ? 'active' : '';
    const completedClass = c.completed ? 'completed' : '';
    const claimedClass = c.claimed ? 'claimed' : '';
    // Decide what to show in the bottom slot:
    // - claimed → "✓ Claimed" pill
    // - completed (not yet claimed) → animated Collect button
    // - in progress → progress + reward pill (default)
    let bottomSlot;
    if (c.claimed) {
      bottomSlot = `
        <div class="cc-progress">
          <span class="cc-claimed-label">✓ Claimed</span>
          <span class="cc-reward">+$${reward.toFixed(2)}</span>
        </div>
      `;
    } else if (c.completed) {
      bottomSlot = `
        <div class="cc-progress">
          <span>${c.target}/${c.target}</span>
          <button class="cc-collect-btn" data-claim-idx="${i}" type="button">COLLECT +$${reward.toFixed(2)}</button>
        </div>
      `;
    } else {
      bottomSlot = `
        <div class="cc-progress">
          <span>${c.progress}/${c.target}</span>
          <span class="cc-reward">+$${reward.toFixed(2)}</span>
        </div>
      `;
    }
    return `
      <div class="challenge-card ${activeClass} ${completedClass} ${claimedClass}">
        <div class="cc-check">✓</div>
        <div class="cc-num">${(t('dc_card') || 'CARD')} ${i+1}/4</div>
        <div class="cc-title">${txt}</div>
        <div class="cc-bar"><div class="cc-bar-fill" style="width:${pct}%;"></div></div>
        ${bottomSlot}
      </div>
    `;
  }).join('');
  // Wire collect buttons
  cont.querySelectorAll('[data-claim-idx]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.claimIdx, 10);
      if (!isNaN(idx)) claimChallenge(idx);
    });
  });
}

function bumpChallenge(type, amount) {
  ensureDailyChallenge();
  const dc = S.dailyChallenge;
  if (!dc) return;
  const add = (typeof amount === 'number' && !isNaN(amount)) ? amount : 1;
  dc.cards.forEach(card => {
    if (card.completed) return;
    if (card.type !== type) return;
    card.progress = Math.min(card.target, (card.progress || 0) + add);
    if (card.progress >= card.target) {
      card.completed = true;
      // Do NOT auto-credit the reward — user must press "Collect"
      toast('Challenge complete! Tap COLLECT to claim your reward', 'success', 3500);
      beep(1100, 0.18);
      vibrate(50);
    }
  });
  saveSoon();
  renderDailyChallenge();
}

/* Manually claim a completed challenge reward */
function claimChallenge(cardIndex) {
  ensureDailyChallenge();
  const dc = S.dailyChallenge;
  if (!dc || !dc.cards || !dc.cards[cardIndex]) return;
  const card = dc.cards[cardIndex];
  if (!card.completed) return;
  if (card.claimed) return;
  const reward = dc.totalRewardPerCard || 12.99;
  S.balance += reward;
  card.claimed = true;
  toast('+$' + reward.toFixed(2) + ' claimed', 'success', 2400);
  beep(1300, 0.18);
  vibrate(50);
  saveSoon();
  renderTopBar();
  renderDailyChallenge();
}

/* Market Mood — INDEPENDENT volatile sentiment, NOT tied to actual prices.
   Switches between bullish / bearish / neutral on its own schedule with
   strong persistence (it tends to "stick" for ~10–40 seconds before flipping).
   This makes it feel like a real, dramatic market mood indicator. */
let _moodCurrent = 'neutral';
let _moodNextSwitchAt = 0;
function computeMarketMood() {
  const now = Date.now();
  // Time to flip? Use a much more dramatic, varied state machine.
  if (now >= _moodNextSwitchAt) {
    const r = Math.random();
    // Distribution rebalanced — more drama:
    // 38% bullish, 38% bearish, 12% neutral, 6% "panic" (strong bearish), 6% "euphoria" (strong bullish)
    let next;
    if (r < 0.06)      next = 'bullish';   // euphoria — treated visually same but rare
    else if (r < 0.44) next = 'bullish';
    else if (r < 0.82) next = 'bearish';
    else if (r < 0.88) next = 'bearish';   // panic
    else               next = 'neutral';
    // Anti-stagnation: flip 85% of the time if we'd repeat the same mood
    if (next === _moodCurrent && Math.random() < 0.85) {
      if (next === 'bullish') next = 'bearish';
      else if (next === 'bearish') next = 'bullish';
      else next = Math.random() < 0.5 ? 'bullish' : 'bearish';
    }
    _moodCurrent = next;
    // VOLATILE TIMING — sometimes flips fast (3-8s), sometimes slow (15-45s)
    // This makes the mood feel "alive" instead of clockwork
    const fastFlip = Math.random() < 0.45;  // 45% of the time, fast flip
    if (fastFlip) {
      _moodNextSwitchAt = now + 3000 + Math.random() * 5000;   // 3-8 seconds
    } else {
      _moodNextSwitchAt = now + 15000 + Math.random() * 30000; // 15-45 seconds
    }
  }
  return _moodCurrent;
}

/* MOOD LOCK STATE — locked by default, unlocks for 120 seconds. Cooldown: once every 2 hours. */
const MOOD_UNLOCK_MS = 120 * 1000;       // 120 seconds active window
const MOOD_COOLDOWN_MS = 2 * 60 * 60 * 1000; // 2-hour cooldown between unlocks
let _moodUnlockUntil = 0;
let _moodTimerInterval = null;

function isMoodUnlocked() {
  return getTrustedTime() < _moodUnlockUntil;
}

function unlockMoodForOneMinute() {
  // Enforce 2-hour cooldown between unlocks (using trusted time, tamper-safe)
  const nowT = getTrustedTime();
  if (S.moodNextAvailableAt && nowT < S.moodNextAvailableAt) {
    // Still on cooldown — do not unlock
    return false;
  }
  _moodUnlockUntil = nowT + MOOD_UNLOCK_MS;
  S.moodNextAvailableAt = nowT + MOOD_COOLDOWN_MS; // next allowed unlock
  if (typeof saveSoon === 'function') saveSoon();
  applyMoodLockUI();
  if (_moodTimerInterval) clearInterval(_moodTimerInterval);
  _moodTimerInterval = setInterval(() => {
    applyMoodLockUI();
    if (!isMoodUnlocked()) {
      clearInterval(_moodTimerInterval);
      _moodTimerInterval = null;
    }
  }, 1000);
  return true;
}

function moodCooldownRemaining() {
  if (!S.moodNextAvailableAt) return 0;
  return Math.max(0, S.moodNextAvailableAt - getTrustedTime());
}

function applyMoodLockUI() {
  const cell = $('#moodCell');
  const timer = $('#moodTimer');
  const chartMoodEl = document.getElementById('chartMood');
  if (cell && timer) {
    if (isMoodUnlocked()) {
      cell.classList.remove('locked');
      cell.classList.add('unlocked');
      const remaining = Math.max(0, _moodUnlockUntil - getTrustedTime());
      const sec = Math.ceil(remaining / 1000);
      timer.textContent = sec + 's';
      timer.classList.add('show');
    } else {
      cell.classList.add('locked');
      cell.classList.remove('unlocked');
      timer.classList.remove('show');
    }
  }
  // Chart-side mood overlay — only visible when unlocked
  if (chartMoodEl) {
    if (isMoodUnlocked()) chartMoodEl.classList.add('show');
    else chartMoodEl.classList.remove('show');
  }
}

function renderMarketMood() {
  // Compute current mood
  const mood = computeMarketMood();
  // Pulse panel mood
  const dot = $('#moodDot');
  const val = $('#moodVal');
  if (dot && val) {
    dot.classList.remove('bullish', 'bearish');
    val.classList.remove('bullish', 'bearish');
    if (mood === 'bullish') {
      dot.classList.add('bullish');
      val.classList.add('bullish');
      val.textContent = t('mood_bullish');
    } else if (mood === 'bearish') {
      dot.classList.add('bearish');
      val.classList.add('bearish');
      val.textContent = t('mood_bearish');
    } else {
      val.textContent = t('mood_neutral');
    }
    applyMoodLockUI();
  }
  // Chart-side mood (always visible — small unobtrusive overlay)
  const cDot = document.getElementById('chartMoodDot');
  const cVal = document.getElementById('chartMoodVal');
  if (cDot && cVal) {
    cDot.classList.remove('bullish', 'bearish');
    cVal.classList.remove('bullish', 'bearish');
    if (mood === 'bullish') {
      cDot.classList.add('bullish');
      cVal.classList.add('bullish');
      cVal.textContent = t('mood_bullish');
    } else if (mood === 'bearish') {
      cDot.classList.add('bearish');
      cVal.classList.add('bearish');
      cVal.textContent = t('mood_bearish');
    } else {
      cVal.textContent = t('mood_neutral');
    }
  }
}

function renderPulse() {
  renderStreak();
  renderDailyChallenge();
  renderMarketMood();
}

/* ============ MYSTERY BOX ============
 * Locked for 50 minutes (countdown), then ready (cards face-down).
 * 4 reward options, 3 are picked when user flips a card,
 * the 4th (50$ via ad) is always optional after picking.
 */
const MB_COOLDOWN_MS = 3 * 60 * 60 * 1000; // 3-hour cooldown
const MB_REWARD_LABELS = {
  boost_2:  { en: 'Next trade × 2%' },
  boost_18: { en: 'Next trade × 18%' },
  cash_30:  { en: '$30 cash' },
  cash_50_ad: {
    en: 'Claim $12.99 bonus reward'
  }
};
function _mbLabel(type) {
  const map = MB_REWARD_LABELS[type] || {};
  return map.en || type;
}
const MB_REWARDS = [
  { type: 'boost_2',  icon: '×2'  },
  { type: 'boost_18', icon: '×18' },
  { type: 'cash_30',  icon: '$30' }
];
const MB_AD_REWARD = { type: 'cash_50_ad', icon: '$12.99' };

/* ================================================================
 * ANTI TIME-TAMPERING — APP-WIDE PROTECTION
 *
 * Protects ALL time-gated features against device clock manipulation:
 *   - Mystery Box (2-hour cooldown)
 *   - Daily Challenges (24-hour refresh)
 *   - Daily Streak (consecutive days check)
 *   - Hourly card-flip (1-hour cooldown)
 *   - Market Mood unlock (60-second window)
 *   - News spawn timer (3-minute interval)
 *
 * Strategy:
 *   - Track BOTH a wall clock (Date.now) AND a monotonic clock
 *     (performance.now() relative to a stored boot epoch).
 *   - When the wall clock jumps forward more than the monotonic +
 *     a fudge factor, the user moved their phone time forward.
 *     We absorb the cheat-gap so all cooldowns remain valid.
 *   - When the wall clock goes backward (user reversed clock),
 *     we ignore it and trust monotonic.
 *   - We also store a "trusted time offset" in localStorage that
 *     accumulates across sessions, so even closing+reopening the
 *     app after tampering does not reset the protection.
 *
 * Notes:
 *   - performance.now() resets on every page load — that's why we
 *     store the wall anchor to localStorage (S.tamperAnchor).
 *   - A determined attacker who clears app data + reboots can still
 *     reset everything. Full protection requires a server, which we
 *     don't have. This system stops 99% of casual cheating.
 * ================================================================ */

// Session-scoped clock anchors (reset every page load)
let _sessBootMono = null;
let _sessBootWall = null;

function _initClockAnchors() {
  if (_sessBootMono === null) {
    _sessBootMono = (typeof performance !== 'undefined' && performance.now) ? performance.now() : 0;
  }
  if (_sessBootWall === null) {
    _sessBootWall = Date.now();
  }
  // tamperAnchor: persisted "last known good wall time" — used across sessions
  if (!S.tamperAnchor) {
    S.tamperAnchor = Date.now();
    S.tamperOffset = 0; // accumulated cheat gap (added back to time-sensitive deadlines)
    saveSoon();
  }
}

/**
 * The single source of trusted time. ALL time-gated features
 * should use this instead of Date.now() to prevent tampering.
 *
 * Returns the current "trusted" wall-clock millis. If the user
 * has moved the phone clock forward, this still reflects the
 * actual elapsed time, NOT the cheated-forward time.
 */
function getTrustedTime() {
  _initClockAnchors();
  const wallNow = Date.now();
  const monoNow = (typeof performance !== 'undefined' && performance.now) ? performance.now() : 0;
  const wallDelta = wallNow - _sessBootWall;
  const monoDelta = monoNow - _sessBootMono;
  const FUDGE = 60 * 1000; // 60-second tolerance for normal clock drift

  // Did the wall clock jump forward more than monotonic? → tampering
  if (wallDelta > monoDelta + FUDGE) {
    const cheatGap = wallDelta - monoDelta;
    // Persist the offset so it survives app restarts
    S.tamperOffset = (S.tamperOffset || 0) + cheatGap;
    // Re-anchor session clocks so the gap doesn't compound on next call
    _sessBootWall = wallNow;
    _sessBootMono = monoNow;
    saveSoon();
  }
  // Did the wall clock go BACKWARDS? → user set clock back, ignore it
  // (we just re-anchor without changing offset)
  else if (wallDelta < monoDelta - FUDGE) {
    _sessBootWall = wallNow;
    _sessBootMono = monoNow;
  }

  // Trusted time = current wall - all accumulated cheat gaps
  return wallNow - (S.tamperOffset || 0);
}

/**
 * Detect if the user has tampered with the clock. Returns true if
 * tampering was just detected this call. Used by features that need
 * to know about the tamper event (e.g., to reset Mystery Box).
 */
function _detectTampering() {
  _initClockAnchors();
  const wallNow = Date.now();
  const monoNow = (typeof performance !== 'undefined' && performance.now) ? performance.now() : 0;
  const wallDelta = wallNow - _sessBootWall;
  const monoDelta = monoNow - _sessBootMono;
  const FUDGE = 60 * 1000;
  if (wallDelta > monoDelta + FUDGE) {
    const cheatGap = wallDelta - monoDelta;
    S.tamperOffset = (S.tamperOffset || 0) + cheatGap;
    _sessBootWall = wallNow;
    _sessBootMono = monoNow;
    // Push all time-gated features forward by the cheat-gap so they remain locked
    if (S.mbReadyAt) S.mbReadyAt += cheatGap;
    saveSoon();
    return true;
  }
  return false;
}

/**
 * Get a tampering-resistant date key for daily features (challenges,
 * streak, etc). Falls back to today's date if trusted time is unavailable.
 */
function getTrustedDateKey() {
  return new Date(getTrustedTime()).toISOString().slice(0, 10);
}

// Legacy aliases — old code calls these names
let _mbBootMono = null;
let _mbBootWallCached = null;

function _mbInitClockAnchors() {
  _initClockAnchors();
}

function _mbCheckClockTamper() {
  return _detectTampering();
}

function _mbReady() {
  _detectTampering();
  return getTrustedTime() >= (S.mbReadyAt || 0);
}
function _mbRemaining() {
  _detectTampering();
  return Math.max(0, (S.mbReadyAt || 0) - getTrustedTime());
}

function _mbFormatCountdown(ms) {
  const total = Math.ceil(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (h > 0) {
    return String(h) + ':' + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  }
  return String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
}

let _mbTickInterval = null;
function startMysteryBoxTicker() {
  if (_mbTickInterval) clearInterval(_mbTickInterval);
  renderMysteryBox();
  _mbTickInterval = setInterval(renderMysteryBox, 1000);
}

function renderMysteryBox() {
  const card = $('#mysteryBox');
  if (!card) return;
  const status = $('#mbStatus');
  const sub = $('#mbSub');
  const lockedState = $('#mbLockedState');
  const readyState = $('#mbReadyState');
  const revealedState = $('#mbRevealedState');

  // Initialize first reset if needed
  if (!S.mbReadyAt) {
    S.mbReadyAt = getTrustedTime() + MB_COOLDOWN_MS;
    saveSoon();
  }

  if (S.mbRevealedReward) {
    // Show revealed view
    lockedState.style.display = 'none';
    readyState.style.display = 'none';
    revealedState.style.display = 'block';
    if (status) {
      status.textContent = t('mb_opened') || 'OPENED';
      status.classList.remove('ready');
    }
    return;
  }

  if (_mbReady()) {
    lockedState.style.display = 'none';
    readyState.style.display = 'block';
    revealedState.style.display = 'none';
    if (status) { status.textContent = t('mb_ready_status') || 'READY'; status.classList.add('ready'); }
    if (sub) sub.textContent = t('mb_pick_card') || 'Pick a card to reveal your reward';
    if (!_mbCardsRendered) {
      _renderMbCards();
      _mbCardsRendered = true;
    }
  } else {
    // Locked
    lockedState.style.display = 'block';
    readyState.style.display = 'none';
    revealedState.style.display = 'none';
    if (status) { status.textContent = t('mb_locked') || 'LOCKED'; status.classList.remove('ready'); }
    if (sub) sub.textContent = t('mb_sub_locked') || 'Available every 2 hours';
    const cd = $('#mbCountdown');
    const fill = $('#mbProgressFill');
    if (cd) cd.textContent = _mbFormatCountdown(_mbRemaining());
    if (fill) {
      const pct = (1 - _mbRemaining() / MB_COOLDOWN_MS) * 100;
      fill.style.width = Math.min(100, Math.max(0, pct)) + '%';
    }
    _mbCardsRendered = false;
  }
}

let _mbCardsRendered = false;
function _renderMbCards() {
  const cards = $('#mbCards');
  if (!cards) return;
  // Pick a single random reward from the 3 base rewards (4th is optional bonus)
  // Pre-decide which card has it; backs of all cards show same reward (user just picks any)
  // Per user spec: "اجعله عندما يفتح الصندوق يختار عشوائي بين ال٣ خيارات"
  const reward = MB_REWARDS[Math.floor(Math.random() * MB_REWARDS.length)];
  S._mbPendingReward = reward;
  saveSoon();
  // Render 4 face-down cards
  cards.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const c = document.createElement('div');
    c.className = 'mb-card';
    c.dataset.idx = i;
    const lang = S.language || 'en';
    const lbl = _mbLabel(reward.type);
    c.innerHTML = `
      <div class="mb-card-inner">
        <div class="mb-card-face mb-card-front"></div>
        <div class="mb-card-face mb-card-back">
          <div class="mb-amount">${reward.icon}</div>
          <div>${lbl}</div>
        </div>
      </div>
    `;
    c.addEventListener('click', () => _flipMbCard(c, reward));
    cards.appendChild(c);
  }
}

function _flipMbCard(cardEl, reward) {
  if (cardEl.classList.contains('flipped')) return;
  cardEl.classList.add('flipped');
  vibrate(20);
  beep(880, 0.10);
  // Disable other cards
  $$('.mb-card', $('#mbCards')).forEach(c => {
    if (c !== cardEl) c.style.pointerEvents = 'none';
  });
  // Apply reward + show revealed state after short delay
  setTimeout(() => {
    _applyMbReward(reward);
  }, 800);
}

function _applyMbReward(reward) {
  // All rewards auto-credit cash directly to balance (no more boosts).
  // boost_2 → +$2, boost_18 → +$18, cash_30 → +$30
  S.mbActiveBoost = null;
  let cashAdded = 0;
  if (reward.type === 'cash_30')      { cashAdded = 30;  S.balance += 30; }
  else if (reward.type === 'boost_2') { cashAdded = 2;   S.balance += 2; }
  else if (reward.type === 'boost_18'){ cashAdded = 18;  S.balance += 18; }
  toast('+ $' + cashAdded.toFixed(2), 'success', 2500);
  if (typeof beep === 'function') beep(1300, 0.15, 0.10);
  S.mbRevealedReward = reward;
  S.mbReadyAt = getTrustedTime() + MB_COOLDOWN_MS;
  if (typeof bumpChallenge === 'function') bumpChallenge('mystery_3');
  saveSoon();
  // Render the revealed state
  const icon = $('#mbRevealedIcon');
  const title = $('#mbRevealedTitle');
  const desc = $('#mbRevealedDesc');
  const bonusBtn = $('#mbBonusBtn');
  if (icon) icon.textContent = reward.icon;
  if (title) title.textContent = '+ $' + cashAdded.toFixed(2);
  if (desc) desc.textContent = 'Added to your balance.';
  if (bonusBtn) {
    bonusBtn.style.display = 'block';
    bonusBtn.textContent = 'Claim $12.99 bonus';
  }
  setTimeout(() => {
    renderMysteryBox();
    renderTopBar();
  }, 600);
}

function bindMysteryBox() {
  const bonusBtn = document.getElementById('mbBonusBtn');
  if (bonusBtn) {
    bonusBtn.addEventListener('click', () => {
      // No-ads build: grant the bonus instantly
      S.balance += 12.99;
      toast('+ $12.99', 'success', 2500);
      beep(1000, 0.15);
      bonusBtn.style.display = 'none';
      saveSoon();
      renderTopBar();
    });
  }
  const closeBtn = document.getElementById('mbCloseBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      S.mbRevealedReward = null;
      saveSoon();
      renderMysteryBox();
    });
  }
}

function rebuildTicker() {
  // Show currently selected asset first, then 8 most active by category
  const selected = ASSETS.find(a => a.sym === S.selectedSym);
  const featured = [];
  if (selected) featured.push(selected);
  // Add favorites first, then prominent assets
  S.favorites.slice(0, 4).forEach(sym => {
    const a = ASSETS.find(x => x.sym === sym);
    if (a && !featured.includes(a)) featured.push(a);
  });
  // Fill with the first N assets to reach 12 total
  for (const a of ASSETS) {
    if (featured.length >= 12) break;
    if (!featured.includes(a)) featured.push(a);
  }
  const items = featured.map(a => {
    const p = getPrice(a.sym);
    const prev = S.prices[a.sym]?.prevDay || a.base;
    const ch = ((p - prev) / prev) * 100;
    const sign = ch >= 0 ? '▲' : '▼';
    const color = ch >= 0 ? '#0ECB81' : '#F6465D';
    return `<span class="tk-item">
      <span class="tk-sym">${a.sym}</span>
      <span class="tk-price">${fmt(p,a.decimals)}</span>
      <span class="tk-ch" style="color:${color};">${sign} ${fmt(Math.abs(ch),2)}%</span>
    </span>`;
  });
  // duplicate for seamless marquee
  $('#tickerText').innerHTML = items.join('') + items.join('');
}

function renderAssetList() {
  const list = $('#assetsList');
  const filtered = ASSETS.filter(a => {
    if (S.category === 'all') return true;
    if (S.category === 'favorites') return S.favorites.includes(a.sym);
    return a.cat === S.category;
  }).filter(a => {
    if (!S.search) return true;
    const q = S.search.toLowerCase();
    return a.sym.toLowerCase().includes(q) || a.name.toLowerCase().includes(q);
  });
  $('#assetsCount').textContent = filtered.length;
  if (!filtered.length) {
    list.innerHTML = `<div class="empty"><div class="icn"></div><div>No assets found.</div></div>`;
    return;
  }
  list.innerHTML = filtered.map(a => {
    const p = getPrice(a.sym);
    const prev = S.prices[a.sym]?.prevDay || a.base;
    const ch = ((p - prev) / prev) * 100;
    const isSel = a.sym === S.selectedSym;
    const isFav = S.favorites.includes(a.sym);
    return `<div class="asset-row ${isSel?'selected':''}" data-sym="${a.sym}">
      <div class="asset-info">
        <div class="asset-symbol">${a.sym}</div>
        <div class="asset-name">${a.name}</div>
      </div>
      <div class="asset-price">${fmt(p, a.decimals)}</div>
      <div style="display:flex;flex-direction:column;align-items:end;gap:3px;">
        <div class="asset-change ${ch>=0?'up':'dn'}">${ch>=0?'+':''}${fmt(ch,2)}%</div>
        <button class="fav-star ${isFav?'on':''}" data-fav="${a.sym}">${isFav?'★':'☆'}</button>
      </div>
    </div>`;
  }).join('');
  // bind
  $$('.asset-row', list).forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.dataset.fav) return;
      const newSym = row.dataset.sym;
      if (newSym !== S.selectedSym) {
        S.selectedSym = newSym;
        bumpChallenge('switch_asset');
      }
      vibrate(8);
      saveSoon(); renderAssetHeader(); renderAssetList(); drawChart(); updateTradeButtons();
    });
  });
  $$('[data-fav]', list).forEach(b => {
    b.addEventListener('click', e => {
      e.stopPropagation();
      const sym = b.dataset.fav;
      const i = S.favorites.indexOf(sym);
      if (i >= 0) S.favorites.splice(i, 1); else S.favorites.push(sym);
      vibrate(10);
      saveSoon(); renderAssetList();
    });
  });
}

function renderAssetHeader() {
  const a = getAsset(S.selectedSym);
  if (!a) return;
  const p = getPrice(a.sym);
  const prev = S.prices[a.sym]?.prevDay || a.base;
  const ch = ((p - prev) / prev) * 100;
  $('#ahSymbol').textContent = a.sym;
  $('#ahName').textContent = a.name;
  $('#ahPrice').textContent = fmt(p, a.decimals);
  const chEl = $('#ahChange');
  chEl.textContent = (ch>=0?'+':'') + fmt(ch,2) + '%';
  chEl.className = 'asset-change ' + (ch>=0?'up':'dn');
  $('#ahHigh').textContent = fmt(S.prices[a.sym]?.high24 || p, a.decimals);
  $('#ahLow').textContent = fmt(S.prices[a.sym]?.low24 || p, a.decimals);
  $('#ahSpread').textContent = fmt(a.spread, a.decimals);
}

function updateTradeButtons() {
  const a = getAsset(S.selectedSym);
  if (!a) return;
  $('#buyPx').textContent = fmt(getAsk(a.sym), a.decimals);
  $('#sellPx').textContent = fmt(getBid(a.sym), a.decimals);
}

function updateLotInfo() {
  const lot = parseFloat($('#lotInput').value) || 0;
  const m = calcMargin(lot, S.selectedSym);
  const pct = S.balance > 0 ? (m / S.balance * 100) : 100;
  $('#costVal').textContent = fmtMoney(m);
  $('#costPct').textContent = '(' + pct.toFixed(1) + '%)';
  const bar = $('#riskBar');
  bar.style.width = clamp(pct, 0, 100) + '%';
  $('#balanceDisplay').textContent = fmtMoney(S.balance);
  // Sync preset button selection
  $$('.preset-btn').forEach(b => {
    const pv = parseFloat(b.dataset.lot);
    b.classList.toggle('sel', Math.abs(pv - lot) < 0.001);
  });
}

function renderTopBar() {
  $('#topBalance').textContent = fmtMoney(S.balance);
  const bd = $('#balanceDisplay'); if (bd) bd.textContent = fmtMoney(S.balance);
  // Quick stats
  renderQuickStats();
}

function renderQuickStats() {
  const today = todayKey();
  const todayTrades = (S.history || []).filter(h => {
    const k = new Date(h.closedAt || 0).toISOString().slice(0,10);
    return k === today;
  });
  // Separate winnings (sum of positive pnls) and losses (sum of negative pnls, as absolute)
  let todayWon = 0;
  let todayLost = 0;
  todayTrades.forEach(h => {
    const p = h.pnl || 0;
    if (p >= 0) todayWon += p;
    else todayLost += Math.abs(p);
  });
  const todayWins = todayTrades.filter(h => (h.pnl || 0) >= 0).length;
  const wonRow = $('#qsWonRow');
  const lostRow = $('#qsLostRow');
  if (wonRow) wonRow.textContent = '+' + fmtMoney(todayWon);
  if (lostRow) lostRow.textContent = '-' + fmtMoney(todayLost);
  const trEl = $('#qsTrades');
  if (trEl) trEl.textContent = todayTrades.length;
  const wrEl = $('#qsWin');
  if (wrEl) {
    if (todayTrades.length === 0) {
      wrEl.textContent = '—';
      wrEl.classList.remove('up', 'down');
    } else {
      const pct = Math.round((todayWins / todayTrades.length) * 100);
      wrEl.textContent = pct + '%';
      wrEl.classList.toggle('up', pct >= 60);
      wrEl.classList.toggle('down', pct < 40);
    }
  }
}

/* Select mode state for bulk close */
let _selectMode = false;
let _selectedIds = new Set();

function renderOpenPositions() {
  const c = $('#openPositions');
  $('#openCount').textContent = S.positions.length;
  // Auto-disable select mode if no positions remain
  if (!S.positions.length && _selectMode) {
    _exitSelectMode();
  }
  if (!S.positions.length) {
    c.innerHTML = `<div class="empty"><div class="icn"></div><div>${t('no_positions')}</div></div>`;
    _updateSelectUI();
    return;
  }
  // Clean stale selections (positions that no longer exist)
  if (_selectMode) {
    const liveIds = new Set(S.positions.map(p => p.id));
    _selectedIds.forEach(id => { if (!liveIds.has(id)) _selectedIds.delete(id); });
  }
  c.innerHTML = S.positions.map(p => {
    const a = getAsset(p.sym);
    const cur = (p.side === 'BUY') ? getBid(p.sym) : getAsk(p.sym);
    const { pnl, points } = calcPnl(p, cur);
    const pnlCls = pnl >= 0 ? 'up' : 'dn';
    const isChecked = _selectedIds.has(p.id);
    const selectCheckbox = _selectMode
      ? `<label class="pos-check"><input type="checkbox" data-select-id="${p.id}" ${isChecked ? 'checked' : ''}><span class="cbx"></span></label>`
      : '';
    return `<div class="position ${_selectMode ? 'selectable' : ''} ${isChecked ? 'selected' : ''}" data-pos-id="${p.id}">
      ${selectCheckbox}
      <div class="pos-side ${p.side==='BUY'?'buy':'sell'}">${p.side}</div>
      <div class="pos-mid">
        <div class="top">${p.sym} <span class="lot">${p.lot.toFixed(2)} lot</span></div>
        <div class="bot">@ ${fmt(p.entry, a.decimals)} → ${fmt(cur, a.decimals)}</div>
      </div>
      <div class="pos-end">
        <div class="pos-pnl ${pnlCls}">${fmtSignedMoney(pnl)}</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:${pnl>=0?'#0ECB81':'#F6465D'};">${points>=0?'+':''}${points.toFixed(1)} pts</div>
        ${_selectMode ? '' : `<button class="pos-close" data-close-id="${p.id}">CLOSE</button>`}
      </div>
    </div>`;
  }).join('');
  if (_selectMode) {
    // Wire checkboxes + row clicks
    $$('[data-select-id]', c).forEach(cb => {
      cb.addEventListener('change', () => {
        const id = cb.dataset.selectId;
        if (cb.checked) _selectedIds.add(id); else _selectedIds.delete(id);
        _updateSelectUI();
        // Update row visual state
        const row = cb.closest('.position');
        if (row) row.classList.toggle('selected', cb.checked);
      });
    });
    // Tap anywhere on row toggles selection
    $$('.position.selectable', c).forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL') return;
        const id = row.dataset.posId;
        const cb = row.querySelector('input[type="checkbox"]');
        if (cb) {
          cb.checked = !cb.checked;
          cb.dispatchEvent(new Event('change'));
        }
      });
    });
  } else {
    $$('[data-close-id]', c).forEach(b => {
      b.addEventListener('click', () => {
        const id = b.dataset.closeId;
        confirmDialog(t('open_positions'), t('confirm_close'), () => closePosition(id, 'manual'));
      });
    });
  }
  _updateSelectUI();
}

function _updateSelectUI() {
  const toolbar = document.getElementById('selectToolbar');
  const selectBtn = document.getElementById('selectModeBtn');
  const closeBtn = document.getElementById('closeSelectedBtn');
  const countEl = document.getElementById('selectCount');
  if (!toolbar || !selectBtn) return;
  // Show toolbar ONLY when in select mode AND positions exist
  const shouldShow = _selectMode && S.positions.length > 0;
  if (shouldShow) {
    toolbar.hidden = false;
    toolbar.style.display = ''; // clear any inline display:none
    selectBtn.setAttribute('aria-pressed', 'true');
    selectBtn.textContent = 'Done';
    if (countEl) countEl.textContent = _selectedIds.size + ' selected';
    if (closeBtn) closeBtn.disabled = _selectedIds.size === 0;
  } else {
    toolbar.hidden = true;
    toolbar.style.display = 'none'; // belt-and-braces
    selectBtn.setAttribute('aria-pressed', 'false');
    selectBtn.textContent = 'Select';
    if (countEl) countEl.textContent = '0 selected'; // reset stale label
    if (closeBtn) closeBtn.disabled = true;
  }
  // Hide the Select toggle button entirely when there are no positions
  selectBtn.style.display = S.positions.length === 0 ? 'none' : '';
}

function _enterSelectMode() {
  if (!S.positions.length) return;
  _selectMode = true;
  _selectedIds.clear();
  renderOpenPositions();
}

function _exitSelectMode() {
  _selectMode = false;
  _selectedIds.clear();
  renderOpenPositions();
}

function _bindSelectModeButtons() {
  const selectBtn = document.getElementById('selectModeBtn');
  const allBtn = document.getElementById('selectAllBtn');
  const invertBtn = document.getElementById('selectInvertBtn');
  const closeBtn = document.getElementById('closeSelectedBtn');
  const cancelBtn = document.getElementById('selectCancelBtn');
  if (selectBtn && !selectBtn._bound) {
    selectBtn._bound = true;
    selectBtn.addEventListener('click', () => {
      if (_selectMode) _exitSelectMode(); else _enterSelectMode();
    });
  }
  if (allBtn && !allBtn._bound) {
    allBtn._bound = true;
    allBtn.addEventListener('click', () => {
      S.positions.forEach(p => _selectedIds.add(p.id));
      renderOpenPositions();
    });
  }
  if (invertBtn && !invertBtn._bound) {
    invertBtn._bound = true;
    invertBtn.addEventListener('click', () => {
      const next = new Set();
      S.positions.forEach(p => { if (!_selectedIds.has(p.id)) next.add(p.id); });
      _selectedIds = next;
      renderOpenPositions();
    });
  }
  if (closeBtn && !closeBtn._bound) {
    closeBtn._bound = true;
    closeBtn.addEventListener('click', () => {
      if (_selectedIds.size === 0) return;
      const n = _selectedIds.size;
      confirmDialog(
        'Close ' + n + ' position' + (n > 1 ? 's' : '') + '?',
        'This will immediately close all selected positions at current market price.',
        () => {
          // Snapshot the IDs, then exit select mode FIRST so toolbar disappears
          const ids = Array.from(_selectedIds);
          _selectMode = false;
          _selectedIds.clear();
          // Now close each position (each renderAll() will see _selectMode=false)
          ids.forEach(id => closePosition(id, 'manual'));
          // Final UI sync
          _updateSelectUI();
          renderOpenPositions();
          toast('Closed ' + n + ' position' + (n > 1 ? 's' : ''), 'success', 2400);
        }
      );
    });
  }
  if (cancelBtn && !cancelBtn._bound) {
    cancelBtn._bound = true;
    cancelBtn.addEventListener('click', () => _exitSelectMode());
  }
}

function renderHistory() {
  const c = $('#tradeHistory');
  $('#histCount').textContent = S.history.length + '/30';
  if (!S.history.length) {
    c.innerHTML = `<div class="empty"><div class="icn"></div><div>${t('no_history')}</div></div>`;
    return;
  }
  c.innerHTML = S.history.map(h => {
    const a = getAsset(h.sym);
    const tagText = h.reason === 'tp' ? t('closed_tp') : (h.reason === 'sl' ? t('closed_sl') : t('closed_man'));
    const tagCls = h.reason === 'tp' ? 'tp' : (h.reason === 'sl' ? 'sl' : 'man');
    return `<div class="history-row">
      <div class="h-side ${h.side==='BUY'?'buy':'sell'}"></div>
      <div class="h-info">
        <div class="top">${h.sym} ${h.side} ${h.lot.toFixed(2)} <span class="tag ${tagCls}">${tagText}</span></div>
        <div class="bot">${fmt(h.entry,a.decimals)} → ${fmt(h.exit,a.decimals)} · ${new Date(h.closedAt).toLocaleTimeString()}</div>
      </div>
      <div class="h-pnl ${h.pnl>=0?'up':'dn'}">
        ${fmtSignedMoney(h.pnl)}
        <span class="pts">${h.points>=0?'+':''}${h.points.toFixed(1)} pts</span>
      </div>
    </div>`;
  }).join('');
}

function renderRecord() {
  $('#winsCount').textContent = S.wins;
  $('#lossesCount').textContent = S.losses;
  const total = S.wins + S.losses;
  const rate = total ? Math.round(S.wins / total * 100) : 0;
  $('#winRate').textContent = rate + '%';
}

function renderRewards() {
  // hourly card-flip game (replaces old daily/boost)
  if (typeof renderFlipCards === 'function') {
    // initial render (only if cards container empty)
    const wrap = $('#flipCards');
    if (wrap && wrap.children.length === 0) renderFlipCards();
    renderFlipTimer();
  }
}

function renderFaq() {
  const body = $('#faqBody');
  if (!body) return;
  const arr = FAQ_DATA[S.language] || FAQ_DATA.en;
  const total = arr.length;
  body.innerHTML = arr.map((item, i) => `
    <div class="hint-section" data-idx="${i+1}">
      <h4><span class="ttl-text">${item.q}</span><span class="idx-badge">(${i+1}/${total})</span></h4>
      <p>${item.a}</p>
    </div>
  `).join('');
  initCounterTracking('faqBody', 'faqCounter', total);
  applyRevealEffect('faqBody');
}

function renderDisclaimer() {
  const body = $('#disclaimerBody');
  if (!body) return;
  const arr = DISCLAIMER_DATA[S.language] || DISCLAIMER_DATA.en;
  const total = arr.length;
  const sections = arr.map((item, i) => `
    <div class="hint-section" data-idx="${i+1}">
      <h4><span class="ttl-text">${item.h}</span><span class="idx-badge">(${i+1}/${total})</span></h4>
      <p>${item.p}</p>
    </div>
  `).join('');
  // Add Lite Labs website footer at the end
  const websiteFooter = `
    <div class="modal-footer-website">
      <div class="mfw-label">Developed by</div>
      <div class="mfw-brand">Lite Labs</div>
      <div class="mfw-tag">Boutique App Development Studio</div>
      <a href="https://litelabsg.github.io/" target="_blank" rel="noopener noreferrer" class="mfw-link">litelabsg.github.io</a>
    </div>
  `;
  body.innerHTML = sections + websiteFooter;
  initCounterTracking('disclaimerBody', 'disclaimerCounter', total);
  applyRevealEffect('disclaimerBody');
}

function renderTermsModal() {
  const body = $('#termsModalBody');
  if (!body) return;
  const html = TERMS[S.language] || TERMS.en;
  const NUMBERED_TOTAL = 30;
  // Split by <h4>...</h4> and rebuild as wrapped sections
  // Each section: <div class="hint-section"><h4>(N/30) title</h4><p>...</p></div>
  const sections = [];
  const parts = html.split(/<h4>/);
  // First chunk is anything before first h4 (probably empty)
  if (parts[0].trim()) sections.push(parts[0]);
  for (let i = 1; i < parts.length; i++) {
    const seg = parts[i];
    const closeIdx = seg.indexOf('</h4>');
    if (closeIdx < 0) continue;
    const titleRaw = seg.substring(0, closeIdx);
    const rest = seg.substring(closeIdx + 5);
    // Extract leading number "1. " from titleRaw if present
    const m = titleRaw.match(/^(\d+)\.\s*(.*)$/);
    const num = m ? m[1] : (i);
    const title = m ? m[2] : titleRaw;
    sections.push(
      `<div class="hint-section">` +
      `<h4 data-idx="${num}"><span class="ttl-text">${title}</span><span class="idx-badge">(${num}/${NUMBERED_TOTAL})</span></h4>` +
      rest +
      `</div>`
    );
  }
  // Lite Labs website footer
  const websiteFooter = `
    <div class="modal-footer-website">
      <div class="mfw-label">Developed by</div>
      <div class="mfw-brand">Lite Labs</div>
      <div class="mfw-tag">Boutique App Development Studio</div>
      <a href="https://litelabsg.github.io/" target="_blank" rel="noopener noreferrer" class="mfw-link">litelabsg.github.io</a>
    </div>
  `;
  body.innerHTML = sections.join('') + websiteFooter;
  initCounterTracking('termsModalBody', 'termsCounter', NUMBERED_TOTAL);
  applyRevealEffect('termsModalBody');
}

function renderAccountInfo() {
  const ai = $('#accountInfo');
  if (!ai) return;
  if (S.signedIn && S.playerName) {
    ai.textContent = t('signed_in_as', {name: S.playerName});
  } else {
    ai.textContent = t('signed_in_as', {name: '—'});
  }
}

function renderResetCard() {
  // reset day check
  if (S.resetDay !== todayKey()) {
    S.resetDay = todayKey();
    S.resetAds = 0;
  }
  const dotsContainer = document.getElementById('resetDots');
  if (!dotsContainer) return; // reset card has been removed
  const dots = $$('.reset-dots span', dotsContainer);
  dots.forEach((d, i) => d.classList.toggle('done', i < S.resetAds));
  const btn = $('#resetBtn');
  if (!btn) return;
  btn.classList.remove('ready');
  if (S.resetAds === 0) btn.textContent = t('reset_watch3');
  else if (S.resetAds === 1) btn.textContent = t('reset_watch2',{n:1});
  else if (S.resetAds === 2) btn.textContent = t('reset_watch1',{n:2});
  else { btn.textContent = t('reset_apply'); btn.classList.add('ready'); }
}

function renderAchievements() {
  const keys = Object.keys(ACHIEVEMENTS);
  // Sort by tier (1=basic → 8=mastery), so they appear "in an orderly way"
  keys.sort((a, b) => (ACHIEVEMENTS[a].tier || 0) - (ACHIEVEMENTS[b].tier || 0));
  let unlocked = 0;
  keys.forEach(k => { if (S.achievements[k]) unlocked++; });
  // Always-visible inline counter on the info button row
  const inline = document.getElementById('achCountInline');
  const total  = document.getElementById('achTotalInline');
  if (inline) inline.textContent = unlocked;
  if (total)  total.textContent  = keys.length;
  // Old #achCount may or may not exist — only update if present (legacy)
  const legacy = document.getElementById('achCount');
  if (legacy) legacy.textContent = unlocked + '/' + keys.length;
  // The grid lives inside the modal — only render when it's in the DOM
  const grid = document.getElementById('achGrid');
  if (!grid) return;
  grid.innerHTML = keys.map(k => {
    const a = ACHIEVEMENTS[k];
    const ok = !!S.achievements[k];
    const name = a.en;
    const desc = a.enD;
    return `<div class="ach-card ${ok?'unlocked':''}">
      <div class="ach-icon-wrap">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a.svg}</svg>
      </div>
      <div class="ttl">${name}</div>
      <div class="desc">${desc}</div>
    </div>`;
  }).join('');
}

function renderHints() {
  const arr = HINTS_DATA[S.language] || HINTS_DATA.en;
  const total = arr.length;
  $('#hintsBody').innerHTML = arr.map((h, i) => `
    <div class="hint-section" data-idx="${i+1}">
      <h4><span class="ttl-text">${h.t}</span><span class="idx-badge">(${i+1}/${total})</span></h4>
      ${h.p.map(p => `<p>${p}</p>`).join('')}
      ${h.tip ? `<div class="tip"><span class="tip-tag">${t('tip_label')}</span><span>${h.tip}</span></div>` : ''}
    </div>
  `).join('');
  initCounterTracking('hintsBody', 'hintsCounter', total);
  applyRevealEffect('hintsBody');
}

/* ============ NEWS RENDERERS ============ */
function _newsImpactClass(news) {
  // Determine display tone
  const codes = Object.values(news.impact || {});
  const hasUp = codes.some(c => c.includes('up'));
  const hasDown = codes.some(c => c.includes('down'));
  if (hasUp && hasDown) return 'mixed';
  if (hasUp) return 'up';
  if (hasDown) return 'down';
  return 'mixed';
}

function _formatNewsTime(ts) {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return 'now';
  if (diff < 3600) return Math.floor(diff/60) + 'm';
  if (diff < 86400) return Math.floor(diff/3600) + 'h';
  return Math.floor(diff/86400) + 'd';
}

function renderNewsFeed() {
  const list = document.getElementById('newsList');
  if (!list) return;
  const feed = (S.newsFeed || []).slice(0, 4);
  if (!feed.length) {
    list.innerHTML = `<div class="news-empty" data-i18n="news_empty">Awaiting market events…</div>`;
    return;
  }
  const now = Date.now();
  const simLabel  = (typeof t === 'function' ? t('virtual') : 'Virtual') || 'Virtual';
  list.innerHTML = feed.map(n => {
    const cls = _newsImpactClass(n);
    return `
      <div class="news-item ${cls}">
        <span class="ni-time">${_formatNewsTime(n.at)}</span>
        <div class="ni-text">${n.headline}</div>
        <span class="ni-sim-pill">${simLabel}</span>
      </div>
    `;
  }).join('');
}

function renderNewsModal() {
  const body = document.getElementById('newsModalBody');
  if (!body) return;
  const feed = S.newsFeed || [];
  if (!feed.length) {
    body.innerHTML = `<div class="news-empty" style="padding:40px 20px;font-size:13px;" data-i18n="news_empty">Awaiting market events…</div>`;
    return;
  }
  const now = Date.now();
  body.innerHTML = feed.map(n => {
    const cls = _newsImpactClass(n);
    const isLive = now < n.until;
    const tags = _impactTags(n);
    const explain = _newsExplain(n);
    return `
      <div class="news-card ${cls}">
        <div class="nc-head">
          <span>${_formatNewsTime(n.at)}${isLive ? ' · <span class="nc-live">LIVE</span> <span class="nc-virtual">VIRTUAL</span>' : ' · <span class="nc-virtual">VIRTUAL</span>'}</span>
          <span class="nc-impact-tag ${cls}">${cls.toUpperCase()}</span>
        </div>
        <div class="nc-headline">${n.headline}</div>
        <div class="nc-explain">${explain}</div>
        <div class="nc-impact-list">${tags}</div>
      </div>
    `;
  }).join('');
}

function _impactTags(news) {
  // Convert impact object to a list of small badges
  const tagOf = (label, dir) => `<span class="nc-impact-tag ${dir}">${label} ${dir === 'up' ? '↑' : dir === 'down' ? '↓' : '↔'}</span>`;
  const out = [];
  for (const [target, code] of Object.entries(news.impact || {})) {
    let label = target;
    let dir = 'mixed';
    if (code === 'up' || code.startsWith('up_')) dir = 'up';
    else if (code === 'down' || code.startsWith('down_')) dir = 'down';
    // Replaced real currency labels with commodity labels (Gold / Silver / Oil / Copper / Platinum)
    else if (code === 'usd_up')   { label = 'GOLD';     dir = 'up'; }
    else if (code === 'usd_down') { label = 'GOLD';     dir = 'down'; }
    else if (code === 'eur_up')   { label = 'SILVER';   dir = 'up'; }
    else if (code === 'jpy_up')   { label = 'PLATINUM'; dir = 'up'; }
    else if (code === 'cad_up')   { label = 'OIL';      dir = 'up'; }
    else if (code === 'cad_down') { label = 'OIL';      dir = 'down'; }
    if (code.includes('oil'))     label = 'OIL';
    if (code.includes('gold'))    label = 'GOLD';
    if (code.includes('tech'))    label = 'TECH';
    if (code.includes('finance')) label = 'BANKS';
    out.push(tagOf(label.toUpperCase(), dir));
  }
  return out.join('');
}

function _newsExplain(news) {
  const en = {
    cb_hawkish:        'Tighter policy strengthens precious metals and pressures riskier assets.',
    cb_dovish:         'Easier policy softens precious metals and lifts risk assets.',
    inflation_hot:     'Hotter inflation reinforces hawkish expectations — defensive flows into metals.',
    inflation_cool:    'Cooler inflation eases pressure on risk markets — risk-on tilt.',
    jobs_strong:       'A strong jobs print supports growth assets but tempers safe-haven demand.',
    jobs_weak:         'Weak jobs data raises slowdown fears — broad risk-off into metals.',
    rates_up:          'A rate hike lifts industrial commodities; equity indices may pull back.',
    fx_intervention:   'A market intervention causes sharp moves in precious-metal pricing.',
    energy_cut:        'A supply cut lifts oil and energy-linked categories.',
    energy_build:      'An inventory build pressures oil and energy markets.',
    metals_rally:      'Safe-haven flows into gold and silver tend to coincide with risk-off conditions.',
    crypto_inflow:     'Strong demand for digital-asset funds is bullish for the crypto category.',
    crypto_regulation: 'Regulatory uncertainty weighs on the crypto category.',
    crypto_upgrade:    'A successful network upgrade is broadly bullish for crypto.',
    tech_strong:       'Strong tech earnings lift the technology category and indices.',
    tech_weak:         'Weak tech earnings drag the technology category and indices.',
    finance_stress:    'Credit concerns weigh on the financial-services category.',
    macro_stimulus:    'Stimulus lifts global risk assets, oil, and precious metals.',
    geo_tensions:      'Geopolitical stress drives safe-haven flows into gold and oil; equities weaken.',
    trade_friction:    'Trade frictions weigh on equities; safe-haven metals often benefit.'
  };
  return en[news.key] || '';
}



/* ============ COUNTER TRACKING (no longer used — inline (idx/total) badges handle this) ============ */
function initCounterTracking() { /* deprecated — kept for backwards compatibility */ }

/* ============ SLIDE-IN OBSERVER for modal sections ============ */
let _scrollRevealObserver = null;
function _ensureRevealObserver() {
  if (_scrollRevealObserver) return _scrollRevealObserver;
  if (typeof IntersectionObserver === 'undefined') return null;
  _scrollRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in-view');
      }
      // Don't remove on exit — once visible, keep visible (smoother UX)
    });
  }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
  return _scrollRevealObserver;
}
function applyRevealEffect(containerId) {
  const obs = _ensureRevealObserver();
  if (!obs) {
    // Fallback — show all
    const cont = document.getElementById(containerId);
    if (cont) cont.querySelectorAll('.hint-section').forEach(s => s.classList.add('in-view'));
    return;
  }
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.querySelectorAll('.hint-section').forEach(s => {
    s.classList.remove('in-view');
    obs.observe(s);
  });
  // Show first ones immediately so the modal isn't blank on open
  const sections = cont.querySelectorAll('.hint-section');
  for (let i = 0; i < Math.min(3, sections.length); i++) {
    sections[i].classList.add('in-view');
  }
}

function renderAll() {
  renderTopBar();
  renderAssetHeader();
  updateLotInfo();
  updateTradeButtons();
  renderOpenPositions();
  renderHistory();
  renderRecord();
  renderRewards();
  renderResetCard();
  renderAchievements();
  if (typeof updateBankruptBanner === 'function') updateBankruptBanner();
  if (typeof renderPulse === 'function') renderPulse();
  if (typeof renderNewsFeed === 'function') renderNewsFeed();
  if (typeof renderNewsTicker === 'function') renderNewsTicker();
}

/* Build the scrolling live ticker showing fictional symbol prices.
 * Picks a curated subset of ASSETS with realistic prices and computes
 * a small synthetic % change per asset so users see "live" movement. */
function renderNewsTicker() {
  const list = document.getElementById('ntbList');
  if (!list) return;
  // Only re-render when assets/prices exist (after sim init)
  if (typeof ASSETS === 'undefined' || !ASSETS || !ASSETS.length) return;
  if (!S.prices) return;
  // Pick 14 representative assets across categories
  const picks = [];
  const cats = ['stock', 'crypto', 'fx', 'commodity', 'index'];
  cats.forEach(c => {
    const matches = ASSETS.filter(a => a.cat === c);
    matches.slice(0, 3).forEach(a => picks.push(a));
  });
  if (!picks.length) return;
  // Build ticker items HTML — render TWICE for seamless loop
  const buildItem = (a) => {
    const st = S.prices[a.sym];
    if (!st) return '';
    const base = a.basePrice || st.price;
    const chgPct = ((st.price - base) / base) * 100;
    const cls = chgPct > 0.005 ? 'up' : (chgPct < -0.005 ? 'dn' : 'flat');
    const arrow = cls === 'up' ? '▲' : (cls === 'dn' ? '▼' : '·');
    const decimals = a.decimals != null ? a.decimals : 2;
    const priceStr = st.price.toFixed(decimals);
    const chgStr = (chgPct >= 0 ? '+' : '') + chgPct.toFixed(2) + '%';
    return `<span class="ntb-item">
      <span class="nt-sym">${a.sym}</span>
      <span class="nt-price">${priceStr}</span>
      <span class="nt-chg ${cls}">${arrow} ${chgStr}</span>
    </span>`;
  };
  const items = picks.map(buildItem).join('');
  // Duplicate the items for seamless infinite scroll
  list.innerHTML = items + items;
}

/* ============ EVENTS ============ */
/* Toggle body.has-modal-open whenever any .modal-bg.open exists.
 * Used to blur background panels (news, etc.) while a modal is up. */
function _refreshModalOpenState() {
  const anyOpen = !!document.querySelector('.modal-bg.open');
  document.body.classList.toggle('has-modal-open', anyOpen);
}
function _initModalOpenWatcher() {
  if (typeof MutationObserver === 'undefined') return;
  const obs = new MutationObserver(_refreshModalOpenState);
  document.querySelectorAll('.modal-bg').forEach(m => {
    obs.observe(m, { attributes: true, attributeFilter: ['class'] });
  });
  _refreshModalOpenState();
}

function bindEvents() {
  // Tabs
  $$('#tabs .tab').forEach(b => {
    b.addEventListener('click', () => {
      $$('#tabs .tab').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      S.category = b.dataset.cat;
      saveSoon(); renderAssetList();
    });
  });

  // Search
  $('#searchInput').addEventListener('input', e => {
    S.search = e.target.value.trim();
    renderAssetList();
  });

  // Timeframes
  $$('#tfGroup .tf').forEach(b => {
    b.addEventListener('click', () => {
      $$('#tfGroup .tf').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      S.timeframe = b.dataset.tf;
      vibrate(8);
      saveSoon(); drawChart();
    });
  });

  // Indicator toggles — MA / BOLL / VOL / RSI
  const _bindIndicator = (btnId, key) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.classList.toggle('on', !!S[key]);
    btn.addEventListener('click', () => {
      S[key] = !S[key];
      btn.classList.toggle('on', S[key]);
      saveSoon(); drawChart();
    });
  };
  _bindIndicator('toggleMA',   'showMA');
  _bindIndicator('toggleBOLL', 'showBOLL');
  _bindIndicator('toggleVol',  'showVol');
  _bindIndicator('toggleRSI',  'showRSI');

  // Lot stepper
  const lotInput = $('#lotInput');
  lotInput.value = S.lot.toFixed(2);
  lotInput.addEventListener('input', () => {
    let v = parseFloat(lotInput.value);
    if (isNaN(v)) return;
    v = clamp(v, 0.01, 50);
    S.lot = v;
    saveSoon(); updateLotInfo();
  });
  function holdRepeat(btn, fn) {
    let timer = null, hold = null;
    const start = e => {
      e.preventDefault();
      fn();
      hold = setTimeout(() => {
        timer = setInterval(fn, 120);
      }, 350);
    };
    const stop = () => { clearTimeout(hold); clearInterval(timer); };
    btn.addEventListener('touchstart', start, {passive:false});
    btn.addEventListener('touchend', stop);
    btn.addEventListener('mousedown', start);
    btn.addEventListener('mouseup', stop);
    btn.addEventListener('mouseleave', stop);
  }
  holdRepeat($('#lotMinus'), () => {
    S.lot = Math.max(0.01, +(S.lot - 0.01).toFixed(2));
    lotInput.value = S.lot.toFixed(2);
    saveSoon(); updateLotInfo();
    vibrate(5);
  });
  holdRepeat($('#lotPlus'), () => {
    S.lot = Math.min(50, +(S.lot + 0.01).toFixed(2));
    lotInput.value = S.lot.toFixed(2);
    saveSoon(); updateLotInfo();
    vibrate(5);
  });

  // Lot presets
  $$('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const v = parseFloat(btn.dataset.lot);
      if (isNaN(v)) return;
      S.lot = v;
      lotInput.value = v.toFixed(2);
      saveSoon(); updateLotInfo();
      vibrate(8);
      $$('.preset-btn').forEach(b => b.classList.toggle('sel', parseFloat(b.dataset.lot) === v));
    });
  });

  // Risk Calculator
  function recalcRisk() {
    const pct = parseFloat($('#rcPct').value) || 0;
    const slPts = parseFloat($('#rcSL').value) || 0;
    const result = $('#rcResult');
    const apply = $('#rcApply');
    if (!result || !apply) return null;
    if (pct <= 0 || slPts <= 0 || S.balance <= 0) {
      result.textContent = '—';
      apply.disabled = true;
      return null;
    }
    // Risk amount = balance * (pct/100)
    // Pip value per lot ≈ $10 for forex (assumption); for our virtual we approximate pipValue = 10 USD per 1.00 lot per pip-equivalent point
    // suggested lot = riskAmount / (slPts * pipValuePerLotPerPoint)
    // We approximate pipValuePerLotPerPoint = $1 per 1.00 lot per point (conservative for sandbox)
    const riskAmount = S.balance * (pct / 100);
    const PIP_VAL_PER_LOT = 1.0;
    let suggestedLot = riskAmount / (slPts * PIP_VAL_PER_LOT);
    suggestedLot = Math.max(0.01, Math.min(50, +suggestedLot.toFixed(2)));
    result.textContent = suggestedLot.toFixed(2);
    apply.disabled = false;
    return suggestedLot;
  }
  const rcPct = $('#rcPct');
  const rcSL = $('#rcSL');
  const rcApply = $('#rcApply');
  if (rcPct && rcSL && rcApply) {
    rcPct.addEventListener('input', recalcRisk);
    rcSL.addEventListener('input', recalcRisk);

    let _rcLastClickTime = 0;
    let _rcRapidClicks = 0;
    let _rcToastSuppressUntil = 0;
    rcApply.addEventListener('click', () => {
      const v = recalcRisk();
      if (v == null) return;
      const now = Date.now();
      const sinceLast = now - _rcLastClickTime;
      _rcLastClickTime = now;

      // Apply silently every time
      S.lot = v;
      lotInput.value = v.toFixed(2);
      saveSoon();
      updateLotInfo();
      $$('.preset-btn').forEach(b => b.classList.toggle('sel', parseFloat(b.dataset.lot) === v));
      vibrate(15);

      // Track rapid consecutive clicks (within 1.2s of each other)
      if (sinceLast < 1200) {
        _rcRapidClicks++;
      } else {
        _rcRapidClicks = 1;
      }

      if (_rcRapidClicks >= 4) {
        // Show calming warning ONCE then suppress for 6 seconds
        if (now > _rcToastSuppressUntil) {
          toast(t('slow_down'), 'warning', 4500);
          _rcToastSuppressUntil = now + 6000;
        }
      } else if (sinceLast > 1500 || _rcRapidClicks === 1) {
        // Show normal confirm only on the first click in a sequence
        if (now > _rcToastSuppressUntil) {
          toast('✓ ' + v.toFixed(2), 'success', 1600);
          _rcToastSuppressUntil = now + 1500;
        }
      }
    });
    recalcRisk(); // initial calc
  }

  // Advanced toggle
  $('#advToggle').addEventListener('click', () => {
    $('#advToggle').classList.toggle('open');
    $('#advFields').classList.toggle('open');
  });

  // Buy / Sell
  $('#buyBtn').addEventListener('click', () => tryOpenPosition('BUY'));
  $('#sellBtn').addEventListener('click', () => tryOpenPosition('SELL'));

  // Bonus button — only works AFTER user completes a trade
  // - If last trade was a loss: recover 50% of that loss
  // - If last trade was a win: boost it by 15%
  // Bonus button has been replaced by Mystery Box — keep null-safe in case present
  const _bonusBtn = document.getElementById('bonusBtn');
  if (_bonusBtn) {
    _bonusBtn.addEventListener('click', () => {
      // No-ads build: instant bonus
      const boost = Math.round((Math.random() * 30 + 5) * 100) / 100;
      S.balance += boost;
      toast(t('bonus_claimed', {amt: boost.toFixed(2)}), 'success');
      beep(1000, 0.15);
      saveSoon(); renderAll();
    });
  }

  // Reset
  const resetBtnEl = document.getElementById('resetBtn');
  if (resetBtnEl) {
    resetBtnEl.addEventListener('click', () => {
      // No-ads build: skip the 3-ads gate, go straight to confirm
      confirmDialog(t('reset_confirm_title'), t('reset_confirm_text'), () => {
        const recovered = S.initialDeposit * 0.15;
        S.balance += recovered;
        S.resetAds = 0;
        S.resetDay = '';
        toast('+ ' + fmtMoney(recovered) + ' recovered', 'success');
        saveSoon(); renderAll();
      });
    });
  }

  // Info buttons (Hints, FAQ, Terms, Disclaimer)
  function resetModalScroll(bodyId) {
    const body = document.getElementById(bodyId);
    if (body) body.scrollTop = 0;
  }
  $('#btnHints').addEventListener('click', () => {
    renderHints();
    $('#hintsModal').classList.add('open');
    requestAnimationFrame(() => resetModalScroll('hintsBody'));
    if (typeof bumpChallenge === 'function') bumpChallenge('open_lesson');
  });
  $('#btnFaq').addEventListener('click', () => {
    renderFaq();
    $('#faqModal').classList.add('open');
    requestAnimationFrame(() => resetModalScroll('faqBody'));
  });
  $('#btnTerms').addEventListener('click', () => {
    renderTermsModal();
    $('#termsModal').classList.add('open');
    requestAnimationFrame(() => resetModalScroll('termsModalBody'));
  });
  $('#btnDisclaimer').addEventListener('click', () => {
    renderDisclaimer();
    $('#disclaimerModal').classList.add('open');
    requestAnimationFrame(() => resetModalScroll('disclaimerBody'));
  });
  // Achievements modal — follows same pattern as FAQ/Hints
  const btnAch = document.getElementById('btnAchievements');
  if (btnAch) {
    btnAch.addEventListener('click', () => {
      renderAchievements();
      $('#achievementsModal').classList.add('open');
    });
  }
  // News "View All" button
  const btnNewsMore = document.getElementById('btnNewsMore');
  if (btnNewsMore) {
    btnNewsMore.addEventListener('click', () => {
      renderNewsModal();
      $('#newsModal').classList.add('open');
      requestAnimationFrame(() => resetModalScroll('newsModalBody'));
      if (typeof bumpChallenge === 'function') bumpChallenge('open_news');
    });
  }

  // New news toggle button (replaces always-visible news list)
  const newsToggleBtn = document.getElementById('newsToggleBtn');
  if (newsToggleBtn) {
    newsToggleBtn.addEventListener('click', () => {
      renderNewsModal();
      $('#newsModal').classList.add('open');
      requestAnimationFrame(() => resetModalScroll('newsModalBody'));
      // Clear unread indicator
      const dot = document.getElementById('newsUnreadDot');
      if (dot) dot.classList.remove('show');
      S.newsUnreadCount = 0;
      saveSoon();
      if (typeof bumpChallenge === 'function') bumpChallenge('open_news');
    });
  }

  // Settings
  $('#settingsBtn').addEventListener('click', () => {
    renderLangPicker();
    renderThemePicker();
    renderAccountInfo();
    $('#settingsModal').classList.add('open');
    gaPageView('settings');
  });

  // Theme picker — bind via delegation since cards exist in DOM at load
  const tpEl = document.getElementById('themePicker');
  if (tpEl) {
    tpEl.addEventListener('click', e => {
      const card = e.target.closest('.theme-card');
      if (!card) return;
      applyTheme(card.dataset.theme);
      vibrate(20);
    });
  }

  // Mood cell — locked by default. Unlocks for 120s, once every 2 hours.
  const moodCell = document.getElementById('moodCell');
  if (moodCell) {
    moodCell.addEventListener('click', () => {
      if (isMoodUnlocked()) return; // already unlocked, do nothing
      vibrate(15);
      // 2-hour cooldown — politely inform the user if still locked
      const cdRem = moodCooldownRemaining();
      if (cdRem > 0) {
        const mins = Math.ceil(cdRem / 60000);
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        const label = h > 0 ? (h + 'h ' + m + 'm') : (m + 'm');
        if (typeof toast === 'function') toast('Available again in ' + label, 'info', 2500);
        return;
      }
      const ok = unlockMoodForOneMinute();
      if (!ok) return;
      renderMarketMood();
      beep(900, 0.12);
      vibrate(30);
    });
  }
  // Mystery Box bindings
  if (typeof bindMysteryBox === 'function') bindMysteryBox();

  // Daily Challenge cell click → open modal
  const dcCell = document.getElementById('dailyChallengeCell');
  if (dcCell) {
    dcCell.addEventListener('click', () => {
      renderChallengeModal();
      $('#challengeModal').classList.add('open');
      vibrate(10);
    });
  }

  // Close modals
  $$('[data-close]').forEach(b => {
    b.addEventListener('click', () => {
      $$('.modal-bg').forEach(m => {
        if (!m.id.includes('ad') && !m.id.includes('confirm')) m.classList.remove('open');
      });
    });
  });
  // tap on backdrop to close (not ad / confirm)
  $$('.modal-bg').forEach(m => {
    if (m.id === 'confirmBg') return;
    m.addEventListener('click', e => {
      if (e.target === m) m.classList.remove('open');
    });
  });

  // Sound / Haptics switches
  function bindSwitch(el, key) {
    el.addEventListener('click', () => {
      S[key] = !S[key];
      el.classList.toggle('on', S[key]);
      saveSoon();
    });
  }
  const ssw = $('#soundSwitch');
  ssw.classList.toggle('on', S.sound);
  bindSwitch(ssw, 'sound');
  const hsw = $('#hapticsSwitch');
  hsw.classList.toggle('on', S.haptics);
  bindSwitch(hsw, 'haptics');

  // Replay tutorial button
  const replayBtn = document.getElementById('replayTutorialBtn');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      // Close settings modal first
      const sm = document.getElementById('settingsModal');
      if (sm) sm.classList.remove('open');
      // Reset done flag and start
      S.tutorialDone = false;
      saveSoon();
      setTimeout(startTutorial, 300);
    });
  }

  // Reset App — clear all stored data and reload to first-launch state
  const resetAppBtn = document.getElementById('resetAppBtn');
  if (resetAppBtn) {
    resetAppBtn.addEventListener('click', () => {
      confirmDialog(
        t('reset_app_confirm_title') || 'Reset Everything?',
        t('reset_app_confirm_text') || 'This will erase all your progress, settings, and saved data. The app will restart from the very first screen. This cannot be undone.',
        async () => {
          // STEP 1: Show overlay IMMEDIATELY so user sees something is happening
          showResetOverlay();
          // STEP 2: Wipe local storage (synchronous, fast)
          try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
          try { localStorage.clear(); } catch (e) {}
          try { sessionStorage.clear(); } catch (e) {}
          // STEP 3: Wipe IndexedDB if any (PWA storage)
          try {
            if (window.indexedDB && indexedDB.databases) {
              const dbs = await indexedDB.databases();
              for (const db of dbs) { try { indexedDB.deleteDatabase(db.name); } catch (e) {} }
            }
          } catch (e) {}
          // STEP 4: Clear ALL Cache Storage (PWA service worker caches)
          try {
            if (window.caches && caches.keys) {
              const keys = await caches.keys();
              await Promise.all(keys.map(k => caches.delete(k)));
            }
          } catch (e) {}
          // STEP 5: Unregister ALL service workers
          try {
            if ('serviceWorker' in navigator) {
              const regs = await navigator.serviceWorker.getRegistrations();
              await Promise.all(regs.map(r => r.unregister()));
            }
          } catch (e) {}
          // STEP 6: Force reload with cache-busting query string
          // Use a small delay so the overlay is visible
          setTimeout(() => {
            const url = location.pathname + '?reset=' + Date.now() + '#cleared';
            // Use location.href = ... which is the most reliable across all browsers
            location.href = url;
            // Belt-and-braces backup
            setTimeout(() => { try { location.reload(); } catch (e) {} }, 300);
          }, 1500);
        }
      );
    });
  }

/* Full-screen overlay shown during reset — uses splash logo */
function showResetOverlay() {
  // Avoid duplicate overlays
  if (document.getElementById('resetOverlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'resetOverlay';
  overlay.innerHTML = `
    <div class="reset-overlay-card">
      <div class="reset-overlay-logo">
        <img src="logo-large.png" alt="VTS" width="120" height="120">
      </div>
      <div class="reset-overlay-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 12a9 9 0 1 0 9-9"/>
          <path d="M3 4v5h5"/>
        </svg>
      </div>
      <div class="reset-overlay-title">Restarting…</div>
      <div class="reset-overlay-sub">Wiping all data and starting fresh</div>
      <div class="reset-overlay-loader"></div>
    </div>
  `;
  document.body.appendChild(overlay);
}

  // Sign out — button removed in no-Google build. Keep handler null-safe.
  const signOutBtn = $('#signOutBtn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      // Legacy handler — not exercised in this build
      toast('Sign-out is not available in this build', 'info', 2500);
    });
  }
}

/* ============ ONBOARDING ============ */
function bindOnboarding() {
  const op = (n) => $('#op'+n);
  function gotoStep(n) {
    $$('.onb-step').forEach(s => s.classList.remove('active'));
    $(`.onb-step[data-step="${n}"]`).classList.add('active');
    // progress dots: only show for steps 1-3, mark all active when step 4
    [1,2,3].forEach(i => op(i) && op(i).classList.toggle('done', i <= Math.min(n, 3)));
  }
  gotoStep(1);
  // step 1
  $('#onbStart1').addEventListener('click', () => gotoStep(2));
  // Filter DOB input to digits only and max 4 chars
  const dobInput = $('#dobYear');
  if (dobInput) {
    dobInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/[^0-9]/g, '');
      if (v.length > 4) v = v.slice(0, 4);
      e.target.value = v;
    });
    dobInput.addEventListener('keydown', (e) => {
      // Allow: backspace, delete, tab, escape, enter, arrows
      if ([8, 9, 13, 27, 37, 38, 39, 40, 46].includes(e.keyCode)) return;
      // Block non-digits and prevent typing beyond 4 chars
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        return;
      }
      if (e.target.value.length >= 4) {
        e.preventDefault();
      }
    });
  }
  // step 2 (year-only)
  $('#onbNext2').addEventListener('click', () => {
    const raw = $('#dobYear').value.trim();
    const y = parseInt(raw, 10);
    const errEl = $('#dobError');
    if (!raw || isNaN(y) || y < 1920 || y > 2010) {
      errEl.textContent = t('age_invalid');
      return;
    }
    const currentYear = new Date().getFullYear();
    const age = currentYear - y;
    if (age < 18) {
      errEl.textContent = t('age_too_young');
      return;
    }
    errEl.textContent = '';
    S.age18 = true;
    saveSoon();
    gotoStep(3);
  });
  // step 3: Terms
  $('#onbDecline').addEventListener('click', () => gotoStep(6));
  $('#onbAgree').addEventListener('click', () => {
    if ($('#onbAgree').disabled) return;
    S.agreed = true;
    saveSoon();
    gotoStep(4); // → Disclaimer
  });
  // Disable Agree until user scrolls to the bottom of terms
  const tBox = $('#termsBox');
  const tHint = $('#termsScrollHint');
  const tAgree = $('#onbAgree');
  if (tBox && tAgree) {
    const checkScrollEnd = () => {
      const reachedEnd = (tBox.scrollHeight - tBox.scrollTop - tBox.clientHeight) < 8;
      const notScrollable = tBox.scrollHeight <= tBox.clientHeight + 4;
      if (reachedEnd || notScrollable) {
        tAgree.disabled = false;
        tBox.classList.add('scrolled-bottom');
        if (tHint) tHint.classList.add('done');
      }
    };
    tBox.addEventListener('scroll', checkScrollEnd, { passive: true });
    setTimeout(checkScrollEnd, 200);
    setTimeout(checkScrollEnd, 800);
  }
  // step 4: Disclaimer → About
  const onbDisclaimerNext = $('#onbDisclaimerNext');
  if (onbDisclaimerNext) {
    onbDisclaimerNext.addEventListener('click', () => gotoStep(5));
  }
  // step 5: About → Main app
  const onbAboutNext = $('#onbAboutNext');
  if (onbAboutNext) {
    onbAboutNext.addEventListener('click', () => {
      S.signedIn = true;
      if (!S.playerName) S.playerName = 'Trader';
      saveSoon();
      $('#onboarding').classList.remove('active');
      $('#shell').classList.add('active');
      initApp();
    });
  }
  // step 6 (decline confirmation)
  const declineBack = $('#onbDeclineBack');
  if (declineBack) {
    declineBack.addEventListener('click', () => gotoStep(3));
  }
}

/* ============ LANGUAGE SELECT (FIRST LAUNCH) ============ */
function bindLangSelect() {
  const grid = $('#langGrid');
  if (!grid) return;
  let chosen = null;
  grid.innerHTML = LANGUAGES.map(l => `
    <div class="ls-card" data-lang="${l.code}" dir="${l.rtl?'rtl':'ltr'}">
      <span class="nm">
        <span class="native">${l.native}</span>
        <span class="en">${l.en}</span>
      </span>
    </div>
  `).join('');
  $$('.ls-card', grid).forEach(c => {
    c.addEventListener('click', () => {
      $$('.ls-card', grid).forEach(x => x.classList.remove('sel'));
      c.classList.add('sel');
      chosen = c.dataset.lang;
      $('#langContinue').disabled = false;
      // Live-preview the selected language on the screen
      setLanguage(chosen);
      // re-translate static texts on this screen
      $('.ls-title').textContent = t('ls_title');
      $('#langContinue').textContent = t('ls_continue');
      vibrate(15);
    });
  });
  $('#langContinue').addEventListener('click', () => {
    if (!chosen) return;
    setLanguage(chosen);
    S.langSelected = true;
    saveState();
    $('#langSelect').classList.remove('active');
    // proceed to sign-in screen
    $('#signIn').classList.add('active');
    bindSignIn();
  });
}

/* ============ LOCAL STORAGE SETUP (replaces Google Sign-In) ============ */
let _signInBound = false;
function bindSignIn() {
  if (_signInBound) return;
  _signInBound = true;
  const btn = $('#googleSignInBtn');
  const status = $('#siStatus');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (btn.classList.contains('loading')) return;
    btn.classList.add('loading');
    if (status) {
      status.classList.remove('error', 'success');
      status.textContent = t('si_signing');
    }
    // Try Android bridge first (production)
    try {
      if (window.SandboxBridge && typeof window.SandboxBridge.signInWithGooglePlay === 'function') {
        window.SandboxBridge.signInWithGooglePlay();
        return; // Java will call onGooglePlaySignedIn() or onGooglePlaySignInFailed()
      }
    } catch (e) { /* fall through to fallback */ }
    // Browser fallback (for testing) — simulate after 1.2s with anonymous ID
    setTimeout(() => {
      if (!S.localPlayerId) {
        S.localPlayerId = 'p_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      }
      window.onGooglePlaySignedIn(S.playerName || 'Trader');
    }, 1200);
  });
}

// Global callbacks invoked by the Android wrapper after sign-in attempt
window.onGooglePlaySignedIn = function(displayName) {
  const status = $('#siStatus');
  const btn = $('#googleSignInBtn');
  S.signedIn = true;
  S.playerName = (displayName || 'Player').toString().slice(0, 32);
  saveState();
  if (status) {
    status.classList.remove('error');
    status.classList.add('success');
    status.textContent = t('si_success', {name: S.playerName});
  }
  if (btn) btn.classList.remove('loading');
  // proceed: hide sign-in, show onboarding (or main if already agreed/age18)
  setTimeout(() => {
    $('#signIn').classList.remove('active');
    if (S.agreed && S.age18) {
      $('#shell').classList.add('active');
      initApp();
    } else {
      $('#onboarding').classList.add('active');
      bindOnboarding();
    }
  }, 700);
};

window.onGooglePlaySignInFailed = function(err) {
  const status = $('#siStatus');
  const btn = $('#googleSignInBtn');
  if (status) {
    status.classList.remove('success');
    status.classList.add('error');
    status.textContent = t('si_failed') + (err ? ' (' + err + ')' : '');
  }
  if (btn) btn.classList.remove('loading');
};

/* ============ INIT ============ */
/* ============================================================
 * HELP-ICON SYSTEM
 * Provides educational explanations for trading concepts via
 * small (?) icons that the user can tap to learn more.
 * ============================================================ */
const HELP_TOPICS = {
  balance: {
    en: { title: 'Virtual Balance', text: 'Your balance is virtual money you can use to practice trading. There is no real money involved — this is a sandbox virtual. You can never lose actual funds here.' },},
  pnl: {
    en: { title: 'P&L (Profit & Loss)', text: 'P&L stands for Profit and Loss. It shows how much virtual money you have made (green) or lost (red) on your open and closed positions.' },},
  win_rate: {
    en: { title: 'Win Rate', text: 'Win Rate is the percentage of your trades that ended in profit. For example, if you make 10 trades and 7 are profitable, your win rate is 70%. A higher win rate is generally better, but not the only metric.' },},
  lot_size: {
    en: { title: 'Lot Size', text: 'A lot is the trading volume — how much of an asset you buy or sell. A standard lot is 100,000 units. 0.01 lot = 1,000 units (a "micro lot"). Bigger lots = bigger profits or bigger losses.' },},
  tp_sl: {
    en: { title: 'TP / SL (Take Profit / Stop Loss)', text: 'TP (Take Profit) closes your trade automatically when it reaches a profit target. SL (Stop Loss) closes it automatically if it loses too much. They protect your account and lock in gains without needing to watch the chart.' },},
  spread: {
    en: { title: 'Spread', text: 'The spread is the small difference between the buy price (ask) and sell price (bid) of an asset. It is the cost of opening a trade. Tighter spreads (smaller difference) are better for traders.' },},
  market_mood: {
    en: { title: 'Market Mood', text: 'The market mood is a virtual overall sentiment of the market: Bullish (rising prices expected), Bearish (falling prices expected), or Neutral. In real trading, sentiment is measured from many indicators. Here it is for educational purposes only.' },},
  streak: {
    en: { title: 'Daily Streak', text: 'Your streak counts how many days in a row you have used the app. Keep coming back daily to grow your streak — it is a fun way to build a consistent learning habit.' },},
  news: {
    en: { title: 'Market News', text: 'Virtual news events that affect the virtual market prices, just like real markets react to economic news. Tap an event to see how it impacts the chart. All news is fictional and for educational purposes.' },},
  mystery_box: {
    en: { title: 'Mystery Box', text: 'A reward chest that unlocks every 2 hours. Pick a card to reveal one of three random rewards: a 2% boost, an 18% boost on your next trade, or $30 virtual cash. There is also an optional bonus from watching an ad.' },},
  daily_challenges: {
    en: { title: 'Daily Challenges', text: 'Four challenges that refresh every 24 hours. Complete any of them (like opening 3 trades, switching themes, or reading a lesson) to earn a virtual $50 reward each. Cards renew automatically.' },},
  flip_game: {
    en: { title: 'Hourly Card Flip', text: 'Every hour, a card-flip mini-game appears. Choose one of four mystery cards to win a small virtual reward ($4-$25). It is just for fun and engagement.' },},
  lot_presets: {
    en: { title: 'Quick Lot Sizes', text: 'These are preset lot sizes (trading volume). Tap any number to quickly set your trade size:\n\n• 0.01 = Micro lot (1,000 units) — smallest risk, best for learning\n• 0.10 = Mini lot (10,000 units) — small risk\n• 0.50 = Half standard lot (50,000 units) — moderate risk\n• 1.00 = Standard lot (100,000 units) — high risk\n• 5.00 = Five standard lots — very high risk\n\nLarger lots = bigger profits if right, bigger losses if wrong. Start small while learning.' },},
  risk_calc: {
    en: { title: 'Risk Calculator', text: 'The Risk Calculator helps you find a safe lot size based on:\n\n• Risk % — how much of your balance you are willing to lose on this trade (1-2% is typical)\n• Stop Loss (points) — how far the price can move against you before the trade auto-closes\n\nThe calculator then suggests the exact lot size that keeps your loss within your chosen risk.\n\nProfessional traders use this to keep losses controlled and avoid blowing up their account on a single bad trade.' },},
  advanced_options: {
    en: { title: 'Advanced Options (TP / SL)', text: 'Take Profit (TP) and Stop Loss (SL) are price levels where your trade auto-closes:\n\n• TP — locks in profit when price reaches your target\n• SL — limits loss when price moves against you\n\nFor a BUY:\n  • TP is above entry, SL is below entry\nFor a SELL:\n  • TP is below entry, SL is above entry\n\nUsing TP/SL is one of the most important habits in trading. Pros never trade without them.' },}
};

function showHelpPopup(topic) {
  const overlay = document.getElementById('helpPopupOverlay');
  const titleEl = document.getElementById('helpPopupTitle');
  const textEl  = document.getElementById('helpPopupText');
  const closeBtn = document.getElementById('helpPopupClose');
  if (!overlay || !titleEl || !textEl) return;
  const lang = (S && S.language) || 'en';
  const data = (HELP_TOPICS[topic] && (HELP_TOPICS[topic][lang] || HELP_TOPICS[topic].en)) || null;
  if (!data) return;
  titleEl.textContent = data.title;
  textEl.textContent  = data.text;
  if (closeBtn) closeBtn.textContent = (typeof t === 'function' ? t('help_got_it') : 'Got it') || 'Got it';
  overlay.classList.add('show');
}
function hideHelpPopup() {
  const overlay = document.getElementById('helpPopupOverlay');
  if (overlay) overlay.classList.remove('show');
}

/* Bind help-icon clicks. Uses CAPTURE phase so it runs BEFORE parent button
 * handlers (e.g., the news toggle button) and prevents them from firing. */
function _bindHelpIcons() {
  // Use capture-phase listener so we run BEFORE any bubbling parent handlers
  document.body.addEventListener('click', (e) => {
    const ic = e.target.closest && e.target.closest('.help-icon');
    if (ic) {
      e.stopPropagation();
      e.preventDefault();
      const topic = ic.dataset.help;
      if (topic) showHelpPopup(topic);
      return;
    }
  }, true); // <-- capture phase

  // Close handler — separate listener for the popup
  const overlay = document.getElementById('helpPopupOverlay');
  const closeBtn = document.getElementById('helpPopupClose');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      // Click on the dark backdrop (not the card) closes
      if (e.target === overlay) hideHelpPopup();
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideHelpPopup();
    });
  }
}


/* ============================================================
 * TUTORIAL SYSTEM
 * Highlights key UI elements with tooltips, auto-starts on first
 * shell session and can be re-launched from Settings.
 * ============================================================ */
const TUTORIAL_STEPS = [
  { sel: '.brand', titleKey: 'tut_brand_t', textKey: 'tut_brand_b' },
  { sel: '.balance-pill', titleKey: 'tut_balance_t', textKey: 'tut_balance_b' },
  { sel: '.compliance', titleKey: 'tut_compliance_t', textKey: 'tut_compliance_b' },
  { sel: '#quickStats, .quickstats', titleKey: 'tut_qs_t', textKey: 'tut_qs_b' },
  { sel: '.search-box', titleKey: 'tut_search_t', textKey: 'tut_search_b' },
  { sel: '#tabs, .tabs', titleKey: 'tut_cats_t', textKey: 'tut_cats_b' },
  { sel: '#assetsList, .assets-list', titleKey: 'tut_assets_t', textKey: 'tut_assets_b' },
  { sel: '.chart-wrap', titleKey: 'tut_chart_t', textKey: 'tut_chart_b' },
  { sel: '#mysteryBox, .mystery-box-card', titleKey: 'tut_mb_t', textKey: 'tut_mb_b' },
  { sel: '.pulse-panel', titleKey: 'tut_pulse_t', textKey: 'tut_pulse_b' },
  { sel: '#dailyChallengeCell', titleKey: 'tut_dc_t', textKey: 'tut_dc_b' },
  { sel: '.mood-cell, .pulse-cell.mood-cell', titleKey: 'tut_mood_t', textKey: 'tut_mood_b' },
  { sel: '.flip-game', titleKey: 'tut_flip_t', textKey: 'tut_flip_b' },
  { sel: '.trade-panel', titleKey: 'tut_trade_t', textKey: 'tut_trade_b' },
  { sel: '#newsToggleBtn, #newsPanel', titleKey: 'tut_news_t', textKey: 'tut_news_b' },
  { sel: '.info-buttons', titleKey: 'tut_info_t', textKey: 'tut_info_b' },
  { sel: '#settingsBtn', titleKey: 'tut_settings_t', textKey: 'tut_settings_b' }
];

let _tutIdx = 0;
let _tutHighlightEl = null;

function startTutorial() {
  _tutIdx = 0;
  const overlay = document.getElementById('tutorialOverlay');
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.classList.add('tutorial-active');
  _tutShowStep(0);
  // Bind buttons (idempotent — replace handlers)
  const skip = document.getElementById('ttSkip');
  const prev = document.getElementById('ttPrev');
  const next = document.getElementById('ttNext');
  if (skip) skip.onclick = endTutorial;
  if (prev) prev.onclick = () => _tutShowStep(_tutIdx - 1);
  if (next) next.onclick = () => {
    if (_tutIdx >= TUTORIAL_STEPS.length - 1) {
      endTutorial();
    } else {
      _tutShowStep(_tutIdx + 1);
    }
  };
}

function endTutorial() {
  const overlay = document.getElementById('tutorialOverlay');
  if (overlay) overlay.classList.remove('active');
  document.body.classList.remove('tutorial-active');
  if (_tutHighlightEl && _tutHighlightEl.parentNode) {
    _tutHighlightEl.parentNode.removeChild(_tutHighlightEl);
    _tutHighlightEl = null;
  }
  // Reset tooltip state for next launch
  const tip = document.getElementById('tutorialTooltip');
  if (tip) {
    tip.classList.remove('tt-at-top');
    tip.style.cssText = '';
  }
  S.tutorialDone = true;
  saveSoon();
}

function _isElementVisible(el) {
  if (!el) return false;
  if (el.offsetParent === null && getComputedStyle(el).position !== 'fixed') return false;
  const rect = el.getBoundingClientRect();
  if (rect.width < 5 || rect.height < 5) return false;
  return true;
}

function _tutShowStep(i) {
  if (i < 0) i = 0;
  if (i >= TUTORIAL_STEPS.length) { endTutorial(); return; }
  _tutIdx = i;

  // Skip forward through any missing/invisible steps until we find one that's renderable
  // (avoids the tutorial getting stuck if a target isn't in the DOM yet)
  let scanIdx = i;
  let target = null;
  while (scanIdx < TUTORIAL_STEPS.length) {
    const step = TUTORIAL_STEPS[scanIdx];
    let candidate = null;
    try { candidate = document.querySelector(step.sel); } catch (e) { candidate = null; }
    if (candidate && _isElementVisible(candidate)) {
      target = candidate;
      break;
    }
    scanIdx++;
  }
  if (scanIdx >= TUTORIAL_STEPS.length) { endTutorial(); return; }
  _tutIdx = scanIdx;
  const step = TUTORIAL_STEPS[scanIdx];

  const tip = document.getElementById('tutorialTooltip');
  if (!tip) return;
  const numEl   = document.getElementById('ttNum');
  const totalEl = document.getElementById('ttTotal');
  const titleEl = document.getElementById('ttTitle');
  const textEl  = document.getElementById('ttText');
  const prevBtn = document.getElementById('ttPrev');
  const nextBtn = document.getElementById('ttNext');
  if (numEl)   numEl.textContent   = (scanIdx + 1);
  if (totalEl) totalEl.textContent = '/ ' + TUTORIAL_STEPS.length;
  if (titleEl) titleEl.textContent = t(step.titleKey) || step.titleKey;
  if (textEl)  textEl.textContent  = t(step.textKey)  || step.textKey;
  if (prevBtn) prevBtn.disabled = (scanIdx === 0);
  if (nextBtn) nextBtn.textContent = (scanIdx === TUTORIAL_STEPS.length - 1)
    ? (t('tut_finish') || 'Finish')
    : (t('tut_next') || 'Next');

  // Hide tooltip during scroll to prevent flash in wrong position
  if (tip) tip.style.opacity = '0';
  // Use INSTANT scroll so getBoundingClientRect returns the final position immediately
  try { target.scrollIntoView({ behavior: 'auto', block: 'center' }); } catch (e) {}
  // Position immediately, then re-position twice to handle any layout shift
  // (e.g., images loading, fonts rendering, scrollbar appearing)
  requestAnimationFrame(() => {
    _tutPositionFor(target);
    if (tip) tip.style.opacity = '1';
    setTimeout(() => _tutPositionFor(target), 100);
    setTimeout(() => _tutPositionFor(target), 350);
  });
}

function _tutPositionFor(target) {
  if (!target) { endTutorial(); return; }
  const rect = target.getBoundingClientRect();
  if (rect.width < 5 || rect.height < 5) {
    _tutShowStep(_tutIdx + 1);
    return;
  }
  if (!_tutHighlightEl) {
    _tutHighlightEl = document.createElement('div');
    _tutHighlightEl.className = 'tutorial-highlight-ring';
    document.body.appendChild(_tutHighlightEl);
  }
  const pad = 6;
  _tutHighlightEl.style.left   = (rect.left - pad) + 'px';
  _tutHighlightEl.style.top    = (rect.top  - pad) + 'px';
  _tutHighlightEl.style.width  = (rect.width  + pad*2) + 'px';
  _tutHighlightEl.style.height = (rect.height + pad*2) + 'px';

  const cx = rect.left + rect.width / 2;
  const cy = rect.top  + rect.height / 2;
  const rx = rect.width  / 2 + 18;
  const ry = rect.height / 2 + 18;
  const mask = document.getElementById('tutorialMask');
  if (mask) {
    mask.style.background =
      'radial-gradient(ellipse ' + rx + 'px ' + ry + 'px at ' + cx + 'px ' + cy + 'px, transparent 60%, rgba(0,0,0,0.78) 100%)';
  }

  // Pin tooltip to TOP or BOTTOM of screen via a single CSS class.
  // The CSS handles all the positioning with proper transform compose.
  const tip = document.getElementById('tutorialTooltip');
  if (!tip) return;
  const vh = window.innerHeight;
  const targetCenterY = rect.top + rect.height / 2;
  // Reset any inline styles from previous steps
  tip.style.top = '';
  tip.style.bottom = '';
  tip.style.left = '';
  tip.style.transform = '';
  if (targetCenterY > vh * 0.50) {
    // target in lower half → pin tooltip to TOP
    tip.classList.add('tt-at-top');
  } else {
    // target in upper half → default (BOTTOM)
    tip.classList.remove('tt-at-top');
  }
}

/* Auto-start tutorial on first shell session */
function maybeAutoStartTutorial() {
  if (S.tutorialDone) return;
  // STRICT GATE: don't start tutorial until user has passed:
  //   1. Age gate (age18 = true)
  //   2. Terms acceptance (agreed = true)
  //   3. Onboarding complete (no #onboarding visible)
  if (!S.age18) return;
  if (!S.agreed) return;
  // Don't fire if onboarding screen is still showing
  const onboarding = document.getElementById('onboarding');
  if (onboarding && onboarding.classList.contains('active')) return;
  // Wait a moment for layout to settle
  setTimeout(() => {
    // Re-check gates inside the timeout (user might still be on onboarding)
    if (S.tutorialDone || !S.age18 || !S.agreed) return;
    const ob = document.getElementById('onboarding');
    if (ob && ob.classList.contains('active')) return;
    startTutorial();
  }, 1200);
}

function initApp() {
  setLanguage(S.language);
  initVirtual();
  resizeChart();
  renderAssetList();
  renderAll();
  drawChart();
  bindEvents();
  if (typeof _initModalOpenWatcher === 'function') _initModalOpenWatcher();
  if (typeof _bindSelectModeButtons === 'function') _bindSelectModeButtons();
  if (typeof _bindBankruptBanner === 'function') _bindBankruptBanner();
  // Start mystery box countdown ticker
  if (typeof startMysteryBoxTicker === 'function') startMysteryBoxTicker();
  // Initialize help-icon click delegation
  if (typeof _bindHelpIcons === 'function') _bindHelpIcons();
  // Auto-start tutorial on first session
  if (typeof maybeAutoStartTutorial === 'function') maybeAutoStartTutorial();
  // Track home page view (anonymous)
  gaPageView('home');
  // Wire Ko-fi click tracking
  const kofiHome = document.getElementById('supportBtnMain');
  if (kofiHome && !kofiHome._gaWired) {
    kofiHome.addEventListener('click', () => gaEvent('kofi_click_home'));
    kofiHome._gaWired = true;
  }
  const kofiSettings = document.getElementById('supportBtnSettings');
  if (kofiSettings && !kofiSettings._gaWired) {
    kofiSettings.addEventListener('click', () => gaEvent('kofi_click_settings'));
    kofiSettings._gaWired = true;
  }
  // First news shortly after launch (so the panel isn't empty)
  setTimeout(() => {
    if (typeof spawnRandomNews === 'function' && (!S.newsFeed || S.newsFeed.length === 0)) {
      spawnRandomNews();
    }
  }, 4000);
  // ticks
  setInterval(() => {
    try {
      tickVirtual();
      maybeAdvanceCandles();
      checkTpSl();
      renderTopBar();
      renderAssetHeader();
      updateTradeButtons();
      renderOpenPositions();
      if (Math.random() < 0.5) rebuildTicker();
      drawChart();
    } catch (e) {
      console.error('tick error:', e);
    }
  }, 1000);
  // assets list price refresh
  setInterval(() => { try { renderAssetList(); } catch (e) { console.error(e); } }, 4000);
  // mood refresh (less frequent — costlier compute)
  setInterval(() => { try { if (typeof renderMarketMood === 'function') renderMarketMood(); } catch(e){console.error(e);} }, 10000);
  // News feed refresh — relative time updates + LIVE flag
  setInterval(() => { if (typeof renderNewsFeed === 'function') renderNewsFeed(); }, 30000);
  // rewards / flip timer
  setInterval(() => renderRewards(), 30000);
  // auto-save
  setInterval(saveState, 5000);
  // ensure flip timer/text refreshes every minute
  setInterval(() => {
    if (typeof renderFlipTimer === 'function') renderFlipTimer();
  }, 60 * 1000);
  // Periodic risk-free reminder banner during active sessions (every 8 minutes, when tab is visible)
  setInterval(() => {
    if (document.hidden) return;
    if (document.querySelector('.modal-bg.open')) return; // don't interrupt modals
    showSandboxBanner();
  }, 8 * 60 * 1000);
  window.addEventListener('resize', () => { resizeChart(); drawChart(); });
}

/* ============ GATE CHECKS (Online / Update / Sign-In / Underage) ============ */
/* These functions are wired to a native bridge `window.SandboxBridge` when the
 * web view runs inside the Android wrapper. In a plain browser they default to
 * permissive values so the app remains usable for development.
 */
function checkOnline() {
  // Use navigator.onLine + optional bridge
  try {
    if (window.SandboxBridge && typeof window.SandboxBridge.isOnline === 'function') {
      return !!window.SandboxBridge.isOnline();
    }
  } catch (e) {}
  return (typeof navigator !== 'undefined' && navigator.onLine !== false);
}

function checkUpToDate() {
  // Bridge-provided check; in browser, always considered up-to-date.
  try {
    if (window.SandboxBridge && typeof window.SandboxBridge.isUpToDate === 'function') {
      return !!window.SandboxBridge.isUpToDate();
    }
  } catch (e) {}
  return true;
}

function checkGoogleSignIn() {
  // No-Google build: always return true (never gate the app on Google sign-in)
  return true;
}

function checkAgeFromGoogle() {
  // Bridge returns true (>=18), false (<18), or null (unknown — allow).
  try {
    if (window.SandboxBridge && typeof window.SandboxBridge.isAgeOver18 === 'function') {
      const r = window.SandboxBridge.isAgeOver18();
      if (r === false) return false;
      if (r === true) return true;
      return null;
    }
  } catch (e) {}
  return null;
}

function showGate(id) {
  document.querySelectorAll('.gate-screen').forEach(g => g.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  // Refresh translated labels
  if (typeof setLanguage === 'function') setLanguage(S.language || 'en');
}

function hideGates() {
  document.querySelectorAll('.gate-screen').forEach(g => g.classList.remove('active'));
}

function bindGates() {
  // Offline retry — re-run boot pipeline
  const offRetry = document.getElementById('gateOfflineRetry');
  if (offRetry) {
    offRetry.addEventListener('click', () => {
      if (checkOnline()) {
        hideGates();
        // Re-run the gating cascade
        if (typeof rebootAfterGate === 'function') rebootAfterGate();
      }
    });
  }
  // Update — open Google Play
  const updBtn = document.getElementById('gateUpdateBtn');
  if (updBtn) {
    updBtn.addEventListener('click', () => {
      try {
        if (window.SandboxBridge && typeof window.SandboxBridge.openPlayStore === 'function') {
          window.SandboxBridge.openPlayStore();
        } else {
          window.open('https://play.google.com/store/apps/details?id=com.vts.virtualtradingschool', '_blank');
        }
      } catch (e) {}
    });
  }
  // Sign-in — request Google sign-in via bridge
  const siBtn = document.getElementById('gateSignInBtn');
  if (siBtn) {
    siBtn.addEventListener('click', () => {
      try {
        if (window.SandboxBridge && typeof window.SandboxBridge.requestGoogleSignIn === 'function') {
          window.SandboxBridge.requestGoogleSignIn();
        }
        // After sign-in, the bridge should reload — fall back: re-run gates
        setTimeout(() => {
          if (checkGoogleSignIn()) {
            hideGates();
            if (typeof rebootAfterGate === 'function') rebootAfterGate();
          }
        }, 800);
      } catch (e) {}
    });
  }
  // Network state listener — auto-recover from offline
  window.addEventListener('online', () => {
    const offGate = document.getElementById('gateOffline');
    if (offGate && offGate.classList.contains('active') && checkOnline()) {
      hideGates();
      if (typeof rebootAfterGate === 'function') rebootAfterGate();
    }
  });
}

/* Re-run gating after a gate is dismissed */
function rebootAfterGate() {
  if (!checkOnline()) { showGate('gateOffline'); return; }
  if (!checkUpToDate()) { showGate('gateUpdate'); return; }
  if (typeof checkAgeFromGoogle === 'function' && checkAgeFromGoogle() === false) {
    showGate('gateUnderage'); return;
  }
  // All passed — proceed to the in-app onboarding/main flow
  if (!S.agreed || !S.age18) {
    document.getElementById('onboarding') && document.getElementById('onboarding').classList.add('active');
    if (typeof bindOnboarding === 'function') bindOnboarding();
  } else {
    const sh = document.getElementById('shell');
    if (sh && !sh.classList.contains('active')) {
      sh.classList.add('active');
      if (typeof initApp === 'function') initApp();
    }
  }
}

/* ============ BOOT ============ */
function boot() {
  // Apply theme as early as possible
  try {
    if (typeof applyTheme === 'function') applyTheme(S && S.theme ? S.theme : 'default');
  } catch (e) { /* noop */ }

  // Splash screen: show for 3100ms (3.1 seconds) on every launch, then fade out
  const _splash = document.getElementById('splashV2');
  if (_splash) {
    setTimeout(() => {
      _splash.classList.add('fade');
      setTimeout(() => { try { _splash.remove(); } catch (e) {} }, 500);
    }, 3100);
  }

  // Open directly to main screen
  try {
    // Apply current language for gate text translations
    if (typeof setLanguage === 'function') setLanguage(S.language || 'en');

    // === GATE CHECKS (in order: offline → update → underage) ===
    if (!checkOnline()) {
      showGate('gateOffline');
      return;
    }
    if (!checkUpToDate()) {
      showGate('gateUpdate');
      return;
    }
    if (typeof checkAgeFromGoogle === 'function' && checkAgeFromGoogle() === false) {
      showGate('gateUnderage');
      return;
    }

    // Track launch count (used elsewhere, but no startup animation)
    if (typeof S !== 'undefined' && S) {
      S.launchCount = (S.launchCount || 0) + 1;
      saveSoon();
    }

    // 1) Onboarding (welcome + age + terms)
    if (!S.agreed || !S.age18) {
      setLanguage('en');
      $('#onboarding').classList.add('active');
      bindOnboarding();
      return;
    }
    // 2) Main app
    $('#shell').classList.add('active');
    initApp();
  } catch (e) { /* noop */ }

  // Save before unload
  window.addEventListener('beforeunload', saveState);
  document.addEventListener('visibilitychange', () => { if (document.hidden) saveState(); });
}

// Bind gate screens early so they work even before language is selected
if (typeof bindGates === 'function') bindGates();

// Register service worker for PWA (PWABuilder requires this)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => {
      console.warn('Service worker registration failed:', err);
    });
  });
}

boot();
