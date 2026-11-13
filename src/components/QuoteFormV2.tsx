"use client";

import { useState } from "react";

export default function QuoteFormV2() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      fenceType: formData.get("fence-type") as string,
      footage: formData.get("footage") as string,
      details: formData.get("details") as string,
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to submit");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <section className="gf2-section gf2-quote" id="quote">
      <div className="gf2-wrap">
        <div className="gf2-head">
          <span className="gf2-tag">Get Started</span>
          <h2>Request Your Free Estimate</h2>
          <p>Fill out the form below and we&apos;ll call to schedule a walk of the property.</p>
        </div>

        <div className="gf2-form-card">
          {status === "success" ? (
            <div className="gf2-form-success">
              <h3>Thank you!</h3>
              <p>We received your request and will call you soon to schedule a site visit.</p>
              <button type="button" className="gf2-btn gf2-btn-dark" onClick={() => setStatus("idle")}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="gf2-form-grid">
                <div className="gf2-field">
                  <label htmlFor="gf2-name">Full Name</label>
                  <input type="text" id="gf2-name" name="name" placeholder="Jane Rancher" required />
                </div>
                <div className="gf2-field">
                  <label htmlFor="gf2-phone">Phone Number</label>
                  <input type="tel" id="gf2-phone" name="phone" placeholder="(555) 555-0123" required />
                </div>
                <div className="gf2-field">
                  <label htmlFor="gf2-address">Property Address</label>
                  <input type="text" id="gf2-address" name="address" placeholder="Street address & city" />
                </div>
                <div className="gf2-field">
                  <label htmlFor="gf2-fence-type">Fence Type</label>
                  <select id="gf2-fence-type" name="fence-type" defaultValue="">
                    <option value="">Choose one...</option>
                    <option>Vinyl Fencing</option>
                    <option>Rail Fencing</option>
                    <option>Hog &amp; Livestock Wire</option>
                    <option>Livestock Containment</option>
                    <option>Electric / Hot Wire</option>
                    <option>Privacy Fencing</option>
                    <option>Repair &amp; Replace</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>
                <div className="gf2-field gf2-field-full">
                  <label htmlFor="gf2-footage">Approx. Linear Footage (if known)</label>
                  <input type="text" id="gf2-footage" name="footage" placeholder="e.g. 400 ft, or leave blank" />
                </div>
                <div className="gf2-field gf2-field-full">
                  <label htmlFor="gf2-details">Tell Us About The Job</label>
                  <textarea
                    id="gf2-details"
                    name="details"
                    placeholder="What animals (if any), terrain, gates needed, timeline..."
                  ></textarea>
                </div>
              </div>
              {status === "error" && <p className="gf2-form-error">{errorMessage}</p>}
              <div className="gf2-form-submit">
                <button type="submit" className="gf2-btn gf2-btn-gold" disabled={status === "submitting"}>
                  {status === "submitting" ? "Submitting..." : "Request My Free Estimate"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
