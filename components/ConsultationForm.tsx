"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CONCERNS = [
  "Trying to conceive naturally",
  "Need IVF guidance",
  "Need IUI guidance",
  "PCOS / PCOD concern",
  "Male infertility concern",
  "Low AMH / low ovarian reserve",
  "Previous IVF failure",
  "Recurrent pregnancy loss",
  "Not sure",
];

type Status = "idle" | "success" | "error";

export default function ConsultationForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digits);
    if (phoneError) setPhoneError("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    setStatus("idle");
    setSubmitError("");

    if (phone.length !== 10) {
      setPhoneError(
        phone.length === 0
          ? "Please enter your phone number."
          : "Please enter a valid 10-digit phone number."
      );
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Hero Consultation Form",
          name: formData.get("ivf-name"),
          phone,
          concern: formData.get("ivf-concern"),
          location: formData.get("ivf-location"),
          pageUrl: window.location.href,
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.error || "Unable to submit. Please try again.");
      }
      router.push("/thank-you");
    } catch (error) {
      setStatus("error");
      setSubmitError(
        error instanceof Error ? error.message : "Unable to submit. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      id="ivf-consultation-form"
      className="w-full max-w-[920px] rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,#321524_0%,#5a203f_58%,#220d1a_100%)] p-6 shadow-[0_24px_70px_rgba(70,20,48,0.16)] sm:p-8 lg:p-10"
    >
      <div className="mb-6 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-white/25" />
          <span className="text-[11px] font-bold tracking-[0.14em] text-[#f0a8ca] uppercase">
            Free Fertility Assessment
          </span>
          <span className="h-px w-8 bg-white/25" />
        </div>
        <h3 className="text-xl font-bold text-white sm:text-2xl">
          Book Your Free Fertility Consultation
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm font-medium text-white/78">
          Share your details, and our fertility experts will contact you for a
          personalised plan.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ivf-name" className="text-xs font-semibold text-white/78">
            Full Name
          </label>
          <input
            id="ivf-name"
            name="ivf-name"
            type="text"
            required
            placeholder="Enter your full name"
            className="w-full rounded-full border border-white/22 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#e8278d]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="ivf-mobile" className="text-xs font-semibold text-white/78">
            Phone Number
          </label>
          <div
            className={`flex items-center gap-2 rounded-full border bg-white/10 px-4 py-3 ${
              phoneError ? "border-[#ffd1dc] bg-[#ffd1dc]/10" : "border-white/22"
            }`}
          >
            <span className="text-sm font-semibold text-white/70">+91</span>
            <input
              id="ivf-mobile"
              name="ivf-mobile"
              type="tel"
              required
              maxLength={10}
              minLength={10}
              value={phone}
              onChange={handlePhoneChange}
              placeholder="10-digit number"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
            />
          </div>
          {phoneError && (
            <span className="text-xs font-medium text-[#ffd1dc]">{phoneError}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="ivf-concern" className="text-xs font-semibold text-white/78">
            Fertility Concern
          </label>
          <select
            id="ivf-concern"
            name="ivf-concern"
            required
            defaultValue=""
            className="w-full rounded-full border border-white/22 bg-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[#e8278d] [&>option]:text-[#102c26]"
          >
            <option value="" disabled>
              Select fertility concern
            </option>
            {CONCERNS.map((concern) => (
              <option key={concern} value={concern}>
                {concern}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="ivf-location" className="text-xs font-semibold text-white/78">
            Your Location / Area
          </label>
          <input
            id="ivf-location"
            name="ivf-location"
            type="text"
            required
            placeholder="Enter your area or locality name"
            className="w-full rounded-full border border-white/22 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#e8278d]"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="col-span-full mt-2 w-full whitespace-nowrap rounded-full bg-[#e8278d] px-6 max-sm:px-3 py-4 text-sm max-sm:text-[12px] font-bold tracking-[0.075em] max-sm:tracking-normal text-white uppercase shadow-[0_14px_30px_rgba(232,39,141,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#bd1d72] hover:shadow-[0_18px_40px_rgba(232,39,141,0.34)]"
        >
          {isSubmitting ? "Submitting..." : "Book Your Free Consultation"}
        </button>

        {submitError && (
          <p role="alert" className="col-span-full text-center text-sm font-medium text-[#ffd1dc]">
            {submitError}
          </p>
        )}

        {status === "success" && (
          <p role="status" className="col-span-full rounded-xl bg-[#c9f7d5]/12 px-4 py-2 text-center text-sm font-medium text-[#c9f7d5]">
            Thank you! Our fertility team will reach out to you shortly.
          </p>
        )}
      </form>
    </div>
  );
}
