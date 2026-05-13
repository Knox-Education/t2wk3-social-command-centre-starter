# Knox Social Command Centre — AI Prompts

Use these prompts with Claude, Copilot, or ChatGPT to help you build each challenge.
Copy and paste them into your AI tool, then adapt the output to your project.

---

## Challenge 1: Post Creator UI

```
Create an HTML social media post creator interface. Requirements:
- Dark navy background (#0A0F1E) with blue accents (#1A5FAF, #2B7DE9)
- Top: header bar with "Knox Social Command Centre" title
- Platform selector tabs: Instagram (active), Twitter, LinkedIn, TikTok
- Active tab should be highlighted in purple (#8B5CF6)
- Below tabs: a textarea for writing a post brief (placeholder: "Describe your post...")
- Below textarea: a green "Generate with AI" button (#22C55E)
- Right side: a preview panel titled "Live Preview"
- Use CSS Grid or Flexbox for the two-column layout
- Font: 'Segoe UI' or 'Calibri', sans-serif
- All colours should use CSS variables from :root
```

---

## Challenge 2: AI Copy Generation

```
Add AI copy generation to my social media post creator. When the user clicks
the "Generate with AI" button:
1. Read the text from the brief textarea
2. Generate a marketing caption based on the brief
3. Add 3-5 relevant hashtags
4. Display the result in the preview panel
5. Show a character count based on the selected platform's limit

For now, simulate the AI by creating a function that takes the brief text and
returns a formatted caption. Use template literals to construct the output.
Include different caption templates for different types of products.

The product we're promoting is "Knox Stock Picker" — an AI-powered stock 
trading dashboard built by students at Knox Grammar School.
```

---

## Challenge 3: Brand Voice Selector

```
Add a Brand Voice selector to my social media post creator with 4 tone options:

1. Professional — formal, authoritative, trustworthy. Complete sentences. No slang.
2. Casual — friendly, warm, approachable. Conversational. Light humour OK.
3. Hype — excited, energetic, bold! Exclamation marks, power words, emojis.
4. Gen Z — trendy, authentic, internet-native. Current slang, lowercase, minimal punctuation.

When a tone button is clicked:
- Highlight the active tone button
- Regenerate the caption in that tone (keep the same product/message)
- Update the preview panel

Style the buttons as a horizontal row below the Generate button.
Active button uses accent colour, inactive uses dark card background (#162036).

Example outputs for "Promote Knox Stock Picker":
- Professional: "Introducing Knox Stock Picker: an AI-powered trading dashboard that delivers real-time market intelligence. Start with $10,000 in virtual capital."
- Casual: "Ever wanted to try stock trading without the risk? Knox Stock Picker gives you $10K of virtual money to play with. Pretty cool, right?"
- Hype: "🚀 THIS CHANGES EVERYTHING! Knox Stock Picker just dropped and it's INSANE! $10K virtual cash, AI-powered insights, REAL market data! 🔥💰"
- Gen Z: "ok but this stock picker app is lowkey fire 📈 they literally give u 10k fake money to trade with and the ai actually slaps no cap"
```

---

## Challenge 4: Platform Preview

```
Update my social media post preview to match each platform's visual style:

When "Instagram" is selected:
- Show a square post card with rounded corners
- Profile picture circle (Knox blue) + "knox_ai_company" username
- Image area (Knox blue gradient placeholder)
- Caption text below with hashtags
- Heart, comment, share icons at bottom
- Max 2,200 characters

When "Twitter" is selected:
- Show a tweet card with rounded corners
- Profile pic + "Knox AI Company" + "@knox_ai" + timestamp
- Tweet text (max 280 characters with live counter)
- Reply, retweet, like, share icons at bottom

When "LinkedIn" is selected:
- Professional card layout
- Company logo + "Knox AI Company" + "Knox Grammar School"
- Post text (max 3,000 characters)
- Like, comment, repost, share buttons

When "TikTok" is selected:
- Vertical video-style card (9:16 ratio)
- Caption overlay at bottom (max 150 characters)
- Username, music icon, heart/comment/share on right side
```

---

## Experienced: Landing Page Builder

```
Add a "Landing Page" tab to my Social Command Centre. When clicked, show a 
landing page builder with these sections:

1. Hero Section:
   - Large headline (editable)
   - Subtitle text (editable)
   - CTA button ("Start Trading Now")
   - Background: Knox dark navy with blue gradient

2. Features Section (3 columns):
   - Feature 1: "AI-Powered Insights" — Real-time market analysis
   - Feature 2: "Virtual Trading" — $10K practice portfolio
   - Feature 3: "Learn by Doing" — No risk, real experience
   - Each card: icon, title, description

3. Testimonial:
   - Quote from a "student"
   - Star rating

4. Footer:
   - Knox Grammar School branding
   - Knox Blue background
   - Links: About, Features, Contact

Use Knox brand colours throughout. Make it responsive.
```

---

## Experienced: Campaign Calendar

```
Add a Campaign Calendar view to my Social Command Centre:
- Weekly grid layout (Mon-Sun columns)
- Each day can hold multiple scheduled posts
- Posts show: platform icon, caption preview (truncated), time
- Colour-coded by platform (Instagram=purple, Twitter=cyan, LinkedIn=blue, TikTok=orange)
- Click a post to edit it
- "Add Post" button on each day
- Knox dark theme with card backgrounds
```

---

## Experienced: A/B Testing

```
Add an A/B Testing mode to my Social Command Centre:
- Split the preview into two panels side by side
- Label them "Version A" and "Version B"
- Generate the same post in two different tones (e.g., Professional vs Gen Z)
- Add "Vote A" and "Vote B" buttons below each
- Track votes with a simple counter
- Show a percentage bar comparing votes
- Knox dark theme styling
```

---

## Tips for Better AI Prompts

1. **Be specific** — Include exact colours, sizes, fonts
2. **Give context** — "This is for Knox Grammar School, a Sydney GPS school"
3. **Show examples** — Paste sample output you want
4. **Iterate** — "Make it more professional" / "Add more spacing" / "Change the blue to #2B7DE9"
5. **Reference your Brand Book** — "Use the colours from my brand book: Knox Blue #1A5FAF, dark navy #0A0F1E"
