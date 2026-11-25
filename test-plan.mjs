import assert from "node:assert/strict";
import test from "node:test";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildFallbackPlan(city, household, routine) {
  const cleanCity = city.trim() || "Metro City";
  const cleanHousehold = household.trim() || "Household";
  const text = routine.toLowerCase();

  const steps = [];
  if (text.includes("car") || text.includes("commute") || text.includes("traffic")) {
    steps.push("Shift peak commute hours or use public transit/carpool.");
  }
  if (text.includes("ac") || text.includes("cooling")) {
    steps.push("Set AC thermostat to 24-25 C and clean filters every 14 days.");
  }
  if (steps.length === 0) {
    steps.push("Adopt off-peak travel and energy-saving appliance habits.");
  }

  return {
    summary: `Plan for ${cleanHousehold} in ${cleanCity}.`,
    steps,
  };
}

test("escapeHtml prevents HTML tag injection", () => {
  const escaped = escapeHtml('<script>alert("x")</script>');
  assert.equal(escaped.includes("<script>"), false);
  assert.equal(escaped.includes("&lt;script&gt;"), true);
});

test("buildFallbackPlan returns tailored steps for commute and AC", () => {
  const plan = buildFallbackPlan(
    "Mumbai, Maharashtra",
    "4 members",
    "Commute by car in traffic and run 2 ACs daily."
  );
  assert.equal(plan.summary.includes("Mumbai, Maharashtra"), true);
  assert.equal(plan.steps.length, 2);
});

test("buildFallbackPlan handles empty routine safely", () => {
  const plan = buildFallbackPlan("", "", "");
  assert.ok(plan.steps.length >= 1);
});
