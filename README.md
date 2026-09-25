# 🌳 VERDANT — The Enchanted Forest
### Eco-Adventure Theme Park & Leisure Destination (Mt. Makiling, Laguna, Philippines)

> *"Where nature, adventure, and Filipino imagination come together."*

This website is tailored specifically for **VERDANT — The Enchanted Forest**. All text, lore, attractions, facilities, and visitor info are pre-loaded and clearly marked with labels so you can tweak anything at any time.

---

## 🚀 How to View Your Website Right Now

1. Go to this folder on your computer:  
   `C:\Users\adria\.gemini\antigravity\scratch\place-website\`
2. Double-click **`index.html`**.
3. It will open instantly in your web browser (Chrome, Edge, Firefox, Brave, etc.)!

---

## 🌲 What Has Been Added to the Website

- **Hero Banner:** Full-screen backdrop of Mount Makiling canopy mist with official tagline and quick action buttons.
- **Fact Sheet Bar:** Location (Mt. Makiling foothills), Experience (Eco-adventure & Folklore), Inspiration (Maria Makiling legend), Core Mission (Conservation).
- **About & USP Section:** The story behind choosing Mt. Makiling, biodiversity, and the unique selling proposition (*"Where Philippine nature meets imagination"*).
- **The 5 Main Attractions:**
  1. *Giant Tree Village* (Sky walkways, elevated treehouse dining & overnight stays)
  2. *Forest Zipline* (Canopy flight with aerial views of Mt. Makiling)
  3. *Fairy-Light Trails* (Nighttime illuminated paths with thousands of warm lights & lanterns)
  4. *Enchanted Boat Ride* (Scenic forest lake cruise with folklore audio storytelling & lights)
  5. *Mythical Forest* (Animatronics & installations of Maria Makiling, Tikbalang, Kapre, and Sarimanok)
- **Other Facilities & Leisure (9 Cards):**
  - Forest Café & Restaurant
  - Treehouse Accommodations
  - Verdant Souvenir Shop
  - Picnic Grounds & Meadows
  - Adventure Playground
  - Nature Discovery Center
  - Photography Spots
  - Night Forest Show
  - Events & Wedding Venue
- **Target Market Guide:** Experiences curated for Families, Adventure Seekers, Romantics/Couples, Schools/Field Trips, Corporate Team-Building, and International/Domestic Tourists.
- **Photo Gallery:** High-definition photography capturing canopy walkways, boats, night lights, and lush flora.
- **Visitor Guide for Laguna:** Specific driving instructions from Metro Manila via SLEX, bus routes to Los Baños, park passes, and forest guidelines.
- **Interactive FAQ:** Questions on Maria Makiling folklore, safety for children/seniors, treehouse stays, and field trip bookings.
- **Location & Google Map:** Contact info with an embedded map pinpointing Mount Makiling, Laguna, Philippines.
- **Enchanted Forest Theme (`style.css`):** Emerald greens, warm fairy-light amber golds, and misty twilight overlays.

---

## 🏷️ Code Labels in `index.html` (Quick Reference)

| Section Label | What it Controls |
| :--- | :--- |
| Browser Tab Title & Meta Description |
| Navbar Brand Name (`VERDANT`) and Navigation Links |
| Hero Banner, Main Title, and Tagline |
| 4 Quick Stats Bar |
| About Verdant, Maria Makiling Folklore & USP |
| 5 Main Attraction Cards & Descriptions |
| 9 Park Leisure Facilities & Amenities |
| Target Market Cards |
| Photo Gallery & Captions |
| Laguna Visitor Guide, Travel Directions & Passes |
| Interactive FAQ Accordion |
| Contact Info, Phone, Email & Mount Makiling Google Map |
| Footer, Social Links & Conservation Disclaimer |

---

## 🎨 How to Tweak Colors in `style.css`

Open `style.css` and check the top `:root` section:
```css
:root {
  --color-primary: #059669;       /* Emerald forest green */
  --color-accent: #f59e0b;        /* Fairy-light golden amber */
  --hero-overlay-color: rgba(6, 40, 30, 0.65); /* Forest twilight tint */
}
```

---

## 💡 How to Add Your Own Photos

To replace any photo with your own image file:
1. Place your picture (e.g. `my-photo.jpg`) inside the `place-website` folder.
2. In `index.html`, replace the web link inside `src="..."` with your filename:
   ```html
   <img src="my-photo.jpg" alt="Description">
   ```
