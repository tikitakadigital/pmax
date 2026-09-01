// Shared form for both new and edit offer pages.
// All fields are uncontrolled; server action reads them via FormData.

const FIELD: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 6 }
const LABEL: React.CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }
const HINT: React.CSSProperties = { fontSize: 11, color: 'var(--muted)', marginTop: 2 }
const SECTION: React.CSSProperties = {
  background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: 6,
  padding: 20, marginBottom: 16,
}
const GRID2: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }
const GRID3: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }

interface Props {
  defaults: Record<string, string>
}

export function OfferForm({ defaults }: Props) {
  const d = defaults
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

      {/* ── Metadata ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 16 }}>Offer details</div>
        <div style={{ ...GRID3, marginBottom: 16 }}>
          <div style={FIELD}>
            <label style={LABEL}>Code</label>
            <input name="code" defaultValue={d.code} required style={{ fontFamily: 'monospace', textTransform: 'uppercase' }} />
            <span style={HINT}>Auto-generated. Used in the URL.</span>
          </div>
          <div style={FIELD}>
            <label style={LABEL}>Status</label>
            <select name="status" defaultValue={d.status}>
              <option value="draft">Draft</option>
              <option value="sent">Sent</option>
              <option value="accepted">Accepted</option>
              <option value="expired">Expired</option>
            </select>
          </div>
          <div style={FIELD}>
            <label style={LABEL}>Contact person</label>
            <input name="contact_person" defaultValue={d.contact_person} />
          </div>
        </div>
        <div style={{ ...GRID2, marginBottom: 16 }}>
          <div style={FIELD}>
            <label style={LABEL}>Date</label>
            <input name="date" type="date" defaultValue={d.date} required />
          </div>
          <div style={FIELD}>
            <label style={LABEL}>Valid until</label>
            <input name="valid_until" type="date" defaultValue={d.valid_until} required />
          </div>
        </div>
        <div style={FIELD}>
          <label style={LABEL}>Title (proposal headline)</label>
          <input name="title" defaultValue={d.title} placeholder="Digitale Sichtbarkeit und Leadgenerierung." required />
        </div>
      </div>

      {/* ── Client ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 16 }}>Client</div>
        <div style={{ ...GRID2, marginBottom: 16 }}>
          <div style={FIELD}>
            <label style={LABEL}>Name</label>
            <input name="client_name" defaultValue={d.client_name} required />
          </div>
          <div style={FIELD}>
            <label style={LABEL}>Email</label>
            <input name="client_email" type="email" defaultValue={d.client_email} required />
          </div>
        </div>
        <div style={GRID2}>
          <div style={FIELD}>
            <label style={LABEL}>Phone</label>
            <input name="client_phone" defaultValue={d.client_phone} />
          </div>
          <div style={FIELD}>
            <label style={LABEL}>Website</label>
            <input name="client_website" defaultValue={d.client_website} placeholder="example.com" />
          </div>
        </div>
      </div>

      {/* ── 01 Intro ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>01 — Kurz vorab</div>
        <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 12 }}>Personalised opening paragraph. What happened before this offer?</div>
        <div style={FIELD}>
          <textarea name="intro" defaultValue={d.intro} rows={6} placeholder="Am 26.08. warst du bei uns im Büro…" />
        </div>
      </div>

      {/* ── 02 Situation ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 16 }}>02 — Ausgangslage</div>
        <div style={{ ...GRID2 }}>
          <div style={FIELD}>
            <label style={LABEL}>Was gut ist (strengths)</label>
            <textarea name="situation_strengths" defaultValue={d.situation_strengths} rows={4} />
          </div>
          <div style={FIELD}>
            <label style={LABEL}>Was fehlt (gaps)</label>
            <textarea name="situation_gaps" defaultValue={d.situation_gaps} rows={4} />
            <span style={HINT}>One item per line.</span>
          </div>
        </div>
      </div>

      {/* ── 03 Positioning ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 16 }}>03 — Positionierung</div>
        <div style={{ ...FIELD, marginBottom: 16 }}>
          <label style={LABEL}>Kernaussage (core message)</label>
          <input name="positioning_core" defaultValue={d.positioning_core} placeholder="Die ehrliche Immobilienmaklerin auf Mallorca." />
        </div>
        <div style={{ ...FIELD, marginBottom: 16 }}>
          <label style={LABEL}>Drei Belegsäulen (pillars)</label>
          <textarea name="positioning_pillars" defaultValue={d.positioning_pillars} rows={4} />
          <span style={HINT}>One per line: <code>Säule | Was dahinter steckt | Botschaft</code></span>
        </div>
        <div style={{ ...FIELD, marginBottom: 16 }}>
          <label style={LABEL}>Strategischer Punkt (strategy text)</label>
          <textarea name="positioning_strategy" defaultValue={d.positioning_strategy} rows={4} />
        </div>
        <div style={FIELD}>
          <label style={LABEL}>HINWEIS (optional note box)</label>
          <textarea name="positioning_note" defaultValue={d.positioning_note} rows={3} />
          <span style={HINT}>Leave empty to hide.</span>
        </div>
      </div>

      {/* ── 04 Channels ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>04 — Die Kanäle</div>
        <div style={FIELD}>
          <textarea name="channels" defaultValue={d.channels} rows={8} />
          <span style={HINT}>One per line: <code>Name | Benefit | Timeframe</code> — append <code>| optional</code> to mark as optional.</span>
        </div>
      </div>

      {/* ── 05 Retainer ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 16 }}>05 — Retainer</div>

        <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Start-Sprint</div>
        <div style={{ ...GRID3, marginBottom: 16 }}>
          <div style={FIELD}>
            <label style={LABEL}>Price (€ netto)</label>
            <input name="sprint_price" type="number" defaultValue={d.sprint_price} />
          </div>
          <div style={FIELD}>
            <label style={LABEL}>Days</label>
            <input name="sprint_days" type="number" defaultValue={d.sprint_days} />
          </div>
        </div>
        <div style={{ ...FIELD, marginBottom: 16 }}>
          <label style={LABEL}>Sprint includes</label>
          <textarea name="sprint_includes" defaultValue={d.sprint_includes} rows={6} />
          <span style={HINT}>One item per line.</span>
        </div>
        <div style={{ ...FIELD, marginBottom: 24 }}>
          <label style={LABEL}>Flexibler Einstieg note (optional)</label>
          <textarea name="sprint_flex_note" defaultValue={d.sprint_flex_note} rows={3} />
        </div>

        <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Retainer variants</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 16 }}>
          {[
            { prefix: 'retainer_b1', label: 'B1' },
            { prefix: 'retainer_b2', label: 'B2' },
          ].map(({ prefix, label }) => (
            <div key={prefix} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 4, padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 12 }}>{label}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div style={FIELD}>
                  <label style={LABEL}>Days / month</label>
                  <input name={`${prefix}_days`} type="number" defaultValue={d[`${prefix}_days`]} />
                </div>
                <div style={FIELD}>
                  <label style={LABEL}>Price € / month</label>
                  <input name={`${prefix}_price`} type="number" defaultValue={d[`${prefix}_price`]} />
                </div>
              </div>
              <div style={{ ...FIELD, marginBottom: 12 }}>
                <label style={LABEL}>Schwerpunkt (focus)</label>
                <textarea name={`${prefix}_focus`} defaultValue={d[`${prefix}_focus`]} rows={3} />
              </div>
              <div style={FIELD}>
                <label style={LABEL}>Passt, wenn (fits when)</label>
                <textarea name={`${prefix}_fits`} defaultValue={d[`${prefix}_fits`]} rows={2} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ ...FIELD, marginBottom: 16 }}>
          <label style={LABEL}>Always included (retainer_fixed)</label>
          <textarea name="retainer_fixed" defaultValue={d.retainer_fixed} rows={4} />
          <span style={HINT}>One item per line.</span>
        </div>
        <div style={{ ...FIELD, marginBottom: 16 }}>
          <label style={LABEL}>Variable (retainer_variable)</label>
          <textarea name="retainer_variable" defaultValue={d.retainer_variable} rows={5} />
          <span style={HINT}>One item per line.</span>
        </div>
        <div style={FIELD}>
          <label style={LABEL}>Retainer comparison note</label>
          <textarea name="retainer_note" defaultValue={d.retainer_note} rows={4} />
        </div>
      </div>

      {/* ── 06 Decision ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 12 }}>06 — Wie du wählst</div>
        <div style={FIELD}>
          <textarea name="decision_text" defaultValue={d.decision_text} rows={5} />
        </div>
      </div>

      {/* ── 07 Timeline ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>07 — Zeitplan</div>
        <div style={FIELD}>
          <textarea name="timeline" defaultValue={d.timeline} rows={6} />
          <span style={HINT}>One per line: <code>Zeitraum | Was passiert</code></span>
        </div>
      </div>

      {/* ── 08 Metrics ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 16 }}>08 — Was wir messen</div>
        <div style={GRID2}>
          <div style={FIELD}>
            <label style={LABEL}>KPIs</label>
            <textarea name="kpis" defaultValue={d.kpis} rows={5} />
            <span style={HINT}>One per line.</span>
          </div>
          <div style={FIELD}>
            <label style={LABEL}>Realistic expectations</label>
            <textarea name="expectations" defaultValue={d.expectations} rows={5} />
            <span style={HINT}>One per line.</span>
          </div>
        </div>
      </div>

      {/* ── 09 External costs ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 12 }}>09 — Kosten außerhalb</div>
        <div style={{ ...FIELD, marginBottom: 16 }}>
          <label style={LABEL}>Intro text</label>
          <textarea name="external_costs_note" defaultValue={d.external_costs_note} rows={2} />
        </div>
        <div style={FIELD}>
          <label style={LABEL}>Cost items</label>
          <textarea name="external_costs" defaultValue={d.external_costs} rows={5} />
          <span style={HINT}>One per line: <code>Item | Recommendation</code></span>
        </div>
      </div>

      {/* ── 10 Conditions ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>10 — Konditionen</div>
        <div style={FIELD}>
          <textarea name="conditions" defaultValue={d.conditions} rows={8} />
          <span style={HINT}>One bullet per line.</span>
        </div>
      </div>

      {/* ── 11 Next steps ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>11 — Nächster Schritt</div>
        <div style={FIELD}>
          <textarea name="next_steps" defaultValue={d.next_steps} rows={4} />
          <span style={HINT}>One step per line.</span>
        </div>
      </div>

      {/* ── Glossary ── */}
      <div style={SECTION}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Glossar (optional)</div>
        <div style={FIELD}>
          <textarea name="glossary" defaultValue={d.glossary} rows={7} />
          <span style={HINT}>One per line: <code>Term | Definition</code></span>
        </div>
      </div>

      {/* ── Save ── */}
      <div style={{ position: 'sticky', bottom: 0, background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '16px 0', display: 'flex', gap: 12, alignItems: 'center' }}>
        <button type="submit" style={{ padding: '10px 24px', fontSize: 14, fontWeight: 700 }}>
          Save offer
        </button>
        <a href="/offers" className="btn btn-ghost" style={{ fontSize: 13 }}>Cancel</a>
      </div>

    </div>
  )
}
