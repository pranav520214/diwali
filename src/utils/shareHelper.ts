/**
 * Web Share API Utility with WhatsApp & Clipboard Fallback Matrix
 * 
 * Ensures sharing works seamlessly across all devices:
 * - Mobile Chrome & Safari: Native OS Share Sheet (Instagram, WhatsApp, Messages, etc.)
 * - Desktop Browsers: Direct WhatsApp Web redirection or instant Clipboard copy with toast notification
 */

export interface ShareData {
  title: string;
  text: string;
  url?: string;
}

export type ShareResultType = "native" | "whatsapp" | "clipboard" | "failed";

export interface ShareResult {
  success: boolean;
  type: ShareResultType;
  message: string;
}

export async function shareDiwaliGreeting(data: ShareData): Promise<ShareResult> {
  const shareUrl = data.url || (typeof window !== "undefined" ? window.location.href : "");
  const fullText = `${data.title}\n\n${data.text}\n\n${shareUrl}`.trim();

  // 1. Try Native Web Share API (Mobile Safari, Mobile Chrome, Edge)
  if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
    try {
      // Test if canShare is supported and accepts data
      if (typeof navigator.canShare === "function" && !navigator.canShare({ title: data.title, text: data.text, url: shareUrl })) {
        // Fall through to WhatsApp / Clipboard
      } else {
        await navigator.share({
          title: data.title,
          text: data.text,
          url: shareUrl,
        });
        return {
          success: true,
          type: "native",
          message: "Shared successfully via native share sheet",
        };
      }
    } catch (err: unknown) {
      const error = err as Error;
      // If user aborted/cancelled the native share sheet, do not trigger fallback error
      if (error.name === "AbortError") {
        return {
          success: false,
          type: "native",
          message: "Share cancelled by user",
        };
      }
      // Otherwise fall through to clipboard / WhatsApp
    }
  }

  // 2. Fallback: Try Clipboard Copy
  if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    try {
      await navigator.clipboard.writeText(fullText);
      return {
        success: true,
        type: "clipboard",
        message: "✨ Greeting copied to clipboard! Ready to paste & send.",
      };
    } catch {
      // Fall through to WhatsApp URL if clipboard write failed (e.g. permissions)
    }
  }

  // 3. Fallback: Open WhatsApp directly
  if (typeof window !== "undefined") {
    try {
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      return {
        success: true,
        type: "whatsapp",
        message: "Opening WhatsApp to send your Diwali wishes...",
      };
    } catch (e) {
      console.error("[ShareHelper] All share channels failed:", e);
    }
  }

  return {
    success: false,
    type: "failed",
    message: "Unable to share. Please copy the link manually.",
  };
}
