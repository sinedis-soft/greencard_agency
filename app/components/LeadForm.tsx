// app/components/LeadForm.tsx
"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import type { Lang } from "@/app/dictionaries/header";
import { getLeadFormDictionary } from "@/app/dictionaries/leadForm";
import { getPolicyPrice, formatCurrency } from "@/app/lib/insurancePrices";

type FormStatus = "idle" | "loading" | "success" | "error";
type Step = 1 | 2;

type VehiclePriceState = Record<
  number,
  {
    vehicleType: string;
    period: string;
  }
>;

function formatLatinName(raw: string): string {
  return raw.replace(/[^A-Za-z\s'-]/g, "");
}

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  return "+" + digits;
}

function formatEmail(raw: string): string {
  let value = raw.replace(/\s/g, "");
  value = value.replace(/[^A-Za-z0-9.@_-]/g, "");

  const firstAtIndex = value.indexOf("@");
  if (firstAtIndex !== -1) {
    const beforeAt = value.slice(0, firstAtIndex + 1);
    const afterAt = value.slice(firstAtIndex + 1).replace(/@/g, "");
    value = beforeAt + afterAt;
  }

  if (value.length > 70) value = value.slice(0, 70);
  return value.toLowerCase();
}

function formatPlate(raw: string): string {
  return raw
    .replace(/\s/g, "")
    .replace(/[^A-Za-z0-9-]/g, "")
    .toUpperCase()
    .slice(0, 8);
}

function formatVIN(raw: string): string {
  return raw
    .replace(/\s/g, "")
    .replace(/[^A-Za-z0-9]/g, "")
    .replace(/[IOQ]/gi, "")
    .toUpperCase()
    .slice(0, 17);
}

function formatPass(raw: string): string {
  return raw
    .replace(/\s/g, "")
    .replace(/[^A-Za-z0-9-]/g, "")
    .toUpperCase()
    .slice(0, 15);
}

function validateFiles(
  files: FileList,
  forbiddenTypes: string[],
  fileForbiddenText: string
): boolean {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const type = file.type || "";

    for (let j = 0; j < forbiddenTypes.length; j++) {
      const t = forbiddenTypes[j];

      if (t.charAt(t.length - 1) === "/") {
        if (type.indexOf(t) === 0) {
          alert(file.name + ": " + fileForbiddenText);
          return false;
        }
      } else if (type === t) {
        alert(file.name + ": " + fileForbiddenText);
        return false;
      }
    }
  }

  return true;
}

function isValidVIN(vin: string): boolean {
  return vin.length === 17;
}

function todayISO(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  return yyyy + "-" + mm + "-" + dd;
}

function maxBirthDateISO(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 18);

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  return yyyy + "-" + mm + "-" + dd;
}

export default function LeadForm(props: { lang: Lang }) {
  const t = getLeadFormDictionary(props.lang);

  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");

  const [vehicleBlocks, setVehicleBlocks] = useState<number[]>([0]);
  const [vehicleFileCounts, setVehicleFileCounts] = useState<Record<number, number>>({});
  const [vehiclePrices, setVehiclePrices] = useState<VehiclePriceState>({});

  const formRef = useRef<HTMLFormElement | null>(null);

  const forbiddenTypes = [
    "application/zip",
    "application/x-rar-compressed",
    "application/x-7z-compressed",
    "application/x-tar",
    "audio/",
    "video/",
  ];

  function addVehicle() {
    setVehicleBlocks(function (prev) {
      const lastId = prev.length ? prev[prev.length - 1] : 0;
      return prev.concat([lastId + 1]);
    });
  }

  function removeVehicle(id: number) {
    setVehicleBlocks(function (prev) {
      if (prev.length <= 1) return prev;

      const next: number[] = [];
      for (let i = 0; i < prev.length; i++) {
        if (prev[i] !== id) next.push(prev[i]);
      }

      return next;
    });

    setVehicleFileCounts(function (prev) {
      const next = { ...prev };
      delete next[id];
      return next;
    });

    setVehiclePrices(function (prev) {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  function validateStep(stepToValidate: Step): boolean {
    if (!formRef.current) return true;

    const elements = formRef.current.querySelectorAll(
      `[data-form-step="${stepToValidate}"] input, [data-form-step="${stepToValidate}"] select, [data-form-step="${stepToValidate}"] textarea`
    ) as NodeListOf<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];

      if (!el.checkValidity()) {
        el.reportValidity();

        try {
          el.focus();
        } catch {
          // ignore
        }

        return false;
      }
    }

    return true;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "loading") return;

    setStatus("idle");
    setMessage("");

    if (!validateStep(2)) return;

    setStatus("loading");

    try {
      const formEl = e.currentTarget;
      const formData = new FormData(formEl);

      if (typeof window !== "undefined") {
        try {
          formData.append("pageUrl", window.location.href);

          const utm = localStorage.getItem("utm_data");
          if (utm) formData.append("utm", utm);
        } catch {
          // ignore
        }
      }

      const res = await fetch("/api/lead", {
        method: "POST",
        body: formData,
      });

      type LeadApiResponse = {
        ok?: boolean;
        message?: string;
      };

      let data: LeadApiResponse | null = null;

      try {
        data = (await res.json()) as LeadApiResponse;
      } catch {
        data = null;
      }

      const ok = Boolean(data?.ok);
      const serverMsg = data?.message ? String(data.message) : "";

      if (!res.ok || !ok) {
        setStatus("error");
        setMessage(serverMsg || t.statusError);
        return;
      }

      setStatus("success");
      setMessage(t.statusSuccess);

      formEl.reset();

      setStep(1);

      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");

      setBirthDate("");
      setAddress("");

      setVehicleBlocks([0]);
      setVehicleFileCounts({});
      setVehiclePrices({});
    } catch {
      setStatus("error");
      setMessage(t.statusError);
    }
  }

  const minStartDate = todayISO();
  const maxBirthDate = maxBirthDateISO();
  const statusId = "lead-form-status";

  const estimatedTotal = (() => {
    let total = 0;
    let hasPrice = false;

    for (let i = 0; i < vehicleBlocks.length; i++) {
      const id = vehicleBlocks[i];
      const item = vehiclePrices[id];

      if (!item) continue;

      const price = getPolicyPrice(item.vehicleType, item.period);

      if (price !== null) {
        total += price;
        hasPrice = true;
      }
    }

    return hasPrice ? total : null;
  })();

  return (
    <section className="section" id="buy" aria-label={t.title}>
      <div className="container">
        <div className="panel__hd">
          <div className="panel__title">{t.title}</div>
        </div>

        <div className="panel__body">
          <p className="help help--top">{t.intro}</p>

          <div className="steps" aria-label={t.title}>
            <div className={step === 1 ? "step step--active" : "step"}>
              <span>{t.steps.step1}</span>
              <b>{t.steps.contacts}</b>
            </div>

            <div className={step === 2 ? "step step--active" : "step"}>
              <span>{t.steps.step2}</span>
              <b>{t.steps.vehicleData}</b>
            </div>
          </div>

          <form
            ref={formRef}
            className="form"
            onSubmit={onSubmit}
            noValidate
            aria-describedby={status !== "idle" ? statusId : undefined}
          >
            <input type="hidden" name="lang" value={props.lang} />

            <div data-form-step="1" hidden={step !== 1}>
              <div className="hr" />

              <div className="legend">{t.contact.legend}</div>

              <div className="row-2">
                <div className="field">
                  <label htmlFor="firstName">{t.contact.firstName} *</label>
                  <input
                    id="firstName"
                    name="contact_firstNameLat"
                    placeholder="Tom"
                    className="input"
                    value={firstName}
                    onChange={(ev) => setFirstName(formatLatinName(ev.target.value))}
                    required
                    autoComplete="given-name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="lastName">{t.contact.lastName} *</label>
                  <input
                    id="lastName"
                    name="contact_lastNameLat"
                    placeholder="Kavaliou"
                    className="input"
                    value={lastName}
                    onChange={(ev) => setLastName(formatLatinName(ev.target.value))}
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="row-2">
                <div className="field">
                  <label htmlFor="phone">{t.contact.phone} *</label>
                  <input
                    id="phone"
                    name="contact_phone"
                    placeholder="+48573581333"
                    className="input"
                    value={phone}
                    onChange={(ev) => setPhone(formatPhone(ev.target.value))}
                    required
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">{t.contact.email} *</label>
                  <input
                    id="email"
                    name="contact_email"
                    placeholder="exempl@mail.pl"
                    className="input"
                    value={email}
                    onChange={(ev) => setEmail(formatEmail(ev.target.value))}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="block">
                <div className="block__title">{t.policyholder.individualTitle}</div>

                <div className="row-2">
                  <div className="field">
                    <label htmlFor="birthDate">{t.policyholder.birthDate} *</label>
                    <input
                      id="birthDate"
                      type="date"
                      name="policyholder_birthDate"
                      className="input"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.currentTarget.value)}
                      required
                      max={maxBirthDate}
                      autoComplete="bday"
                    />
                  </div>
                  <div className="field">
                      <label>{t.policyholder.persPass} *</label>
                      <input
                        name="policyholder_pass"
                        className="input"
                        required
                        onChange={(e) => {
                          e.currentTarget.value = formatPass(e.currentTarget.value);
                        }}
                      />
                      </div>

                  <div className="field" />
                </div>

                <div className="field">
                  <label htmlFor="policyholderAddress">{t.policyholder.addressTitle} *</label>
                  <input
                    id="policyholderAddress"
                    name="policyholder_address"
                    className="input"
                    value={address}
                    onChange={(e) => setAddress(e.currentTarget.value)}
                    required
                    autoComplete="street-address"
                    placeholder={t.policyholder.addressPlaceholder}
                  />
                  <div className="help">{t.policyholder.addressHelp}</div>
                </div>
              </div>
            </div>

            <div data-form-step="2" hidden={step !== 2}>
              <div className="hr" />

              <div className="legend">{t.policy.legend}</div>

              {vehicleBlocks.map(function (id, idx) {
                return (
                  <div key={id} className="vehicle">
                    <div className="vehicle__top">
                      <div className="vehicle__title">
                        {t.policy.vehicleBlockTitle} #{idx + 1}
                      </div>

                      {vehicleBlocks.length > 1 ? (
                        <button
                          type="button"
                          className="btn btn--ghost btn--sm"
                          onClick={() => removeVehicle(id)}
                          disabled={status === "loading"}
                        >
                          {t.policy.removeVehicle}
                        </button>
                      ) : null}
                    </div>

                    <div className="row-2">
                      <div className="field">
                        <label>{t.policy.period} *</label>
                        <select
                          name={"vehicles[" + idx + "][period]"}
                          className="input"
                          defaultValue=""
                          required
                          onChange={(e) => {
                            const value = e.currentTarget.value;

                            setVehiclePrices((prev) => ({
                              ...prev,
                              [id]: {
                                vehicleType: prev[id]?.vehicleType || "",
                                period: value,
                              },
                            }));
                          }}
                        >
                          <option value="">{t.notSelected}</option>
                          {t.policy.options.periods.map(function (o) {
                            return (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="field">
                        <label>{t.policy.startDate} *</label>
                        <input
                          type="date"
                          name={"vehicles[" + idx + "][startDate]"}
                          className="input"
                          min={minStartDate}
                          required
                        />
                      </div>
                    </div>

                    <div className="row-2">
                      <div className="field">
                        <label>{t.policy.countryFrom} *</label>
                        <select
                          name={"vehicles[" + idx + "][countryFrom]"}
                          className="input"
                          defaultValue=""
                          required
                        >
                          <option value="">{t.notSelected}</option>
                          {t.policy.options.countriesFrom.map(function (o) {
                            return (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="field">
                        <label>{t.policy.vehicleType} *</label>
                        <select
                          name={"vehicles[" + idx + "][vehicleType]"}
                          className="input"
                          defaultValue=""
                          required
                          onChange={(e) => {
                            const value = e.currentTarget.value;

                            setVehiclePrices((prev) => ({
                              ...prev,
                              [id]: {
                                vehicleType: value,
                                period: prev[id]?.period || "",
                              },
                            }));
                          }}
                        >
                          <option value="">{t.notSelected}</option>
                          {t.policy.options.vehicleTypes.map(function (o) {
                            return (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    

                    <div className="row-2">
                      <div className="field">
                        <label>{t.policy.vehiclePlate} *</label>
                        <input
                          name={"vehicles[" + idx + "][plate]"}
                          className="input"
                          required
                          onChange={(e) => {
                            e.currentTarget.value = formatPlate(e.currentTarget.value);
                          }}
                        />
                      </div>

                      <div className="field">
                        <label>{t.policy.vehicleVin} *</label>
                        <input
                          name={"vehicles[" + idx + "][vin]"}
                          className="input"
                          required
                          minLength={17}
                          maxLength={17}
                          pattern="[A-HJ-NPR-Z0-9]{17}"
                          onChange={(e) => {
                            e.currentTarget.value = formatVIN(e.currentTarget.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="row-2">
                      <div className="field">
                        <label>{t.policy.vehicleBrend} *</label>
                        <input
                          name={"vehicles[" + idx + "][brend]"}
                          className="input"
                          required
                        />
                      </div>
                        <div className="field">
                          <label>{t.policy.vehicleYear} *</label>

                          <input
                            name={"vehicles[" + idx + "][year]"}
                            className="input"
                            required
                            inputMode="numeric"
                            pattern="^\d{4}$"
                            placeholder="2020"
                            maxLength={4}
                            onChange={(e) => {
                              e.currentTarget.value = e.currentTarget.value
                                .replace(/\D/g, "")
                                .slice(0, 4);
                            }}
                            onBlur={(e) => {
                              const year = Number(e.currentTarget.value);

                              if (year < 1985 || year > new Date().getFullYear() + 1) {
                                e.currentTarget.setCustomValidity("Invalid year");
                              } else {
                                e.currentTarget.setCustomValidity("");
                              }
                            }}
                          />
                        </div>
                      
                    </div>

                    <div className="row-2">
                      <div className="field">
                        <label>{t.policy.engineType} *</label>
                        <select
                          name={"vehicles[" + idx + "][engineType]"}
                          className="input"
                          defaultValue=""
                          required
                          onChange={(e) => {
                            const value = e.currentTarget.value;

                            setVehiclePrices((prev) => ({
                              ...prev,
                              [id]: {
                                vehicleType: value,
                                period: prev[id]?.period || "",
                              },
                            }));
                          }}
                        >
                          <option value="">{t.notSelected}</option>
                          {t.policy.options.engineTypes.map(function (o) {
                            return (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="field">
                        <label>{t.policy.vehicleEngineCapacity} *</label>

                        <input
                          name={"vehicles[" + idx + "][engineCapacity]"}
                          className="input"
                          required
                          inputMode="decimal"
                          pattern="^\d+([.,]\d{1,2})?$"
                          placeholder="3986"
                          onChange={(e) => {
                            let value = e.currentTarget.value;

                            value = value.replace(",", ".");
                            value = value.replace(/[^0-9.]/g, "");

                            const parts = value.split(".");

                            if (parts.length > 2) {
                              value = parts[0] + "." + parts.slice(1).join("");
                            }

                            e.currentTarget.value = value;
                          }}
                        />
                      </div>
                    </div>

                    <div className="row-2">
                      <div className="field">
                        <label>{t.policy.vehiclePower} *</label>

                        <input
                          name={"vehicles[" + idx + "][vehiclePower]"}
                          className="input"
                          required
                          inputMode="decimal"
                          pattern="^\d+([.,]\d{1,2})?$"
                          placeholder="250"
                          onChange={(e) => {
                            let value = e.currentTarget.value;

                            value = value.replace(",", ".");
                            value = value.replace(/[^0-9.]/g, "");

                            const parts = value.split(".");

                            if (parts.length > 2) {
                              value = parts[0] + "." + parts.slice(1).join("");
                            }

                            e.currentTarget.value = value;
                          }}
                        />
                      </div>


                      <div className="field">
                        <label>{t.policy.powerUnit} *</label>
                        <select
                          name={"vehicles[" + idx + "][powerUnit]"}
                          className="input"
                          defaultValue=""
                          required
                          onChange={(e) => {
                            const value = e.currentTarget.value;

                            setVehiclePrices((prev) => ({
                              ...prev,
                              [id]: {
                                vehicleType: value,
                                period: prev[id]?.period || "",
                              },
                            }));
                          }}
                        >
                          <option value="">{t.notSelected}</option>
                          {t.policy.options.powerUnits.map(function (o) {
                            return (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      
                    </div>

                    <div className="field">
                      <label>{t.policy.comment}</label>
                      <textarea
                        name={"vehicles[" + idx + "][comment]"}
                        className="input"
                        rows={3}
                      />
                    </div>

                    <div className="field">
                      <label>
                        {t.policy.docsLabel} *
                        {vehicleFileCounts[id] ? " (" + vehicleFileCounts[id] + ")" : ""}
                      </label>
                      <input
                        type="file"
                        name={"vehicles[" + idx + "][docs]"}
                        multiple
                        required
                        accept="image/*,application/pdf"
                        className="file"
                        onChange={(e) => {
                          const fl = e.currentTarget.files;
                          if (!fl) return;

                          const ok = validateFiles(fl, forbiddenTypes, t.fileForbidden);

                          if (!ok) {
                            e.currentTarget.value = "";
                            setVehicleFileCounts(function (prev) {
                              return { ...prev, [id]: 0 };
                            });
                            return;
                          }

                          setVehicleFileCounts(function (prev) {
                            return { ...prev, [id]: fl.length };
                          });
                        }}
                      />
                      <div className="help">{t.policy.docsHint}</div>
                    </div>
                  </div>
                );
              })}

              {estimatedTotal !== null ? (
                <div className="estimate-box" aria-live="polite">
                  <div className="estimate-box__title">
                    {t.estimate.title} {formatCurrency(estimatedTotal)}.
                  </div>
                  <div className="estimate-box__text">{t.estimate.hint}</div>
                </div>
              ) : null}

              <div className="field">
                <label className="check check--terms">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    value="yes"
                    required
                    disabled={status === "loading"}
                  />

                  <span className="terms-text">
                    {t.terms.textBefore}{" "}
                    <Link href={`/${props.lang}/rules`} target="_blank" className="terms-link">
                      {t.terms.linkText}
                    </Link>
                    {t.terms.textAfter}
                  </span>
                </label>
              </div>

              <div className="actions">
                <button
                  type="button"
                  className="btn btn--soft"
                  onClick={addVehicle}
                  disabled={status === "loading"}
                >
                  {t.policy.addVehicle}
                </button>
              </div>
            </div>

            {status !== "idle" ? (
              <div id={statusId} role="status" aria-live="polite" className="help help--status">
                {status === "loading" ? t.statusSending : message}
              </div>
            ) : null}

            <div className="actions actions--right">
              {step === 2 ? (
                <button
                  type="button"
                  className="btn btn--soft"
                  onClick={() => setStep(1)}
                  disabled={status === "loading"}
                >
                  {t.steps.back}
                </button>
              ) : null}

              {step === 1 ? (
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => {
                    setStatus("idle");
                    setMessage("");

                    if (!validateStep(1)) return;

                    setStep(2);
                  }}
                  disabled={status === "loading"}
                >
                  {t.steps.next}
                </button>
              ) : (
                <button type="submit" className="btn btn--primary" disabled={status === "loading"}>
                  {status === "loading" ? t.statusSending : t.submit}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .container {
          padding-left: 12px;
          padding-right: 12px;
        }

        .panel__hd {
          padding: 14px 14px 8px 14px;
        }

        .panel__body {
          padding: 0 14px 14px 14px;
        }

        .panel__title,
        .legend,
        label,
        .help,
        .block__title,
        .vehicle__title {
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .help--top {
          margin: 0 0 10px 0;
        }

        .steps {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin: 12px 0;
        }

        .step {
          border: 1px solid rgba(148, 163, 184, 0.35);
          border-radius: 14px;
          padding: 10px 12px;
          opacity: 0.65;
        }

        .step--active {
          opacity: 1;
          border-color: currentColor;
        }

        .step span {
          display: block;
          font-size: 12px;
          line-height: 1.2;
        }

        .step b {
          display: block;
          margin-top: 3px;
          font-size: 14px;
          line-height: 1.25;
        }

        [hidden] {
          display: none !important;
        }

        .hr {
          margin: 12px 0;
        }

        .legend {
          margin: 0 0 8px 0;
          font-weight: 600;
        }

        .field {
          margin: 0 0 10px 0;
          min-width: 0;
        }

        label {
          display: block;
          margin: 0 0 6px 0;
          line-height: 1.25;
        }

        .input,
        select,
        textarea,
        .file {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          min-width: 0;
        }

        .check {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 0;
        }

        .check span {
          min-width: 0;
        }

        .check--terms {
          margin-top: 16px;
          align-items: flex-start;
        }

        .terms-text {
          line-height: 1.45;
        }

        .terms-text :global(.terms-link) {
          color: var(--brand-red-dark);
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
          font-weight: 800;
          cursor: pointer;
        }

        .terms-text :global(.terms-link:hover) {
          color: var(--brand-red);
          opacity: 0.9;
        }

        .estimate-box {
          margin-top: 14px;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid rgba(191, 21, 40, 0.22);
          background: rgba(191, 21, 40, 0.06);
        }

        .estimate-box__title {
          font-weight: 900;
          color: var(--brand-red-dark);
          margin-bottom: 6px;
        }

        .estimate-box__text {
          color: var(--text-700);
          font-size: 13px;
          line-height: 1.45;
        }

        .row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          align-items: start;
        }

        .block {
          margin-top: 12px;
        }

        .block__title {
          font-weight: 600;
          margin: 0 0 10px 0;
        }

        .vehicle {
          margin-top: 12px;
        }

        .vehicle__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 0 0 8px 0;
          min-width: 0;
        }

        .vehicle__title {
          font-weight: 600;
          line-height: 1.2;
          min-width: 0;
        }

        .btn--sm {
          height: 36px;
          padding: 0 12px;
          border-radius: 12px;
          white-space: nowrap;
          flex: 0 0 auto;
        }

        .actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .actions--right {
          justify-content: flex-end;
        }

        .help--status {
          margin-top: 10px;
        }

        @media (max-width: 520px) {
          .panel__hd {
            padding: 12px 12px 8px 12px;
          }

          .panel__body {
            padding: 0 12px 12px 12px;
          }

          .steps {
            grid-template-columns: 1fr;
          }

          .row-2 {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .btn--sm {
            padding: 0 10px;
          }
        }
      `}</style>
    </section>
  );
}