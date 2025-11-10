/**
 * Klaviyo API Integration (Optional - Not Used with Embedded Forms)
 * 
 * NOTE: This file is NOT needed if you're using Klaviyo Embedded Forms (current implementation).
 * Embedded forms handle everything automatically via the Klaviyo SDK.
 * 
 * This file is kept for reference if you want to build a custom newsletter form.
 * 
 * To use this implementation:
 * 1. Switch back to custom React form in NewsletterSection.tsx
 * 2. Add KLAVIYO_API_KEY and NEXT_PUBLIC_KLAVIYO_LIST_ID to .env.local
 * 3. Use the /api/subscribe endpoint
 */

export interface KlaviyoSubscribeParams {
  email: string;
  listId?: string;
}

export interface KlaviyoResponse {
  success: boolean;
  message: string;
}

/**
 * Subscribe an email to a Klaviyo list via API
 * Only needed for custom forms (not embedded forms)
 */
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
