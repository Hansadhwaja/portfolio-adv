import { sendGAEvent } from "@next/third-parties/google"

export const ANALYTICS_EVENTS = {
  RESUME_DOWNLOAD: "resume_download",
  GITHUB_CLICK: "github_click",
  LINKEDIN_CLICK: "linkedin_click",
  EMAIL_CLICK: "email_click",
  PROJECT_VIEW: "project_view",
  LIVE_DEMO_CLICK: "live_demo_click",
  CONTACT_CLICK: "contact_click",
  BACK_TO_TOP_CLICK: "back_to_top_click",
} as const

type AnalyticsEventName =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS]

type AnalyticsParameters = Record<
  string,
  string | number | boolean
>

export function trackEvent(
  eventName: AnalyticsEventName,
  parameters: AnalyticsParameters = {}
) {
  sendGAEvent("event", eventName, parameters)
}