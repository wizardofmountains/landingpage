import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validations';
import { subscribeToNewsletter } from '@/lib/klaviyo';

/**
 * Newsletter subscription API endpoint
 * POST /api/subscribe
 * 
 * Body: { email: string }
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate input
    const validation = newsletterSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email address',
          details: validation.error.issues,
        },
        { status: 400 }
      );
    }
    
    const { email } = validation.data;
    
    // Subscribe to newsletter (placeholder implementation in klaviyo.ts)
    const result = await subscribeToNewsletter({ email });
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message,
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: result.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

