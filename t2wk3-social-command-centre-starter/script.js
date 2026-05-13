// ═══════════════════════════════════════════════
// KNOX SOCIAL COMMAND CENTRE — Starter JavaScript
// Use AI tools (Claude, Copilot, ChatGPT) to help you build!
// ═══════════════════════════════════════════════

// ── CHALLENGE 1: Platform Selector ──
// TODO: Add event listeners to platform tab buttons
// When a tab is clicked:
//   - Highlight the active tab
//   - Update the preview panel to match the platform
//   - Each platform has different rules:
//     Instagram: 2,200 char limit, hashtags at end
//     Twitter: 280 char limit, hashtags inline
//     LinkedIn: 3,000 char limit, professional tone
//     TikTok: 150 char caption, trending hashtags


// ── CHALLENGE 2: AI Copy Generation ──
// TODO: When "Generate" is clicked:
//   - Read the brief from the textarea
//   - Generate a caption + hashtags
//   - Display in the preview panel
//
// TIP: You can simulate AI by writing template-based responses,
// or use the fetch() API to call Claude/ChatGPT if you have an API key.
// See PROMPTS.md for ready-to-use prompts!


// ── CHALLENGE 3: Brand Voice Selector ──
// TODO: When a tone button is clicked:
//   - Regenerate the caption in that tone
//   - Professional = formal, business language
//   - Casual = friendly, approachable
//   - Hype = excited, energetic, lots of emojis
//   - Gen Z = trendy slang, internet culture


// ── CHALLENGE 4: Platform Preview ──
// TODO: Update the preview panel based on selected platform
//   - Instagram: Square post card with profile pic, image, caption
//   - Twitter: Tweet card with character count
//   - LinkedIn: Professional card with company branding
//   - TikTok: Vertical video-style card with caption overlay


// ── EXPERIENCED: Landing Page Builder ──
// TODO: Add a second tab that builds a landing page
//   - Hero section with headline + CTA
//   - Feature cards (3 columns)
//   - Testimonials section
//   - Footer with Knox branding


// ── HELPER: Knox Brand Constants ──
const KNOX_BRAND = {
    colours: {
        primary: '#1A5FAF',    // Knox Blue
        dark: '#0A0F1E',       // Knox Black
        accent: '#2B7DE9',     // Bright Blue
        green: '#22C55E',
        purple: '#8B5CF6',
        orange: '#F59E0B',
    },
    voice: {
        professional: 'Formal, authoritative, trustworthy. Use complete sentences. No slang.',
        casual: 'Friendly, warm, approachable. Conversational tone. Light humour OK.',
        hype: 'Excited, energetic, bold! Use exclamation marks, power words, emojis.',
        genz: 'Trendy, authentic, internet-native. Use current slang, lowercase, minimal punctuation.',
    },
    platforms: {
        instagram: { charLimit: 2200, hashtagStyle: 'end', imageRatio: '1:1' },
        twitter: { charLimit: 280, hashtagStyle: 'inline', imageRatio: '16:9' },
        linkedin: { charLimit: 3000, hashtagStyle: 'end', imageRatio: '1.91:1' },
        tiktok: { charLimit: 150, hashtagStyle: 'inline', imageRatio: '9:16' },
    }
};

console.log('Knox Social Command Centre loaded!');
console.log('Brand colours:', KNOX_BRAND.colours);
