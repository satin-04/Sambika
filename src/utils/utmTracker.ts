import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"] as const;
const STORAGE_KEY = "sambika_utm";

export interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  landing_page?: string;
  referrer?: string;
}

export async function captureUtmParams(): Promise<void> {
  const params = new URLSearchParams(window.location.search);

  const data: UtmData = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) {
      data[key] = value;
    }
  }

  data.landing_page = window.location.pathname;
  data.referrer = document.referrer || "";

  const hasUtm = UTM_KEYS.some((key) => params.has(key));
  if (hasUtm) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  const visitedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
    hour12: true,
  });

  const ua = navigator.userAgent;
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
  const isTablet = /iPad|Tablet|PlayBook/i.test(ua) || (isMobile && Math.min(screen.width, screen.height) >= 600);
  const deviceType = isTablet ? "tablet" : isMobile ? "mobile" : "desktop";
  const screenResolution = `${screen.width}x${screen.height}`;

  try {
    await addDoc(collection(db, "ad-visitors"), {
      ...data,
      visitedAt,
      deviceType,
      screenResolution,
      userAgent: ua,
    });
  } catch (err) {
    console.error("Error tracking ad visitor:", err);
  }
}

export function getUtmData(): UtmData {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
