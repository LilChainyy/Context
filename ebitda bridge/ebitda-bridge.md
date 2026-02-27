---
name: ebitda-bridge
description: "Use this skill when performing buy-side financial due diligence and the task involves reviewing a Quality of Earnings (QE) section, building or reviewing an EBITDA bridge, evaluating sell-side adjustments, or producing a buy-side adjusted EBITDA from a reported P&L. Triggers include: any reference to QE, quality of earnings, EBITDA adjustments, sell-side vs buy-side bridge, recast financials, or requests to analyze normalized earnings in an M&A context. Input will typically be a reported income statement and/or a sell-side adjustment schedule. Output is a buy-side EBITDA bridge with documented rationale for each adjustment position."
---

# Quality of Earnings — EBITDA Bridge

## Purpose

This skill encodes the analytical logic for building a buy-side adjusted EBITDA bridge in a financial due diligence engagement. It covers how to move from reported financials through a sell-side QE schedule to a buy-side position, with documented rationale for each adjustment.

The output is used by deal teams to stress-test seller claims about normalized earnings and to establish a defensible buy-side EBITDA for valuation and credit purposes.

---

## Input Requirements

Before starting, identify what has been provided:

- **Reported P&L**: Audited or management accounts covering the historical period (typically FY-2, FY-1, FY0, and TTM). Note the revenue recognition basis, any restatements, and whether the P&L is consolidated or carved out.
- **Sell-side QE schedule**: The seller's adjustment schedule showing their claimed normalized EBITDA. Each adjustment should have a reference number, description, and dollar amounts by period.
- **Supporting detail**: VDR documents, management discussion notes, or sub-schedules supporting individual adjustments (e.g., backlog sales analysis, non-recurring expense support).

If only a reported P&L is provided with no sell-side schedule, note this and proceed to build a preliminary bridge based on visible P&L anomalies and management discussion context.

---

## Step 1: Anchor the Reported EBITDA

Start from the reported P&L. Calculate reported EBITDA as:

```
Net Income
+ Interest expense (net)
+ Income taxes
+ Depreciation & amortization
= Reported EBITDA
```

Check this ties to the sell-side reported EBITDA figure. If there is a reconciling difference, identify the source before proceeding — common causes are definitional differences (e.g., seller includes stock-based comp in D&A), compilation differences, or year-end entry timing.

Flag any of the following in the reported P&L before touching adjustments:
- Revenue or gross margin inflections that are unexplained by volume/price/mix
- COGS components that don't move with revenue (potential misclassification)
- Freight revenue bundled into product revenue (evaluate separately — see revenue quality section)
- Related party transactions appearing anywhere in the P&L
- Intercompany flows that affect reported margins (especially in multi-entity structures)

---

## Step 2: Recast the P&L (Definitional Adjustments)

Before evaluating sell-side QE adjustments, apply any definitional adjustments needed to put the P&L on a consistent basis:

- Reclassify freight revenue and freight cost if bundled (evaluate gross margin on product revenue separately from freight economics)
- Separate co-packer / contract manufacturing activity if margins differ materially by source
- Normalize for any mid-period accounting policy changes
- Align treatment of trade spend, wholesaler discounts, and rebates consistently across periods

Document each definitional adjustment separately from QE adjustments. These are not earnings quality positions — they are presentation adjustments to make the bridge readable.

---

## Step 3: Evaluate Each Sell-Side Adjustment

For each sell-side adjustment, work through the following:

### 3a. Classification Test

Ask: Is this adjustment claiming to remove something non-recurring, or to add back something that represents normalized run-rate earnings?

Valid adjustment categories:
- **Non-recurring expenses**: One-time costs with no expected recurrence (litigation settlements, facility closures, deal costs, one-time consulting fees). Require support — a single invoice or board resolution is not sufficient for large items.
- **Non-recurring income**: One-time gains that should be excluded from normalized EBITDA (asset sales, insurance recoveries, PPP loan forgiveness).
- **Owner/related-party normalization**: Excess compensation, personal expenses run through the business, above/below-market related party contracts.
- **Accounting normalization**: GAAP-to-cash adjustments, audit corrections, change in accounting estimates.
- **Pro forma adjustments**: Run-rate impact of completed acquisitions, pricing changes, or cost actions with clear implementation evidence.

Invalid or suspect adjustment categories:
- Recurring costs reframed as "one-time" (e.g., annual bonuses described as non-recurring, regular maintenance labeled as a special project)
- Aspirational pro forma savings without implementation evidence
- Adjustments that eliminate entire cost categories without replacing them

### 3b. Period Validity Test

Check whether the adjustment is correctly scoped to the period in which the event occurred. Watch for:
- Adjustments applied to TTM that belong entirely in a prior year
- Partial-period adjustments not prorated correctly
- Backlog or pull-forward sales adjustments: verify the cases/units sold in the adjustment period tie to source documents (shipping records, distributor confirmations), and verify the EBITDA impact flows through gross margin correctly, not just revenue

### 3c. Buy-Side Position

For each sell-side adjustment, take one of three positions:

**Accept**: Agree with the adjustment as presented. Note the supporting evidence.

**Revise**: Agree in principle but adjust the amount or period. Common revision reasons:
- Partial recurrence (e.g., litigation that is ongoing, management fees that will continue under new ownership)
- Incorrect gross-up or tax treatment
- Amount not supported by documentation

**Reject**: Do not accept the adjustment. Common rejection reasons:
- No documentation
- Cost is clearly recurring in nature
- Adjustment eliminates a structural cost that a buyer will bear

---

## Step 4: Identify Buy-Side Adjustments

After reviewing all sell-side adjustments, identify any additional adjustments the sell-side did not include:

- **Costs understated in historical period**: One-time savings that will not repeat (e.g., deferred maintenance, understaffed headcount, below-market rent that is expiring)
- **Revenue quality issues**: Accelerated revenue recognition, channel stuffing, or distributor load-in that inflated a specific period
- **Pro forma costs**: Costs the business will incur as a standalone or under new ownership (e.g., public company costs, IT separation, management replacement)
- **Inventory write-offs or COGS normalization**: Particularly relevant in product businesses where co-packer margins vary and COGS may not reflect steady-state sourcing mix

Each buy-side adjustment should reduce EBITDA unless there is a specific reason to add back (e.g., a seller that deliberately understated a period).

---

## Step 5: Build the Bridge Output

Produce the bridge in the following sequence:

```
Reported EBITDA                          $X

Sell-Side Adjustments:
  Adj. #1 — [Description]               $X    [Accept / Revise: $Y / Reject]
  Adj. #2 — [Description]               $X    [Accept / Revise: $Y / Reject]
  ...
Sell-Side Adjusted EBITDA               $X

Buy-Side Revisions to Sell-Side:
  Revision to Adj. #2 — [Reason]        $(X)
  ...

Buy-Side Additions:
  Adj. #A — [Description]               $(X)
  Adj. #B — [Description]               $(X)
  ...

Buy-Side Adjusted EBITDA                $X

Margin Summary:
  Reported EBITDA margin                 X.X%
  Sell-Side Adjusted EBITDA margin       X.X%
  Buy-Side Adjusted EBITDA margin        X.X%
```

Present the bridge for each period in the historical range (FY-2, FY-1, FY0, TTM) side by side so the reader can assess trend, not just point-in-time.

---

## Step 6: Narrative Memo for Each Adjustment

For each adjustment in the final bridge, produce a short memo entry (3–6 sentences) covering:

1. What the sell-side claimed and the amount
2. What evidence was reviewed
3. The buy-side position and rationale
4. Any open items or conditions on the position

Example format:

> **Adj. #3 — Non-Recurring Consulting Fees ($4.2M, FY24)**
> The seller excluded $4.2M in consulting fees paid to XYZ Advisory in FY24, characterizing them as related to a one-time operational restructuring. Supporting documentation included a SOW and three invoices. The engagement scope covers supply chain redesign work; however, the SOW includes a renewal option and management confirmed in the MDD that similar work is expected in FY25 as the co-packer transition continues. Buy-side position: revise to $2.1M (50% recurrence assumption). Open item: request FY25 budget and any renewal correspondence with XYZ Advisory.

---

## Quality Standards

Before finalizing the bridge:

- Every adjustment must have a reference to a source document or management discussion note
- Reported EBITDA must tie to the P&L exactly — no rounding differences
- Sell-side adjusted EBITDA must tie to the sell-side schedule exactly before buy-side revisions
- TTM calculation must be verified: TTM = FY0 + stub period YTD − prior year stub period
- All adjustments must be presented gross, not net of tax
- Negative adjustments (costs being added back in) should be shown in parentheses consistently

---

## Common Red Flags to Escalate

The following should trigger a specific callout in the output, not just a line item in the bridge:

- Any adjustment exceeding 10% of reported EBITDA without tier-1 documentation
- Related party transactions of any size — flag the counterparty, the nature of the transaction, and whether it continues post-close
- Revenue adjustments (backlog, pull-forward, channel load-in) — these affect both the QE and the revenue quality section and must be cross-referenced
- Adjustments that vary significantly between the CIM and the formal QE report
- Management EBITDA figures that do not reconcile to either reported or adjusted EBITDA in the bridge
