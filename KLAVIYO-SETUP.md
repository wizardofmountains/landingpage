# 📧 Klaviyo Integration Guide

Complete guide to setting up and using Klaviyo for email marketing on your website.

---

## 📋 Table of Contents

1. [What's Already Integrated](#whats-already-integrated)
2. [What You Get](#what-you-get)
3. [Setup Instructions](#setup-instructions)
4. [Configuration Options](#configuration-options)
5. [Using the Newsletter Form](#using-the-newsletter-form)
6. [Advanced Features](#advanced-features)
7. [Troubleshooting](#troubleshooting)

---

## ✅ What's Already Integrated

The template now includes **Klaviyo's onsite tracking SDK** in `app/layout.tsx`:

```tsx
{/* Klaviyo Initialization Script - Must load before main SDK */}
<script dangerouslySetInnerHTML={{
  __html: `!function(){if(!window.klaviyo){...}}();`
}} />

{/* Klaviyo Main SDK */}
<script async type="text/javascript" 
  src="https://static.klaviyo.com/onsite/js/TVj2zW/klaviyo.js?company_id=TVj2zW" />
```

**Current Status:** Uses placeholder Company ID `TVj2zW`

---

## 🎁 What You Get

### 1. **Visitor Tracking** (Auto-enabled)
- Tracks page views, clicks, and user behavior
- Builds visitor profiles automatically
- No additional code needed

### 2. **Email Newsletter Signup** (Already built)
- Form validation with Zod
- React Hook Form integration
- API endpoint at `/api/subscribe`
- Currently uses placeholder (needs API key to activate)

### 3. **On-Site Forms & Popups** (Via Klaviyo Dashboard)
- Create popups in Klaviyo dashboard
- Display automatically on your site
- A/B testing built-in

### 4. **Behavioral Tracking**
- Which pages users visit
- How long they stay
- What they click on
- Use this data for targeted campaigns

---

## 🚀 Setup Instructions

### Step 1: Get Your Klaviyo Company ID

1. **Sign up for Klaviyo** (if you haven't):
   - Go to [klaviyo.com](https://www.klaviyo.com)
   - Create a free account

2. **Find your Company ID:**
   - Log into Klaviyo
   - Go to **Account** → **Settings** → **API Keys**
   - Look for **Public API Key (Site ID)** or **Company ID**
   - It looks like: `TVj2zW` (6 characters)

### Step 2: Update Your Website

1. **Open `app/layout.tsx`**

2. **Replace `TVj2zW` with YOUR Company ID** (appears twice):

```tsx
// Line 55 - Replace BOTH instances
<script
  async
  type="text/javascript"
  src="https://static.klaviyo.com/onsite/js/YOUR_COMPANY_ID/klaviyo.js?company_id=YOUR_COMPANY_ID"
/>
```

**Example:**
```tsx
// If your Company ID is ABC123
src="https://static.klaviyo.com/onsite/js/ABC123/klaviyo.js?company_id=ABC123"
```

3. **Save the file**

### Step 3: Enable Newsletter API (Optional)

To make the newsletter form actually submit to Klaviyo:

1. **Get your Private API Key:**
   - Klaviyo Dashboard → **Account** → **Settings** → **API Keys**
   - Click **Create Private API Key**
   - Name it: "Website Newsletter"
   - Save the key (starts with `pk_`)

2. **Create `.env.local`** in your project root:

```env
# Klaviyo API Configuration
KLAVIYO_API_KEY=pk_your_private_api_key_here
NEXT_PUBLIC_KLAVIYO_LIST_ID=your_list_id_here
```

3. **Get your List ID:**
   - Klaviyo Dashboard → **Lists & Segments**
   - Click on your list (or create one: "Newsletter Subscribers")
   - Look in the URL: `https://www.klaviyo.com/list/ABCD123/members`
   - The ID is `ABCD123`

4. **Update `lib/klaviyo.ts`** (optional - see [Real Implementation](#real-api-implementation))

### Step 4: Test It

1. **Restart your dev server:**
   ```bash
   npm run dev
   ```

2. **Open browser DevTools** (F12) → Console

3. **Check for Klaviyo:**
   ```javascript
   window.klaviyo
   // Should show the Klaviyo object (not undefined)
   ```

4. **Go to Klaviyo Dashboard** → **Analytics** → **Real-Time**
   - You should see your own visit tracked

✅ **You're all set!**

---

## ⚙️ Configuration Options

### Option 1: Tracking Only (Current Setup)

**What's enabled:**
- ✅ Visitor behavior tracking
- ✅ Page view analytics
- ✅ Klaviyo popups/forms from dashboard
- ❌ Newsletter form (placeholder only)

**What you need:**
- Just your Company ID

**Setup time:** 2 minutes

---

### Option 2: Tracking + Newsletter API

**What's enabled:**
- ✅ Everything from Option 1
- ✅ Newsletter form submits to Klaviyo
- ✅ Subscribers added to your list automatically

**What you need:**
- Company ID (public)
- Private API Key
- List ID

**Setup time:** 10 minutes

**Instructions:** Follow [Step 3](#step-3-enable-newsletter-api-optional) above

---

### Option 3: Full Integration

**What's enabled:**
- ✅ Everything from Option 2
- ✅ Custom event tracking
- ✅ User properties
- ✅ Cart abandonment tracking
- ✅ Purchase tracking

**What you need:**
- Everything from Option 2
- Custom JavaScript code (see [Advanced Features](#advanced-features))

**Setup time:** 30+ minutes

---

## 📝 Using the Newsletter Form

### Current Implementation

The newsletter form is already built in `components/sections/NewsletterSection.tsx`

**Features:**
- ✅ Email validation (Zod)
- ✅ React Hook Form
- ✅ Success/error states
- ✅ Loading spinner
- ✅ API endpoint at `/api/subscribe`

### With Placeholder (Default)

**File:** `lib/klaviyo.ts` (lines 31-46)

```typescript
export async function subscribeToNewsletter(params: KlaviyoSubscribeParams) {
  // Currently logs to console only
  console.log(`[PLACEHOLDER] Would subscribe ${params.email}`);
  
  return {
    success: true,
    message: "Successfully subscribed to newsletter",
  };
}
```

**What happens:**
- User enters email
- Form validates
- Success message shows
- Email is logged to console (not saved)

### Real API Implementation

**File:** `lib/klaviyo.ts`

Replace the placeholder function with this:

```typescript
export async function subscribeToNewsletter(
  params: KlaviyoSubscribeParams
): Promise<KlaviyoResponse> {
  const { email } = params;
  
  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = params.listId || process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID;
  
  if (!apiKey || !listId) {
    throw new Error("Klaviyo API credentials not configured");
  }
  
  try {
    // Using Klaviyo REST API v2
    const response = await fetch(
      `https://a.klaviyo.com/api/v2/list/${listId}/subscribe`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Klaviyo-API-Key ${apiKey}`,
        },
        body: JSON.stringify({
          profiles: [
            {
              email: email,
              // Optional: Add more properties
              // $first_name: "John",
              // $last_name: "Doe",
              // custom_property: "value",
            },
          ],
        }),
      }
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Klaviyo API error:", errorData);
      throw new Error("Failed to subscribe");
    }
    
    return {
      success: true,
      message: "Successfully subscribed to newsletter",
    };
  } catch (error) {
    console.error("Klaviyo subscription error:", error);
    return {
      success: false,
      message: "Failed to subscribe. Please try again.",
    };
  }
}
```

**What changes:**
- Actually calls Klaviyo API
- Adds email to your list
- Handles errors properly
- Uses environment variables for security

---

## 🔥 Advanced Features

### Track Custom Events

Add anywhere in your code:

```typescript
// Track button click
window.klaviyo?.push(['track', 'Button Clicked', {
  button_name: 'Join Movement',
  page: 'Hero Section'
}]);

// Track page view
window.klaviyo?.push(['track', 'Viewed Page', {
  page_title: document.title,
  url: window.location.href
}]);

// Track form submission
window.klaviyo?.push(['track', 'Form Submitted', {
  form_name: 'Contact Form',
  email: userEmail
}]);
```

### Identify Users

When you know a user's email:

```typescript
window.klaviyo?.push(['identify', {
  '$email': 'user@example.com',
  '$first_name': 'John',
  '$last_name': 'Doe',
  'plan': 'premium',
  'signup_date': '2025-01-15'
}]);
```

### Track E-commerce Events

For online stores:

```typescript
// Product viewed
window.klaviyo?.push(['track', 'Viewed Product', {
  'ProductName': 'Blue T-Shirt',
  'ProductID': 'SKU-123',
  'Price': 29.99,
  'Currency': 'USD'
}]);

// Added to cart
window.klaviyo?.push(['trackViewedItem', {
  'Title': 'Blue T-Shirt',
  'ItemId': 'SKU-123',
  'Price': 29.99,
  'Url': 'https://yoursite.com/products/blue-tshirt'
}]);

// Purchase completed
window.klaviyo?.push(['track', 'Placed Order', {
  '$value': 89.97,
  'OrderId': 'ORDER-456',
  'Categories': ['Clothing', 'T-Shirts'],
  'ItemCount': 3
}]);
```

### Create Popup Forms in Klaviyo Dashboard

1. **Go to Klaviyo Dashboard** → **Sign-up Forms**
2. **Create Form** → Choose type:
   - Popup
   - Flyout
   - Embedded form
3. **Design your form** (drag & drop)
4. **Set targeting rules:**
   - Show on specific pages
   - After X seconds
   - On exit intent
   - After scrolling X%
5. **Publish**

**Result:** Form appears automatically on your site (no code needed!)

### Email Automation Flows

Set up in Klaviyo Dashboard:

1. **Welcome Series:** New subscriber → 3-email sequence
2. **Abandoned Cart:** User leaves without completing
3. **Win-back:** Re-engage inactive subscribers
4. **Birthday:** Send on user's birthday
5. **Custom:** Based on any tracked event

---

## 🔍 Debugging & Testing

### Check if Klaviyo is Loaded

Open browser console (F12):

```javascript
// Check if Klaviyo exists
console.log(window.klaviyo);
// Should show object with push() method

// Check your Company ID
console.log(window._klOnsite);
// Shows queued events

// Test tracking
window.klaviyo?.push(['track', 'Test Event', { test: true }]);
```

### Verify in Klaviyo Dashboard

1. **Go to Analytics** → **Real-Time**
   - See visitors in real-time
   - Check tracked events

2. **Go to Lists & Segments** → Your List
   - See new subscribers
   - Check profile data

3. **Go to Activity Feed**
   - See all events for a profile
   - Verify tracking is working

### Common Issues

**Issue:** `window.klaviyo is undefined`

**Solutions:**
- Check Company ID is correct in `layout.tsx`
- Wait a few seconds (SDK loads asynchronously)
- Check browser console for errors
- Verify you're not blocking scripts (ad blockers)

---

**Issue:** Newsletter form shows success but no subscriber in Klaviyo

**Solutions:**
- Check you updated `lib/klaviyo.ts` with real implementation
- Verify `.env.local` has correct API key and List ID
- Check API endpoint `/api/subscribe` for errors
- Look at browser Network tab for failed requests

---

**Issue:** Tracking not showing in Klaviyo

**Solutions:**
- Wait 5-10 minutes (data isn't instant)
- Check Real-Time analytics (shows faster)
- Verify Company ID matches your account
- Clear browser cache and reload

---

## 🎓 Best Practices

### 1. **Privacy Compliance**

Add to your site:
- Cookie consent banner
- Privacy policy mentioning Klaviyo
- Unsubscribe links in emails (automatic in Klaviyo)

### 2. **Double Opt-In** (Recommended)

In Klaviyo Dashboard:
- **Lists & Segments** → Your List → **Settings**
- Enable **Double Opt-In**
- Customize confirmation email

**Benefits:**
- Better deliverability
- More engaged subscribers
- GDPR compliant

### 3. **Segmentation**

Create segments based on:
- Sign-up source
- Behavior (pages visited)
- Engagement level
- Custom properties

### 4. **A/B Testing**

Test in Klaviyo:
- Email subject lines
- Popup designs
- Send times
- Content variations

### 5. **Performance**

The scripts are loaded with:
- `async` attribute (non-blocking)
- Loaded in `<head>` (early initialization)
- Proxy pattern (no errors if slow to load)

**Impact:** Minimal (< 50ms page load impact)

---

## 📚 Resources

### Official Documentation

- [Klaviyo Developer Docs](https://developers.klaviyo.com/)
- [JavaScript API Reference](https://developers.klaviyo.com/en/docs/javascript-api)
- [REST API Reference](https://developers.klaviyo.com/en/reference/api_overview)
- [Event Tracking Guide](https://help.klaviyo.com/hc/en-us/articles/115005082927)

### Your Template Files

- **Layout (Scripts):** `app/layout.tsx` (lines 42-56)
- **Newsletter Form:** `components/sections/NewsletterSection.tsx`
- **API Integration:** `lib/klaviyo.ts`
- **API Endpoint:** `app/api/subscribe/route.ts`

### Quick Commands

```bash
# Restart dev server (after env changes)
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint
```

---

## 🎯 Next Steps

1. ✅ **Replace Company ID** in `app/layout.tsx`
2. ✅ **Test tracking** in Klaviyo Real-Time
3. ⬜ **Add API credentials** to `.env.local` (optional)
4. ⬜ **Update `lib/klaviyo.ts`** with real API calls (optional)
5. ⬜ **Create welcome email** in Klaviyo Dashboard
6. ⬜ **Set up popup form** in Klaviyo Dashboard
7. ⬜ **Add cookie consent** for privacy compliance

---

## 💡 Tips

- **Start simple:** Just tracking is powerful
- **Test everything:** Use different emails to test flows
- **Monitor analytics:** Check open rates, click rates
- **Clean your list:** Remove bounced/unengaged emails
- **Segment wisely:** Don't blast everyone with everything

---

**Questions?** Check the [Troubleshooting](#troubleshooting) section or [Klaviyo's Help Center](https://help.klaviyo.com/)

---

**Last Updated:** November 2025  
**Template Version:** 1.0  
**Klaviyo API Version:** v2

