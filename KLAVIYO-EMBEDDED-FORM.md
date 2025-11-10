# 📝 Klaviyo Embedded Form - Quick Guide

## ✅ What's Implemented

Your Klaviyo embedded form `WRssM3` is now integrated and will appear automatically on your website!

---

## 🎯 How It Works

### 1. **The Form Div**
```tsx
<div className="klaviyo-form-WRssM3"></div>
```

This div is now in your `NewsletterSection` component. The Klaviyo SDK (loaded in `layout.tsx`) automatically detects this div and injects your form into it.

### 2. **What Happens**
```
Page loads
  ↓
Klaviyo SDK detects the div
  ↓
Fetches your form design from Klaviyo servers
  ↓
Injects the complete form HTML/CSS
  ↓
Form appears with your custom styling
```

### 3. **When Someone Submits**
```
User enters email
  ↓
Form validates (Klaviyo)
  ↓
Subscribes to your list (Klaviyo)
  ↓
Triggers automations (Klaviyo)
  ↓
Shows success message
```

**All handled by Klaviyo - no API endpoints needed!**

---

## 🛠️ Customization

### Change Form Design

**In Klaviyo Dashboard:**
1. Go to **Sign-up Forms**
2. Find your form (ID: `WRssM3`)
3. Click **Edit**
4. Modify:
   - Colors and fonts
   - Fields (email, name, custom)
   - Button text and style
   - Success/error messages
   - Validation rules

**On Your Website:**
- Changes appear automatically (no code deployment needed!)
- May take 5-10 minutes to propagate

### Change Form ID

If you create a new form in Klaviyo:

1. **Get the new form ID** from Klaviyo dashboard
2. **Update `config/content.config.ts` (line 105):**
   ```typescript
   newsletter: {
     // ... other settings
     klaviyoFormId: "YOUR_NEW_ID", // Change this
   },
   ```
3. **Save and refresh**

### Remove Title/Description

If your Klaviyo form already has a title:

**Edit `config/content.config.ts`:**
```typescript
newsletter: {
  title: "", // Empty = won't show
  description: "", // Empty = won't show
  klaviyoFormId: "WRssM3",
  // Remove unused fields
},
```

---

## 🎨 Styling the Form

### Klaviyo Dashboard (Recommended)

**Best for:**
- Colors and fonts
- Button styling
- Field layout
- Spacing

**How to:**
1. Klaviyo Dashboard → **Sign-up Forms**
2. Edit your form → **Design** tab
3. Use visual editor

### Custom CSS (Advanced)

If you need more control, add to `app/globals.css`:

```css
/* Target the Klaviyo form container */
.klaviyo-form-WRssM3 {
  /* Add your custom styles */
  max-width: 600px;
  margin: 0 auto;
}

/* Style form inputs */
.klaviyo-form-WRssM3 input[type="email"] {
  border-radius: 12px;
  padding: 14px 20px;
  font-size: 16px;
}

/* Style submit button */
.klaviyo-form-WRssM3 button[type="submit"] {
  background-color: #2ec4b6;
  border-radius: 50px;
  padding: 14px 32px;
  font-weight: 600;
}

/* Success message */
.klaviyo-form-WRssM3 .success-message {
  color: #10b981;
  font-weight: 500;
}
```

**Note:** Inspect the form with browser DevTools (F12) to find exact class names.

---

## 🔍 Verification

### Check if Form is Loading

1. **Open your site** → Navigate to newsletter section
2. **Open DevTools** (F12) → **Console**
3. **Look for**:
   ```javascript
   window.klaviyo
   // Should show object (not undefined)
   ```

4. **Check the div**:
   ```javascript
   document.querySelector('.klaviyo-form-WRssM3')
   // Should show the div element
   ```

### If Form Doesn't Appear

**Possible causes:**

1. **Klaviyo SDK not loaded**
   - Check `app/layout.tsx` has the scripts
   - Verify Company ID is correct
   - Wait 5-10 seconds after page load

2. **Wrong Form ID**
   - Double-check ID in Klaviyo Dashboard
   - Verify `config/content.config.ts` has correct ID
   - Form IDs are case-sensitive

3. **Form not published**
   - Klaviyo Dashboard → **Sign-up Forms**
   - Find your form
   - Click **Publish** if status is "Draft"

4. **Browser cache**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
   - Clear browser cache
   - Try incognito/private window

### Console Errors

Check browser console for errors:

```javascript
// No errors = working
// "klaviyo is not defined" = SDK not loaded
// "Form not found" = wrong form ID or not published
```

---

## 📊 Form Settings in Klaviyo

### Recommended Settings

**Form Behavior:**
- ✅ **Double Opt-In** - Recommended for better deliverability
- ✅ **Success Message** - Customize in Klaviyo dashboard
- ✅ **Redirect** - Optional: redirect to thank-you page after signup

**List Assignment:**
- Form automatically adds subscribers to the list you specified
- Check: **Sign-up Forms** → Your Form → **Settings** → **List**

**Consent:**
- ✅ Add consent checkbox if required by GDPR/law
- Klaviyo handles compliance automatically

---

## 🆚 Embedded Form vs Custom Form

### Klaviyo Embedded Form (Current - Recommended)

**Pros:**
- ✅ No API endpoints needed
- ✅ Easy to customize in dashboard
- ✅ Changes don't require code deployment
- ✅ Built-in spam protection
- ✅ A/B testing available
- ✅ Klaviyo handles everything

**Cons:**
- ❌ Less control over exact HTML structure
- ❌ Requires Klaviyo SDK to be loaded

**Best for:** Most use cases, especially if you want to iterate quickly

### Custom React Form (Old Implementation)

**Pros:**
- ✅ Full control over HTML/CSS
- ✅ Matches your design system exactly
- ✅ Can add custom validation logic
- ✅ Works without Klaviyo SDK

**Cons:**
- ❌ Requires API endpoint (`/api/subscribe`)
- ❌ Need to deploy for any changes
- ❌ More code to maintain
- ❌ Manual spam protection

**Best for:** Advanced use cases with custom requirements

---

## 🔄 Switching Between Form Types

### Want the Custom Form Back?

The old custom form code is backed up. To restore it:

1. **Check git history** for `NewsletterSection.tsx`
2. **Or recreate** using React Hook Form + Zod (see KLAVIYO-SETUP.md)

### Want Both Forms?

You can have both! Use different sections:

```typescript
// config/content.config.ts
newsletter: {
  title: "Join Our Newsletter",
  klaviyoFormId: "WRssM3", // Embedded form
},

customNewsletter: {
  title: "Alternative Signup",
  // Custom form config
},
```

---

## 📈 Tracking Form Performance

### In Klaviyo Dashboard

1. **Go to** → **Analytics** → **Forms**
2. **Select your form** (`WRssM3`)
3. **View metrics:**
   - Form views
   - Submissions
   - Conversion rate
   - List growth

### A/B Testing

1. **Create form variant** in Klaviyo
2. **Set percentage split** (e.g., 50/50)
3. **Klaviyo automatically tests** and picks winner
4. **No code changes needed!**

---

## 🎓 Best Practices

### 1. **Keep It Simple**
- Ask for email only initially
- Add more fields later if needed
- Higher conversion with fewer fields

### 2. **Clear Value Proposition**
- Tell people what they'll get
- How often they'll hear from you
- What type of content

### 3. **Mobile Optimization**
- Test on mobile devices
- Large touch-friendly buttons
- Easy to read text

### 4. **Compliance**
- Add privacy policy link
- Include unsubscribe info
- GDPR consent if applicable

### 5. **Welcome Email**
- Set up in Klaviyo Dashboard
- **Flows** → **Create Flow** → **Welcome Series**
- Send immediately after signup

---

## 🔧 Files Modified

| File | Change | Why |
|------|--------|-----|
| `components/sections/NewsletterSection.tsx` | Replaced custom form with Klaviyo div | Simpler, managed in dashboard |
| `lib/types.ts` | Added `klaviyoFormId` field | TypeScript support |
| `config/content.config.ts` | Added form ID | Configuration |

**Files no longer needed:**
- `app/api/subscribe/route.ts` - API endpoint (can keep as backup)
- `lib/validations.ts` - Form validation (can keep for other forms)

---

## 💡 Pro Tips

1. **Preview before publishing** - Klaviyo lets you preview forms
2. **Test in incognito** - See form as new visitor
3. **Monitor submission rate** - Aim for 2-5% conversion
4. **Use embedded forms** - Better than popups for UX
5. **A/B test everything** - Button text, colors, copy
6. **Mobile first** - 60%+ traffic is mobile
7. **Fast forms win** - Fewer fields = more signups

---

## 📚 Related Documentation

- **[KLAVIYO-SETUP.md](./KLAVIYO-SETUP.md)** - Full Klaviyo integration guide
- **[DESIGN-GUIDE.md](./DESIGN-GUIDE.md)** - Customize form styling
- **[Klaviyo Form Docs](https://help.klaviyo.com/hc/en-us/articles/115005078647)** - Official docs

---

## 🎉 You're All Set!

Your Klaviyo embedded form is now live and will automatically appear on your site once:
1. ✅ Your Company ID is added to `app/layout.tsx`
2. ✅ The form is published in Klaviyo dashboard
3. ✅ You refresh the page

**Next steps:**
- Customize form design in Klaviyo dashboard
- Set up welcome email flow
- Monitor conversion rates
- A/B test different variations

---

**Questions?** Check [KLAVIYO-SETUP.md](./KLAVIYO-SETUP.md) for troubleshooting!

**Last Updated:** November 2025  
**Form ID:** WRssM3

